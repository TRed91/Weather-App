import './style.css';
import processData from './processData';
import processForecastData from './processForecastData';
import displayData from './displayData';

async function getWeatherInfo(location) {

    try {
        const fetchData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8172e47f317945cfa99140930240606&q=${location}&days=3`, 
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

searchBtn.addEventListener('click', async () => {
    const weather = getWeatherInfo(search.value);
    const getData = weather.then(data => processData(data));
    const dataObj = await getData;
    displayData(dataObj);
});
