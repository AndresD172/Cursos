/* El operador ternario nos ayuda a retornar un valor en base al valor que nos retorne una expresión lógica. Este operador
consta de 3 partes: 

1. La expresión lógica
2. Valor a tomar en caso de que el resultado sea verdadero.
2. Valor a tomar en caso de que el resultado sea falso.

Para utilizar este operador debemos seguir la siguiente síntaxis: expresionLogica ? valorCasoVerdadero: valorCasoFalso. */

const prompt = require('prompt');

prompt.start();

prompt.get(['val_a'], function(err, entrada){
  let evalExpresion = entrada.val_a % 2 == 0 ? `${entrada.val_a} es un número par.`: `${entrada.val_a} no es un número par.`;
  console.log(evalExpresion);
});
