import { useEffect, useState } from "react";
import { ICurrentWeather } from "../../utils/types";
import { getCurrentWeather } from "../../utils/api";
import { weatherUpdateInterval } from "../../utils/constants";
import styles from './weather.module.css';

function Weather() {
  const [weather, setweather] = useState<ICurrentWeather | null>(null);

  useEffect(() => {
    getCurrentWeather()
      .then((res) => setweather(res))
      .catch(err => console.log(err))

    const interval = setInterval(getCurrentWeather, weatherUpdateInterval);

    return () => clearInterval(interval);
  }, []);

  if (!weather || weather === null) {
    return <div>fffff</div>
  }

  return (
    <div>
      {weather &&
        <div className={styles.weather}>
          <header className={styles.weather__temp}>{weather.current.temp_c}</header>
          <span className={styles.weather__celsius}>&#176;C</span>
        </div>
      }
    </div>
  );
}

export default Weather;

