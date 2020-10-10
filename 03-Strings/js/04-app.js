/**
 * Cortar espacios en blanco de un String.
 */

const producto = "                Monitor 20 Pulgadas       ";
const precio = "30 USD";

console.log(producto);
console.log(producto.length);

// Eliminar espacios en blanco al inicio
console.log( producto.trimStart() );
console.log( producto.trimEnd() );

console.log( producto.trimStart().trimEnd() );

console.log( producto.trim() );

