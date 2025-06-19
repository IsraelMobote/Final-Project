import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

// this is the function that contains the code that creates the News Cards in the news-list page 
// it also renders the news cards in the desired parent Element.

function getNewsCardTemplate(newsItem) {


    return `<a href="${newsItem.url}" target="_blank"><div class="news-card">
            <img src="${newsItem.image}" alt="image showing ${newsItem.title}">
            <h2>${newsItem.title}</h2>
            <p>${newsItem.description}</p>
        </div></a>`;
}

export default class NewsCard {

    RenderNewsCards(parentElement) {
        const newsList = getLocalStorage("NewsDataList");
        renderListWithTemplate(getNewsCardTemplate, parentElement, newsList);
    }
}