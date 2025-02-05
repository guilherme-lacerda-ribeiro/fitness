'use client'

import { useState } from "react";
import Countdown from "./components/Countdown";
import TimeButton from "./components/TimeButton";
import ExerciseGallery from "./components/ExerciseGallery";

export default function Home() {
  const [seconds, setSeconds] = useState(10);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-5 bg-gray-900 text-white">
      <ExerciseGallery />
      <Countdown initialSeconds={seconds} />
      <TimeButton
        onTimeSelect={setSeconds}
        defaultTime={seconds}
      />
    </div>
  );
}
