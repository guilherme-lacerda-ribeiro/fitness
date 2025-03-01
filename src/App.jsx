import './App.css'
import './main.css'
import './slider.css'
import Calendar from './components/Calendar'
import WorkoutPlans from './components/WorkoutPlans'

const App = () => {

  return (
    <main>
      <h1>Fitness</h1>
      <section className='calendar'>
        <Calendar />
      </section>
      <section className='workout'>
        <WorkoutPlans />
      </section>
    </main>
  )
}

export default App
