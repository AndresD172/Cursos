/* JavaScript es sensible a las mayúsculas y minúsculas, pero, ¿qué quiere decir esto? Esto quiere decir que
para JavaScript los nombres de las variables pueden ser iguales, pero si una letra en una variable es 
mayúscula y en la otra variable no, el intérprete reconocerá a las 2 variables por separado. */

let variableDiferente = 1;

let variablediferente = 2;

/* Al iniciar este código mediante Quokka se puede ver que las 2 variables son diferentes a pesar de que tienen
el mismo nombre. */

console.log(variableDiferente);

console.log(variablediferente);

/* Esto es importante debido a que cuando se definan funciónes o cualquier otra cosa se debe escribir el nombre
tal y como fue definido, si no el intérprete nos puede dar un error. */

/* Ahora que este concepto fue definido podemos ir a las reglas que se deben de tomar en cuenta al nombrar una
variable. */

/* La primera regla que debemos de tener en cuenta es que, al nombrar una variable, no se debe de nombrar la
variable iniciando con un número, por ejemplo: */

//let 1variable;  -> Esta definición nos dará un error debido a que su nombre inicia con un número.

let variable1; // -> Esta definición no nos dará un error debido a que su nombre inicia con una letra. 

/* Los únicos valores permitidos al iniciar el nombre de una variable son: letras en mayúsculas y minúsculas,
guiones bajos (_) y el simbolo de dólar ($). Despúes de haber escrito la primera letra del nombre de la variable
se pueden escribir todo tipo de simbolos a excepción de carácteres especiales. Por ejemplo: */

// let _1variable; -> Esta permitido

// let $1variable; -> Esta permitido

// let variable1; -> Esta permitido

// let 1variable; -> No esta permitido

/* Otra regla que se deben de seguir al iniciar una variable es que no se deben de usar las palabras reservadas
(keywords) para nombrar una variable, estas palabras son: */

/*
- abstract 
- break
- char
- debugger
- double
- export
- finally
- goto
- in
- let
- null
- public
- super
- throw
- try
- volatile
- arguments
- byte
- class
- default
- else
- extends
- float
- if
- instanceof
- long
- package
- return
- switch
- throws
- typeof
- while
- await
- case
- const
- delete
- enum
- false
- for
- implements
- int
- native
- private
- short
- sychronized
- transient
- var
- with
- boolean
- catch
- continue
- do
- eval
- final
- function
- import
- interface
- new
- protected
- static
- this
- true
- void
- yield
*/