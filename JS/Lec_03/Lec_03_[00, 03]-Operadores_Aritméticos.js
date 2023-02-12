// Operadores aritmeticos en JavaScript

/* En JS contamos con 8 operadores aritméticos, estos son: adición → +, sustracción → -, multiplicación → *,
división → /, exponenciación (raíz) → **, módulo (residuo de división) → %, decremento (resta uno a una variable 
numeral) → --, incremento (agrega uno a una variable numeral) → ++ */

// Definimos las variables que usaremos para nuestros operadores aritméticos

a = 5, b = 9;

// Operador adición

let resultadoAdición = a + b;

console.log(resultadoAdición);

// Operador sustracción

let resultadoSustracción = a - b;

console.log(resultadoSustracción);

// Operador multiplicación

let resultadoMultiplicación = a * b;

console.log(resultadoMultiplicación);

// Operador división

let resultadoDivisión = b / a;

console.log(resultadoDivisión);

// Operador exponenciación

let resultadoExponenciación = a ** b;

console.log(resultadoExponenciación);

// Operador módulo

let resultadoMódulo = a % b;

console.log(resultadoMódulo);

/* Para los operadores de incremento y decremento se tienen dos variantes de operación: el 
pre-incremento/decremento y el post-incremento/decremento. */

// Operador pre-incremento (el operador antes de la variable).

let resultadoPreIncremento = ++a;

console.log(resultadoPreIncremento);
console.log(a);

// Operador post-incremento (el operador después de la variable).

let resultadoPostIncremento = b++;

console.log(b);
console.log(resultadoPostIncremento);

/* Las diferencias entre pre-incremento y post-incremento, es que, en el pre-incremento se realiza primero el 
pre-incremento y después se asigna el valor a la variable. Por ejemplo: El valor de 'a' cambia a 6 al usar el
pre-incremento y después se asigna el resultado a 'resultadoPreIncremento', dando que las 2 variables tienen
como valor un 6. En cambio, el post-incremento se agrega el valor de la variable a la nueva variable y poste-
riormente se realiza el incremento. Por ejemplo: La variable 'b' tiene el valor de 9, así que ese valor se
traspasa a 'resultadoPostIncremento' y se añade un 1 a la variable 'b', dando así como resultado que la 
variable b tiene un valor de 10 y la variable 'resultadoPostIncremento' tiene un valor de 9. */

/* Los pre-decremento y los post-decrementos tienen el mismo funcionamiento que los pre-incrementos y los
post-incrementos, pero con la diferencia que en lugar de aumentar un número, se resta un número. Por ejemplo: */

c = 2, d = 3;

// Operador pre-decremento

resultadoPreDecremento = --c;

console.log(resultadoPreDecremento);
console.log(c);

// Operador post-decremento

resultadoPostDecremento = d--;

console.log(resultadoPostDecremento);
console.log(d);

// Las expresiones matemáticas en Javascript se evaluan de izquierda a derecha.

const e = 2, f = 4;

let g = e * f;

// Sentido de evaluación: --->

console.log(g);

/* De igual manera, cada vez que nosotros introducimos 2 o más operadores en una misma expresión matemática el intérprete 
evalua la expresión siguiendo el orden de los operadores matemáticos. En ~/material_de_apoyo/PrecedenciaOperadoresJavaScript.png
se encuentra la tabla de prioridad de operadores completa. */

const h = 2;

let i = e + f * h;

console.log(i);

// Si nosotros deseamos modificar el orden de las operaciones, podemos hacer uso de los paréntesis en las expresiones.

let j = (e + f) * h;

console.log(j);