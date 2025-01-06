# Proyecto Node.js: Gestión de Funciones de Temporizadores

Este proyecto demuestra el uso de las funciones `setImmediate`, `setTimeout` y `setInterval` en Node.js. Se ha estructurado el código para mostrar cómo se ejecutan estas funciones en el ciclo de eventos de Node.js y cómo interactúan entre sí.

## Descripción

El código realiza lo siguiente:

- Muestra un mensaje al inicio y final del programa.
- Utiliza `setImmediate` para ejecutar un bloque de código **inmediatamente** después de la fase de I/O.
- Utiliza `setTimeout` para ejecutar una acción después de **2 segundos**.
- Utiliza `setInterval` para ejecutar una acción **repetidamente cada 1 segundo**, y se detiene después de **5 segundos**.

## Código

```javascript
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
