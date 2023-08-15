//arrays -> vectores, listaas
//[dato,dato]

//indice ??
//array [indice]

let edad=12;
let un_nombre="Martina";

//indice         1      2       3       4       5
const nombres=["Juan","Jose","Carla","Marta","Esteban",un_nombre,edad,true]//Array

console.log(nombres);

////console.log(nombres[5])//me trae por consola al dato que esta en el indice 1

const alumnos=[]

//metodos

//agrego items a la lista

//array.push(valor) -> agrega al final de la lista

alumnos.push("Sole","Santiago");//Tiene un orden
alumnos.push("Manuel");

//array.unshift(valor -> agrega al inicio de la lista, camba los indices que tenian

alumnos.unshift("Carla");//No tiene un orden 

console.log(alumnos);
console.log(alumnos[2]);

//Sacar items

//array.pop () -> saca el ultimo item y si quiero puedo guardarlo en una variabole o no

let manuel=alumnos.pop();//saco a Manuel
alumnos.pop();
//array.shift() -> saca el primer item
let carla=alumnos.shift();
alumnos.shift();

//
//splice(indice,cantidad,nuevoValor)

//alumnos.splice(3,1) saca al item de indice 3

alumnos.splice(1,1,"Damian");

console.log(alumnos);
console.log(manuel,carla);


//Ejemplo, comprar ropa por web

let productos=["pantalones",'remera','zapatilla'];
let totales=[200,400,10,50,800];

productos.splice(1,1);
console.log(productos);
totales.splice(4,1,400);
console.log(totales );

//primpt () -> funcion nativ de JS
//Para escribir en el NAVEGADOR
//let algo=prompt("escriba algo");
//console.log(algo);

let nuevo_nombre=prompt("Ingrese el numbre del alumno: ")

//agregar a la lista de alumnos 

productos.push(nuevo_nombre);//con este a la variable se le asigna el valor que ingresa el usuario

console.log(productos);//muestra en pantalla el nuevo nombre que ingreso el usuario