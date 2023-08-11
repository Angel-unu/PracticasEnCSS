//Operaciones

//Sumas (+)

let num=2;
let num2=4;
let resultado;

resultado=num+num2;

//console.log(resultado);

//Resta (-)

let Num=4;
let Num2=6;

let resultado2=Num-Num2;

//console.log(resultado2);

//Multiplicacion ( * )

let Num3=4;
let Num4=4;

console.log(Num3*Num4);

//Math - Objeto - hermamienta que nos da JS para hacer cosas matematicas mas complejas 

//Division ( / )

let di=4;
let divi=6;
let resul;

resul=divi/di;

//console.log(resul);

//De comparacion

//mayor (>) Menor (<) ; Mayor igual (>=) - menor (<=) 

//para que sea correcto -> numeros
//si no tiene el igual no contempla cuando son el mismo numero

console.log(50<20); //true

let letrasNombre="Carla";
let letrasNombre2="Santiago";

console.log(letrasNombre.length>=letrasNombre2.length);//true

//length -> largo ; herramienta que nos da JS para saber el largo de algo
//En strings nos devuelve la cantidad de caracteres que tiene.
//dato.lengths

console.log(letrasNombre2.length);

//---------------------------------------------------

//----------Doble igual (==)  -> Comparando el valor (No se fija en el tippo de dato)-----------

let numero2="25";

//numero2=25; cambio el contenido de la variable a 25;

//            "25"  == 25
console.log(numero2 == 25); //comparando si el valor de la variable es igual a 25

console.log("hola" == "Hola")//false -> Por que una esta escrita con la primer letra en mayuscula y la otra no

let usuarioAdministrador="Admin1";
let usuarioAdministrador2="Admin1";

console.log(usuarioAdministrador==usuarioAdministrador2);

// Triple igual (===)  -> Comparar el tipo de dato y su valor

//          EL PORQUE ES FALSA: 
//              "25"=== 25
// VALOR        25 === 25 -> true
// TIPO     string === number -> false
console.log(numero2 === 25);// false

//Distino ( != ; !== ) !(no)

console.log(numero2 != 120); //true -> compara si numero2 es distinto de 120

let admin=true;

admin !==true; //lo dejo entrar a pantallas de usuario

//ejemplo
let carrito =0;
//nuevo valor de carrito es lo que ta teniamos mas 1

carrito=carrito -1;
carrito =carrito -1;

console.log(carrito);

carrito != 0;

//null undefined 

let ClaveAntigua="JuanitoCapo1";

let claveNuevo="pepe123";

claveNuevo !== ClaveAntigua;

//-----------------------------------

//Logico

//AND 'Y' && -> ambas condiciones se cumplan para que me de un resultado 'true'

let numero3=123;

//             true   &&      true
console.log(numero3>4 && numero3 === 123);//true

//             false     &&         true
console.log(numero3 < 20 && numero3 === 123);//false

//Ejemplo: Usuario y contraseña

let usuario_1="JuanCarlos";

let passwordRequistrada="Usuario123";

let UsuarioIngresado="JuanCarlos";
let passwordIngresada="Usuario123";


//para que pueda ingresar : el usario y la contraseña que ingrese tiene que ser la misma

console.log(UsuarioIngresado === usuario_1 && passwordIngresada === passwordRequistrada);

//OR -> "o" || -> con que una de las operaciones se cumpla, ya nos devuelve 'true'

numero2 > 200 || numero2 !=0;


//Ejemplo: Entradas a una pelicula para mayores de edad

let edadUsuario=17;
let chaperon = true;

edadUsuario>=16; //operacion para ver si podemos o no vender la entrada
//No se cumple si ninguna de las 2 te da verdadera

chaperon === false;

//                  true       O        false
//              17      >=16   O  false   ===   true
console.log(edadUsuario >= 16 || chaperon === true );//true

//NOT (!) -> "no" -> meda el opuesto al resultado del operador | siempre que no se cumpla la operacion me va a dar true

let valor='bla';

console.log(!(valor == undefined));

//Ejemplo si el usuario no esta registrado, no lo dejo entrar

let usuarioRegistrado=true;

//  !           true  ->  false
//  !           true   ==   true
    !(usuarioRegistrado == true); //te la el opuesto del
//                                resultado por el signo de (!)

console.log(!true); //false

