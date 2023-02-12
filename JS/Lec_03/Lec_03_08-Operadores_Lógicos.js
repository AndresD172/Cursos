/* El operador AND es representado con un doble ampersand (&&) y nos ayuda a evaluar una doble expresión booleana dentro de 
una misma linea de código, retornando un valor booleando. Este operador es especialmente útil al momento de analizar expre-
siones en las estructura de control (if y elif), permitiendo saber si 2 condiciones dadas se cumplen.

Para que este operador nos retorne un valor True, ambas condiciones dadas deben de cumplirse o retornar un True. Si una de
las 2 no cumple la condición y retorna un valor False, dicho operador automáticamente tomará un valor False y lo retornará
de dicha manera. */

let a = 10;
let b = -11;

const valMax = 10, valMin = 0;

// El valor "a" cumple con las 2 condiciones.
if (a >= valMin && a <= valMax){
    console.log(`${a} se encuentra entre el rango de valores permitidos.`);
}

else{
    console.log(`${a} no se encuentra entre el rango de valores permitidos.`);
}

// El valor "b" no cumple con la condición de "b <= valMax".
if ( b >= valMin && b <= valMax ){
    console.log(`${b} se encuentra entre el rango de valores permitidos.`);
}

else{
    console.log(`${b} no se encuentra entre el rango de valores permitidos.`);
}

/* Por su parte, el operador OR es representado con doble barra vertical (||) y nos evalua si una de las 2 expresiones dadas
son True, retornando True si alguna de las 2 expresiones son True. */

if (a <= valMax || a >= valMin){
  console.log("Una de las 2 expresiones es verdadera.");
}

else{
  console.log("Ninguna de las 2 expresiones es verdadera.");
}

if (b == valMax || b >= valMin){
  console.log("Una de las 2 expresiones es verdadera.");
}

else{
  console.log("Ninguna de las 2 expresiones es verdadera.");
}
