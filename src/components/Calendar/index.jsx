import './calendar.css'

const Calendar = () => {
  const language = navigator.language ?? 'en-US'
  const today = new Date().toLocaleDateString(language, { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });

  return (<>
    <p className="today">{today}</p>
    <p>📅 Mapa de treino</p>
    <div className='map'>
      <svg height="115"
        xmlns="http://www.w3.org/2000/svg">
        <g>
          {/* <!-- Semana 1 --> */}
          <rect height="8" width="8" y="002" x="002" className='jan' />
          <rect height="8" width="8" y="012" x="002" className='jan' />
          <rect height="8" width="8" y="022" x="002" className='jan' />
          <rect height="8" width="8" y="032" x="002" className='jan' />
          <text y="038" x="003" className='check'>✓</text>
          <rect height="8" width="8" y="042" x="002" className='jan' />
          <text y="048" x="003" className='check'>✓</text>
          <rect height="8" width="8" y="052" x="002" className='jan' />
          <rect height="8" width="8" y="062" x="002" className='jan' />

          {/* <!-- Semana 2 --> */}
          <rect height="8" width="8" y="002" x="012" className='jan' />
          <rect height="8" width="8" y="012" x="012" className='jan' />
          <text y="018" x="013" className='check'>✓</text>
          <rect height="8" width="8" y="022" x="012" className='jan' />
          <rect height="8" width="8" y="032" x="012" className='jan' />
          <text y="038" x="013" className='check'>✓</text>
          <rect height="8" width="8" y="042" x="012" className='jan' />
          <rect height="8" width="8" y="052" x="012" className='jan' />
          <text y="058" x="013" className='check'>✓</text>
          <rect height="8" width="8" y="062" x="012" className='jan' />

          {/* <!-- Semana 3 --> */}
          <rect height="8" width="8" y="002" x="022" className='jan' />
          <rect height="8" width="8" y="012" x="022" className='jan' />
          <rect height="8" width="8" y="022" x="022" className='jan' />
          <rect height="8" width="8" y="032" x="022" className='jan' />
          <rect height="8" width="8" y="042" x="022" className='jan' />
          <rect height="8" width="8" y="052" x="022" className='jan' />
          <rect height="8" width="8" y="062" x="022" className='jan' />

          {/* <!-- Semana 4 --> */}
          <rect height="8" width="8" y="002" x="032" className='jan' />
          <rect height="8" width="8" y="012" x="032" className='jan' />
          <rect height="8" width="8" y="022" x="032" className='jan' />
          <rect height="8" width="8" y="032" x="032" className='jan' />
          <rect height="8" width="8" y="042" x="032" className='feb' />
          <rect height="8" width="8" y="052" x="032" className='feb' />
          <rect height="8" width="8" y="062" x="032" className='feb' />


          {/* <!-- Semana 1 --> */}
          <rect height="8" width="8" y="002" x="042" className='feb' />
          <rect height="8" width="8" y="012" x="042" className='feb' />
          <rect height="8" width="8" y="022" x="042" className='feb' />
          <rect height="8" width="8" y="032" x="042" className='feb' />
          <rect height="8" width="8" y="042" x="042" className='feb' />
          <rect height="8" width="8" y="052" x="042" className='feb' />
          <rect height="8" width="8" y="062" x="042" className='feb' />

          {/* <!-- Semana 2 --> */}
          <rect height="8" width="8" y="002" x="052" className='feb' />
          <rect height="8" width="8" y="012" x="052" className='feb' />
          <rect height="8" width="8" y="022" x="052" className='feb' />
          <rect height="8" width="8" y="032" x="052" className='feb' />
          <rect height="8" width="8" y="042" x="052" className='feb' />
          <rect height="8" width="8" y="052" x="052" className='feb' />
          <rect height="8" width="8" y="062" x="052" className='feb' />

          {/* <!-- Semana 3 --> */}
          <rect height="8" width="8" y="002" x="062" className='feb' />
          <rect height="8" width="8" y="012" x="062" className='feb' />
          <rect height="8" width="8" y="022" x="062" className='feb' />
          <rect height="8" width="8" y="032" x="062" className='feb' />
          <rect height="8" width="8" y="042" x="062" className='feb' />
          <rect height="8" width="8" y="052" x="062" className='feb' />
          <rect height="8" width="8" y="062" x="062" className='feb' />

          {/* <!-- Semana 4 --> */}
          <rect height="8" width="8" y="002" x="072" className='feb' />
          <rect height="8" width="8" y="012" x="072" className='mar' />
          <rect height="8" width="8" y="022" x="072" className='mar' />
          <rect height="8" width="8" y="032" x="072" className='mar' />
          <rect height="8" width="8" y="042" x="072" className='mar' />
          <rect height="8" width="8" y="052" x="072" className='mar' />
          <rect height="8" width="8" y="062" x="072" className='mar' />
        </g>
      </svg>
    </div>
  </>
  )
}
export default Calendar