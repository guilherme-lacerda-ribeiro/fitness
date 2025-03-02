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
          {/* <!-- Jan --> */}
          <rect height="72" width="41" y="0" x="0" className='jan' />
          {/* <!-- Semana 1 --> */}
          <rect height="8" width="8" y="002" x="002" />
          <rect height="8" width="8" y="012" x="002" className='check' />
          <rect height="8" width="8" y="022" x="002" className='check'/>
          <rect height="8" width="8" y="032" x="002" />
          <rect height="8" width="8" y="042" x="002" className='check'/>
          <rect height="8" width="8" y="052" x="002" />
          <rect height="8" width="8" y="062" x="002" />

          {/* <!-- Semana 2 --> */}
          <rect height="8" width="8" y="002" x="012" />
          <rect height="8" width="8" y="012" x="012" className='check'/>
          <rect height="8" width="8" y="022" x="012" className='check'/>
          <rect height="8" width="8" y="032" x="012" />
          <rect height="8" width="8" y="042" x="012" className='check'/>
          <rect height="8" width="8" y="052" x="012" className='check'/>
          <rect height="8" width="8" y="062" x="012" />

          {/* <!-- Semana 3 --> */}
          <rect height="8" width="8" y="002" x="022" />
          <rect height="8" width="8" y="012" x="022" />
          <rect height="8" width="8" y="022" x="022" className='check'/>
          <rect height="8" width="8" y="032" x="022" className='check'/>
          <rect height="8" width="8" y="042" x="022" />
          <rect height="8" width="8" y="052" x="022" className='check'/>
          <rect height="8" width="8" y="062" x="022" />

          {/* <!-- Semana 4 --> */}
          <rect height="8" width="8" y="002" x="032" />
          <rect height="8" width="8" y="012" x="032" className='check'/>
          <rect height="8" width="8" y="022" x="032" className='check'/>
          <rect height="8" width="8" y="032" x="032" />
          <rect height="8" width="8" y="042" x="032" className='check'/>
          <rect height="8" width="8" y="052" x="032" />
          <rect height="8" width="8" y="062" x="032" />


          {/* <!-- Fev --> */}
          <rect height="72" width="42" y="0" x="41" className='feb' />
          {/* <!-- Semana 1 --> */}
          <rect height="8" width="8" y="002" x="042" />
          <rect height="8" width="8" y="012" x="042" className='check'/>
          <rect height="8" width="8" y="022" x="042" className='check'/>
          <rect height="8" width="8" y="032" x="042" className='check'/>
          <rect height="8" width="8" y="042" x="042" />
          <rect height="8" width="8" y="052" x="042" />
          <rect height="8" width="8" y="062" x="042" />

          {/* <!-- Semana 2 --> */}
          <rect height="8" width="8" y="002" x="052" />
          <rect height="8" width="8" y="012" x="052" className='check'/>
          <rect height="8" width="8" y="022" x="052" />
          <rect height="8" width="8" y="032" x="052" className='check'/>
          <rect height="8" width="8" y="042" x="052" />
          <rect height="8" width="8" y="052" x="052" className='check'/>
          <rect height="8" width="8" y="062" x="052" />

          {/* <!-- Semana 3 --> */}
          <rect height="8" width="8" y="002" x="062" />
          <rect height="8" width="8" y="012" x="062" className='check'/>
          <rect height="8" width="8" y="022" x="062" className='check'/>
          <rect height="8" width="8" y="032" x="062" />
          <rect height="8" width="8" y="042" x="062" className='check'/>
          <rect height="8" width="8" y="052" x="062" />
          <rect height="8" width="8" y="062" x="062" />

          {/* <!-- Semana 4 --> */}
          <rect height="8" width="8" y="002" x="072" />
          <rect height="8" width="8" y="012" x="072" className='check'/>
          <rect height="8" width="8" y="022" x="072" className='check'/>
          <rect height="8" width="8" y="032" x="072" />
          <rect height="8" width="8" y="042" x="072" />
          <rect height="8" width="8" y="052" x="072" />
          <rect height="8" width="8" y="062" x="072" />
        </g>
      </svg>
    </div>
  </>
  )
}
export default Calendar