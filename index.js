// script.js
async function getWeather() {
    const apiKey = 'c50ca56521d2fa92795109eeea50b66b';
    const cityInput = document.getElementById('cityInput');
    const weatherResult = document.getElementById('weatherResult');
  
    const city = cityInput.value.trim();
    if (!city) {
      alert('Please enter a city name');
      return;
    }
  
    try {
      const response = await fetch(
        `api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid={API key}`
      );
      const data = await response.json();
  
      if (data.cod === '404') {
        weatherResult.textContent = 'City not found';
      } else {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
  
        weatherResult.innerHTML = `
          <p>Weather: ${weatherDescription}</p>
          <p>Temperature: ${temperature} &deg;C</p>
          <p>Humidity: ${humidity} %</p>
          <p>Wind Speed: ${windSpeed} m/s</p>
        `;
      }
    } catch (error) {
      console.log(error);
      weatherResult.textContent = 'An error occurred while fetching weather data.';
    }
  }
  