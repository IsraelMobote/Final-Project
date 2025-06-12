import { setLocalStorage } from "./utils.mjs";

export default class externalServices {
  async getIP() {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();

    return data.ip;
  }

  async getUserCountry() {
    const ipAddress = await getIP();

    console.log(ipAddress);
    const response = await fetch(
      `http://api.ipstack.com/${ipAddress}?access_key=c2d7f743114fd0855e65edb1a9dba54b`
    );
    const data = await response.json();

    console.log(data);

    const country = data.country_name;

    return country;
  }

  async getNewsDataList(keyWord) {
    let newsDataList = [];

    const apikey = "94bd51585113b97657c2f9ab892b5f51";
    const url =
      `https://gnews.io/api/v4/search?q=${keyWord}&lang=en&apikey=` + apikey;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.articles);

    data.articles.forEach(element => {
      newsDataList.push(element);
    });

    console.log(newsDataList);
    setLocalStorage("NewsDataList", newsDataList)

    return newsDataList;
  }

  async getCountryNewsList(query) {
    let newsDataList = [];

    //  country = await getUserCountry();
    let country = "nigeria";

    const keyWord = `${country} ${query}`;

    const apikey = "94bd51585113b97657c2f9ab892b5f51";
    const url =
      `https://gnews.io/api/v4/search?q=${keyWord}&lang=en&apikey=` + apikey;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    data.articles.forEach(element => {
      newsDataList.push(element);
    });

    console.log(newsDataList);
    setLocalStorage("CountryNewsList", newsDataList)

    return newsDataList;
  }
}
