import "./Workout.css";
import { useState } from "react"
import Plan from "../Plan"
import { useEffect } from "react"

const Workout = () => {
  const [workoutPlans, setWorkoutPlans] = useState([])
  const [actualIdxSlide, setActualIdxSlide] = useState(1)

  useEffect(() => {
    fetch('/workoutPlans.json')
      .then(response => response.json())
      .then(data => setWorkoutPlans(data))
  }, [])

  const prevSlide = () => setActualIdxSlide(actualIdxSlide-1)
  const nextSlide = () => setActualIdxSlide(actualIdxSlide+1)

  return workoutPlans && (
    <>
      {workoutPlans.map(workout => (
        <section key={workout.plan} className="workout slider">
          <h2>💪 {workout.plan}</h2>
          <button onClick={prevSlide}>⬅️</button>
          <button onClick={nextSlide}>➡️</button>
          <ol className="slides" style={{transform: `translateX(-${actualIdxSlide*100}%)`}}>
            <Plan exercises={workout.exercises}/>
          </ol>
        </section>
      ))}
    </>
  )
}

export default Workout