import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WeatherCard from './Component/WeatherCard';

function App() {
    const [weatherMadrid, setWeatherMadrid] = useState([]);
    const [weatherLondon, setWeatherLondon] = useState([]);
    const [weatherMoscow, setWeatherMoscow] = useState([]);
    const [weatherTunis, setWeatherTunis] = useState([]);
    const getWeatherMadrid = async () => {
        try {
            const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=55c8e4e254f1b77ab1fa5a78cae64a69");
            setWeatherMadrid(res.data);
        } catch(error) {
            console.log(error);
        }
    }

    const getWeatherLondon = async () => {
        try {
            const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=55c8e4e254f1b77ab1fa5a78cae64a69");
            setWeatherLondon(res.data);
        } catch(error) {
            console.log(error);
        }
    }

    const getWeatherMoscow = async () => {
        try {
            const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=55c8e4e254f1b77ab1fa5a78cae64a69");
            setWeatherMoscow(res.data);
        } catch(error) {
            console.log(error);
        }
    }

    const getWeatherTunis = async () => {
        try {
            const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=55c8e4e254f1b77ab1fa5a78cae64a69");
            setWeatherTunis(res.data);
        } catch(error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
      getWeatherMadrid();
        getWeatherLondon();
        getWeatherMoscow();
        getWeatherTunis();
      }, []);

    return (
      <div>
        <h1 style={{fontSize: 40, color: "red", textAlign: "center", marginBottom: 30}}>WEATHER</h1>
        <div style={{display: "flex", justifyContent: "space-between", margin: 10}}>
          <WeatherCard weatherTown={weatherMadrid} />
          <WeatherCard weatherTown={weatherLondon} />
          <WeatherCard weatherTown={weatherMoscow} />
          <WeatherCard weatherTown={weatherTunis} />
        </div>
      </div>
    )
}

export default App;