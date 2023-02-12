// Concatenación de cadenas.

/* Para concatenar cadenas se debe de poner el nombre de la primera variable,
seguidamente se pone el simbolo de suma y por último el nombre de la segunda
variable que deseemos concatenar. */
var nombre = 'Andrés';

var apellido = 'Chacón';

var variablesConcatenadas = nombre + apellido;

console.log(variablesConcatenadas);

/* Para anadir un espacio a estas variables concatenadas y que el resultado no sea "AndrésChacón" 
se puede poner un espacio en blanco (no confundir con un emply string) en medio de las dos variables. */

var concatenación = Nombre + ' ' + Apellido;

console.log(concatenación);

/* La concatenación se puede hacer directamente, sin necesidad de declarar las 2 variables. Tan solo se 
debe de escribir las 2 cadenas que queremos concatenar dentro de una variable, separadas por un simbolo de +. */

var varConcatenada = 'Andrés ' + 'Chacón';

console.log(varConcatenada);

/* Para concatenar un número junto a una variable solo ponemos nombre de variable + número,
el resultado será igual a la concatenación de 2 variables. */

var concatenaciónNumero = 'Alejandro' + 237;

console.log(concatenaciónNumero);

/* Esto de arriba funciona debido a que el intérprete lee las lineas de izquierda a derecha,
así que el número es interpretado como una cadena. */

/* Si queremos que se realice una suma de números y que el resultado de esta suma se concatene con una cadena 
podemos realizar alguna de estas 2 opciones. */

// Método #1: Encerrar la suma dentro de parentesis.

var Nombre = 'Andrés';

var sumaConcatenación = Nombre + (3 + 5);

console.log(sumaConcatenación);

// Método #2: Poner la suma primera y después la concatenación.

var Nombre = 'Andrés';

var concatenaciónSuma = 3 + 5 + Nombre;

console.log(concatenaciónSuma);

// El método 1 funciona por que el intérprete da prioridad a los parentesis antes que a la concatenación.

// El método 2 funciona por que el intérprete realiza la suma primero y la concatenación de segunda.