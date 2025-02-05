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

const ExerciseGallery = () => {
  const [exercises, setExercises] = useState<ExerciseData[]>([]);

  useEffect(() => {
    fetch("/data/exercises.json")
      .then((res) => res.json())
      .then((data) => setExercises(data)); // FIXME: Corrigir o tipo de `data`
  }, []);

  return (
    <div>
      {exercises.map((exercise) => (
      <Exercise
        key={exercise.id}
        id={exercise.id} 
        name={exercise.name} 
        image={`/assets/images/${exercise.image}`} 
        series={exercise.series}
        repetitions={exercise.repetitions}
        rest={exercise.rest}
        weight={exercise.weight}
        video={`/assets/videos/${exercise.video}`}
      />
      ))}
    </div>
  );
};

export default ExerciseGallery;
