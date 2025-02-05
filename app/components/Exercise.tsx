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
      <h1>Exercício {id}</h1>
      <h2>{name}</h2>
      <p>Séries: {series}</p>
      <p>Repetições: {repetitions}</p>
      <p>Descanso: {rest} segundos</p>
      <p>Peso: {weight}</p>
      <ExerciseVideo videoUrl={video} imageUrl={image}/>
    </div>
  );
};

export default Exercise;