const ReservaList = [];

// Función para registrar una nueva reserva
function crearReserva(numeroHabitacion, nombreCompleto, cantidadPersonas) {
    const reserva = {
        id: generarID(), // Generar un ID único para la reserva
        numeroHabitacion,
        nombreCompleto,
        cantidadPersonas,
        fechaInicio: null,
        fechaFin: null
    };
    ReservaList.push(reserva);
    return reserva.id; // Retornar el ID de la reserva creada
}

// Función para verificar la disponibilidad de habitaciones
function verificarDisponibilidad(cantidadPersonas) {
    return new Promise((resolve, reject) => {
        // Simular una operación asíncrona con setTimeout()
        setTimeout(() => {
            // Lógica para verificar la disponibilidad (puede ser implementada según las necesidades)
            // Aquí se puede agregar lógica para verificar la disponibilidad de habitaciones
            const habitacionDisponible = Math.random() < 0.5; // Simulación de disponibilidad
            if (habitacionDisponible) {
                resolve();
            } else {
                reject("Lo sentimos, no hay habitaciones disponibles para la cantidad de personas solicitadas.");
            }
        }, 2000); // Tiempo de espera simulado (2 segundos)
    });
}

// Función para ver las reservas actuales filtradas por nombre completo
function verReservas(nombreCompleto) {
    const reservas = ReservaList.filter(reserva => reserva.nombreCompleto.toLowerCase() === nombreCompleto.toLowerCase());
    return reservas;
}

// Función para cancelar una reserva por su ID
function cancelarReserva(idReserva) {
    const indice = ReservaList.findIndex(reserva => reserva.id === idReserva);
    if (indice !== -1) {
        ReservaList.splice(indice, 1);
        return true; // Éxito al cancelar la reserva
    }
    return false; // La reserva no se encontró
}

// Función para editar una reserva por su ID
function editarReserva(idReserva, nuevaFechaInicio, nuevaFechaFin) {
    const reserva = ReservaList.find(reserva => reserva.id === idReserva);
    if (reserva) {
        reserva.fechaInicio = nuevaFechaInicio;
        reserva.fechaFin = nuevaFechaFin;
        return true; // Éxito al editar la reserva
    }
    return false; // La reserva no se encontró
}

// Ruta del archivo data.json
const url = "/data.json"; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Error al cargar los datos.");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Habitaciones:", data.rooms);
                    console.log("Tipos de Habitaciones:", data.roomTypes);
                    resolve(data); // Resuelve la promesa con los datos cargados
                })
                .catch(error => {
                    console.error(error);
                    reject(error); // Rechaza la promesa si hay un error
                });
        }, 3000);
    });
}

// Bucle principal
cargarYMostrarData()
    .then(({ rooms, roomTypes }) => {
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
                            alert(`Reserva exitosa. ID de reserva: ${idReserva}`);
                        })
                        .catch(error => {
                            alert(error);
                        });
                    break;

                case "2":
                    const nombreBusqueda = prompt("Ingrese su nombre completo para ver sus reservas:");
                    const reservasUsuario = verReservas(nombreBusqueda);
                    if (reservasUsuario.length === 0) {
                        console.log("No se encontraron reservas para este usuario.");
                    } else {
                        console.log("Reservas encontradas:");
                        reservasUsuario.forEach(reserva => {
                            console.log(`ID: ${reserva.id}, Habitación: ${reserva.numeroHabitacion}, Fecha de inicio: ${reserva.fechaInicio}, Fecha de fin: ${reserva.fechaFin}`);
                        });
                    }
                    break;

                case "3":
                    const idCancelar = parseInt(prompt("Ingrese el ID de la reserva que desea cancelar:"));
                    const cancelado = cancelarReserva(idCancelar);
                    if (cancelado) {
                        console.log("Reserva cancelada exitosamente.");
                    } else {
                        console.log("No se encontró ninguna reserva con ese ID.");
                    }
                    break;

                case "4":
                    const idEditar = parseInt(prompt("Ingrese el ID de la reserva que desea editar:"));
                    const nuevaFechaInicio = prompt("Ingrese la nueva fecha de inicio:");
                    const nuevaFechaFin = prompt("Ingrese la nueva fecha de fin:");
                    const editado = editarReserva(idEditar, nuevaFechaInicio, nuevaFechaFin);
                    if (editado) {
                        console.log("Reserva editada exitosamente.");
                    } else {
                        console.log("No se encontró ninguna reserva con ese ID.");
                    }
                    break;

                case "5":
                    console.log("Saliendo del sistema de reservas.");
                    break;

                default:
                    console.log("Opción no válida. Por favor ingresa un número del 1 al 5.");
                    break;
            }

            if (userInput === "5") {
                break;
            }
        }
    })
    .catch(error => {
        console.error("Error al cargar y mostrar los datos:", error);
    });
