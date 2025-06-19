
import NewsCard from "./newsCard.mjs";
import externalServices from "./externalServices.mjs";
import { getLocalStorage, getParam, returnToIndexPage } from "./utils.mjs";

const header = document.querySelector("#main-header");
header.innerHTML = getLocalStorage("header");

const footer = document.querySelector("#main-footer");
footer.innerHTML = getLocalStorage("footer");

const logo = document.querySelector('.logo');
returnToIndexPage(logo);

const form = document.querySelector("form");
const inputValue = document.querySelector("#searchParameter");
const label = document.querySelector("label");

const newsCardsDiv = document.querySelector(".newsCards");

const services = new externalServices();
const newsCard = new NewsCard();



form.addEventListener("submit", (element) => {
    element.preventDefault();
    newsCardsDiv.innerHTML = `<span>loading....</span>`;

    if (countries.includes(formQuery)) {
        loadNews(inputValue.value, formQuery);
    }
    else {
        loadNewsWithQuery(inputValue.value);
    }
})


export const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "South Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen"]


const formQuery = getParam("query");

if (formQuery) {
    if (formQuery == "country") {
        loadNewsWIthUserCountry();

        inputValue.addEventListener("input", () => {
            label.classList.add("active");
        })
    }
    else {
        loadNewsWithQuery(formQuery);

        inputValue.addEventListener("input", () => {
            label.classList.add("active");
        })

    }
}

// this function load news with the query and country parameter
// it calls the getCountryNewsList function and gives it the parameters

async function loadNews(query, country) {
    await services.getCountryNewsList(query, country);
    newsCard.RenderNewsCards(newsCardsDiv);
}

// this function load news with a query parameter
// it calls the getNewsDataList function and gives it the query parameter.

async function loadNewsWithQuery(query) {
    await services.getNewsDataList(query);
    newsCard.RenderNewsCards(newsCardsDiv);
}

// this function gets the user country from the getUserCountry function and
// then uses the loadNewsWithQuery function to load the news cards with the country parameter as query.

async function loadNewsWIthUserCountry() {
    const country = await services.getUserCountry();
    loadNewsWithQuery(country);
}