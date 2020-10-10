const producto = "Monitor 20 Pulgadas";

// .repeat te va a permitir repetir una cadena de texto...

const texto = ' en Promoción'.repeat(2.9);
// Si a repeat le pasas un numero flotante se redondea y se repite esa cantidad de veces
// por ejemplo, si le pasas 2.4 se redondea a dos (2).

console.log(texto);
console.log(`${producto} ${texto}!!!`);

// .split te va a permitir dividir un String.

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = "Caminar, Leer, Ver peliculas, Estudiar, Cocinar, Aprender a programar";
console.log(hobbies.split(", "));
