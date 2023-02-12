// Importamos el módulo Prompt
const prompt = require('prompt');

// Inicializamos el módulo Prompt.
prompt.start();

// Establecemos la función principal de entrada de datos, además de realizar la comprobación.

prompt.get(['val_a'], function(err, entrada){
    if (entrada.val_a % 2 == 0) {
      console.log(`${entrada.val_a} es un número par.`);
    }
    else{
      console.log(`${entrada.val_a} no es un número par.`);
    }
});
    
