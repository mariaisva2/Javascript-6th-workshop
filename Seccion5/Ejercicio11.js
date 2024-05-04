// Ruta del archivo data.json
const url = "/data.json"; 

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos
    const userInput = prompt(
      "Ingrese el numero de habitacion a reservar: " +
        rooms
          .map((room) => {
            return `\nRoom Number: ${room.number} (${
              roomTypes.find((type) => type.id === room.type).name
            })`;
          })
          .join(", ")
    );

  })
//   .catch((error) => {
//     console.error("Error al manejar la promesa:", error);
//   });

  const ReservaList = [];
  let id = 1;
  
  // Función para generar ID único para cada reserva
  function generarID() {
      return id++;
  }
  
  // Función para crear una reserva
  function crearReserva(numeroHabitacion, nombreCompleto, cantidadPersonas) {
      const reserva = {
          id: generarID(),
          numeroHabitacion,
          nombreCompleto,
          cantidadPersonas,
          fechaInicio: null,
          fechaFin: null
      };
      ReservaList.push(reserva);
      return reserva.id;
  }
  
  // Función para verificar disponibilidad de habitaciones
  function verificarDisponibilidad(cantidadPersonas) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              // Simulación de disponibilidad (true o false)
              const disponible = Math.random() < 0.5;
              if (disponible) {
                  resolve();
              } else {
                  reject("No hay habitaciones disponibles para la cantidad de personas solicitadas.");
              }
          }, 2000);
      });
  }
  
  // Función para ver reservas actuales por nombre completo
  function verReservas(nombreCompleto) {
      const reservas = ReservaList.filter(reserva => reserva.nombreCompleto.toLowerCase() === nombreCompleto.toLowerCase());
      return reservas;
  }
  
  // Función para cancelar reserva por ID
  function cancelarReserva(idReserva) {
      const indice = ReservaList.findIndex(reserva => reserva.id === idReserva);
      if (indice !== -1) {
          ReservaList.splice(indice, 1);
          return true; // Éxito al cancelar la reserva
      }
      return false; // La reserva no se encontró
  }
  
  // Función para editar reservas por Id
  function editarReserva(idReserva, nuevaFechaInicio, nuevaFechaFin) {
      const reserva = ReservaList.find(reserva => reserva.id === idReserva);
      if (reserva) {
          reserva.fechaInicio = nuevaFechaInicio;
          reserva.fechaFin = nuevaFechaFin;
          return true; // Éxito al editar la reserva
      }
      return false; // La reserva no se encontró
  }
  
  //Menu para interactuar con el usuario
  while (true) {
      const userInput = prompt(`Por favor ingresa una de las siguientes opciones:
                              \n 1. Registro de Reservas
                              \n 2. Ver reservas actuales
                              \n 3. Cancelar reservas
                              \n 4. Editar reservas
                              \n 5. Salir`);
  
      switch (userInput) {
          case "1":
              const numHabitacion = prompt("Número de habitación reservada:");
              const nombreCompleto = prompt("Nombre completo del huésped:");
              const cantidadPersonas = parseInt(prompt("Cantidad de huéspedes:"));
  
              verificarDisponibilidad(cantidadPersonas)
                  .then(() => {
                      
                      const idReserva = crearReserva(numHabitacion, nombreCompleto, cantidadPersonas);
                      alert(`Reserva exitosa. Id de reserva: ${idReserva}`);
                      
                  })
                  .catch(error => {
                      alert(error);
                  });
              break;
  
          case "2":
              const nombreBusqueda = prompt("Ingrese el id para ver la habitación reservada:");
              const reservasUsuario = verReservas(nombreBusqueda);
              if (reservasUsuario.length === 1) {
                  console.log("No se encontraron reservas para este usuario.");
              } else {
                  console.log("Reservas encontradas:");
                  reservasUsuario.forEach(reserva => {
                      console.log(`Id: ${reserva.id}, Habitación: ${reserva.numeroHabitacion}, Fecha de inicio: ${reserva.fechaInicio}, Fecha de fin: ${reserva.fechaFin}`);
                  }); 
                  

              }
              break;
  
          case "3":
              const idCancelar = parseInt(prompt("Ingrese el Id de la reserva que desea cancelar:"));
              const cancelado = cancelarReserva(idCancelar);
              if (cancelado) {
                  console.log("Reserva cancelada.");
              } else {
                  console.log("No se encontró ninguna reserva con ese Id.");
              }
              break;
  
          case "4":
              const idEditar = parseInt(prompt("Ingrese el Id de la reserva que desea editar:"));
              const nuevaFechaInicio = prompt("Ingrese la nueva fecha de inicio :");
              const nuevaFechaFin = prompt("Ingrese la nueva fecha de fin:");
              const editado = editarReserva(idEditar, nuevaFechaInicio, nuevaFechaFin);
              if (editado) {
                  console.log("¡Reserva editada!.");
              } else {
                  console.log("No se encontró ninguna reserva con ese Id.");
              }
              break;
  
          case "5":
              console.log("Has salido del sistema de reservas.");
              break;
  
          default:
              console.log("Opción no válida. Por favor ingresa un número del 1 al 5.");
              break;
      }
  
      if (userInput === "5") {
          break;
      }
  }
  