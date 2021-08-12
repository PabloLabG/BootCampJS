// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];

  // Datos
    var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];

  var fRandomAvailable = () => Math.round(Math.random()) === 1;
  

  var fGenerateAvailable = (objTeam) => {
    
    for (let team of objTeam) {
        
        console.log("Disponibilidad de", team.name);
        for (let index = 0; index < team.availability.length; index++) {
            
            team.availability[index] = fRandomAvailable(); 

            console.log(WORK_HOURS[index], ":", team.availability[index]);
        }
    }
  }

  fGenerateAvailable(myTeam);

  var isAvailableHours = (objTeam, i) => {
    var _isAvailable = false;

    for (let index = 0; index < objTeam.length; index++) {      
      
      _isAvailable = objTeam[index].availability[i];

      if (!_isAvailable) break;      
    }

    return _isAvailable;
  };



  var fSearhAvailableTeam = (objTeam) => {

    var _position = 0;
    
    var _isAvailableText = "Lo siento. No hay hueco disponible en el equipo.";

    while(_position < objTeam.length ) {
      if (isAvailableHours(objTeam, _position)) 
      {
        _isAvailableText = "Hueco encontrado en el horario " + WORK_HOURS[_position];
        break; 
      }
      _position++;
    }

    return _isAvailableText;
  }


  console.log(fSearhAvailableTeam(myTeam));
