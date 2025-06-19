import { setLocalStorage } from "./utils.mjs";

export default class externalServices {
  async getIP() {

    // this function gets the ip address of the user, it does not accept any value.

    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();

    return data.ip;
  }

  async getUserCountry() {

    // this is the function to get the user country, it calls the getIP api to get the user's
    // ip address and then uses the ip address to find the user's country data

    const ipAddress = await this.getIP();

    const response = await fetch(
      `https://api.ipstack.com/${ipAddress}?access_key=709123c461c485e1dffb03444d9c65be`
    );
    const data = await response.json();

    const country = data.country_name;

    return country;
  }

  async getNewsDataList(keyWord) {

    // this function uses an api to get news. It uses a string as a query parameter to get the news.
    // it then stores the data gotten in a list and store the list in local storage.

    let newsDataList = [];

    const apikey = "94bd51585113b97657c2f9ab892b5f51";
    const url =
      `https://gnews.io/api/v4/search?q=${keyWord}&lang=en&apikey=` + apikey;
    const response = await fetch(url);
    const data = await response.json();

    data.articles.forEach(element => {
      newsDataList.push(element);
    });

    setLocalStorage("NewsDataList", newsDataList)

    return newsDataList;
  }

  async getCountryNewsList(query, country) {

    // this function gets the news data from an api and accepts two values for the query parameter of the api. The two values are the original query and the user country.
    // it then stores the data gotten in a list and then stores the list to local storage.

    let newsDataList = [];

    const keyWord = `${country} ${query}`;

    const apikey = "94bd51585113b97657c2f9ab892b5f51";
    const url =
      `https://gnews.io/api/v4/search?q=${keyWord}&lang=en&apikey=` + apikey;
    const response = await fetch(url);
    const data = await response.json();

    data.articles.forEach(element => {
      newsDataList.push(element);
    });

    setLocalStorage("NewsDataList", newsDataList)

    return newsDataList;
  }
}
