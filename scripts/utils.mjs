// this module contain the utility functions used by the other modules.

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  const htmlStrings = list.map(templateFn);
  if (clear = true) {
    parentElement.innerHTML = '';
  }
  parentElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
}


export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get(param);

}

export function returnToIndexPage(htmlElement) {
  htmlElement.addEventListener("click", () => {
    window.location.href = "index.html";
  })
}
