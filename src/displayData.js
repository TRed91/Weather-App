export default function displayData(data) {
    const infoContainer = document.querySelector('.weather-info');

    // Empty Display on new search
    while (infoContainer.firstChild){
        infoContainer.removeChild(infoContainer.firstChild);
    }

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
}