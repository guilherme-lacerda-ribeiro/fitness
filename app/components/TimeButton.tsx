"use client";

import { useState } from "react";

interface TimeButtonProps {
  onTimeSelect: (time: number) => void;
  defaultTime?: number;
}

export default function TimeButton({ onTimeSelect, defaultTime = 30 }: TimeButtonProps) {
  const [selectedTime, setSelectedTime] = useState(defaultTime);

  const handleSelect = (time: number) => {
    setSelectedTime(time);
    onTimeSelect(time);
  };

  const temposPadrao = [30, 45, 60];

  return (
    <div className="flex flex-col items-center gap-2 mb-2">
      <div className="flex gap-2">
        {temposPadrao.map((time) => (
          <button
            key={time}
            className={`px-4 py-2 rounded-lg transition-all duration-200 shadow-lg 
            ${selectedTime === time
                ? "text-white bg-gray-800 border-2 border-gray-700 transform scale-95 shadow-inner"
                : "bg-gray-700 text-white hover:bg-gray-600 active:scale-95 active:shadow-inner"
              }`}
            onClick={() => handleSelect(time)}
          >
            {time === 60 ? "1m" : `${time}s`}
          </button>
        ))}
      </div>
    </div>
  );

}
