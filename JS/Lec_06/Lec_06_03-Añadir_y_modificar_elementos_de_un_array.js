/**
 * Para modificar los valores de un array debemos usar la siguiente sintaxís:
 * 
 * array[i] = val
 * 
 * Donde 'array' representa el nombre del array, '[i]' representa el índice del elemento que deseamos cambiar y 'val' el nuevo
 * valor que le vamos a dar al elemento almacenado en dicho índice.
 */

// Array sin aplicar el cambio de valor.
const arr = ['Hola, mi nombre es Andrés','Hola, mi nombre es Andrea'];
console.log(arr[0]);

// Array al aplicar el cambio de valor.
arr[0] = 'Hola! Mi nombre es Diego y estoy ocupando la posición que le correspondía a Andrés';
console.log(arr[0]);

/**
 * Si deseamos agregar elementos a un array debemos usar el método .push(). Los elementos ingresados con esta función
 * automáticamente son añadidos al final del arreglo.
 */

arr.push('Hola! Mi nombre es Marcela y estoy colocada al final de la lista');
console.log(arr[2]);

/**
 * Si recordamos de la lección pasado, el atributo array.lenght nos retornaba el tamaño del array. Por lo que si teníamos un array
 * de 4 elementos, nos retornaba 4 como el valor del tamaño del array. Pues bien, podemos usar esto mismo para añadir elementos
 * a un array. 
 * 
 * Nosotros podemos tomar el valor retornado por el atributo lenght para definir un nuevo espacio en la lista, esto debido a que 
 * el valor de lenght está incrementado en uno con respecto a los índices del array. POr lo que si tenemos un array de 4 elemen-
 * tos, el cuarto elemento vendría a tener el índice correspondiente a array-1.
 */

arr[arr.length] = 'Hola! Mi nombre es María y tomo el espacio en el array correspondiente al tamaño del array disminuido en uno';
console.log(arr.length);
console.log(arr[arr.length-1]);

/**
 * Por último veamos un par de métodos que nos ayudarán a añadir elementos en diferentes partes del array:
 * 
 * 1) unshift(itemN) => Añade elementos al principio del array. 
 * 
 * > El argumento itemN indica los valores que serán añadidos al array.
 * 
 * 2) splice(start, deleteCount, itemN) => Añade elementos en una posición dada del array. 
 * 
 * > El valor de start_position indica el índice a partir del cual nosotros queremos que los nuevos elementos sean añadidos en el 
 * array.
 * > El segundo argumento, deleteCount, indice el número de elementos en el array que se removerán desde el inicio. Si deleteCount
 * es omitido, o si su valor es mayor o igual que el número de elementos después de la posición indicada por start, todos los 
 * elementos desde start y hasta el final del array serán eliminados, debido a que un valor 'undefined' es convertido a un 0.
 * 
 * Si deleteCount es negativo o 0, ningún elemento será removido. In este caso se debería especificar al menos un nuevo elemento.
 * > El argumento itemN indica los valores que serán añadidos.
 */

const countries = ['USA','Japan','China','North Korea'];

// Añadimos un elemento al inicio de la lista con el método unshift.

countries.unshift('England');
console.log(countries);

// Añadimos un elemento entre el índice 1 y 2.

countries.splice(2, 0, 'Spain', 'Morocco');
console.log(countries);

/**
 * Un inconveniente que podemos presentar es que si nosotros queremos saber si un array es, en efecto, un array, la palabra 
 * reservada 'typeof' no nos ayudará en esto, ya que el array no es más que un objeto. Por lo tanto, debemos usar el método
 * Array.isArray para solventar esta necesidad. Cómo argumento a esta función debemos darle el nombre de la variable que esté
 * relacionada con el array que deseemos evaluar, retornándonos True o False dependiendo del caso.
 */

console.log(Array.isArray(countries));

