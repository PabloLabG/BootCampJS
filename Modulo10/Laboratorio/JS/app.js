const K_USER = {
  id: 1,
  first_name: "Yettie",
  last_name: "Duigan",
  email: "yduigan0@tiny.cc",
  gender: "Non-binary",
  ip_address: "7.30.254.117",
};

/*  Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una
    propiedad llamada id (debe devolver booleano true / false ).
    TIP: No accedas a 'id' con punto (.) o con corchetes ([]).
*/
console.log("hasId");
const hasId = ({ id }) => id !== null && id !== undefined;

console.log(K_USER);
console.log("¿Tengo propiedad ID?", hasId(K_USER));

/*  Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
    TIP: No utilices el corchete ([]) para acceder a la posición 0.
*/
const K_ELEMENTS = [11, 22, 33, 44];

console.log("head");
const head = ([firstElement]) => firstElement;
console.log(K_ELEMENTS);
console.log(head(K_ELEMENTS));

/*  Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los
    elementos menos el primero.
    TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
*/
console.log("tail");

const tail = ([, ...restElements]) => restElements;
console.log(K_ELEMENTS);
console.log(tail(K_ELEMENTS));

/*  Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el
    primer elemento ha sido colocado en la última posición.
    TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
*/
console.log("swapFirstToLast");
const swapFirstToLast = ([firstElement, ...restElements]) => {
  restElements.push(firstElement);
  return restElements;
};
console.log(K_ELEMENTS);
console.log(swapFirstToLast(K_ELEMENTS));

/*  Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto
    la propiedad id si la hubiera.
    TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.
*/
console.log("excludeId");
const excludeId = ({ id, ...restProperties }) => restProperties;
console.log(K_USER);
console.log(excludeId(K_USER));

/*  Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array
    filtrado con aquellas palabras que empiecen por a.
    TIP: No utilices bucles.
*/

const K_WORDS = ["amigo", "astro", "ejercicio", "consola", "agua"];
console.log("wordsStartingWithA");
const wordsStartingWithA = (words) => {
  return words.filter((word) => word.toLowerCase().startsWith("a"));
};

console.log(K_WORDS);
console.log(wordsStartingWithA(K_WORDS));

/*  Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la
    concatenación de todos, separados por | .
    TIP: No utilices bucles.
*/
console.log("concat");
const concat = (...elements) => elements.join(" | ");

console.log(K_WORDS);
console.log(concat("elemento1", "elemento2", "elemento3"));

/*
    Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un número
    ( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
    TIP: No utilices bucles.
*/

const multArray = (arr, x) => arr.map((y) => y * x);

console.log("multArray");
console.log(K_ELEMENTS);
console.log(multArray(K_ELEMENTS, 2));

/*
    Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el
    producto de todos ellos.
    TIP: No utilices bucles.
*/

const calcMult = (...numbers) =>
  numbers.reduce((acc, number) => acc + acc * number, 1);

console.log("calcMult");
console.log(calcMult(2, 3, 5, 7, 9));

/*
    Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido
    intercambiado por el segundo.
    TIP: No modifiques el array de entrada original.
*/

const swapFirstSecond = (arr) =>
  arr.map((element, i) => {
    if (i === 0) {
      return arr[1];
    }
    if (i === 1) {
      return arr[0];
    }

    return element;
  });
console.log("swapFirstSecond");

console.log(swapFirstSecond(K_ELEMENTS));
console.log(K_ELEMENTS);

/*  Implementa una función longest tal que admita multiples strings como argumento de entrada así como un carácter
    cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
    TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).
*/

const longest = (character, ...elements) =>
  elements.every((texto) => texto.startsWith(character));

console.log(longest("a", "abrazo", "animal", "astro", "amanecer"));
