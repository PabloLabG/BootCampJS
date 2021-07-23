const booking = {count: 6, price: 127.95};

let total = booking.count * booking.price;
const discount = total > 500 ? total * 0.2 : 0;


/*
if (tota > 500) {
    total = total - discount;
    console.log("descuento: ", discount);
}
*/
console.log("Total de la reserva: ", total);

if (total > 500 && discount > 0) {
    console.log("Descuento: ", discount);
    console.log("Total con descuento: ", total - discount);
}