const baseURL = 'https://api.openaq.org/v1/cities'
let url;

// const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form')
const submitBtn = document.querySelector('.submit');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

nav.style.display = 'none';

searchForm.addEventListener('click', fetchResults);


function fetchResults(e) {
    // console.log(e);
    e.preventDefault();
    // url = `${baseURL}?${searchTerm.value}`;
    console.log('URL:', baseURL);
    // console.log('URL');

    fetch(baseURL)//THIS IS THE PROMISE
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            displayResults(json);
        })
    }
    
    function displayResults(json) {
        
        
        // console.log('Display Results', json);
        // console.log(json.response.docs);
        // console.log(json.results[0].city)
        //console.log(json.results[0].country)
        let results = json.results
        //console.log(results)
        for (var e = 0 ; e < results.length; e++){

            
            console.log(results[e])
            
            
            
            function getRandomInt() {
                return Math.floor((Math.random() * 100) + 1);
            }
            getRandomInt()
            
            let x = getRandomInt();
            console.log(x);
            
    
    } 
 }


    ///for loop


    
        // while (section.firstChild) {
        //     section.removeChild(section.firstChild);
        // }
    
        //let articles = json.responce.docs;
        
        // console.log(articles);
    

        //if (articles.length === 0) {
            //console.log('No results');
        //} else {
            // for (let i = 0; i < ; i++) {
            //     //console.log(i);
            //     let article = document.createElement('article');
            //     let heading = document.createElement('h2');
            //     let link = document.createElement('a');
            //     let img = document.createElement('img');
            //     let para = document.createElement('p');
            //     let clearfix = document.createElement('div');
    
            //     let current = articles[i];
            //     console.log('Current:', current);
    
            //     link.href = current.web_baseurl;
            //     link.textContent = current.headline.main;
    
            //     para.textContent = 'Keywords: ';
    
    
            //     for (let j = 0; j < current.keywords.length; j++) {  //
            //         let span = document.createElement('span');
            //         span.textContent += current.keywords[j].value + ' ';
            //         para.appendChild(span);
            //     }
    
            //     if (current.multimedia.length > 0) {
            //         img.src = 'http://www.api.openaq.org/v1/cities.com/' + current.multimedia[0].url;
            //         img.alt = current.headline.main;
            //     }
    
            //     clearfix.setAttribute('class', 'clearfix');
    
            //     article.appendChild(heading);
            //     heading.appendChild(link);
            //     article.appendChild(img);
            //     article.appendChild(para);
            //     article.appendChild(clearfix);
            //     section.appendChild(article);
            // }
        //}
    
        //if (articles.length === 10) {
            //nav.style.display = 'block';
        //} else {
//nav.style.display = 'none';
        //}
    
