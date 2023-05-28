import styles from './app.module.css';
import Time from '../time/time';
import Day from '../day/day';
import Today from '../today/today';
import Weather from '../weather/weather';
import WeekNumber from '../week-number/week-number';
import Rates from '../rates/rates';
import { city } from '../../utils/constants';
import ThemeToggle from '../theme-toggle/theme-toggle';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className={styles.main}>
      <Weather />
      <h2 className={styles.city}>{city}</h2>
      <section>
        <Time />
        <Day />
        <Today />
        <WeekNumber />
        <Rates />
        <ThemeToggle />
      </section>
    </div>
  );
}

export default App;
