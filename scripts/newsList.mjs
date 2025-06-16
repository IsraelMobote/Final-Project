import NewsCard from "./newsCard.mjs";

const newsCardsDiv = document.querySelector(".newsCards");

const newsCard = new NewsCard();

newsCard.RenderNewsCards(newsCardsDiv);
