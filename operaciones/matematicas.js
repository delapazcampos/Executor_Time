// matematicas.js

/**
 * Suma dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} - Resultado de la suma.
 */


export function sumar(a, b) {
  validarNumeros(a, b);
  return a + b;
}

/**
 * Resta dos números.
 * @param {number} a - Minuendo.
 * @param {number} b - Sustraendo.
 * @returns {number} - Resultado de la resta.
 */
export function restar(a, b) {
  validarNumeros(a, b);
  return a - b;
}

/**
 * Multiplica dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} - Producto de la multiplicación.
 */
export function multiplicar(a, b) {
  validarNumeros(a, b,c,d,e,f);
  return a * b*c*d;
}

/**
 * Valida que los parámetros sean números.
 * @param {...any} args - Argumentos a validar.
 * @throws {TypeError} - Si algún argumento no es un número.
 */

function validarNumeros(...args){
    args.forEach((arg)=>{
        if(typeof arga!= "number"){
            throw new TypeError(`${arg} no es un número`);
        }
    })
}
