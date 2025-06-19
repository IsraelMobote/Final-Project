
import externalServices from "./externalServices.mjs";
import { setHeaderFooter } from "./HeaderAndFooter.mjs";
import { countries } from "./newsList.mjs";
import { getLocalStorage, returnToIndexPage } from "./utils.mjs";

// this is the function that is connected with the home page 
// and calls the other functions required by the home page

const services = new externalServices();

setHeaderFooter();

const header = document.querySelector("#main-header");
header.innerHTML = getLocalStorage("header");

const footer = document.querySelector("#main-footer");
footer.innerHTML = getLocalStorage("footer");

if (getLocalStorage("header")) {
    const logo = document.querySelector('.logo');
    returnToIndexPage(logo);
}

const heroImage = document.querySelector(".heroImage");

heroImage.addEventListener("click", () => {
    heroImage.classList.add("animate");
    setTimeout(() => {
        heroImage.classList.remove("animate");
    }, 4000);
})

// code that inputs the countries as options for the select element in the home page form

function addOptionsToSelectElement(element, optionList) {
    optionList.forEach(optionText => {
        const optionElement = document.createElement("option");
        optionElement.textContent = optionText;
        element.append(optionElement);
    });
}

const selectElement = document.querySelector("#countrySelector");
addOptionsToSelectElement(selectElement, countries);

const selectorForm = document.querySelector("form");
selectorForm.addEventListener("submit", (element) => {
    element.preventDefault();
    window.location.href = `news-list.html?query=${selectElement.value}`
});