/*
* Funcion de Suma.
*/
var fSumar = (operadorA, operadorB) => {
    let _result = 0;

    if (!isNaN(operadorA) && !isNaN(operadorB)) {
        _result = Number(operadorA) + Number(operadorB);
    }

    document.getElementById("ResultOperacion").innerText = _result;    
}

/*
* Funcion de Resta.
*/
var fRestar = (operadorA, operadorB) => {
    let _result = 0;

    if (!isNaN(operadorA) && !isNaN(operadorB)) {
        _result = Number(operadorA) - Number(operadorB);
    }

    document.getElementById("ResultOperacion").innerText = _result;    
}

/*
* Funcion de Multiplicar.
*/
var fMultiplicar = (operadorA, operadorB) => {
    let _result = 0;

    if (!isNaN(operadorA) && !isNaN(operadorB)) {
        _result = Number(operadorA) * Number(operadorB);
    }

    document.getElementById("ResultOperacion").innerText = _result;    
}

/*
* Funcion de Dividir.
*/
var fDividir = (operadorA, operadorB) => {
    let _result = 0;

    if (!isNaN(operadorA) && !isNaN(operadorB)) {
        _result = Number(operadorA) / Number(operadorB);
    }

    document.getElementById("ResultOperacion").innerText = _result;    
}



// Añadir los eventos Click
document.getElementById("btnSumar").addEventListener("click", () => { fSumar(document.getElementById('operadorA').value, document.getElementById('operadorB').value); });
document.getElementById("btnRestar").addEventListener("click", () => { fRestar(document.getElementById('operadorA').value, document.getElementById('operadorB').value); });
document.getElementById("btnMultiplicar").addEventListener("click", () => { fMultiplicar(document.getElementById('operadorA').value, document.getElementById('operadorB').value); });
document.getElementById("btnDividir").addEventListener("click", () => { fDividir(document.getElementById('operadorA').value, document.getElementById('operadorB').value); });