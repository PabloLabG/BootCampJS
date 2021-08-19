import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

window.onload = function () {
  DataBusiness.GetCharacters().then((data) => {
    let dvRoot = document.getElementById("root");
    dvRoot.innerHTML = "";
    for (const character of data) {
      var dvCharacter = Utils.createCharacterRow(character);

      dvCharacter.addEventListener("click", () => {
        DataBusiness.GetCharacter(character.char_id)
          .then((details) => {
            Utils.showCharacter(details[0]);
          })
          .then(() => {
            DataBusiness.GetQuotesByAuthor(character.name).then((quotes) => {
              console.log(quotes);
              Utils.addCharacterQuotes(quotes);
            });
          });
      });

      dvRoot.appendChild(dvCharacter);
    }
  });
};
