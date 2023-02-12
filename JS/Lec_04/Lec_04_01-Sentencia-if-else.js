/* La sentencia de control If/Else nos permite realizar la ejecución de 2 sentencias basándonos en una condición dada a la
condicional. 

El primer bloque de la sentencia es el If, donde se debe indicar la comprobación a realizar y además, donde se indica la 
primera sentencia a ejecutar en dado caso de que la expresión a realizar sea verdadera. El segundo bloque de la secuencia,
el Else, se refiere a la palabra reservada a utilizar en dado caso que la expresión del condicional sea falsa, ejecutando
la sentencia especifica a dicha condición. */

let x = 5; 
let y = 4;

if (x < y){
  console.log(`${x} es menor que ${y}`);
} 
else if (x > y){
  console.log(`${x} es mayor que ${y}`);
} 
else{
  console.log(`${x} es igual a ${y}`);
}