/**
 * Concatenar String's!
 */

const producto = "Monitor 20 Pulgadas ";
const precio = "30 USD";

// Metodos para concatenar Strings.
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

// console.log(producto + "con un precio de " + precio);
console.log(producto, "con un precio de", precio);
// console.log("El producto " + producto + "tiene un precio de " + precio);

/**
 * Template Strings o Template literals.
 * Se usan backtick ``
 */

console.log(`El producto ${producto} tiene un precio de ${precio}`);