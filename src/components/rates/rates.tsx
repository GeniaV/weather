import { useEffect, useState } from "react";
import { getCurrencyRates } from "../../utils/api";
import { ICurrancyResponse } from "../../utils/types";

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
    return <div>fffff</div>
  }

  return (
    <>
      <p>Курс &#36; к рублю:</p>
      <p>{dollarToRubleExchangeRate.rates.RUB.toFixed(2)}</p>
      <p>Курс &#8364; к рублю:</p>
      <p>{euroToRubleExchangeRate.rates.RUB.toFixed(2)}</p>
    </>
  )
};

export default Rates;
