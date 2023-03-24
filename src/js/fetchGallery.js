import axios from 'axios';

export { fetchGallery };

async function fetchGallery(value, page) {
    const API_KEY = '34605332-ac4c6409a0938f3b9e2abd986';
    const baseUrl = 'https://pixabay.com/api/';

    const request = await `${baseUrl}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20&page=${page}`;
    
    return await axios.get(request)
        .then(response => response.data)
        .catch(error => console.log(error));            
}   
     
//-----------------------  
// async function fetchGallery(value, page) {
//     const API_KEY = '34605332-ac4c6409a0938f3b9e2abd986';
//     const baseUrl = 'https://pixabay.com/api/';

//     return fetch(
//         `${baseUrl}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=10&${page}`)
//         .then(response => response.json())
//         // .then(cat => console.log(cat))
//         .catch(error => console.log(error));                 
// }  


