function crearSumador() {
  let suma = 5; 
    function name() {
    console.log(suma)  
    
  }
  return name;
}

const sumar5 = crearSumador(5)
const sumar10 = crearSumador(3)

console.log(5 + 3)

//¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?

// La funcion interna tiene acceso a las variables externas gracias a el console.log, ya que es la manera en como estamos accediendo a la funcion padre y a su vez se está ejecutando mientras hace el proceso de acceder a la funcion exterior.

//¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?

//Inicialmente genera mucho espacio en la memoria si se tienen muchos closure, lo que implica que el rendimiento sea bajo. 