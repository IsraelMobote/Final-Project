import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";


function getNewsCardTemplate(newsItem) {


    return `<a href="${newsItem.url}" target="_blank"><div class="news-card">
            <img src="${newsItem.image}" alt="image showing ${newsItem.title}">
            <h2>${newsItem.title}</h2>
            <p>${newsItem.description}</p>
        </div></a>`;
}

const newsList = getLocalStorage("NewsDataList");

export default class NewsCard {
    constructor() {
        this.newsList = newsList;
    }

    RenderNewsCards(parentElement) {
        renderListWithTemplate(getNewsCardTemplate, parentElement, this.newsList);
    }
}