import axios from "axios";

export { fetchGallery };
    
async function fetchGallery(value, page) {
    const API_KEY = '34605332-ac4c6409a0938f3b9e2abd986';
    const baseUrl = 'https://pixabay.com/api/';

    const request = await `${baseUrl}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=10&page=${page}`;

    // return await axios.get(request).then(response => response.data);
    
    const users = await axios.get(request)
        .then(response => response.data)
        .catch(error => console.log(error));
    
    return users;              
}   
       
//-----------------------
//     async function fetchGallery(value, page) {
//     const url = 'https://pixabay.com/api/'
//     const key = '33561332-204c009419fc383d7a66a3298';
//     const filter = `?key=${key}&q=${value}$&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
//     return await axios.get(`${url}${filter}`).then(response => response.data);
// }


//-----------------------------
// function fetchGallery() {
//     const API_KEY = '34605332-ac4c6409a0938f3b9e2abd986';

//     const baseUrl = "https://pixabay.com/api/";

//         return fetch(
//         `${baseUrl}?key=${API_KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=10&page=1`)
//         .then(response => response.json())
//         // .then(cat => console.log(cat))
//         .catch(error => console.log(error));
        
//     }    
    
    
    // const properties = ['webformatURL', 'largeImageURL', 'tags', 'likes', 'views', 'comments', 'downloads'];