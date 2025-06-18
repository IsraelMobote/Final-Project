
import externalServices from "./externalServices.mjs";
import { loadHeaderFooter } from "./HeaderAndFooter.mjs";
import { countries } from "./newsList.mjs";

const services = new externalServices();

//services.getNewsDataList("baseball");
//services.getCountryNewsList("baseball");


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