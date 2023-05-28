import { useEffect, useState } from "react";
import styles from "./week-number.module.css"
import { useGlobalContext } from "../../services/context/context";
import appStyles from '../app/app.module.css';

function WeekNumber() {
  const [weekNumber, setWeekNumber] = useState(0);
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
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    let date = new Date(Date.UTC(year, month - 1, day));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    let startOfYear = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));

    const weekNumber = Math.ceil((((+date - +startOfYear) / 86400000) + 1) / 7);

    setWeekNumber(weekNumber);
  }, [])

  return (
    <>
      {!textColorLight ? (<p className={styles.text_dark}>{weekNumber} неделя</p>)
        : (<p className={styles.text_white}>{weekNumber} неделя</p>)}
    </>
  )
};

export default WeekNumber;
