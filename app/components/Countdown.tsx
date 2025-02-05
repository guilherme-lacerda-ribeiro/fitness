'use client'

import React, { useState, useEffect } from 'react';
import TimeButton from './TimeButton';

const Countdown = () => {
  const [seconds, setSeconds] = useState(0);
  const [pulseTrigger, setPulseTrigger] = useState(false); // Estado para forçar a pulsação sincronizada
  const [stopBlinking, setStopBlinking] = useState(true); // Estado para parar a animação
  const [colorClass, setColorClass] = useState("bg-gray-800 border-gray-700");

  const tempoCorAmarelo = 9;
  const tempoCorVermelho = 4;

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
        setPulseTrigger((prev) => !prev); // Alterna o estado para forçar a re-renderização
      }, 1000);

      return () => clearInterval(timerId);
    }

    // Quando atingir zero, toca o bipe
    if (seconds === 0 && !stopBlinking) {
      playBeep();
      handleClick();
    }
  }, [seconds, stopBlinking]);

  useEffect(() => {
    // Define a cor com base no tempo restante
    if (!stopBlinking) {
      if (seconds <= tempoCorVermelho) {
        setColorClass("bg-red-500 border-red-700");
        navigator.vibrate([250, 250]); // Vibração de 250ms com pausa de 250ms
      } else if (seconds <= tempoCorAmarelo) {
        setColorClass("bg-yellow-500 border-yellow-700");
        navigator.vibrate([500, 500]); // Vibração de 500ms com pausa de 500ms
      } else {
        setColorClass("bg-gray-800 border-gray-700");
        navigator.vibrate(0); // Para a vibração
      }
    }
  }, [seconds, stopBlinking]);

  // Função para emitir um bipe
  const playBeep = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext; // Suporte a navegadores antigos
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine'; // Tipo de onda (senoidal)
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime); // Frequência do bipe (1000 Hz)

    gainNode.gain.setValueAtTime(1, audioContext.currentTime); // Volume inicial
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1); // Redução gradual

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1); // Duração do som em segundos
  };

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
    navigator.vibrate(0); // Para a vibração ao clicar
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-gray-900 text-white">
        <div
          key={`renderizar-${pulseTrigger}`} // Força a re-renderização para sincronizar a animação
          className={`relative flex items-center justify-center w-48 h-20 px-6 rounded-2xl shadow-lg border-2 transition-all duration-1000 ${pulseClass} ${colorClass}`}
          onClick={handleClick} // Desativa a animação ao clicar
        >
          <h1 className="text-5xl font-bold">{formatTime(seconds)}</h1>
        </div>
      </div>
      <TimeButton
        onTimeSelect={setSeconds}
        setStopBlinking={setStopBlinking}
      />
    </>
  );
};

export default Countdown;
