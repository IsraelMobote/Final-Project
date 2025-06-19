function getHeader() {
  return `<a href="index.html"><img src="images/news.png" alt="news icon" /></a>
      <div>
        <p>Cluster News</p>
        <p class="italic">News at your finger tips</p>
      </div>`;
}

function getFooter() {
  return `<p>©Finix Digital Ventures | 2025 | WDD 330</p>`;
}

export function loadHeaderFooter(destinationHeader, destinationFooter) {

  // this function gets the header and footer template from the getHeader and getFooter function 
  // it then sets the innerHTML of the header and footer element in the html to the values of the templates.

  destinationHeader.innerHTML = getHeader();
  destinationFooter.innerHTML = getFooter();
}