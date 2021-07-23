const _productoAlimentacion = { count: 3, price: 12.55, type: "alimentacion" };
const _productoLibro = {count: 3, price: 12.55, type: "libro"};
const _productoOtros = {count: 3, price: 12.55, type: "ropa"};

// Calculo Precio Total Alimentacion
console.log("...PRECIO PRODUCTO ALIMENTACION...");
let _iva = _productoAlimentacion.type === "alimentacion" ? 0.1 : _productoAlimentacion.type === "libro" ? 0.04 : 0.21;
console.log("IVA: ", _iva);

let _precioTotal = (_productoAlimentacion.count < 0 ? 0 : _productoAlimentacion.count) * _productoAlimentacion.price;
console.log("Precio Total SIN IVA: ", _precioTotal);
console.log("Precio TOTAL CON IVA: ", _precioTotal + (_precioTotal * _iva));
console.log("");

// Calculo Precio Total Libro
console.log("...PRECIO PRODUCTO LIBRO...");
_iva = _productoLibro.type === "alimentacion" ? 0.1 : _productoLibro.type === "libro" ? 0.04 : 0.21;
console.log("IVA: ", _iva);

_precioTotal = (_productoLibro.count < 0 ? 0 : _productoLibro.count) * _productoLibro.price;
console.log("Precio Total SIN IVA: ", _precioTotal);
console.log("Precio TOTAL CON IVA: ", _precioTotal + (_precioTotal * _iva));
console.log("");

// Calculo Precio Total Otros
console.log("...PRECIO PRODUCTO OTROS...");
_iva = _productoOtros.type === "alimentacion" ? 0.1 : _productoOtros.type === "libro" ? 0.04 : 0.21;
console.log("IVA: ", _iva);

_precioTotal = (_productoOtros.count < 0 ? 0 : _productoOtros.count) * _productoOtros.price;
console.log("Precio Total SIN IVA: ", _precioTotal);
console.log("Precio TOTAL CON IVA: ", _precioTotal + (_precioTotal * _iva));
console.log("");

/**
 * Es decir una función que se llama getTotalVat(product) que devuelva el número de productos pedidos multiplacado por el precio con IVA.
 */
 function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}

function getVat(product) {
    let _result = 0;

    if (product && product.type && product.count) {    

        let _ivaProducto = product.type === "alimentacion" ? 0.1 : product.type === "libro" ? 0.04 : 0.21;
        _result = product.price + (product.price * _ivaProducto);
    }

    return _result;
}

console.log("...USO DE FUNCION...");
console.log("PRECIO ALIMENTACION: ", getTotalVat(_productoAlimentacion));
console.log("PRECIO LIBROS: ", getTotalVat(_productoLibro));
console.log("PRECIO OTROS: ", getTotalVat(_productoOtros));
console.log("");


/*
*  Calcular sueldo neto en nómina
*/
function fSueldoNeto(empleado) {
    
    let _retencion = 0;

    if(empleado.bruto > 12000 && empleado.bruto <= 24000) {
        _retencion = 0.08;
    }
    else if (empleado.bruto > 24000 && empleado.bruto <= 34000) {
        _retencion = 0.16;
    }
    else if (empleado.bruto > 34000) {
        _retencion = 0.3
    }
        
    if (_retencion > 0 && empleado.hijos > 0) {
        _retencion -= 0.02;
    }

    let _sueldoRetenido = empleado.bruto * _retencion;
    let _sueltoNeto = (empleado.bruto - _sueldoRetenido);

    if (empleado.pagas > 12) {
        _sueltoNeto =  _sueltoNeto / 12;
    }
    else {
        _sueltoNeto = _sueltoNeto / 14;
    }

    return _sueltoNeto;
}

const empleado = { bruto: 14500,  hijos: 2, pagas: 14 };
console.log("SUELDO NETO: ", fSueldoNeto(empleado));