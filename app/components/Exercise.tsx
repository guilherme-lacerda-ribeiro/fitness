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
    <div>
      <h1>{id}: {name}</h1>
      <p>Séries: {series} x {repetitions}</p>
      <p>Peso: {weight}</p>
      <p>Intervalo: {rest} segundos</p>
      <ExerciseVideo videoUrl={video} imageUrl={image}/>
    </div>
  );
};

export default Exercise;