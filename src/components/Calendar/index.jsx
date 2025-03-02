import './calendar.css'

const Calendar = () => {
  const language = navigator.language ?? 'en-US'
  const today = new Date().toLocaleDateString(language, { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });

  return (<>
    <p className="today">{today}</p>
    <p>📅 Mapa de treino</p>
    <div className='map'>
      <img src="map.svg" alt="SVG" />
    </div>
  </>
  )
}
export default Calendar