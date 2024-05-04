
let menuOpenened = true;

while (menuOpenened){
  let option = Number(prompt(`// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {n
  return "Función expresada ha sido llamada.

  Ingrese una opción 
  1: Ingrese uno para validar el valor de "a"
  2: Ingrese dos para validar el valor de "b"
  3: Ingrese tres para validar el valor de "c"
};`))

switch(option){
  case 5: {
    menuOpenened = false;
  }
  case 1: {
    let question1 = Number(prompt("Cual crees que va ser el valor de a\n 1:Si crees que el valor de es undefined\n2:Valor de a = 1"));
    if (question1 === 1){
      alert(" var declara una variable, opcionalmente inicializándola con un valor que en esta caso es undefined, porque no se le ha asignado un valor")
    }else{
      alert("Respuesta incorrecta no se le ha asignado un valor, por tanto es undefined")
    }
  }
  case 2: {
    let question2 = Number(prompt("Cual crees que es el valos de b \n 1:Si crees que el valor es 0\n2: Si crees que el valor es = 2 "));
    if (question2 === 2){
      alert("Respuesta correcta porque let tiene el correcto alcanza en el bloque en el que ha definido")
    }else{
      alert("Respuesta incorrecta, ya que a la variable let si se le está asignando un valor en el bloque en el que se le permite estar");
    }
  }
  case 3:{
    let question3 = Number(prompt("Cual crees que es el valor de c \n 1: Si crees que el valor es 1\n2: Si crees que el valor es = 3"));
    if (question3 === 3){
      alert("Respuesta correcta, al igual que en la función let, const se esta inicializada a un valor al momento de declararla");
    }else{
      alert("Respuesta incorrecta, porque en este caso se le está declarando un valor a la variable, por defecto el resultado es 3, ten en cuenta que no se pueden declarar dos veces")
    }
  }
}
}