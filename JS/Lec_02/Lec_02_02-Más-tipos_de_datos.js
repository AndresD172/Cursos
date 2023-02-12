// Más tipos de datos en JavaScript.

// Tipo de datos booleanos, más conocidos como banderas:

var bandera = true;

console.log(bandera);

// Al usar "typeof" el programa nos devolverá "boolean" como resultado:

console.log(typeof bandera);

// Tipo de dato function (función):

function función(){}

console.log(función);

// Tipo de dato simbolo:

var simbolo = Symbol('Simbolo')

console.log(simbolo)

// Tipo de dato clase:

class clase{
    constructor(nombre, apellido){
        this.apellido = apellido
        this.nombre = nombre
    }
}

console.log(clase);

// Tipo de dato indefinido. Se puede asignar directamente a una variable:

var x;

console.log(x);

x = undefined;

console.log(x);

// Tipo de dato null ( null = ausencia de valor). Null es un objeto:

var ausencia = null;

console.log(ausencia);

console.log(typeof ausencia);

