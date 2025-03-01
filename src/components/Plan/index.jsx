import './Plan.css'

const Plan = ({ exercises, actualIdxSlide }) => {
  return (
    <>
      {exercises.map(exercise => (
        <li key={exercise.id} className={`exercise slide ${(exercise.id === actualIdxSlide ? 'active' : '')}`}>
          <h3>{exercise.id}. {exercise.name}</h3>
          <div className='exercise_details'>
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