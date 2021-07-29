const carrito = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];

var fMostrarLineaPedido = (pedido, mostrarHTML = false) => {
    
    var ul = document.createElement('ul');

    for (_prop in pedido) {        
        console.log(_prop + ": " + pedido[_prop]); 

        var li = document.createElement('li');
        li.innerHTML = (_prop + ": " + pedido[_prop]);
        ul.appendChild(li);  
    }
    
    if (mostrarHTML) {
        document.getElementById("dvContainer").appendChild(ul);
    }
};

var fMostrarPedidosCarrito = (carrito, mostrarCarrito = false) => {
    for (pedido of carrito) {
        console.log("=======INI PEDIDO======")
        fMostrarLineaPedido(pedido, mostrarCarrito);
        console.log("=======FIN PEDIDO======")
    }
}
fMostrarPedidosCarrito(carrito);

console.log("")
console.log("========ELIMINAR PEDIDO========")
var fEliminarPedidoPorID = (idPedido) => {    
    for (index = 0; index < carrito.length; index++) {
                
        if (carrito[index].id === idPedido) {
            carrito.splice(index, 1);
            break; // exit for
        }
    }
}

fEliminarPedidoPorID(54657);
fMostrarPedidosCarrito(carrito);


function fTotalPedido() {
    let _total = 0;
    for (pedido of carrito) {
        _total += (pedido.price * pedido.count);
    }

    if (_total > 100) {
        _total -= (_total * 0.05);
    }

    console.log("")
    console.log(`========TOTAL PEDIDO: ${_total}========`);
}

fTotalPedido();

function fProductosPremium() {
    let _productosPremium = [];

    for (producto of carrito) {
        if (producto.premium === true) {
            _productosPremium.push(producto);
        }
    }

    console.log("")
    console.log("========PRODUCTOS PREMIUM========");
    console.log(_productosPremium);

    if (_productosPremium.length == producto.length) {
        alert("Pedido sin gastos de envío");        
    }
    else {
        alert("Este pedido tiene gastos de envío");
    }
}

fProductosPremium();

fMostrarPedidosCarrito(carrito, true);