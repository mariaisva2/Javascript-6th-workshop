//Definir la función manejarAsincronia
function manejarAsincronia(callback, promesa) {
//Crear la promesa que se resuelve después de 2 segundos
    setTimeout(() => {
//Ejecutar el callback después de que la promesa se resuelve
        promesa.then(() => {
            callback("¡La promesa fue rechazada!");
        }).then(() => {
            callback("la promesa no se ejecuta");
        });
    },1000);
}

//Invocar la función pasando un callback y una promesa
manejarAsincronia(console.log, promise.resolve());

//¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
// Si se cambia el tiempo de resolución de la promesa a 5 segundos, el callback se ejecuta después de 5 segundos y si se cambia el tiempo de resolución de la promesa a 1 segundo, el callback se ejecutará después de 1 segundo. La única diferencia es que se ejecuta en el tiempo asignado en la resolución de la promesa.

// ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
// Si la promesa es rechazada en lugar de resuelta, el callback ejecutará el mensaje "¡La promesa fue rechazada!".

// Modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa
// Ya hemos implementado esto en la función manejarAsincronia. El callback recibe un mensaje diferente dependiendo de si la promesa se resuelve o se rechaza.

