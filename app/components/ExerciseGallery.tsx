import { useEffect, useState } from "react";
import Exercise from "./Exercise";

interface ExerciseData {
  id: number;
  name: string;
  series: number;
  repetitions: string;
  rest: number;
  weight: string;
  video: string;
  image: string;
}

interface FichaData {
  id: number;
  name: string;
  exercises: ExerciseData[];
}

interface TreinoData {
  data: string;
  fichas: FichaData[];
}

const ExerciseGallery = () => {
  const [treino, setTreino] = useState<TreinoData>({
    data: "",
    fichas: [],
  });

  useEffect(() => {
    fetch("/data/treino.json")
      .then((res) => res.json())
      .then((data) => setTreino(data));
  }, []);

  return (
    <div>
      {treino.fichas.map((ficha) =>
        ficha.exercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            id={exercise.id}
            name={exercise.name}
            image={`/media/images/${exercise.image}`}
            series={exercise.series}
            repetitions={exercise.repetitions}
            rest={exercise.rest}
            weight={exercise.weight}
            video={`/media/videos/${exercise.video}`}
          />
        ))
      )}
    </div>
  );
};

export default ExerciseGallery;
