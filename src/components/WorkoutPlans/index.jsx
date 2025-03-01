import "./WorkoutPlans.css";
import { useState } from "react"
import { useEffect } from "react"
import WorkoutExercises from "../WorkoutExercises";

const WorkoutPlans = () => {
  const [workoutPlans, setWorkoutPlans] = useState([])

  useEffect(() => {
    fetch('/workoutPlans.json')
      .then(response => response.json())
      .then(data => setWorkoutPlans(data))
  }, [])

  return workoutPlans && (
    <>
      {workoutPlans.map(workout => {
        return (
          <section key={workout.plan} className="workout">
            <h2>💪 {workout.plan}</h2>
            <WorkoutExercises exercises={workout.exercises} />
          </section>
        )
      }
      )}
    </>
  )
}

export default WorkoutPlans