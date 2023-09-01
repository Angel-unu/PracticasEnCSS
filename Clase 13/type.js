let nombre="Alex";

console.log(nombre);


let nombres=["Roman", "Tomas", "Carlos", "Pepe"];

console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);

/*---------- Bucle for----------
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
*/
/* SE REPITE TODO HASTA QUE DE ERROR */
    for(let contador=0; contador <2; contador=contador+1){
        console.log(nombres[contador]);
    }

//length -> largo string|array (number)
//alumnos.length -> 6
//prompt() -> el usuario pueda agregar valor | formulario