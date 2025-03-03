import { useEffect } from "react"
import { useState } from "react"
import './TrainningMap.css'
import { getWeekNumber, getMonthClass } from './TrainingMapHelper'

const TrainingMap = () => {
  const squareSize = 8
  const squareGap = 2
  const textXOffset = 1
  const textYOffset = 6

  const [daysOfTheYear, setDaysOfTheYear] = useState([])

  useEffect(() => {
    const thisYear = new Date().getFullYear()
    const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1)
    const daysCountInTheYear = (new Date(thisYear, 1, 29).getDate() === 29) ? 366 : 365;

    const daysInThisYear = []
    for (let index = 0; index < daysCountInTheYear; index++) {
      const dayOfYear = new Date(firstDayOfYear)
      dayOfYear.setDate(dayOfYear.getDate() + index)
      daysInThisYear.push(dayOfYear)
    }
    setDaysOfTheYear(daysInThisYear)
  }, [])

  return daysOfTheYear && (
    <svg width="530" height="70"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        {daysOfTheYear.map(day => {
          const squareFullSize = squareSize + squareGap // 8 + 2 = 10
          const dayOfWeek = day.getDay() // [0-6]
          const xPos = squareGap + ((getWeekNumber(day) - 1) * squareFullSize) // weekNumber starts with 1
          const yPos = squareFullSize * dayOfWeek

          return <>
            <rect key={day} height={squareSize} width={squareSize} x={xPos} y={yPos} className={getMonthClass(day)} />
            {/* <text x={xPos + textXOffset} y={yPos + textYOffset} className='check'>✓</text> */}
          </>
        }
        )}
      </g>
    </svg>
  )
}
export default TrainingMap