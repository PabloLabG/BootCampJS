const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
    desayuno: false
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
    desayuno: false
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
    desayuno: true
  },
];

class ReservasParticular {
  constructor(reservas) {
    this._reservas = reservas;
  }

  set Reservas(reservas) {
    this._reservas = reservas;
  }

  calcularSubTotal() {
    return this._reservas.reduce((acumulado, { tipoHabitacion, pax, noches, desayuno }) => 
      acumulado + (this.PrecioHabitacion(tipoHabitacion, noches) + this.CargoAdicional(pax, desayuno)), 0);
  }

  PrecioHabitacion(tipoHabitacion, noches) {
    return (tipoHabitacion === "standard" ? 100 : 150) * noches;
  }

  CargoAdicional(personas, desayuno) {
    let _cargoAdicional = personas > 1 ? ((personas - 1) * 40) : 0;

    // Añadimos un campo a cada reserva en el que indicamos si el desayuno está incluido o no: en caso de estar incluido supone un cargo adicional de 15 € por persona y noche.
    return  _cargoAdicional += desayuno ? personas * 15 : 0;
  }

  get SubTotal() {
    return this.calcularSubTotal();
  }

  get Total() {
    return (this.SubTotal * 1.21).toFixed(2);
  }
}


const ReservaCaso1 = new ReservasParticular(reservas);
console.log(`SubTotal de la reserva particular: ${ReservaCaso1.SubTotal}€`);
console.log(`Total (con IVA) de la reserva particular: ${ReservaCaso1.Total}€`);

class ReservasTourOperador extends ReservasParticular {
  constructor(reservas) {
    super(reservas);
  }

  calcularSubTotal() {
    return this._reservas.reduce((acumulado, { pax, noches }) => 
      acumulado + ((100 * noches) + super.CargoAdicional(pax)), 0);
  }

  get SubTotal() {
    return this.calcularSubTotal() - (this.calcularSubTotal() * 1.5 / 10);
  } 
}

const ReservaCaso2 = new ReservasTourOperador(reservas);
console.log(`SubTotal de la reserva operador: ${ReservaCaso2.SubTotal}€`);
console.log(`Total (con IVA) de la reserva operador: ${ReservaCaso2.Total}€`);
