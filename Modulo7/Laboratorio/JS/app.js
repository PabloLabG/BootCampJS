// VALIDAR IBAN
//let patternIBAN = /^(([A-Z]{2})(\d{22}))|(([A-Z]{2}\d{2}(\s\d{4}){4})\s{1}\d{4})$/i;
let patternIBAN =
  /^(([A-Z]{2}\d{2})(\d{20}))|((([A-Z]{2}\d{2})(\s\d{4}){4})\s{1}\d{4})$/i;
let values = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];

values.forEach((value) => {
  console.log(value + " --> ", patternIBAN.test(value));
  console.log(value + " --> ", patternIBAN.exec(value));
});

// VALIDAR MATRICULA
let patternMATRICULA = /(\d{4})(\s|\-)?([A-Z]{3})/i;
let matriculas = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

console.log("...MATRICULAS...");
for (const value of matriculas) {
  console.log(value + " --> ", patternMATRICULA.test(value));
  console.log(value + " --> ", patternMATRICULA.exec(value));
}

// OPCIONALES
let imgCaso1 = `<img
src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
/>`;

let imgCaso2 = `<html>
<body>
  <img
    src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
  />
  <h1>ejemplo</h1>
  <img
    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  />
</body>
</html>`;

let patternIMG = /<img(?:\n*|\s*)src="(.*)"(?:\n*|\s*)\/>+/gim;

console.log("BUSCAR SRC en: ", imgCaso1);
console.log(patternIMG.exec(imgCaso1));

console.log("BUSCAR SRC en: ", imgCaso2);
console.log(imgCaso2.match(patternIMG));
