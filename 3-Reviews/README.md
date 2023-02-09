# VanillaJavascript-Reviews

Simple Javascript vanilla project to practice

Creara una pagina con una seccion de reseñas. Se mostrara de a una sola y se podran ir viendo las diferentes clickeando dos flechas, de izquierda o menor, y derecha o mayor. 

La reseña tiene una foto de la persona, su titulo o profesion debajo, una descripcion, las flechitas para cambiar de reseña y un boton que diga "surprise me" que mostrara una reseña aleatoria. 


Creamos un array que contenga 4 objetos con el id, el nombre, el trabajo, una imagen y un texto. 

Obtenemos del html las etiquetas correspondientes a la imagen, al autor, al trabajo, a la info/texto, y a los 3 botones, el de previo, el siguiente y el de surprise me. 


Declaramos una variable que sera de la reseña inicial con el valor de 0. 


Creamos una funcion que sera la que muestre a la persona o la reseña, y sera la que ira actualizando/cambiando la info de esta dependiendo del boton que se presione. 

Ahora, para cada boton debemos agregar para que escuche a los eventos. Dependiendo del boton vamos a sumarle o restarle 1, o que genere un numero aleatorio teniendo como maximo la longitud del array con las reseñas; a la variable que declaramos al principio para decir que reseña se va a mostrar. 

Por ultimo, llamamos al objeto window y le agregamos para que cuando se cargue el contenido del DOM muestre una reseña. 

window.addEventListener('DOMContentLoaded', () => {
    showPerson()
})


