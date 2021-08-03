// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    id: "product_1",
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    id: "product_2",
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    id: "product_3",
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    id: "product_4",
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    id: "product_5",
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    id: "product_6",
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    id: "product_7",
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    id: "product_8",
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

var fCreateInputNumber = (container, product) => {
  var _inputAmount = document.createElement("input");
    _inputAmount.setAttribute("id", product.id);
    _inputAmount.setAttribute("type", "number");
    _inputAmount.setAttribute("min", "0");
    _inputAmount.setAttribute("max", product.stock);
    _inputAmount.setAttribute("placeholder", "0");
    _inputAmount.setAttribute("class", "line-amount");
    
    _inputAmount.addEventListener("change", (event) => product.units = parseInt(event.target.value));    
   
    container.appendChild(_inputAmount);
};

var fCreateCartListProducts = (productsList) => {
  let _index = 1;

  for (var product of productsList) {

    var _dvLineProduct = document.createElement("div");
    _dvLineProduct.setAttribute("class", "line-product");

    var _spLineDescription = document.createElement("span");
    _spLineDescription.setAttribute("class", "line-description");
    _spLineDescription.innerText = product.description;

    var _spLineNumber = document.createElement("span");
    _spLineNumber.setAttribute("class", "line-number");
    _spLineNumber.innerText = (_index < 10 ? "0" : "") + _index + ".";

    _dvLineProduct.appendChild(_spLineNumber);
    _dvLineProduct.appendChild(_spLineDescription);  
    fCreateInputNumber(_dvLineProduct, product);

    
    document.getElementById("product-list-container").appendChild(_dvLineProduct);


    _index++;
  }
};

fCreateCartListProducts(products);

var fCalcularTotal = (event) => {
  event.preventDefault();

  document.getElementById("spSubTotal").innerText = "0.00€";
  let lstProductos = products.filter((x) => x.units > 0);
  let _subTotal = 0;
  let _iva = 0;
  let _total = 0;

  if (lstProductos) {
    for (var product of lstProductos) {
      _subTotal += product.price * product.units;
      _iva += (product.price * product.units) * product.tax / 100;        
    }

    _total = _subTotal + _iva;
  }
  

  document.getElementById("spSubTotal").innerText = _subTotal + "€";
  document.getElementById("spIVA").innerText = _iva + "€";
  document.getElementById("spTOTAL").innerText = _total + "€";
};


document.getElementById("btnCalcular").addEventListener("click", event => fCalcularTotal(event));
