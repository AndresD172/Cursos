/* Los operadores de comparación nos ayudan a comparar si dos valores a y b son iguales, retornando un valor True o False de-
pendiendo del resultado de la comparación lógica. */

let a = 3, b = 2, c = "3";

/* En el caso del comparador "==" se realiza una comparación sin importar el tipo, transformando las cadenas de carácteres 
en valores númericos en caso necesario. Algo que no se da con el comparador "===", que regresa un falso automáticamente si
se detecta que uno de los valores a comparar equivalen a otro tipo de valores que no sean del tipo int. */

let z = a === c;

console.log(z);

/* Otro comparador que tenemos es el de "Distinto de" (!=), que compara si un valor es distinto a otro y nos retorna 
un booleano. */

let y = a != b;

console.log(y);

/* También existe el !==, que nos compara si un valor es diferente de otro tomando en cuenta también el tipo de dato a 
comparar y nos retorna un valor verdadero predeterminadamente en dado caso que los tipos de datos sean diferentes. */

let x = a !== c;

console.log(x);
