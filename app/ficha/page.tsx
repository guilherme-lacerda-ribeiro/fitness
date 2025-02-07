'use client'

import Countdown from "../components/Countdown";
import ExerciseGallery from "../components/ExerciseGallery";

export default function Ficha() {

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-5">
      <ExerciseGallery />
      <Countdown />
    </div>
  );
}
