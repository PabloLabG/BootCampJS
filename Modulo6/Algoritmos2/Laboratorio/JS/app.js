var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


// Buscamos si el caracter existe en el diccionario
var fGetIndexCharacter = (character, dictionary) => dictionary.indexOf(character.toLowerCase());

// Encriptamos el texto 
var fEncrypText = (event, text) => {
    event.preventDefault();
    var _encryptText = "";

    for (let index = 0; index < text.length; index++) {
        var _indiceChar = fGetIndexCharacter(text[index], plainAlphabet);
        if (_indiceChar != -1) {
            _encryptText += encryptedAlphabet[_indiceChar];
        }
        else {
            _encryptText += text[index]
        }
    }

    document.getElementById("txtEncryptMessage").value = _encryptText;
}


// Desencriptamos el texto 
var fDecrypText = (event, text) => {
    event.preventDefault();
    var _decryptText = "";

    for (let index = 0; index < text.length; index++) {
        var _indiceChar = fGetIndexCharacter(text[index], encryptedAlphabet);

        if (_indiceChar != -1) {
            _decryptText += plainAlphabet[_indiceChar];
        }
        else {
            _decryptText += text[index]
        }
    }

    document.getElementById("txtMessage").value = _decryptText;
}

document.getElementById("btnEncrypt").addEventListener("click", event => fEncrypText(event, document.getElementById("txtMessage").value));
document.getElementById("btnDecrypt").addEventListener("click", event => fDecrypText(event, document.getElementById("txtEncryptMessage").value));


var fExisteNumero = (arrNumber, number) => {

    for (const num of arrNumber) {
        if (num === number) {
            return 1;
       }
    }   

    return -1;
}

var randomPick = (n, min, max) => {

    var _result = [];

    if (n > 0) {

        
        while(_result.length < n) {    
            var _randomNum = Math.floor(Math.random() * (max - min + 1)) + min
            
            if (fExisteNumero(_result, _randomNum) === -1)        
            { _result.push(_randomNum);}
        }
        
    }

    return  _result.sort((a, b) => a - b);
}

console.log(randomPick(10, 1, 100));
console.log("Apuesta automática de la primitiva: ", randomPick(6, 1, 49));
console.log("Escoge combinación de bolas de billar: ", randomPick(15, 1, 15));
console.log("Tirada aleatoria de un dado: ", randomPick(1, 1, 6));