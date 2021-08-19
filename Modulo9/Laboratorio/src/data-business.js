import axios from "axios";

function GetCharacters() {
  var idCharacter = 1;
  return fetch("https://www.breakingbadapi.com/api/characters").then(
    (respose) => {
      if (respose.ok) {
        return respose.json();
      }

      console.log(respose.statusText);
      return null;
    }
  );
}

function GetCharacter(idCharacter) {
  return fetch(
    `https://www.breakingbadapi.com/api/characters/${idCharacter}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    console.log(respose.statusText);
    return null;
  });
}

function GetQuotesByAuthor(author) {
  //console.log("https://breakingbadapi.com/api/quote?author=" + author);

  return axios
    .get(`https://breakingbadapi.com/api/quote?author=${author}`)
    .then((response) => {
      return response.data;
    });
}

export { GetCharacters, GetCharacter, GetQuotesByAuthor };
