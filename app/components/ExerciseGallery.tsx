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
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Permite arrastar com o mouse também
  });

  return (
    <div {...handlers} className="relative w-full max-w-lg mx-auto overflow-hidden">
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

      {/* Botões de navegação */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default ExerciseGallery;