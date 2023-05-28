import { useEffect, useState } from "react";
import { useGlobalContext } from "../../services/context/context";
import styles from "./today.module.css"
import appStyles from '../app/app.module.css';

function Today() {
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
  const date = new Date();

  enum options {
    day = 'numeric',
    month = 'long',
    year = 'numeric',
  };

  const formattedDate = date.toLocaleDateString('ru-Ru', options);

  return (
    <>
      {!textColorLight ? (<p className={styles.text_dark}>{formattedDate}</p>)
        : (<p className={styles.text_white}>{formattedDate}</p>)}
    </>
  )
};

export default Today;
