
// Cuadrado
var square = (n, char) => {

    var _filaText = "";

    if (n === 1) {        
        console.log(char)        
    }
    else {       

        for (let fila = 1; fila <= n; fila++) {            
            
            while(_filaText.length < n) {                
                _filaText += char;
            }
            
            console.log(_filaText);
            _filaText = "";            
        }
    }

};

console.log("// n = 1");
square(1, '*');

console.log("// n = 2");
square(2, '*');

console.log("// n = 3");
square(3, '*');

console.log("// n = 4");
square(4, '*');

console.log("// n = 5");
square(5, '*');

// Cuadrado con Borde
var squareWithBorder = (n, charBorder, charInner) => {

    var _filaText = "";
    
    if (n === 1) {        
        console.log(charBorder)        
    }
    else {
        for (let fila = 1; fila <= n; fila++) {            
            
            while(_filaText.length < n) {

                // Si es la primer o ultima fila son todos caracteres de bordes
                // La primera o ultima posicion de la fila es caracter de borde
                if ((fila === 1 || fila === n) ||
                    (_filaText.length === 0 || _filaText.length === n - 1) ) {
                    _filaText += charBorder;
                }                
                else {
                    _filaText += charInner;
                }
            }

            console.log(_filaText);
            _filaText = "";  
        }
    }
}

console.log("// n = 1");
squareWithBorder(1, 'B', '*');

console.log("// n = 2");
squareWithBorder(2, 'B', '*');

console.log("// n = 3");
squareWithBorder(3, 'B', '*');

console.log("// n = 4");
squareWithBorder(4, 'B', '*');

console.log("// n = 5");
squareWithBorder(5, 'B', '*');


var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => { 

    var _filaText = "";
    if (n === 1) {        
        console.log(charDiagonal)        
    }
    else {
        for (let fila = 1; fila <= n; fila++) {

            while(_filaText.length < n) {

                if (fila === 1 && _filaText.length === 0) {
                    _filaText += charDiagonal;
                }                
                else if ((_filaText.length + 1) === fila) {
                    _filaText += charDiagonal;
                }
                else if (_filaText.indexOf(charDiagonal) != -1) {
                    _filaText += charUp;
                }
                else {
                    _filaText += charDown;            
                }
            }

            console.log(_filaText);
            _filaText = "";         
        }
    }
}

console.log("// n = 1");
squareDiagonalLR(1, '\\', 'A', 'B');

console.log("// n = 2");
squareDiagonalLR(2, '\\', 'A', 'B');

console.log("// n = 3");
squareDiagonalLR(3, '\\', 'A', 'B');

console.log("// n = 4");
squareDiagonalLR(4, '\\', 'A', 'B');

console.log("// n = 5");
squareDiagonalLR(5,'\\', 'A', 'B');


var fAddNumCharacters = (char, n) => {

    var _txtResult = "";

    while( _txtResult.length < n) {
        _txtResult += char;
    }

    return _txtResult;
}

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {

    var _filaText = "";
    if (n === 1) {        
        console.log(charDiagonal)           
    }
    else {
        for (let fila = 1; fila <= n; fila++) {

            while(_filaText.length < n) {

                // Es la ultima fila?
                if (fila === n && _filaText.length === 0) { _filaText += charDiagonal; }

                if ((n - fila > 0) && _filaText.length == 0) {
                    _filaText = fAddNumCharacters(charUp, (n - fila));
                    _filaText += charDiagonal;
                }
                else {
                    _filaText += charDown;
                }
            }

            console.log(_filaText);
            _filaText = "";         
        }
    }
}

console.log("// n = 1");
squareDiagonalRL(1, '/', 'A', 'B');

console.log("// n = 2");
squareDiagonalRL(2, '/', 'A', 'B');

console.log("// n = 3");
squareDiagonalRL(3, '/', 'A', 'B');

console.log("// n = 4");
squareDiagonalRL(4, '/', 'A', 'B');

console.log("// n = 5");
squareDiagonalRL(5,'/', 'A', 'B');