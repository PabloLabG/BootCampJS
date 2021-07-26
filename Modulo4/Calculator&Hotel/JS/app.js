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

var fCalcularTarifa = () => {

    var _tarifaHabitacion = Number(document.getElementById("selHabitacion").value);
    var _tarifaSPA = document.getElementById("chkSPA").checked ? 20 : 0;
    var _tarifaOcupacion = Number(document.getElementById("selOcupacion").value);

    var _numNoches = Number(document.getElementById("numNoches").value);
    var _numNochesParking = Number(document.getElementById("numNochesParking").value);

    var _tarifaCalculada = (_tarifaHabitacion + _tarifaSPA) * _tarifaOcupacion;
    _tarifaCalculada = _tarifaCalculada * _numNoches;
    
    // Coste parking
    _tarifaCalculada = _tarifaCalculada + (_numNochesParking > 0 ? _numNochesParking * 10 : 0);

    alert("Coste de Habitacion: " + _tarifaCalculada);
}

// Añadir los eventos Click
document.getElementById("btnSumar").addEventListener("click", () => { fSumar(document.getElementById('operadorA').value); });
document.getElementById("btnRestar").addEventListener("click", () => { fRestar(document.getElementById('operadorA').value); });
document.getElementById("btnMultiplicar").addEventListener("click", () => { fMultiplicar(document.getElementById('operadorA').value); });
document.getElementById("btnDividir").addEventListener("click", () => { fDividir(document.getElementById('operadorA').value); });

document.getElementById("btnCalcular").addEventListener("click", fCalcularTarifa);
