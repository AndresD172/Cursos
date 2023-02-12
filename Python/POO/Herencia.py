""" Herencia es un concepto de POO que ayuda a reutilizar el máximo código posible para ciertas cosas similares.
Con esto lo que nosotros podemos hacer es usar una clase similar a lo que nosotros queremos realizar y sobre
esta clase colocamos los métodos que estarán contenidos dentro de nuestra clase heredada. Además de esto,
herencia tambien nos permite reutilizar los métodos que estaban contenidos dentro de la clase "padre" sobre
la cual nosotros hemos heredado la lógica de nuestra nueva clase. """

""" Es posible llamar un método de la clase padre dentro de un método de la clase hija, para hacer esto hemos de llamar a nuestro método poniendo
el nombre de la clase que contiene el método que queremos invocar más el nombre del método a invocar y agregamos "self" a los parentesis que 
hemos de poner al momento de llamar a nuestra clase. Por ejemplo: Template.métodoPrueba(self)"""

class Template:
    def __init__(self, nombre):
        self.nombre = nombre

    def métodoPrueba(self):
        print(f"Hola, mi nombre es {self.nombre} y soy un método de la clase template que ha sido invocado desde la clase heredada")

class Heredada(Template):
    def métodoHeredado(self):
        print(f"Hola, mi nombre es {self.nombre} y soy un método de la clase heredada. Además puedo llamar al\nmétodo de la clase template")
        Template.métodoPrueba(self)

template = Template('Alex')

heredada = Heredada('Steve')

# heredada.métodoHeredado()

""" Además, con nuestra instancia heredada tambien podemos ejecutar el método que está contenido dentro de nuestra clase template. """

# heredada.métodoPrueba()

""" Con la herencia tambien nos es posible compartir variables entre clases sin necesidad de definirlas en nuestro __init__, para ello lo que
haremos es referenciar el nombre de nuestra variable dentro del método padre y definir la variable con el nombre de la variable que usamos en
nuestro método. Esto nos evita tener que escribir lo mismo varias veces. """

class Animal:
    def __init__(self, nombre, onomatopeya):
        self.nombre = nombre
        self.onomatopeya = onomatopeya

    def saludo(self):
        print(f"¡Hola! Mi nombre es {self.nombre}, soy un {self.tipo} y mi onomatopeya es {self.onomatopeya}.")

class Perro(Animal):
    tipo = "Perro"

class Gato(Animal):
    tipo = "Gato"

class Canario(Animal):
    tipo = "Canario"

""" Al momento de inicializar la instancia de estas clases heredadas, el intérprete tomará el valor de la variable tipo y lo asignará a la 
referencia "self.tipo" que no ha sido definida en nuestro método __init__. """

perro = Perro("Fluffy", "Ladrido")

gato = Gato("Mishi", "Maullido")

canario = Canario("Porky", "Silbido")

perro.saludo()

gato.saludo()

canario.saludo()