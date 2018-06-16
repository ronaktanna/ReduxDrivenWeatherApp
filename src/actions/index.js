import axios from 'axios';

const API_KEY = '17218ce96959d281e53d154c1e5eea83';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url =  `${ROOT_URL}q=${city},us&APPID=${API_KEY}`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
} 