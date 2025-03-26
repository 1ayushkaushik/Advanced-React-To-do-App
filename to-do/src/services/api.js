import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
});

export const getWeather = (city) => api.get(`/forecast.json?key=e515af46b7c243afb3783500252603=${city}&days=3`);
