'use client'

import { useState } from "react";
import Countdown from "./components/Countdown";
import TimeButton from "./components/TimeButton";

export default function Home() {
  const [seconds, setSeconds] = useState(10);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white">
      <Countdown initialSeconds={seconds} />
      <TimeButton
        onTimeSelect={setSeconds}
        defaultTime={seconds}
      />
    </div>
  );
}
