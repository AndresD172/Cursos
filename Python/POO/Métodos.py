""" De forma simple, un método es una función que «pertenece a» un objeto. O mejor dicho, un método es accion o función que puede realizar un
objeto. """

""" Lo primero que debemos de crear es una función dentro de nuestra clase, que será el método a realizar. Está función debe de tener  
rgumentos definidos, lo único que necesita es tener la referencia self para poder utilizar los atributos de la clase. """

class Método():
    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido

    def metodo(self):
        print(f"Hola, mi nombre completo es: {self.nombre} {self.apellido}")

""" Esta sencilla clase contiene el método "metodo", que imprime los atributos (en este caso el nombre y apellidos) de la clase en la que está
contenido nuestro método. """

""" Ahora, para llamar a nuestro método y que se ejecute correctamente debemos de iniciar una instancia de nuestra clase y posteriormente 
usar la sintaxís .metodo() para ejecutar este método. """

metodo = Método('Andrés Darío', 'Chacón Mora')
metodo.metodo()

""" El método usado anteriormente nos imprime el resultado de self.nombre más self.apellido. Recordemos que estos atributos son dinámicos, y por
lo tanto debemos de definirlos al momento de inicializar nuestra instancia. """

""" Típicamente el self es la palabra más difundida al momento de realizar una referencia a los atributos de una clase, pero ésta palabra
puede ser cualquier otra, quedando esto a la decisión del desarrollador. Esta es una acción que, aunque es valida, no es muy recomendable realizar
debido un tema de legibilidad de código de cara a desarrolladores que están leyendo el código por primera vez. """

class Word:
    def __init__(self, número, letra):
        self.número = número
        self.letra = letra

    def metodo(word):
        print(f"\nEste es un ejemplo de que se puede usar cualquier palabra para hacer referencia a un atributo de la clase.\n{word.letra} {word.número}")

word = Word(8, 'a')
word.metodo()

""" Además de poder reasignar el valor de un atributo, Python también nos da la posibilidad de eliminar el atributo de una instancia. Para 
hacer esto, simplemente debemos de usar la palabra reservada "del" junto a la referencia del atributo de nuestra instancia. """

del word.letra
# word.metodo()

""" Después de realizado esto, nos será prácticamente imposible utilizar el método "metodo", esto debido a que le hace falta un valor al
sistema para poder ejecutar correctamente el método que hemos llamado. El error mostrado por la consola 
es: AttributeError: 'Word' object has no attribute 'letra'. """

""" Y por último, Python nos ofrece la posibilidad de eliminar un objeto. Para hacer debemos escribir del más la referencia global de nuestro objeto"""

del word
word.metodo()

""" Al momento de ejecutar nuestro método, el intérprete nos mostrará el error: "NameError: name 'word' is not defined" debido a que el
objeto word no existe. """