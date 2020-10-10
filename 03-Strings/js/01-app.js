// Formas de crear un String
const producto = "Monitor\""; // La forma más común, también una forma de escapar comillas.
const producto2 = String('Monitor 24"');
const producto3 = new String('Monitor 27 Pulgadas'); //Poco común.

console.log(producto);
console.log(producto2);
console.log(producto3);