// Script original
console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");

// Comparación y retroalimentación
const realOrder = [
  "Inicio del script",
  "Fin del script",
  "Promesa resuelta",
  "Primer setTimeout",
  "Segundo setTimeout"
];

const userPrediction = prompt("Indica el orden de los mensajes en la consola separados por comas: ");
const userSteps = userPrediction.split(",").map(step => step.trim());

let correctSteps = 0;
let incorrectSteps = [];

realOrder.forEach((step, index) => {
  if (userSteps[index] === step) {
    correctSteps++;
  } else {
    incorrectSteps.push({ step, index });
  }
});

if (correctSteps === realOrder.length) {
  console.log("¡Felicidades! Acertaste el orden completo.");
} else if (correctSteps === realOrder.length - 1) {
  console.log("Te equivocaste en el siguiente paso:");
  incorrectSteps.forEach(step => {
    console.log(`- En el paso ${step.index + 1}: Se esperaba '${step.step}'.`);
  });
} else {
  console.log("Hubo errores en tu predicción. Los pasos incorrectos fueron:");
  incorrectSteps.forEach(step => {
    console.log(`- En el paso ${step.index + 1}: Se esperaba '${step.step}'.`);
  });
}
