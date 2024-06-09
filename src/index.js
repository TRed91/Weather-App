import './style.css';
import processData from './processData';
import displayData from './displayData';

async function getWeatherInfo(location) {

    try {
        const fetchData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8172e47f317945cfa99140930240606&q=${location}&days=4`, 
            { mode: 'cors'}
        );
        const data = await fetchData.json();
        return data;

    } catch (err) {
        console.log(new Error(err));
    }
}

const search = document.querySelector('.search-field');
const searchBtn = document.querySelector('.search-btn');
const toggleBtn = document.querySelector('.toggle');
let toggle = 'c';

searchBtn.addEventListener('click', async () => {
    const weather = getWeatherInfo(search.value);
    const getData = weather.then(data => processData(data));
    const dataObj = await getData;
    displayData(dataObj, toggle);
});

toggleBtn.addEventListener('click', () => {
    if (toggle === 'c') {
        toggle = 'f';
        toggleBtn.setAttribute('class', 'toggle f');
        toggleBtn.innerHTML = 'F';
    } else {
        toggle = 'c';
        toggleBtn.setAttribute('class', 'toggle c');
        toggleBtn.innerHTML = '°C';
    }
});

const initialize = (async function () {
    const weather = getWeatherInfo('London');
    const getData = weather.then(data => processData(data));
    const dataObj = await getData;
    displayData(dataObj, toggle);
})();
