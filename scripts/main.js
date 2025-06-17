
import externalServices from "./externalServices.mjs";
import { loadHeaderFooter } from "./HeaderAndFooter.mjs";

const services = new externalServices();

//services.getNewsDataList("baseball");
//services.getCountryNewsList("baseball");


const header = document.querySelector("#main-header");
const footer = document.querySelector("#main-footer");

loadHeaderFooter(header, footer);
