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

  if(!weather || weather === null) {
    return <div>fffff</div>
  }

  return (
    <div>
      {weather && <header className={styles.weather}>{`${weather.current.temp_c} °C`}</header>}
    </div>
  );
}

export default Weather;

