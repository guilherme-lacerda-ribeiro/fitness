import React from 'react';
import ExerciseVideo from './ExerciseVideo';

interface ExerciseProps {
  id: number;
  name: string;
  series: number;
  repetitions: string;
  rest: number;
  weight: string;
  video: string;
  image: string;
}

const Exercise = ({ id, name, series, repetitions, rest, weight, video, image }: ExerciseProps) => {
  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-2">
        {id}. {name}
      </h1>
      <p className="text-sm text-gray-400">Séries: <span className="text-gray-200">{series} x {repetitions}</span></p>
      <p className="text-sm text-gray-400">Peso: <span className="text-gray-200">{weight} kg</span></p>
      <p className="text-sm text-gray-400">Intervalo: <span className="text-gray-200">{rest} segundos</span></p>

      <div className="mt-3 flex justify-center items-center w-full max-w-md mx-auto overflow-hidden rounded-lg">
        <ExerciseVideo videoUrl={video} imageUrl={image} />
      </div>
    </div>
  );
};

export default Exercise;