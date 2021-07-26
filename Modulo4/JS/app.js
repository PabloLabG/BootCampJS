/*
* Funcion de Suma.
*/
var fSumar = (operadorA) => {
    let _result = Number(document.getElementById("ResultOperacion").innerText);

    if (!isNaN(operadorA)) {
        _result += Number(operadorA);
    }

    document.getElementById("ResultOperacion").innerText = _result;
}

/*
* Funcion de Resta.
*/
var fRestar = (operadorA) => {
    let _result = Number(document.getElementById("ResultOperacion").innerText);

    if (!isNaN(operadorA)) {
        _result -= Number(operadorA);
    }

    document.getElementById("ResultOperacion").innerText = _result;    
}

/*
* Funcion de Multiplicar.
*/
var fMultiplicar = (operadorA) => {
    let _result = Number(document.getElementById("ResultOperacion").innerText);

    if (!isNaN(operadorA)) {
        _result *= Number(operadorA);
    }

    document.getElementById("ResultOperacion").innerText = _result;    
}

/*
* Funcion de Dividir.
*/
var fDividir = (operadorA) => {
    let _result = Number(document.getElementById("ResultOperacion").innerText);

    if (!isNaN(operadorA)) {
        _result /= Number(operadorA);
    }

    document.getElementById("ResultOperacion").innerText = _result;    
}

// Añadir los eventos Click
document.getElementById("btnSumar").addEventListener("click", () => { fSumar(document.getElementById('operadorA').value); });
document.getElementById("btnRestar").addEventListener("click", () => { fRestar(document.getElementById('operadorA').value); });
document.getElementById("btnMultiplicar").addEventListener("click", () => { fMultiplicar(document.getElementById('operadorA').value); });
document.getElementById("btnDividir").addEventListener("click", () => { fDividir(document.getElementById('operadorA').value); });