import sunny from './images/clouds-1117584_1920.jpg';
import partlyCloudy from './images/clouds-7776860_1920.jpg';
import cloudy from './images/clouds-8029036_1920.jpg';
import overcast from './images/clouds-7849967_1920.jpg';
import fog from './images/forest-7023487_1920.jpg';
import rain from './images/raindrops-3216607_1920.jpg';
import snow from './images/trees-1861704_1920.jpg';
import hail from './images/hailstones-123044_1920.jpg';

export default async function getImage(condition, code ,image, body, credit) {

    /* try {
        const fetchImg = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=wk0WTpjiR7jByDAYRu0ROeqxBrecAdu9&s=${condition}`,
            { mode: 'cors'}
        );

        const imageData = await fetchImg.json();
        console.log(imageData);
        
        image.src = imageData.data.images.original.url;

    } catch (err) {
        console.log(new Error(err));
    } */

    switch (code) {
        case 1000:
            image.src = sunny;
            body.style.background = `url(${sunny})`;
            credit.innerHTML = 'Image by Hans from Pixabay';
            break;
        case 1003:
            image.src = partlyCloudy;
            body.style.background = `url(${partlyCloudy})`;
            credit.innerHTML = 'Image by Enrique from Pixabay';
            break;
        case 1006:
        case 1087:
            image.src = cloudy;
            body.style.background = `url(${cloudy})`;
            credit.innerHTML = 'Image by Enrique from Pixabay';
            break;
        case 1009:
            image.src = overcast
            body.style.background = `url(${overcast})`;
            credit.innerHTML = 'Image by Enrique from Pixabay';
            break;
        case 1030:
        case 1135:
        case 1147:
            image.src = fog;
            body.style.background = `url(${fog})`;
            credit.innerHTML = 'Image by Joe from Pixabay';
            break;
        case 1063:
        case 1069:
        case 1072:
        case 1150:
        case 1153:
        case 1168:
        case 1171:
        case 1180:
        case 1183:
        case 1186:
        case 1189:
        case 1192:
        case 1195:
        case 1198:
        case 1201:
        case 1204:
        case 1207:
        case 1240:
        case 1243:
        case 1246:
        case 1249:
        case 1252:
        case 1273:
        case 1276: // rain
            image.src = rain;
            body.style.background = `url(${rain})`;
            credit.innerHTML = 'Image by 준원 서 from Pixabay';
            break;
        case 1066:
        case 1114:
        case 1117:
        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
        case 1255:
        case 1258:
        case 1279:
        case 1282:
            image.src = snow;
            body.style.background = `url(${snow})`;
            credit.innerHTML = 'Image by Anja from Pixabay';
            break;
        case 1237:
        case 1261:
        case 1264:
            image.src = hail;
            body.style.background = `url(${hail})`;
            credit.innerHTML = 'Image by Hans from Pixabay';
            break;
    }
}
