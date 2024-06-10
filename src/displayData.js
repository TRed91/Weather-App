import getImage from "./getImage";

export default function displayData(data, toggle) {
    const locationContainer = document.querySelector('.location-container');
    const infoContainer = document.querySelector('.weather-info');
    const forecastContainer = document.querySelector('.forecast-info');
    
    // Empty Display on new search
    while (locationContainer.firstChild){
        locationContainer.removeChild(locationContainer.firstChild);
    }
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

    const body = document.querySelector('body');
    const credit = document.querySelector('.credit')
    const conditionImage = document.createElement('img');
    conditionImage.className = 'condition-image';
    getImage(data.condition, data.conditionCode, conditionImage, body, credit);

    const temp = document.createElement('h2');
    const feelslike = document.createElement('p');

    const humidity = document.createElement('h2');
    humidity.className = 'humidity'

    city.innerHTML = data.city;
    country.innerHTML = data.country;
    region.innerHTML = data.region;

    condition.innerHTML = data.condition;

    if (toggle === 'c') {
        temp.innerHTML = `Temperature: ${data.tempC}°C`;
        feelslike.innerHTML = `Feels like: ${data.feelslikeC}°C`;
    } else {
        temp.innerHTML = `Temperature: ${data.tempF}F`;
        feelslike.innerHTML = `Feels like: ${data.feelslikeF}F`;
    }
    
    
    humidity.innerHTML = `Humdity: ${data.humidity}`;

    const locationInfo = document.createElement('div');
    locationInfo.className = 'location-info';
    locationInfo.appendChild(city);
    locationInfo.appendChild(country);
    //ocationInfo.appendChild(region);

    const tempHumidContainer = document.createElement('div');
    tempHumidContainer.className = 'temp-humid-container';

    const tempInfo = document.createElement('div');
    tempInfo.className = 'temp-info';
    tempInfo.appendChild(temp);
    tempInfo.appendChild(feelslike);

    tempHumidContainer.appendChild(tempInfo);
    tempHumidContainer.appendChild(humidity);

    locationContainer.appendChild(locationInfo);

    infoContainer.appendChild(condition);
    //infoContainer.appendChild(conditionImage);
    infoContainer.appendChild(tempHumidContainer);

    //Display forecast Day 1
    const fc1Container = document.createElement('div');

    const fc1date = document.createElement('h3');
    const fc1condition = document.createElement('div');
    const fc1temp = document.createElement('div');
    const fc1rain = document.createElement('div');
    const fc1snow = document.createElement('div');
    const fc1humidity = document.createElement('div');
    const fc1Info = [fc1date, fc1condition, fc1temp, fc1rain, fc1snow, fc1humidity];

    fc1date.innerHTML = 'Tomorrow';
    fc1condition.innerHTML = data.forecastDay1.day.condition.text; //icon for icon
    if (toggle === 'c') {
        fc1temp.innerHTML = `${data.forecastDay1.day.avgtemp_c}°C`;
    } else {
        fc1temp.innerHTML = `${data.forecastDay1.day.avgtemp_f}F`;
    }
    
    fc1rain.innerHTML = `Chance of Rain: ${data.forecastDay1.day.daily_chance_of_rain}%`;
    if (data.forecastDay1.day.daily_will_it_snow === 1){
        fc1snow.innerHTML = `Chance of Snow: ${data.forecastDay1.day.daily_chance_of_snow}%`;
    }
    fc1humidity.innerHTML = `Humidity: ${data.forecastDay1.day.avghumidity}`;

    fc1Info.forEach(e => {
        fc1Container.appendChild(e);
    });
    
    forecastContainer.appendChild(fc1Container);

    //Display forecast Day 2
    const fc2Container = document.createElement('div');

    const fc2date = document.createElement('h3');
    const fc2condition = document.createElement('div');
    const fc2temp = document.createElement('div');
    const fc2rain = document.createElement('div');
    const fc2snow = document.createElement('div');
    const fc2humidity = document.createElement('div');
    const fc2Info = [fc2date, fc2condition, fc2temp, fc2rain, fc2snow, fc2humidity];

    fc2date.innerHTML = 'Day after tomorrow';
    fc2condition.innerHTML = data.forecastDay2.day.condition.text; //icon for icon
    if (toggle === 'c') {
        fc2temp.innerHTML = `${data.forecastDay2.day.avgtemp_c}°C`;
    } else {
        fc2temp.innerHTML = `${data.forecastDay2.day.avgtemp_f}F`;
    }
    
    fc2rain.innerHTML = `Chance of Rain: ${data.forecastDay2.day.daily_chance_of_rain}%`;
    if (data.forecastDay2.day.daily_will_it_snow === 1){
        fc1snow.innerHTML = `Chance of Snow: ${data.forecastDay2.day.daily_chance_of_snow}%`;
    }
    fc2humidity.innerHTML = `Humidity: ${data.forecastDay2.day.avghumidity}`;

    fc2Info.forEach(e => {
        fc2Container.appendChild(e);
    });
    
    forecastContainer.appendChild(fc2Container);

}