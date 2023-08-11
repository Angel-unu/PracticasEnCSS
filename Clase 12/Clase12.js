/*
Hacer la operacion (usar los operadores)
para que compare que el dia de la semana sea Lunes y que el clima sea distionto a "soleado"
*/

// - operadores logicos (&&)
// - operadores de comparacion ( igual === y el distinto)

let dia = "lunes";
let clima = "soleado";

dia === "lunes" && clima !== 'soleado'; //false

// otra manera mas...

dia === "lunes" && (clima === 'lluvioso' || clima === 'ventoso'); //false


/*---------------------IF|ELSE------------------------*/

//Evaluamos ua situacion y segun su resultado, si se comple o no esa condicion o situacion, hago una accion o no | booleanos

//if/else -> si/sino

//Estructura

/*
if (condicion){
    accion/es a realizar si se cumple la condicion
}else{
    accion/es a realizar si No se cumple la condicion
}
*/

//Ejemplo: si es temprano, duermo un poco, siono me levanto

let horario=12;

//
if(horario < 11){
    alert("Entramos en el if");
    console.log("Puedo dormir un poco mas..");
}else{
    alert("entramos en el else")
    console.log("arriba que se hace tarte!")
}

//si compro mas de 5 particulos le hago un descuento del 10%

//variable articulo -> numero con la cantidad de articulos que quiere comprar

let totalPrecio=1000;
let articulo=6;

if(articulo>5){
    totalPrecio=totalPrecio-totalPrecio*0.1;
    console.log(totalPrecio);
}

//switch
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

//Dia de la semana

let diaDeLaSemana="Jueves"

switch (diaDeLaSemana) {
    case "Lunes":
break;
    case "Martes":
        console.log("Amarrillo");
break;
    case "Miercoles":
        console.log("Verde");
break;
    case "Jueves":
        console.log("Azul");
break;
    case "Viernes":
        console.log("Violeta");
break;
    default:
        console.log("El dia que ingreso no corresponde");
        break;
}