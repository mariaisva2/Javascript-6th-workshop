console.log("Mensaje 1: Inmediatamente");

setTimeout(function(){
  console.log("Mensaje 2: Con timeout de 0 segundos");
},0);

setTimeout(function(){
    console.log("Mensaje 3: Con timeout de 1 segundo")
},1000);

//¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? 

// se mostrará "Mensaje 1: Inmediatamente" primero, seguido de "Mensaje 2: Con timeout de 0 segundos" y luego de un segundo "Mensaje 3: Con timeout de 1 segundo". Aunque el segundo mensaje tiene un tiempo de espera de 0 segundos, no se mostrará de inmediato debido al funcionamiento del event loop que prioriza las tareas asíncronas y gestiona la cola de tareas.
// Por lo tanto, aunque el tiempo de espera es 0 ( que en este caso seria Mensaje1), no puede ejecutar la tarea de setTimeout hasta que haya terminado con la pila de ejecución actual. Esto es lo que se llama una "macro-tarea" (la tarea de ejecutar el código del setTimeout), y se procesa después de que todas las "micro-tareas" en la cola de micro-tareas (como las promesas) se completen.


//¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?

// con retardo de 0 segundos se consideran macro-tareas, mientras que las tareas asíncronas como las promesas se consideran micro-tareas. Por lo tanto, aunque la macro-tarea tiene un retardo de 0 segundos, no se ejecuta inmediatamente debido a la priorización del event loop y la distinción entre macro y micro tareas. Este comportamiento muestra cómo JavaScript gestiona las operaciones asíncronas y prioriza la ejecución de tareas en el event loop.