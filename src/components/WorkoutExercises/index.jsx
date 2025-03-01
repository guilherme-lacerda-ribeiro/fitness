import { useState } from "react";
import "./WorkoutExercises.css";
import Plan from "../Plan";

const WorkoutExercises = ({ exercises }) => {
  const [actualIdxSlide, setActualIdxSlide] = useState(0)
  const prevSlide = () => setActualIdxSlide(actualIdxSlide - 1)
  const nextSlide = () => setActualIdxSlide(actualIdxSlide + 1)

  return (
    <div className="slider">
      <button onClick={prevSlide}>⬅️</button>
      <button onClick={nextSlide}>➡️</button>
      <ol className="slides" style={{ transform: `translateX(-${actualIdxSlide * 100}%)` }}>
        <Plan exercises={exercises} />
      </ol>

    </div>
  )
}
export default WorkoutExercises