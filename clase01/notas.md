# Comandos básicos en Unix

### ls
listar archivos y carpetas

```shell
$ ls -a
```

### ls -a
Igual a **ls** más archivos ocultos.

```shell
$ ls -a
```

### cat
Mostrar en consola el contenido de un archivo.

```shell
$ cat miArchivo.txt
```

### mkdir
Crea carpeta.

```shell
$ mkdir nuevaCarpeta
```

### touch
Crear archivo vacio.

```shell
$ touch miArchivo.txt
```

### echo
Muestra un mensaje en consola

```shell
$ echo "Hola mundo"
  Hola mundo
```

### COMANDO > archivo.txt
Usando ">" podemos guardar el resultado de la ejecución de un commando dentro de un archivo. Si el archivo existe lo sobreescribirá. Si el archivo no existe lo creará.

```shell
$ ls > listadoArchivos.txt
```
```shell
$ echo "Hola mundo" > mensaje.txt
```

### COMANDO >> archivo.txt
Igual que el comando anterior pero este agrega contenido al archivo. Si el archivo no existe lo crea.

```shell
$ echo "Hola" >> mensaje.txt

$ cat mensaje.txt
  Hola

$ echo "Adiós" >> mensaje.txt

$ cat mensaje.txt
  Hola
  Adiós
```



Temas:

Introducción JavaScript
- ¿Qué es JavaScript y qué es EcmaScript?

Comandos básicos para Unix (bash)

Comandos básico para usar Git y Github en clase

Un vistazo sobre JavaScript: ES5  vs ES6

Convenciones de código para JavaScript (ES6+)
https://github.com/airbnb/javascript

Libros recomendados
?

medium.com
