//inmutabilidad vs mutavilidad

//ejempplo de enmutavilidad (los dosatos no cambian)

let persona ={
    nombre:"Hector Moran",
    sexo:"Masculino",
    edad:30
};

const CambiaEdad= function(persona, nuevaEdad)
{
    return Object.assign({},persona,{edad: nuevaEdad});
};

console.log("Edad dentro de la funcion: ", CambiaEdad(persona,24).edad)
console.log(persona)