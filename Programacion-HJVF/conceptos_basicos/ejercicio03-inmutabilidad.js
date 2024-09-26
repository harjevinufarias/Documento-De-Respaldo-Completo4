//Inmutavilidad vs mutavilidad 

//ejemplo de mutavilidad(los datos cambian)

let persona ={
    nombre: "Hector Moran",
    sexo:"Masculino",
    edad:19
};

function CambiaEdad(persona, nueva_edad){
    persona.edad= nueva_edad;
    return persona;

}

//Llamada a la funcion 
CambiaEdad(persona, 30);
console.log(persona.edad);
console.log (persona);