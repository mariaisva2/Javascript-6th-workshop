function contador() {
    let count = 0;
  
    function incrementar() {
      count++;
      console.log("Contador incrementado. Valor actual:", count);
    }
  
    function obtenerValor() {
      console.log("Valor actual del contador:", count);
    }
  
    return {
      incrementar: incrementar,
      obtenerValor: obtenerValor
    };
  }
  
  const miContador = contador();
  
  console.log("¡Bienvenido al contador!");
  
  let continuar = true;
  
  while (continuar) {
    const opcion = prompt("¿Qué deseas hacer? (incrementar, obtener,salir)");
  
    switch (opcion) {
      case "incrementar":
        miContador.incrementar();
        break;
      case "obtener":
        miContador.obtenerValor();
        break;
      case "salir":
        continuar = false;
        console.log("Saliendo del contador.");
        break;
      default:
        console.log("Por favor, elige 'incrementar', 'obtener' o 'salir'.");
    }
  }
  