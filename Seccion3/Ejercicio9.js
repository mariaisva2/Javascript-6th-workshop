function esperar(milisegundos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, milisegundos);
    });
  }
  
  function cargarDatos(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        return response.json();
      });
  }
  
  function mostrarDatosEnConsola() {
    cargarDatos('https://jsonplaceholder.typicode.com/posts')
      .then(data => {
        console.log("Datos cargados exitosamente:");
        console.log(data);
      })
      .catch(error => {
        console.error("Error al cargar los datos:", error);
      });
  }
  
  console.log("¡Bienvenido al script interactivo!");
  
  const segundos = parseInt(prompt("Ingresa el número de segundos después del cual quieres que se muestre el mensaje en la consola:"));
  
  if (isNaN(segundos) || segundos <= 0) {
    console.log("Por favor, ingresa un número válido de segundos mayor que cero.");
  } else {
    console.log(`El mensaje se mostrará en la consola después de ${segundos * 1000} milisegundos.`);
  
    esperar(segundos * 1000)
      .then(() => {
        console.log("Ha pasado el tiempo especificado. Cargando datos...");
        return mostrarDatosEnConsola();
      })
      .catch(error => {
        console.error("Ocurrió un error al esperar:", error);
      });
  }
  