/**
 * Las labels en JS, aunque no son recomendadas para usar, nos ayudan a indicar que parte del código se ejecutará cuando el
 * bucle en el que estamos sea reiniciado por la palabra reservada "continue". 
 */

inicio:

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue inicio;
  };

  console.log(i);
};