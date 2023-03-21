import { fetchGallery } from "./js/fetchGallery";

console.log(fetchGallery());

const refs = {
    form: document.getElementById('search-form'),
    input: document.querySelector('[type="text"]'),

};


refs.input.addEventListener('input', inputHandler);
console.log(refs.form);

async function inputHandler(event) {
    event.preventDefault();
    searchQuery = event.currentTarget.searchQuery.value;
    currentPage = 1;

    if (searchQuery === '') {
        return;
    }
}

