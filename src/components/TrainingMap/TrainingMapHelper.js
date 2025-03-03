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

export {
  getWeekNumber,
  getMonthClass
}