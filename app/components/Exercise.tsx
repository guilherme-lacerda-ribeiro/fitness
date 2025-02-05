import React from 'react';
import ExerciseVideo from './ExerciseVideo';
import ExerciseImage from './ExerciseImage';

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
      <ExerciseImage src={image} alt={`Imagem do exercício ${name}`} />
      <h2>{name}</h2>
      <p>Séries: {series}</p>
      <p>Repetições: {repetitions}</p>
      <p>Descanso: {rest} segundos</p>
      <p>Peso: {weight}</p>
      <ExerciseVideo videoUrl={video} />
    </div>
  );
};

export default Exercise;