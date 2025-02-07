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
    <div className="p-5 rounded-xl shadow-lg w-full max-w-md mx-auto flex flex-col items-center">
      <div>
        <h2 className="titulo-exercicio">
          {id}. {name}
        </h2>
        <p className="subtitulo-exercicio">Séries: <span className="descricao-detalhes-exercicio">{series} x {repetitions}</span></p>
        <p className="subtitulo-exercicio">Peso: <span className="descricao-detalhes-exercicio">{weight} kg</span></p>
        <p className="subtitulo-exercicio">Intervalo: <span className="descricao-detalhes-exercicio">{rest} segundos</span></p>
      </div>

      <div className="mt-3 flex justify-center items-center w-full max-w-md mx-auto overflow-hidden rounded-lg">
        <ExerciseVideo videoUrl={video} imageUrl={image} />
      </div>
    </div>
  );
};

export default Exercise;