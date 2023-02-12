""" Una clase es una forma ordenada de agrupar datos (los atributos) y operaciones a utilizar 
sobre esos datos (los métodos). En cambio, los objetos son las instancias creadas a partir de la planti0lla generica que 
hemos creado, o mejor dicho, la clase que hemos creado."""

""" Como norma general, los nombres de las clases deben de ir escritos en mayúsculas y sus instancias
deben de ir en minúsculas. """

class Usuario:
    usuario = "Andrés"

""" Para instanciar una clase debemos de definir el nombre de la instancia, y seguidamente, llamar a la clase
como si de una función se tratara. """

usuario = Usuario()

# print(usuario)

""" Ahora bien, al momento de imprimir este código, el intérprete nos imprimirá
"<__main__.Usuario object at 0x000001B6E698F250>" como resultado. Esto nos indica que nosotros creamos una
instancia de la clase Usuario. Así que si nosotros queremos mostrar una atributo en concreto de esta clase
debemos de llamar a este atributo usando la sintaxís de usuario.usuario. Esto nos devolverá como resultado
el valor de este atributo, que en este caso es Andrés"""

# print(usuario.usuario) <-- Descomentar para probar el funcionamiento

""" Cuando creas una clase pensando en hacer de ella muchos objetos (instancias de la clase), que tendrán siempre ciertas características
en común, lo más fácil para ahorrar trabajo en la creación de cada objeto que se cree usando esa clase es que esos objetos cuando los
creas tengan unos características (propiedades) y valores (argumentos) por defecto, para no tener que asignar esas características al objeto 
cada vez que creas un objeto.

Cuando usas la función __init__ en la clase, estás definiendo las propiedades y argumentos por defecto que tendrá el objeto creado."""

""" Además, junto con nuestro __init__ debemos de poner la palabra reservada self. 
Esta palabra tiene la función de  especificar que estamos pasando el valor a los atributos de la instancia y no a la variable o argumento 
local con el mismo nombre. """

class Carro:
    def __init__(self, velocidad, cdf):
        self.velocidad = velocidad
        self.cdf = cdf
        
CarroRapido = Carro("150 km/h", "250 cdf")
CarroLento = Carro("80 km/h", "500 cdf")

# print("Los datos brindados en la primera instancia para los atributos dinamicos son:", CarroRapido.velocidad, CarroRapido.cdf) <-- Descomentar para probar el funcionamiento
print("Los datos brindados en la primera instancia para los atributos dinamicos son:", CarroLento.velocidad, CarroLento.cdf)

""" Ambas son instancias de una misma clase, solo que con diferentes atributos asignados dinamicamente usando la
palabra reservada __init__ dentro de nuestra clase Carro """

""" Además de lo visto anteriormente, es posible cambiar el valor de un atributo de nuestra instancia. Para realizar esto nada más hemos
de escribir una referencia a la variable que contiene nuestra instancia (no se si le denomina así) más el atributo al que cambiaremos 
y entre el nuevo valor y la referencia poner un símbolo de igual"""

CarroLento.cdf = "234 cdf"

""" Ahora, si imprimimos esto, veremos que el valor del atributo cdf cambió de 500 a 234"""

print(f'\n{CarroLento.cdf}')

""" Además de poder reasignar el valor de un atributo, Python también nos da la posibilidad de eliminar el atributo de una instancia. Para 
hacer esto, simplemente debemos de usar la palabra reservada "del" junto a la referencia del atributo de nuestra instancia. """

del CarroLento.cdf

""" Después de realizado esto, nos será prácticamente imposible utilizar el método "metodo", esto debido a que le hace falta un valor al
sistema para poder ejecutar correctamente el método que hemos llamado. """