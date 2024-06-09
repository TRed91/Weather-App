export default async function getImage(condition, image) {

    try {
        const fetchImg = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=wk0WTpjiR7jByDAYRu0ROeqxBrecAdu9&s=${condition}`,
            { mode: 'cors'}
        );

        const imageData = await fetchImg.json();
        
        image.src = imageData.data.images.original.url;

    } catch (err) {
        console.log(new Error(err));
    }
}
