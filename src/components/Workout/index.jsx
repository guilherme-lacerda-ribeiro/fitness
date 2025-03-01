import "./Workout.css";
import { useState } from "react"
import Plan from "../Plan"
import { useEffect } from "react"

const Workout = () => {
  const [workoutPlans, setWorkoutPlans] = useState([])

  useEffect(() => {
    fetch('/workoutPlans.json')
      .then(response => response.json())
      .then(data => setWorkoutPlans(data))
  }, [])


  return workoutPlans && (
    <>
      {workoutPlans.map(workout => (
        <section key={workout.plan} className="workout slider">
          <h2>💪 {workout.plan}</h2>
          <ol className="slides">
            <Plan exercises={workout.exercises}/>
          </ol>
        </section>
      ))}
    </>
  )
}

export default Workout