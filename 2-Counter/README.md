# VanillaJavascript-Counter

Simple Javascript vanilla project to practice

Una pagina con un contador manual que pueda disminuir, reiniciar o aumentar el contador. 

Al ser menor que 0, el contador se muestra en rojo. Al ser mayor, en verde.

Primero establecemos una variable que va a ser la que lleve el conteo, la inicializamos en 0. 

luego obtenemos del html el valor de la etiqueta que tiene el conteo y los botones.

Por cada click a uno de los 3 botones, queremos añadir un evento que escuche a esto, y que verifique si la clase del boton es decrease, reset o increase. Dependiendo de esto se reiniciara, restara o sumara 1 al conteo y cambiara de color dependiendo de si es menor, igual o mayor a 0. 
