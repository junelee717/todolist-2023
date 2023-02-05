const API_KEY = "0e91e165bfd81674ccaa3923a02c26af";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector(".weather");
        const city = document.querySelector(".city");
        const temp = Math.floor(data.main.temp)
        weather.innerText = `${data.weather[0].main}, ${temp} ℃`;
        city.innerText = data.name + ",";
    });
}

function onGeoError() {
        weather.innerText = "Please allow";
        city.innerText = "Geolocation";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

