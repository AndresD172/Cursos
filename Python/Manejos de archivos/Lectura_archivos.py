''' Para abrir un archivo txt con Python hacemos uso de la función integrada Open(). Al abrir un archivo con la 
función integrada open() lo que hacemos es crear un objeto de la clase TextIOWrapper, así que para poder leer el 
contenido del archivo debemos llamar al método .read de la clase TextIOWrapper.'''

a = open('Archivo_prueba.txt')

# print(a.read())

''' Los archivos en Python siguen una jerarquía de permisos para su lectura, escritura y ejecución. Esta jerarquía
es la misma utilizada en los sistemas Unix, tales como GNU/Linux y sus derivadas.'''

''' El primer permiso que se puede aplicar a un archivo usando la función open es el permiso de lectura. Este permiso
es representado con una 'r' y se coloca como un string separado por una coma de la ruta donde nosotros indicamos que
se encuentra el archivo, la función open usa el permiso de leer predeterminadamente.'''

p_r = open('Archivo_prueba.txt', 'r')

# print('Este archivo ha sido abierto usando el permiso read\n', p_r.read())

''' Otro permiso que nosotros podemos colocar a un archivo y que no pertenece a la jerarquía de permisos de Unix es el
permiso 'append', que se escribe con una 'a'. Este permiso nos permite añadir texto a un archivo, sin tener que modifi-
car completamente el contenido del archivo. Dicho de una manera más fácil, el permiso append nos permite añadir más texto
al final del archivo.'''

p_a = open('Archivo_prueba.txt', 'a')

