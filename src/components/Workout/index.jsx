import styles from "./Workout.module.css";
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
        <section key={workout.plan} className={styles.workout}>
          <h2>💪 {workout.plan}</h2>
          <ol>
            <Plan exercises={workout.exercises}/>
          </ol>
        </section>
      ))}
    </>
  )
}

export default Workout