/** 
 * En Javascript, al igual que Python, los arrays guardan los elementos bajo un identificador de memoria o índice de elemento 
 * dentro de la lista. Dicho identificador representa la posición del elemento dentro de la lista y, a diferencia de la numera
 * ción tradicional, inicia contando los elementos desde el número 0.
 * 
 * Para acceder a los elementos de un array previamente definido, debemos saber nosotros la posición del elemento dentro de la
 * lista y, seguidamente, usar la sintaxís 'array[i]', donde la variable i representa la posición del elemento. Esto nos retor
 * nará el valor que se encuentra en dicha posición.
 * */ 

const array = ['Hola! Soy el valor alojado en la posición 0','Hola! Soy el valor alojado en la posición 1','Hola! Soy el valor alojado en la posición 2'];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

/**
 * Otra manera de recorrer los elementos de un array sin tener que especificar el valor del índice es usando el bucle for.
 * Si recordamos de la sección pasada, el bucle for utiliza una variable para almacenar el valor que se usa en el contador
 * condicional. Así que nosotros podemos aprovechar dicha variable y usar el valor que tome en cada iteración como si fuera
 * el valor del índice del array que queremos consultar. 
 */

const newArray = ['Andrés','Andrea','Emma','Diego','Allan','Carlos','Dayra'];

for (let i=0; i<=6; i++) {
    console.log(`Este es el elemento ${i}, el cual tiene el valor de ${newArray[i]}`);
};