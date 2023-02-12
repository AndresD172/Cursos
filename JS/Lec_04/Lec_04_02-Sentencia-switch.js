/** 
* En términos sencillos, la sentencia switch es usada para tomar decisiones en funcion de distintos valores de una variable. 
* Esta sentencia realiza una comparación estricta del tipo de valores. Así que, al usar esta sentencia, los tipos de datos de
* la sentencia y los disparadores de los casos deben coinicidir.
*/

let sentencia = 1;

let valPredeterminado = 'Valor desconocido';

switch (sentencia) {
  case 1:
    valPredeterminado = 'Lunes';
    console.log(`Hoy es ${valPredeterminado}`);
    break;
  case 2:
    valPredeterminado = 'Martes';
    console.log(`Hoy es ${valPredeterminado}`);
    break
  case 3:
    valPredeterminado = 'Miércoles';
    console.log(`Hoy es ${valPredeterminado}`);
    break
  case 4:
    valPredeterminado = 'Jueves';
    console.log(`Hoy es ${valPredeterminado}`);
    break
  case 5:
    valPredeterminado = 'Viernes';
    console.log(`Hoy es ${valPredeterminado}`);
    break
  case 6:
    valPredeterminado = 'Sábado'
    console.log(`Hoy es ${valPredeterminado}`)
    break
  case 7:
    valPredeterminado = 'Domingo'
    console.log(`Hoy es ${valPredeterminado}`)
    break
  default:
    console.log(valPredeterminado)
    break;
};

let nuevaSentencia = '1';

switch (nuevaSentencia) {
  case 1:
    console.log('Hoy es lunes');
    break;
  default:
    console.log('Los tipos de datos no coinciden, por lo que directamente son enviados a acá.')
}
