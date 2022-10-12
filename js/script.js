import myJson from "../js/film.json" assert { type: "json" };

import myJson2 from "../js/utenti.json" assert { type: "json" };

let filmParse = JSON.parse(film);
let utentiParse = JSON.parse(utenti);
let arrayParseMix = filmParse.concat(utentiParse);

function showAllFilms() {
  let display = document.getElementById("display-view");
  display.innerHTML = "";
  for (let film of filmParse) {
    display.innerHTML += `<ol><li> ${film.title}</li><li> ${film.anno}</li></ol>`;
  }
}

function showAllUtenti() {
  let display = document.getElementById("display-view");
  display.innerHTML = "";
  for (let utente of utentiParse) {
    display.innerHTML += `<ol><li> ${utente.name}</li><li> ${utente.email}</li></ol>`;
  }
}

function showSearch() {
  let searchInputValue = document.getElementById("search-input").value;

  let searchId = arrayParseMix.find((item) => item.id === searchInputValue);
  let searchTitle = arrayParseMix.find((item) => item.title === searchInputValue);
  let searchName = arrayParseMix.find((item) => item.name === searchInputValue);
  let searchYear = arrayParseMix.find((item) => item.anno === searchInputValue);

  let display = document.getElementById("display-view");
  display.innerHTML = "";
  for (let index of arrayParseMix) {
    if (searchId) {
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.name}</li><li> ${index.email}</li></ol>`;
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.tilte}</li><li> ${index.anno}</li></ol>`;
    } else if (searchName) {
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.name}</li><li> ${index.email}</li></ol>`;
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.tilte}</li><li> ${index.anno}</li></ol>`;
    } else if (searchId) {
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.name}</li><li> ${index.email}</li></ol>`;
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.tilte}</li><li> ${index.anno}</li></ol>`;
    } else if (searchTitle) {
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.name}</li><li> ${index.email}</li></ol>`;
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.tilte}</li><li> ${index.anno}</li></ol>`;
    } else if (searchYear) {
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.name}</li><li> ${index.email}</li></ol>`;
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.tilte}</li><li> ${index.anno}</li></ol>`;
    } else {
      display.innerHTML += `<ol><li>NESSUNA CORRISPONDENZA</li></ol>`;
    }
  }
}
