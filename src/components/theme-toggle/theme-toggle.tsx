import { useState } from 'react';
import styles from './theme-toggle.module.css'
import { useGlobalContext } from '../../services/context/context';

function ThemeToggle() {
  const [darkMode, setdarkMode] = useState<boolean>(false);
  const { theme, toggleTheme } = useGlobalContext();

  const changeMode = () => {
    setdarkMode(!darkMode);
    toggleTheme(theme)
  };

  return (
    <div className={styles.toggle}>
      <input className={styles.toggle__input} type='checkbox' checked={darkMode} onChange={changeMode} />
      {!darkMode && <span className={styles.toggle__pic_lightmode} onClick={changeMode}></span>}
      {darkMode && <span className={styles.toggle__cont}>
        <div className={styles.toggle__cont__sun} onClick={changeMode}>
          <div className={styles.toggle__cont__sun__ray}></div>
          <div className={styles.toggle__cont__sun__ray}></div>
          <div className={styles.toggle__cont__sun__ray}></div>
          <div className={styles.toggle__cont__sun__ray}></div>
          <div className={styles.toggle__cont__sun__ray}></div>
          <div className={styles.toggle__cont__sun__ray}></div>
          <div className={styles.toggle__cont__sun__ray}></div>
          <div className={styles.toggle__cont__sun__ray}></div>
        </div>
      </span>}
    </div>
  )
};

export default ThemeToggle;
