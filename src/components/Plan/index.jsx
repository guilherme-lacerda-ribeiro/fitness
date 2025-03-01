import styles from './Plan.module.css'

const Plan = ({ exercises }) => {
  return (
    <>
      {exercises.map(exercise => (
        <li key={exercise.id} className={styles.exercise}>
          <h3>{exercise.name}</h3>
          <div>
            <p>Repetições: {exercise.series}</p>
            <p>Peso: {exercise.weight}</p>
            <img src={exercise.thumbnail} alt={`Imagem do exercício ${exercise.name}`} />
          </div>
        </li>
      ))}
    </>
  )
}

export default Plan