import { useEffect, useState } from "react";
import styles from "./day.module.css"
import { useGlobalContext } from "../../services/context/context";
import appStyles from '../app/app.module.css';

function Day() {
  const [weekDay, setWeekDay] = useState('');
  const { theme } = useGlobalContext();
  const [textColorLight, seTextColorLight] = useState(false);

  useEffect(() => {
    if (theme === appStyles.light) {
      seTextColorLight(false)
    }

    if (theme === appStyles.dark) {
      seTextColorLight(true)
    }
  }, [theme, textColorLight])

  useEffect(() => {
    const date = new Date();
    const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'long' });
    setWeekDay(dayOfWeek);
  }, []);

  return (
    <>
      {!textColorLight ? (<p className={`${styles.text} ${styles.text_dark}`}>{weekDay}</p>)
        : (<p className={`${styles.text} ${styles.text_white}`}>{weekDay}</p>)}
    </>

  )
};

export default Day;

