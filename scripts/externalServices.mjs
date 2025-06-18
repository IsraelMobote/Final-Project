import { setLocalStorage } from "./utils.mjs";

export default class externalServices {
  async getIP() {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();

    return data.ip;
  }

  async getUserCountry() {
    const ipAddress = await this.getIP();

    console.log(ipAddress);
    const response = await fetch(
      `http://api.ipstack.com/${ipAddress}?access_key=709123c461c485e1dffb03444d9c65be`
    );
    const data = await response.json();

    console.log(data);

    const country = data.country_name;
    console.log(country);

    return country;
  }

  async getNewsDataList(keyWord) {
    let newsDataList = [];

    const apikey = "94bd51585113b97657c2f9ab892b5f51";
    const url =
      `https://gnews.io/api/v4/search?q=${keyWord}&lang=en&apikey=` + apikey;
    const response = await fetch(url);
    const data = await response.json();

    data.articles.forEach(element => {
      newsDataList.push(element);
    });

    console.log(newsDataList);
    setLocalStorage("NewsDataList", newsDataList)

    return newsDataList;
  }

  async getCountryNewsList(query, country) {
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
