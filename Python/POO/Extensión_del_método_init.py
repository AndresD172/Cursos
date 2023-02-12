""" Además de tener la funcionalidad de establecer que los atributos de una clase son dínamicos, el método __init__ tiene la opción de ser modificado
dentro de una clase heredada, brindando así la opción de crear nuevas funcionalidades que se ejecuten cuando realizamos un objeto de una instancia. """

""" Una cosa importante al extender la funcionalidad del init dentro de una clase heredada es que, al momento de escribirla, el sistema no 
ejecutará el init init de la clase padre siempre, a diferencia de no modificar el __init__. Así que, para que se ejecute por siempre, 
hemos de crear una referencia al init de la clase padre y pasarle los argumentos necesarios para que este método se ejecute correctamente. Esto
incluye la referencia al objeto, mejor conocido como self. """

""" Después de realizados los pasos anteriores, podemos agregar más funcionalidades al init sin temor a que nuestro código no se ejecute correcta-
mente. """

import time

class Padre:
    def __init__(self, numero):
        self.numero = numero

class Hija(Padre):
    def __init__(self, numero):
        Padre.__init__(self, numero)
        print("Acá hemos realizado una extensión de nuestro método __init__", numero)
        for i in range(100):
            time.sleep(1)
            print(i)

# contador = Hija(1)

""" Una palabra reservada que nos facilitará mucho el programar una extensión del init es la palabra "super".
Esta palabra reservada siempre hará referencia a la clase padre, así que nos facilitará el programar si no 
sabemos o no recordamos el nombre de la clase padre. Además, cuando usamos la palabra reservada super, no 
debemos de crear una referencia, tan solo debemos de pasar los argumentos del método. """

class HijaSecundaria(Padre):
    def __init__(self, numero):
        super().__init__(numero)
        print("Extensión del método init usando la palabra reservada super")

# super = HijaSecundaria(0)