'use client'

import Countdown from "./components/Countdown";
import ExerciseGallery from "./components/ExerciseGallery";

export default function Home() {

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-5 bg-gray-900 text-white">
      <ExerciseGallery />
      <Countdown />
    </div>
  );
}
