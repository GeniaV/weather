import { useEffect, useState } from "react";

function Day() {
  const [weekDay, setWeekDay] = useState('');

  useEffect(() => {
    const date = new Date();
    const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'long'});
    setWeekDay(dayOfWeek);
  }, []);

  return (
    <p>{weekDay}</p>
  )
};

export default Day;
