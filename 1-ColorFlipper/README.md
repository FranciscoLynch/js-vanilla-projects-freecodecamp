# VanillaJavascript-ColorFlipper

Simple Javascript vanilla project to practice


Bueno, con este proyecto lo que se pretende hacer es una pagina con la cual, al apretar un boton, nos aparezca un color y su valor, ya sea simple o hexadecimal. 

Una pagina con un boton que al clickearlo nos muestre un color y su valor. 

Como lo hacemos? 

Bueno, primero debemos saber que el sistema hexadecimal es un codigo de 6 simbolos formado por hasta tres elementos de 2 símbolos. Cada uno de los elementos de 2 símbolos expresa un valor de color de 0 a 255.

- Elemento 1 (2 simbolos): Valor rojo
- Elemento 2 (2 simbolos): Valor verde
- Elemento 3 (2 simbolos): Valor azul 

Pues bien, cada par de caracteres perteneciente a cada color se basa en esta escala formada por 16 caracteres (10 números y 6 letras): 

                0 1 2 3 4 5 6 7 8 9 A B C D E F

0 es la mínima presencia del color, y F es 15 veces esa mínima presencia. Es decir, cuánto más arriba en la escala esté la cantidad de rojo, verde o azul seleccionada, ese color añadido a la mezcla será más brillante. Por el contrario, cuanto más abajo, el color estará más saturado.

El primer carácter de cada par es el que más influye en la ecuación, para hacer una lectura a ojo, es más útil fijarnos en él que en el segundo. 

Porque tenemos que saber esto? Para saber como vamos a "formar" los colores al clickear el boton. 


Primero necesitamos establecer una constante con los valores del sistema hexadecimal para poder usarlos e ir agregandolos en la pagina. 

Despues necesitamos obtener del html el boton y la etiqueta que mostrara el valor del color en hexadecimal. 

Luego lo que hacemos es crear una funcion que nos devuelva un numero aleatorio entre 0 y la longitud maxima de la constante con los valores del sistema hexadecimal.
Esto es para al momento de crear el color, ir tomando uno por uno los valores de la constante. 

Luego de esto agregamos a la variable que tiene el valor del boton para que escuche ante un evento. Cuando se haga click sobre el boton, lo que queremos es, a partir de la funcion creada anteriormente, generar el codigo hexadecimal y mostrarlo por la pagina. 
 
