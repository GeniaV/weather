import { useEffect, useState } from "react";
import styles from './time.module.css';

function Time() {
  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(getFormattedTime());
    }, 60000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [time]);


  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return { hours, minutes };
  };

  const { hours, minutes } = getFormattedTime();

  return (
    <section className={styles.time}>
      <p>{hours}</p>
      <p className={styles.colon}>:</p>
      <p>{minutes}</p>
    </section>
  )
};

export default Time;






