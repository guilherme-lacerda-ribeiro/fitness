import './App.css'
import './main.css'
import Calendar from './components/Calendar'
import Workout from './components/Workout'

const App = () => {

  return (
    <main>
      <h1>Fitness</h1>
      <section className='calendar'>
        <Calendar />
      </section>
      <section className='workout'>
        <Workout />
      </section>
    </main>
  )
}

export default App
