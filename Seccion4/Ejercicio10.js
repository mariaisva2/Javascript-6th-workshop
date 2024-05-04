console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");

//¿Qué tareas se consideran macrotareas y cuáles son microtareas?
// Macrotareas: En JavaScript, las macrotareas son tareas que se manejan a través del event loop y que incluyen operaciones de  (entrada/salida), como el tiempo de espera (setTimeout)
// Microtareas: Las microtareas son tareas más pequeñas y de alta prioridad que se ejecutan después de que se completan las macrotareas. Estas incluyen promesas (Promise.then(), Promise.catch(), Promise.finally())

//¿Cómo se relacionan las macrotareas y microtareas con el event loop?
//Las macrotareas se ejecutan en cada iteración del event loop después de que se hayan completado todas las microtareas pendientes.Las microtareas se ejecutan antes de que se procesen las macrotareas en cada iteración del event loop. Esto significa que cualquier microtarea pendiente se resolverá antes de que comience a ejecutarse la próxima macrotarea.

//¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
// Cuando una microtarea genera una nueva macrotarea dentro de ella, la nueva macrotarea se encola en la cola de tareas junto con otras macrotareas pendientes. Sin embargo, solo se ejecutará cuando la cola de microtareas esté vacía y el event loop termine de manejar las microtareas actuales.

// ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
// Las promesas y sus métodos (then(), catch(), finally()) se manejan como microtareas. Esto significa que se resuelven y se ejecutan antes de que comiencen las macrotareas en cada iteración del event loop.
// Los setTimeout se manejan como macrotareas. Se colocan en la cola de tareas y se ejecutan después de que se completan todas las microtareas pendientes. Esto significa que pueden retrasarse si hay muchas microtareas pendientes 