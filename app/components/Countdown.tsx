'use client'

import React, { useState, useEffect } from 'react';

interface CountdownProps {
  initialSeconds: number;
}

const Countdown = ({ initialSeconds }: CountdownProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [pulseTrigger, setPulseTrigger] = useState(false); // Estado para forçar a pulsação sincronizada
  const [stopBlinking, setStopBlinking] = useState(false); // Estado para parar a animação
  const [colorClass, setColorClass] = useState("bg-gray-800 border-gray-700");

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
        setPulseTrigger((prev) => !prev); // Alterna o estado para forçar a re-renderização
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [seconds]);

  const tempoCorAmarelo = 9;
  const tempoCorVermelho = 4;

  // Define a cor com base no tempo restante
  useEffect(() => {
    if (!stopBlinking) {
      if (seconds <= tempoCorVermelho) {
        setColorClass("bg-red-500 border-red-700");
      } else if (seconds <= tempoCorAmarelo) {
        setColorClass("bg-yellow-500 border-yellow-700");
      } else {
        setColorClass("bg-gray-800 border-gray-700");
      }
    }
  }, [seconds, stopBlinking]); 

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  // Adiciona a animação SOMENTE se `seconds <= tempoCorAmarelo` e se `stopBlinking` for falso
  const pulseClass = !stopBlinking && seconds <= tempoCorAmarelo ? "animate-pulse" : "";

  const handleClick = () => {
    setStopBlinking(true);
    setColorClass("bg-gray-800 border-gray-700");
  }

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-900 text-white">
      <div
        key={`renderizar-${pulseTrigger}`} // Força a re-renderização para sincronizar a animação
        className={`relative flex items-center justify-center w-48 h-20 px-6 rounded-2xl shadow-lg border-2 transition-all duration-1000 ${pulseClass} ${colorClass}`}
        onClick={handleClick} // Desativa a animação ao clicar
      >
        <h1 className="text-5xl font-bold">{formatTime(seconds)}</h1>
      </div>
    </div>
  );
};

export default Countdown;
