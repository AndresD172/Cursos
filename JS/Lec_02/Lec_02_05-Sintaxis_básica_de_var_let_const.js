// Sintaxis básica de var, let y const.

/* Actualmente no se recomienda el uso de var para definir variables, en cambio se usa el let para definir
 variables (que varian en su contenido) y const para definir constantes
(variables que tienen un contenido constante y que no se puede modificar). */

/* La definición de variables directamente no es una práctica recomendada, lo que se recomienda es definir
la variable primero y después asignar el valor de esta variable. */

let DefinicionNoRecomendada = 32; /* ]-> Este tipo de definción de variables no es recomendada. */

let DefinicionRecomendada;   /* |
                                |-> Este tipo de definición de variable es la recomendada. */ 
DefinicionRecomendada = 32;  // |

/* Al realizar la asignación de variables constantes, la variable se debe definir directamente. Esto es debido
a que las variables constantes no se pueden modificar después de haber sido definidas. */

const variableFija = 32;
