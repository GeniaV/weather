import styles from './app.module.css';
import Time from '../time/time';
import Day from '../day/day';
import Today from '../today/today';
import Weather from '../weather/weather';
import WeekNumber from '../week-number/week-number';
import Rates from '../rates/rates';
import { city } from '../../utils/constants';
import ThemeToggle from '../theme-toggle/theme-toggle';
import { useState } from 'react';
import { ThemeContext } from '../../services/context/context';

function App() {
  const [theme, setTheme] = useState<string>(styles.light);
  const [cityColorLight, setCityColorLight] = useState(false);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === styles.light ? styles.dark : styles.light);
    setCityColorLight(!cityColorLight);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={styles.main} id={theme}>
        <Weather />
        {!cityColorLight ? <h2 className={`${styles.city} ${styles.city_dark}`}>{city === 'Moscow' && 'Mосква'}</h2>
          : <h2 className={`${styles.city} ${styles.city_white}`}>{city === 'Moscow' && 'Mосква'}</h2>}
        <section>
          <Time />
          <Day />
          <Today />
          <WeekNumber />
          <Rates />
          <ThemeToggle />
        </section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
