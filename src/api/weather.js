import axios from 'axios';

const API_KEY = '872e3f004730c1a8c6786726ee02a28f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};

export const getForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};
