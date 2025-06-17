function getHeader() {
    return ` <img src="images/news.png" alt="news icon" />
      <div>
        <p>Cluster News</p>
        <p class="italic">News at your finger tips</p>
      </div>`;
}

function getFooter() {
    return `<p>©Finix Digital Ventures | 2025 | WDD 330</p>`;
}

export function loadHeaderFooter(destinationHeader, destinationFooter) {
    destinationHeader.innerHTML = getHeader();
    destinationFooter.innerHTML = getFooter();
}