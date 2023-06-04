import { useEffect, useState } from "react";
import { getCurrencyRates } from "../../utils/api";
import { ICurrancyResponse } from "../../utils/types";
import styles from "./rates.module.css";
import Preloader from "../../preloader/preloder";

function Rates() {
  const [dollarToRubleExchangeRate, setDollarToRubleExchangeRate] = useState<ICurrancyResponse | null>(null);
  const [euroToRubleExchangeRate, setdEuroToRubleExchangeRate] = useState<ICurrancyResponse | null>(null);

  useEffect(() => {
    getCurrencyRates('USD')
      .then((res) => setDollarToRubleExchangeRate(res))
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    getCurrencyRates('EUR')
      .then((res) => setdEuroToRubleExchangeRate(res))
      .catch(err => console.log(err))
  }, []);

  if ((!dollarToRubleExchangeRate || dollarToRubleExchangeRate === null)
    || (!euroToRubleExchangeRate || euroToRubleExchangeRate === null)) {
    return <Preloader />
  }

  return (
    <section className={styles.rates}>
      <div className={styles.rates__currancy}>
        <p className={styles.rates__text}>Курс &#36; к рублю:</p>
        <p className={styles.rates__rate}>{dollarToRubleExchangeRate.rates.RUB.toFixed(2)}</p>
      </div>
      <div className={styles.rates__currancy}>
        <p className={styles.rates__text}>Курс &#8364; к рублю:</p>
        <p className={styles.rates__rate}>{euroToRubleExchangeRate.rates.RUB.toFixed(2)}</p>
      </div>
    </section>
  )
};

export default Rates;
