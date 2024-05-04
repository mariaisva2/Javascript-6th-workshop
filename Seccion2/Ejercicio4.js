console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());

//¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
// Función declarada: Primero la intenta llamar antes de que sea ejecutada en la función, luego pasa a call stack donde esta invocando la funcion para que pueda ser ejecutada, después de este proceso nuevamente llega a Task Queue(cola de tareas) donde se muestra que la funcion ha sido llamada.

//¿Cómo difieren los resultados entre la función declarada y la función expresada?
//la función declarada y expresada se centran en que ambas pasan por un proceso donde primero se llaman antes de ser ejecutadas en la función, pasa a call stack donde invoca y luego ejecuta y finalmente llega a la cola de tareas donde se muestra que en definitva la funcion ya ha sido llamada y por último, pero no menos importante, independiente del proceso por el que pasa, el resultado te va a indicar que primero te muestra que estas intentando llamar a la funcion antes de su declaración, luego esta intentando llamar a la funcion después de su declaración y por último muestra que la función ha sido llamada.


//¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
//