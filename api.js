const baseURL = 'https://api.openaq.org/v1/cities'
let url;

const searchTerm = document.querySelector('.search');

const submitBtn = document.querySelector('.submit');

nav.style.display = 'none';

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    // console.log(e);
    e.preventDefault();
    url = baseURL;
    console.log('URL');

    fetch(url)//THIS IS THE PROMISE
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            displayResults(json);
        })

