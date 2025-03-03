import { useEffect } from "react"
import { useState } from "react"
import './TrainningMap.css'

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

  const getWeekNumber = (date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1); // January 1st
    const startDayOfWeek = startOfYear.getDay(); // 0 = Sunday, 6 = Saturday

    // Find the first Sunday of the year
    const firstSunday = startDayOfWeek === 0 ? startOfYear
      : new Date(date.getFullYear(), 0, 1 + (7 - startDayOfWeek));

    // If the given date is before the first Sunday, it belongs to week 1
    if (date < firstSunday) {
      return 1;
    }

    // Calculate the difference in full weeks since the first Sunday
    const daysDifference = Math.floor((date - firstSunday) / (1000 * 60 * 60 * 24));
    return Math.floor(daysDifference / 7) + 2; // +2 ensures the first Sunday starts week 2
  }

  const monthClasses = {
    0: 'jan',
    1: 'feb',
    2: 'mar',
    3: 'apr',
    4: 'may',
    5: 'jun',
    6: 'jul',
    7: 'aug',
    8: 'sep',
    9: 'oct',
    10: 'nov',
    11: 'dec',
  }

  const getMonthClass = (date) => {
    return monthClasses[date.getMonth()]
  }

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
            <rect height={squareSize} width={squareSize} x={xPos} y={yPos} className={getMonthClass(day)} />
            {/* <text x={xPos + textXOffset} y={yPos + textYOffset} className='check'>✓</text> */}
          </>
        }
        )}
      </g>
    </svg>
  )
}
export default TrainingMap