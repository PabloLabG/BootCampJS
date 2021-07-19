var _hotel = {
    nombre: "",
    ubicacion: "",
    foto: "",
    puntuacion: 0,
    publica: false
};


_hotel.nombre = prompt("Nombre del hotel?");
_hotel.ubicacion = prompt("Ubicación del hotel?");
_hotel.foto = prompt("foto del hotel?", "https://img.nh-hotels.net/nh_palermo-162-hotel_facilities.jpg?crop=5600:2257;0,927&resize=2000:805&output-quality=80&resize=1110:*&composite-to=center,center|1110:380&background-color=white");
_hotel.puntuacion = prompt("Quieres puntuar el hotel?");
_hotel.publica =  confirm("Hacer publica la valoracion?");

document.getElementById("hotel-nombre").innerHTML = _hotel.nombre;
document.getElementById("hotel-ubicacion").innerHTML = _hotel.ubicacion;
document.getElementById("hotel-foto").src = _hotel.foto;

// Puntuar
document.getElementById("hotel-puntuacion").innerHTML = _hotel.puntuacion;
document.getElementById("chkAnonimo").checked = _hotel.publica;


