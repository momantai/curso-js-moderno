const producto = "Monitor 20 Pulgadas";
const precio = "30 USD";

/**
 * Remplazar texto de un String (Replace)
 */

// .replace para reemplazar.
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

/**
 * Extraer o cortar de una cadena de texto.
 */

// .slice para cortar.
console.log(producto.slice(0, 10));
console.log(producto.slice(10, 0));

// Alternativa a slice
console.log(producto.substring(10, 0), "!");

/**
 * La diferencia entre slice y substring es que si les pasas un numero mayor y después uno menor
 * slice no hace nada mientrass que substring lo modifica e intenta hacer algo.
 */

const usuario = "Momantai";
console.log(usuario.charAt(0));
