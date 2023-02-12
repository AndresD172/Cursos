/**
 * En el ciclo Do While, al contrario que en el ciclo While, primero se ejecuta el bloque de código y después se pregunta por
 * la condición del while.
*/

let valContador = 0;

// Bucle while común.
 
while (valContador <= 20) {
 console.log(valContador);
 valContador++;
};

// Bucle Do while

do {
  console.log(valContador);
  valContador++;
} while (valContador <= 20);