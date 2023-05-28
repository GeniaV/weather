import { API_CURRANCY_URL, API_WEATHER_URL, apiCurrancyKey, apiKey, city, symbols } from "./constants";
import { ICurrancyResponse, ICurrentWeather } from "./types";

const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export async function getCurrentWeather() {
  const res = await fetch(`${API_WEATHER_URL}/current.json?key=${apiKey}&q=${city}=no`);
  return checkResponse<ICurrentWeather>(res);
};

const myHeaders = new Headers();
myHeaders.append("apikey", apiCurrancyKey);

export async function getCurrencyRates(currancy: string) {
  const res = await fetch(`${API_CURRANCY_URL}/exchangerates_data/latest?symbols=${symbols}&base=${currancy}`, {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  });
  return checkResponse<ICurrancyResponse>(res);
};





