/**
 * La palabra reservada "Break" nos ayuda a detener o "romper" un ciclo en ejecución cuando una condición dada se cumpla. Por lo 
 * general es usada cuando tenemos que enfrentarnos a bucles infinitos. Por otro lado, la palabra reservada "Continue" nos ayuda
 * a continuar con la ejecución del bucle, saltando a la siguiente iteración sin evaluar las instrucciones que se encuentren 
 * después de dicha instrucción.  
*/

let counter = 0;

while (true) {
  counter++;
  console.log(counter);

  // Interrumpe el bucle al llegar al número 10
  if (counter == 10) {
    break
  };
};

for (let i = 0; i <= 100; i++) {
  console.log(i);

  // Verifica si el bucle ha llegado a 50. Si el caso se cumple, el bucle se rompe; sino ha llegado a 50, el bucle continua.
  if (i == 50) {
    break
  }
  else {
    continue
  };
};