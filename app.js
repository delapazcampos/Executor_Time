//process
//os


// Función para mostrar un mensaje de saludo
function mostrarGreetings(tema) {
  console.log(`¡Hola mundo${tema}!`);
}

// Ejecutar las funciones en el ciclo de eventos de Node.js
function ejecutarProgramas() {
  // Mensaje de inicio
  console.log("Es el inicio del programa");

  // Ejecutar inmediatamente después de que el ciclo de eventos se libere
  setImmediate(() => {
    mostrarGreetings(" en Node.js (setImmediate)");
  });

  // Ejecutar después de 2 segundos (setTimeout)
  setTimeout(() => {
    mostrarGreetings(" en Node.js (setTimeout con 2 segundos)");
  }, 2000);

  // Ejecutar repetidamente cada 1 segundo (setInterval)
  const intervalo = setInterval(() => {
    mostrarGreetings(" en Node.js (setInterval cada 1 segundo)");
  }, 1000);

  // Limitar la ejecución del setInterval después de 5 segundos
  setTimeout(() => {
    clearInterval(intervalo);
    console.log("El setInterval ha sido detenido.");
  }, 5000);

  // Mensaje de fin
  console.log("Es el final del programa");
}

// Ejecutar el programa
ejecutarProgramas();
