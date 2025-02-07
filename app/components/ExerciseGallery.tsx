import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
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
  const [treino, setTreino] = useState<TreinoData>({ data: "", fichas: [] });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/data/treino.json")
      .then((res) => res.json())
      .then((data) => setTreino(data));
  }, []);

  const exercises = treino.fichas.flatMap((ficha) => ficha.exercises);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : exercises.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < exercises.length - 1 ? prevIndex + 1 : 0));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true, // Permite arrastar com o mouse também
  });

  return (
    <div {...handlers} className="relative w-full max-w-lg mx-auto overflow-hidden">
      <button
        onClick={handlePrev}
        className="galeria-botao-navegacao left-0"
      >
        ◀
      </button>

      {exercises.length > 0 && (
        <div className="flex items-center justify-center">
          <Exercise
            key={exercises[currentIndex].id}
            id={exercises[currentIndex].id}
            name={exercises[currentIndex].name}
            image={`/media/images/${exercises[currentIndex].image}`}
            series={exercises[currentIndex].series}
            repetitions={exercises[currentIndex].repetitions}
            rest={exercises[currentIndex].rest}
            weight={exercises[currentIndex].weight}
            video={`/media/videos/${exercises[currentIndex].video}`}
          />
        </div>
      )}

      <button
        onClick={handleNext}
        className="galeria-botao-navegacao right-0"
      >
        ▶
      </button>
    </div>
  );
};

export default ExerciseGallery;