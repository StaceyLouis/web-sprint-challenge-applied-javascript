// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    let dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = 'March 28, 2020';

    let title = document.createElement('h1');
    title.textContent="Lambda Times";

    dateSpan.appendChild(title);

    let tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent="98";

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(tempSpan);

    return headerDiv;
}

let header = Header();
 let headerContainer = document.querySelector('.header-container');

 headerContainer.appendChild(header);
