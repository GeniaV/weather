import { useEffect, useState } from "react";

function WeekNumber() {
  const [weekNumber, setWeekNumber] = useState(0);

  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    let date = new Date(Date.UTC(year, month - 1, day));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    let startOfYear = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));

    const weekNumber = Math.ceil((((+date - +startOfYear) / 86400000) + 1)/7);

    setWeekNumber(weekNumber);
  }, [])

  return (
    <p>{weekNumber} неделя</p>
  )
};

export default WeekNumber;
