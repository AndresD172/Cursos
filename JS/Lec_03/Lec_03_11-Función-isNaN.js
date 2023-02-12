/* Cuando nosotros queremos transformar una cadena en un número debe estar estrictamente escrito el número, de lo contrario
no funcionará la conversión. Si en todo caso intentamos convertir una cadena a un valor númerico, se nos retornará las siglas
NaN, cuyo significado es "Not a Number" o "No es un número", si lo traducimos al español.

La función isNaN nos ayuda a comprobar si un valor es del tipo númerico o no, retornando un valor True si el valor no es 
un número o un valor False si el valor a evaluar es, efectivamente, un número. */

let caracterString = "Diez";
let caracterNumerico = 10;

console.log(isNaN(caracterNumerico));
console.log(isNaN(caracterString));