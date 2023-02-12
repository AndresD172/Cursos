// Importamos el módulo Prompt
const prompt = require('prompt');

// Inicializamos el módulo Prompt.
prompt.start();

// Establecemos la función principal de entrada de datos, además de realizar la comprobación.
prompt.get(['Edad'], function(err, edad){
    if (edad.Edad >= 18){
      console.log('Usted es mayor de edad.');
    }

    else{
      console.log('Usted no es mayor de edad.');
    }
})