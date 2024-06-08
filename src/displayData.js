export default function displayData(data) {
    const infoContainer = document.querySelector('.weather-info');
    const forecastContainer = document.querySelector('.forecast-info');
    
    // Empty Display on new search
    while (infoContainer.firstChild){
        infoContainer.removeChild(infoContainer.firstChild);
    }
    while (forecastContainer.firstChild){
        forecastContainer.removeChild(forecastContainer.firstChild);
    }

    // Display current weather
    const city = document.createElement('h2');
    const country = document.createElement('p');
    const region = document.createElement('p');

    const condition = document.createElement('h2');
    condition.className = 'condition'

    const temp = document.createElement('h2');
    const feelslike = document.createElement('p');

    const humidity = document.createElement('h3');
    humidity.className = 'humidity'

    city.innerHTML = data.city;
    country.innerHTML = data.country;
    region.innerHTML = data.region;
    condition.innerHTML = data.condition;
    temp.innerHTML = `Temperature: ${data.tempC}°C`;
    feelslike.innerHTML = `Feels like: ${data.feelslikeC}`;
    humidity.innerHTML = `Humdity: ${data.humidity}`;

    const locationInfo = document.createElement('div');
    locationInfo.className = 'location-info';
    locationInfo.appendChild(city);
    locationInfo.appendChild(country);
    locationInfo.appendChild(region);

    const tempInfo = document.createElement('div');
    tempInfo.className = 'temp-info';
    tempInfo.appendChild(temp);
    tempInfo.appendChild(feelslike);

    infoContainer.appendChild(locationInfo);
    infoContainer.appendChild(condition);
    infoContainer.appendChild(tempInfo);
    infoContainer.appendChild(humidity);

    //Display forecast Day 1
    const fc1Container = document.createElement('div');

    const fc1date = document.createElement('h3');
    const fc1condition = document.createElement('div');
    const fc1temp = document.createElement('div');
    const fc1rain = document.createElement('div');
    const fc1snow = document.createElement('div');
    const fc1humidity = document.createElement('div');
    const fc1Info = [fc1date, fc1condition, fc1temp, fc1rain, fc1snow, fc1humidity];

    fc1date.innerHTML = data.forecastDay1.date;
    fc1condition.innerHTML = data.forecastDay1.day.condition.text; //icon for icon
    fc1temp.innerHTML = `${data.forecastDay1.day.avgtemp_c}°C`;
    fc1rain.innerHTML = `Chance of Rain: ${data.forecastDay1.day.daily_chance_of_rain}%`;
    if (data.forecastDay1.day.daily_will_it_snow === 1){
        fc1snow.innerHTML = `Chance of Snow: ${data.forecastDay1.day.daily_chance_of_snow}%`;
    }
    fc1humidity.innerHTML = `Humidity: ${data.forecastDay1.day.avghumidity}`;

    fc1Info.forEach(e => {
        fc1Container.appendChild(e);
    });
    
    forecastContainer.appendChild(fc1Container);
}