export default function processData(data) {
    console.log(data);
    const country = data.location.country;
    const city = data.location.name;
    const region = data.location.region;

    const tempC = data.current.temp_c;
    const tempF = data.current.temp_f;
    const feelslikeC = data.current.feelslike_c;
    const feelslikeF = data.current.feelslike_f;

    const humidity = data.current.humidity;

    const condition = data.current.condition.text;

    return {country, city, region, tempC, tempF, feelslikeC, feelslikeF, humidity, condition};
}