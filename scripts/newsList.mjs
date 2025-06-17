import { loadHeaderFooter } from "./HeaderAndFooter.mjs";
import NewsCard from "./newsCard.mjs";

const newsCardsDiv = document.querySelector(".newsCards");

const newsCard = new NewsCard();

newsCard.RenderNewsCards(newsCardsDiv);

const header = document.querySelector("#main-header");
const footer = document.querySelector("#main-footer");

loadHeaderFooter(header, footer);
