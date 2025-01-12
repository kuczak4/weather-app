import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [popularCitiesWeather, setPopularCitiesWeather] = useState([]);

  const API_KEY = '872e3f004730c1a8c6786726ee02a28f'; 
  const popularCities = ['New York', 'Tokyo', 'Paris'];

  const getWeather = async (cityName) => {
    if (!cityName) {
      setError('Please enter a city name!');
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setError('');
      return response.data;
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
      return null;
    }
  };

  useEffect(() => {
    const fetchPopularCitiesWeather = async () => {
      const weatherData = await Promise.all(
        popularCities.map(async (cityName) => {
          const data = await getWeather(cityName);
          return data ? { name: cityName, ...data } : null;
        })
      );
      setPopularCitiesWeather(weatherData.filter((data) => data !== null));
    };

    fetchPopularCitiesWeather();
  }, []);

  const getWeatherGif = (weatherDescription) => {
    if (!weatherDescription) return '/gifs/default.gif';

    if (weatherDescription.includes('clear')) return '/gifs/sunny.gif';
    if (weatherDescription.includes('cloud')) return '/gifs/cloudy.gif';
    if (weatherDescription.includes('rain')) return '/gifs/rainy.gif';
    if (weatherDescription.includes('snow')) return '/gifs/snowy.gif';
    return '/gifs/default.gif';
  };

  const getTextColor = (weatherDescription) => {
    if (weatherDescription && weatherDescription.includes('cloud') || weatherDescription.includes('snow')) {
      return '#333'; 
    }
    return 'white'; 
  };

  return (
    <div className="App">
      {}
      <div
        className="background"
        style={{
          backgroundImage: `url('/gifs/background.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1, 
        }}
      ></div>

      <h1>Weather App</h1>

      {}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={() => getWeather(city).then(setWeather)}>Get Weather</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {}
      {weather && (
        <div
          className="weather-card searched-city"
          style={{
            backgroundImage: `url(${getWeatherGif(weather.weather[0].description.toLowerCase())})`,
            color: getTextColor(weather.weather[0].description.toLowerCase()), 
          }}
        >
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}

      {}
      <h2>Popular Cities</h2>
      <div className="popular-cities">
        {popularCitiesWeather.map((cityWeather, index) => (
          <div
            key={index}
            className="weather-card"
            style={{
              backgroundImage: `url(${getWeatherGif(cityWeather.weather[0].description.toLowerCase())})`,
              color: getTextColor(cityWeather.weather[0].description.toLowerCase()), 
            }}
          >
            <h3>{cityWeather.name}</h3>
            <p>{cityWeather.main.temp}°C</p>
            <p>{cityWeather.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
