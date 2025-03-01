const Calendar = () => {
  const language = navigator.language??'en-US'
  const today = new Date().toLocaleDateString(language, { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });

  return (<>
    <p className="today">{today}</p>
    <p>📅 Mapa de treino</p>
  </>
  )
}
export default Calendar