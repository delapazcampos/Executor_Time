// main.js
import { sumar, restar, multiplicar } from "./operaciones/matematicas.js";

try {
  const v1 = sumar(1, 2);
  const v2 = restar(10, 2);
  const v3 = multiplicar(15, 20);

  console.log("Resultado de sumar(1, 2):", v1);
  console.log("Resultado de restar(10, 2):", v2);
  console.log("Resultado de multiplicar(15, 20):", v3);
} catch (error) {
  console.error("Ocurrió un error:", error.message);
}
