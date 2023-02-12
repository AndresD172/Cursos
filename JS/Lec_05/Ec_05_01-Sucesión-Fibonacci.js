/**
 * La sucesión de Fibonacci, descrita originalmente por Leonardo de Pisa (más conocido como Fibonacci), es una sucesión infinita
 * donde los números de la sucesión son dados por la suma de los dos anteriores términos de la sucesión. Esta sucesión es amplia-
 * mente utilizada en las Ciencias de la Computación, Teoría de Juegos y la Matemática en general.
 * 
 * Como se mencionó antes, la sucesión viene dada por x_n = x_n-1 + x_n-2. 
*/

function Fib(n) {
  
  let a = 0, b = 1;

  for (let i = 0; i <= n; i++) {
    if (n <= 2) {
      return 1;
    } else {
      c=b+a;
      a=b;
      b=c;
    };
  };

  return b-a;

};

console.log(Fib(10));