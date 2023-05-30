import { useEffect, useState } from "react";
import styles from './time.module.css';
import { useGlobalContext } from "../../services/context/context";
import appStyles from '../app/app.module.css';

function Time() {
  const [time, setTime] = useState(getFormattedTime());
  const [textColorLight, seTextColorLight] = useState(false);
  const { theme } = useGlobalContext();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(getFormattedTime());
    }, 60000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [time]);

  useEffect(() => {
    if (theme === appStyles.light) {
      seTextColorLight(false)
    }

    if (theme === appStyles.dark) {
      seTextColorLight(true)
    }
  }, [theme, textColorLight])


  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return { hours, minutes };
  };

  const { hours, minutes } = getFormattedTime();

  return (
    <>
      {textColorLight ? (
        <section className={`${styles.time} ${styles.time_white}`}>
          <p className={styles.time__numbers}>{hours}</p>
          <p className={styles.colon}>:</p>
          <p className={styles.time__numbers}>{minutes}</p>
        </section>)
        : (<section className={`${styles.time} ${styles.time_dark}`}>
          <p className={styles.time__numbers}>{hours}</p>
          <p className={styles.colon}>:</p>
          <p className={styles.time__numbers}>{minutes}</p>
        </section>)}
    </>
  )
};

export default Time;






