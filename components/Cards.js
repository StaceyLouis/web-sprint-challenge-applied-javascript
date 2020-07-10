// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const articles = ' https://lambda-times-backend.herokuapp.com/articles';
let containerCards = document.querySelector('.cards-container');
axios
.get(articles)
.then(res => { 
 console.log(res)
 /*
 let javaInfo = res.data.articles.javascript;
 console.log(javaInfo);
 let bootInfo = res.data.articles.bootstrap;
 console.log(bootInfo);
 let queryInfo = res.data.articles.jquery;
 console.log(queryInfo);
 let nodeInfo= res.data.articles.node;
 let techInfo =res.data.articles.technology;
 let cardInfo = {javaInfo, bootInfo, queryInfo, nodeInfo, techInfo};
 console.log(cardInfo);

 cardInfo.forEach(cardFunction(res));
 */
Object.keys(res.data.articles).javascript.forEach(element => {
  containerCards.appendChild(cardFunction(element))
});
Object.keys(res.data.articles.bootstrap).forEach(element => {
   containerCards.appendChild(cardFunction(element))
});
Object.keys(res.data.articles.node).forEach(element => {
  containerCards.appendChild(cardFunction(element))
});
Object.keys(res.data.articles.jquery).forEach(element => {
  containerCards.appendChild(cardFunction(element))
});
Object.keys(res.data.articles.technology).forEach(element => {
  containerCards.appendChild(cardFunction(element))
});

  
})
.catch( err => {
  console.log(err)
});

function cardFunction (arg){
    let cardDiv = document.createElement('div');
    let headlineAr = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');

    img.setAttribute('src', arg.authorPhoto);
    
    
    cardDiv.classList.add("card");
    headlineAr.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    headlineAr.textContent = arg.headline;
    span.textContent = arg.authorName;

   imgContainer.appendChild(img);
   author.appendChild(imgContainer);
    author.appendChild(span);
    headlineAr.appendChild(author);
    cardDiv.appendChild(headlineAr);

   

    cardDiv.addEventListener('click', () => {
    console.log(headlineAr);
})

return cardDiv;
}


