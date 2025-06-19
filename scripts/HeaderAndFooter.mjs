import { setLocalStorage } from "./utils.mjs";

function getHeader() {
  return `<img class="logo" src="images/news.png" alt="news icon" />
      <div>
        <p>Cluster News</p>
        <p class="italic">News at your finger tips</p>
      </div>`;
}

function getFooter() {
  return `<p>©Israel Silas Mobote | 2025 | WDD 330</p>
   <div>
        <p>References</p>
        <a
          href="https://www.freepik.com/free-photo/side-view-smiley-people-taking-selfie_28586237.htm"
          >Image by freepik</a
        >
        <a
          href="https://www.freepik.com/free-vector/global-news-update-illustration_416324643.htm"
          >Image by brgfx on Freepik</a
        >
        <a
          href="https://www.freepik.com/free-photo/hands-waving-flags-china-germany-india-south-africa-russia_2979572.htm"
          >Image by rawpixel.com on Freepik</a
        >
      </div>`;
}

export async function setHeaderFooter(destinationHeader, destinationFooter) {

  // this function gets the header and footer template from the getHeader and getFooter function 
  // it then sets the innerHTML of the header and footer element in the html to the values of the templates.

  setLocalStorage("header", getHeader());
  setLocalStorage("footer", getFooter());
}