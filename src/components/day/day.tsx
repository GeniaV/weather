import { useEffect, useState } from "react";
import styles from "./day.module.css"

function Day() {
  const [weekDay, setWeekDay] = useState('');

  useEffect(() => {
    const date = new Date();
    const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'long'});
    setWeekDay(dayOfWeek);
  }, []);

  return (
    <p className={styles.text}>{weekDay}</p>
  )
};

export default Day;

