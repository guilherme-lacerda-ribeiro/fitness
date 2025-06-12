import { useState } from "react";
import "./WorkoutExercises.css";
import Plan from "../Plan";

const WorkoutExercises = ({ exercises }) => {
  const [actualIdxSlide, setActualIdxSlide] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)

  // const lastIdxExercise = exercises.length - 1
  // const prevSlide = () => setActualIdxSlide((prev) => prev === 0 ? lastIdxExercise : prev - 1)
  // const nextSlide = () => setActualIdxSlide((prev) => prev === lastIdxExercise ? 0 : prev + 1)
  const prevSlide = () => setActualIdxSlide((prev) => (prev - 1 + exercises.length) % exercises.length)
  const nextSlide = () => setActualIdxSlide((prev) => (prev + 1) % exercises.length)

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const deltaX = touchStartX - e.changedTouches[0].clientX
    const threshold = 50
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    setTouchStartX(null)
  }

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="styled_button prev" onClick={prevSlide}></button>
      <button className="styled_button next" onClick={nextSlide}></button>
      <ol className="slides" style={{ transform: `translateX(-${actualIdxSlide * 100}%)` }}>
        <Plan exercises={exercises} />
      </ol>

    </div>
  )
}
export default WorkoutExercises