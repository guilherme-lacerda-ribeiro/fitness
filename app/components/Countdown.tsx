'use client'

import React, { useState, useEffect } from 'react';

interface CountdownProps {
  initialSeconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [pulseTrigger, setPulseTrigger] = useState(false); // Estado para forçar a pulsação sincronizada

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
        setPulseTrigger((prev) => !prev); // Alterna o estado para forçar a re-renderização
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [seconds]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const tempoCorAmarelo = 7;
  const tempoCorVermelho = 3;
  
  // Define a cor com base no tempo restante
  const colorClass =
    seconds <= tempoCorVermelho ? "bg-red-500 border-red-700" :
      seconds <= tempoCorAmarelo ? "bg-yellow-500 border-yellow-700" :
        // "bg-gray-800 border-gray-700";
        "bg-[#40414F] border-[#565869]"; // Cinza escuro igual ao ChatGPT

  // Adiciona a animação SOMENTE se `seconds <= tempoCorAmarelo`
  const pulseClass = seconds <= tempoCorAmarelo ? "animate-pulse" : "";

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-900 text-white">
      <div
        key={`renderizar-${pulseTrigger}`} // Força a re-renderização para sincronizar a animação
        // className={`relative flex items-center justify-center w-48 h-48 rounded-full shadow-lg border-4 transition-all duration-1000 ${pulseClass} ${colorClass}`}
        className={`relative flex items-center justify-center w-48 h-20 px-6 rounded-2xl shadow-lg border-2 transition-all duration-1000 ${pulseClass} ${colorClass}`}
      >
        <h1 className="text-5xl font-bold">{formatTime(seconds)}</h1>
      </div>
    </div>
  );
};

export default Countdown;
