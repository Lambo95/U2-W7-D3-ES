// onload = function () {
//   setInterval(second, 1000);
// };

// function second() {
//   for (let i = 0; i < 1000000; i++) {
//     document.getElementById("time").innerHTML += i;
//   }
// }

// import myJson from "../js/film.json" assert { type: "json" };

let films = `[
    {
      "id": 1,
      "title": "Le iene",
      "anno": "1992",
      "regista": "Quentin Tarantino",
      "link": "/assets/media/img7-li.jpg"
    },
    {
      "id": 2,
      "title": "Pulp Fiction ",
      "anno": "1994",
      "regista": "Quentin Tarantino",
      "link": "https://it.wikipedia.org/wiki/Pulp_Fiction"
    },
    {
      "id": 3,
      "title": "Jackie Brown ",
      "anno": "1997",
      "regista": "Quentin Tarantino",
      "link": "https://it.wikipedia.org/wiki/Jackie_Brown"
    },
    {
      "id": 4,
      "title": "Kill Bill: Volume 1 - 2",
      "anno": "2003 - 2004",
      "regista": "Quentin Tarantino",
      "link": "https://it.wikipedia.org/wiki/Kill_Bill:_Volume_1"
    },
    {
      "id": 5,
      "title": "Grindhouse - A prova di morte",
      "anno": "2007",
      "regista": "Quentin Tarantino",
      "link": "https://it.wikipedia.org/wiki/Grindhouse_-_A_prova_di_morte"
    },
    {
      "id": 6,
      "title": "Bastardi senza gloria",
      "anno": "2009",
      "regista": "Quentin Tarantino",
      "link": "https://it.wikipedia.org/wiki/Bastardi_senza_gloria"
    },
    {
      "id": 7,
      "title": "Django Unchained",
      "anno": "2012",
      "regista": "Quentin Tarantino",
      "link": "https://it.wikipedia.org/wiki/Django_Unchained"
    },
    {
      "id": 8,
      "title": "The Hateful Eight ",
      "anno": "2015",
      "regista": "Quentin Tarantino",
      "link": "https://it.wikipedia.org/wiki/The_Hateful_Eight"
    },
    {
      "id": 9,
      "title": "C'era una volta a... Hollywood",
      "anno": "2019",
      "regista": "Quentin Tarantino",
      "link": "https://it.wikipedia.org/wiki/C%27era_una_volta_a..._Hollywood"
    },
    {
      "id": 10,
      "title": "Io e Annie",
      "anno": "1977",
      "regista": "Woody Allen",
      "link": "https://it.wikipedia.org/wiki/Io_e_Annie"
    },
    {
      "id": 11,
      "title": "Zelig",
      "anno": "1983",
      "regista": "Woody Allen",
      "link": "https://it.wikipedia.org/wiki/Zelig_(film)"
    },
    {
      "id": 12,
      "title": "Radio Days",
      "anno": "1987",
      "regista": "Woody Allen",
      "link": "https://it.wikipedia.org/wiki/Radio_Days"
    },
    {
      "id": 13,
      "title": "Harry a pezzi",
      "anno": "1997",
      "regista": "Woody Allen",
      "link": "https://it.wikipedia.org/wiki/Harry_a_pezzi"
    },
    {
      "id": 14,
      "title": "Vicky Cristina Barcelona",
      "anno": "2008",
      "regista": "Woody Allen",
      "link": "https://it.wikipedia.org/wiki/Vicky_Cristina_Barcelona"
    },
    {
      "id": 15,
      "title": "Midnight in Paris",
      "anno": "2011",
      "regista": "Woody Allen",
      "link": "https://it.wikipedia.org/wiki/Midnight_in_Paris"
    }
  ]`;

// import myJson2 from "../js/utenti.json" assert { type: "json" };
let utenti = `[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": "Romaguera-Crona"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": "Deckow-Crist"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": "Romaguera-Jacobson"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": "Robel-Corkery"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": "Keebler LLC"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": "Considine-Lockman"
    }
  ]`;

let filmParse = JSON.parse(films);
let utentiParse = JSON.parse(utenti);
let arrayParseMix = [];
arrayParseMix.concat(utentiParse.concat(filmParse));

function showAllFilms() {
  let display = document.getElementById("display-view");
  display.innerHTML = "";
  //   for (let film of films) {
  //     display.innerHTML += `<ol><li> ${film.title}</li><li> ${film.anno}</li></ol>`;
  //   }
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
  let searchId = arrayParseMix.filter((item) => item.id.toLowerCase().includes(searchInputValue));
  let searchTitle = arrayParseMix.find((item) => item.title.toLowerCase().includes(searchInputValue));
  let searchName = arrayParseMix.find((item) => item.name.toLowerCase().includes(searchInputValue));
  let searchYear = arrayParseMix.find((item) => item.anno.toLowerCase().includes(searchInputValue));
  let display = document.getElementById("display-view");
  display.innerHTML = "";
  for (let index of arrayParseMix) {
    if (searchId) {
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.name}</li><li> ${index.email}</li></ol>`;
      display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.tilte}</li><li> ${index.anno}</li></ol>`;
    } else if (searchName) {
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
  //   for (let index of arrayParseMix) {
  //     if (searchId === searchInputValue) {
  //       display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.name}</li><li> ${index.email}</li></ol>`;
  //       display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.tilte}</li><li> ${index.anno}</li></ol>`;
  //     } else if (searchName === searchInputValue) {
  //       display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.name}</li><li> ${index.email}</li></ol>`;
  //       display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.tilte}</li><li> ${index.anno}</li></ol>`;
  //     } else if (searchTitle === searchInputValue) {
  //       display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.name}</li><li> ${index.email}</li></ol>`;
  //       display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.tilte}</li><li> ${index.anno}</li></ol>`;
  //     } else if (searchYear === searchInputValue) {
  //       display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.name}</li><li> ${index.email}</li></ol>`;
  //       display.innerHTML += `<ol><li> ${index.id}</li><li> ${index.tilte}</li><li> ${index.anno}</li></ol>`;
  //     } else {
  //       display.innerHTML += `<ol><li>NESSUNA CORRISPONDENZA</li></ol>`;
  //     }
  //   }
}
