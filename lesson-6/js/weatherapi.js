const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e58c9d2940678205482ada58cff75959&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('max-temp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

const apiforecastURL= 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e58c9d2940678205482ada58cff75959&units=imperial';
  fetch(apiforecastURL)
  .then(response => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));
    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    let day = 0;
    forecastData.forEach(forecast => {
      let x = new Date(forecast.dt_txt);
      document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
      document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
      document.getElementById('img'+(day+1)).alt = forecast.weather[0].description;
      document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
      day++;	  
  });
});

const apieventURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(apieventURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('event1').textContent = jsObject.towns[6].events[0];
    document.getElementById('event2').textContent = jsObject.towns[6].events[1];
    document.getElementById('event3').textContent = jsObject.towns[6].events[2];
  });
