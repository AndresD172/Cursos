/**
 * El bucle for es un bucle condicional que ejecuta un código según si una condición se cumple o no. Por lo general esta condición
 * evalua si un argumento llamado 'i' (entero la mayoría de las veces) es mayor o menor que otro argumento (igualmente entero), 
 * incrementando o decrementando el valor de 'i' por cada iteración hasta el punto en que la condición no se cumpla. Este bucle
 * nos es útil cuando queremos operar con listas de datos múltiples o operaciones matemáticas que sean iterativas, tales como el
 * sumatorio y el preductorio. 
*/

// Ejemplo de operación con arrays y bucle for.

const fs = require('fs');

let arr = ['Andrés', 'Andrea', 'Marcela', 'Guillermo', 'Diego', 'Emma'];

for (let i = 0; i < arr.length; i++) {
  let data = arr[i];
  fs.appendFile('./textfile.txt', data+'\n', (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
  });
};

console.log('Los datos han sido añadidos.')

// Ejemplo de un sumatorio usando el bucle for.

let limSuperior = 10;
let resultado = 0;

for (let i = 1; i <= limSuperior; i++) {
  resultado = resultado+i
};

console.log(resultado);

// Ejemplo de un productorio usando el bucle for.

resultado = 1;

for (let i = 5; i <= limSuperior; i++) {
  resultado = resultado*(i+1)**2
};

console.log(resultado);