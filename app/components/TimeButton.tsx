"use client";

import { useState } from "react";

interface TimeButtonProps {
  onTimeSelect: (time: number) => void;
  defaultTime?: number;
  setStopBlinking: (stopBlinking: boolean) => void;
}

export default function TimeButton({ onTimeSelect, defaultTime = 30, setStopBlinking }: TimeButtonProps) {
  const [selectedTime, setSelectedTime] = useState(defaultTime);
  const [pressedTime, setPressedTime] = useState<number | null>(null);

  const handleSelect = (time: number) => {
    setSelectedTime(time);
    setPressedTime(time);
    onTimeSelect(time);
    setStopBlinking(false);

    // Remove o estado de pressionado após 5 segundos
    setTimeout(() => {
      setPressedTime(null);
    }, 5000);
  };

  const temposPadrao = [30, 45, 60];

  return (
    <div className="flex flex-col items-center gap-2 mb-2">
      <div className="flex gap-2">
        {temposPadrao.map((time) => (
          <button
            key={time}
            className={`px-4 py-2 rounded-lg transition-all duration-200 shadow-lg 
            ${pressedTime === time
                ? "text-white bg-gray-800 border-2 border-gray-700 transform scale-95 shadow-inner"
                : "bg-gray-700 text-white hover:bg-gray-600 active:scale-95 active:shadow-inner"
              }`}
            onClick={() => handleSelect(time)}
            disabled={pressedTime === time} // Impede que seja clicado novamente enquanto estiver pressionado
          >
            {time === 60 ? "1m" : `${time}s`}
          </button>
        ))}
      </div>
    </div>
  );

}
