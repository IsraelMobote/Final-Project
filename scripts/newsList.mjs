import { loadHeaderFooter } from "./HeaderAndFooter.mjs";
import NewsCard from "./newsCard.mjs";
import externalServices from "./externalServices.mjs";

const header = document.querySelector("#main-header");
const footer = document.querySelector("#main-footer");

loadHeaderFooter(header, footer);

const form = document.querySelector("form");
const inputValue = document.querySelector("input");

const newsCardsDiv = document.querySelector(".newsCards");

const services = new externalServices();
const newsCard = new NewsCard();

form.addEventListener("submit", (element) => {
    element.preventDefault();
    newsCardsDiv.innerHTML = `<span>loading....</span>`;
    UseInput();
})

async function UseInput() {
    //await services.getNewsDataList(inputValue.value);
    newsCard.RenderNewsCards(newsCardsDiv);
}