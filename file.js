/*Un Array normal es un contenedor que almacenara cualquier cantidad de variables que pueden ser de 
cualquier tipo pero como buenas practicas deberian ser del mismo, para llamar los elementos del
array solo se llama el indice del vector dentro de los parentesis. ejemplo: vector[0];

Un array asociativo es como una estructura en C, ejemplo:
let vector = {
    nombre : "francisco",
    edad : 26,                      Notese que no se iguala con = sino con :, no hay ; y el ultimo elemento no lleva nada al final
    escuela : "mixta"
}

para llamar el elemento debemos poner el nombre de la variable dentro del parentesis, ejemplo:
 vector[nombre];*/

 let numeros = [" 10", " 20", " 30", " 40", " 50"];

 document.write(numeros[1]);
 document.write(numeros);

 let persona = {
    nombre : " Francisco",
    apellido : " Rodriguez",
    edad : 29
 }

 document.write(persona);
 document.write(persona["apellido"]);  //llamar dentro de comillas

 document.write(`<br>El nombre de la persona es ${persona["nombre"]} y tiene ${persona["edad"]} años`);