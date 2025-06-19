
import externalServices from "./externalServices.mjs";
import { loadHeaderFooter } from "./HeaderAndFooter.mjs";
import { countries } from "./newsList.mjs";

// this is the function that is connected with the home page 
// and calls the other functions required by the home page

const services = new externalServices();

const header = document.querySelector("#main-header");
const footer = document.querySelector("#main-footer");

loadHeaderFooter(header, footer);

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