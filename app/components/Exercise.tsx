import Image from 'next/image';
import React from 'react';

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
      <Image 
        src={image} 
        alt={`Imagem do exercício ${name}`} 
        width={300} 
        height={300}
      />
      <h2>{name}</h2>
      <p>Séries: {series}</p>
      <p>Repetições: {repetitions}</p>
      <p>Descanso: {rest} segundos</p>
      <p>Peso: {weight}</p>
      <a href={video} target="_blank" rel="noopener noreferrer">Ver vídeo</a>
    </div>
  );
};

export default Exercise;