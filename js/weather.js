const API_KEY = 'f14073d8b8304e3994962b21be8b230c';

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&unit=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      const tempKToC = Math.round(data.main.temp - 273);
      city.innerText = `@${data.name}`;
      weather.innerText = `${data.weather[0].main} / ${tempKToC}°`;
    });
}
function onGeoError() {
  alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
