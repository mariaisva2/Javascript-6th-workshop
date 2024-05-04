
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

// Respuestas del usuario
const respuestaGlobalVariable = prompt("¿Puedes acceder a la variable globalVariable desde cualquier parte del código? (Sí/No)");
const respuestaFunctionVariable = prompt("¿Puedes acceder a la variable functionVariable desde cualquier parte del código? (Sí/No)");
const respuestaBlockVariable = prompt("¿Puedes acceder a la variable blockVariable desde cualquier parte del código? (Sí/No)");

// Validación de respuestas
const esCorrectaGlobalVariable = respuestaGlobalVariable.toLowerCase() === "sí";
const esCorrectaFunctionVariable = respuestaFunctionVariable.toLowerCase() === "no";
const esCorrectaBlockVariable = respuestaBlockVariable.toLowerCase() === "no";

// Mostrar resultados
console.log("Resultado para la variable globalVariable:", esCorrectaGlobalVariable ? "Correcto" : "Incorrecto");
console.log("Resultado para la variable functionVariable:", esCorrectaFunctionVariable ? "Correcto" : "Incorrecto");
console.log("Resultado para la variable blockVariable:", esCorrectaBlockVariable ? "Correcto" : "Incorrecto");


console.log("Explicación:");
console.log("La variable globalVariable es accesible desde cualquier parte del código porque está definida en el ámbito global.");
console.log("La variable functionVariable es accesible solo dentro de la función testScope() porque está definida en su ámbito local (dentro de la función).");
console.log("La variable blockVariable no es accesible fuera del bloque if dentro de la función testScope() porque está definida con let dentro de ese bloque, lo que limita su alcance a ese bloque.");
