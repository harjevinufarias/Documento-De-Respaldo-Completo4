//transaformacion de datos con reduce 
const edades =[20,10,42,64,22,30,25,17,29,40,79,58,6,36];

const edadMaxima =edades.reduce( (max , edad)=>{
    if (edad> max)
        return edad;
    else
     return max;
},0);
console.log("La edad mayor es: ",edadMaxima);



//Encuentre el valor menor de las temperaturas siguientes:
const temperaturas =[25,20,26,28,19,17,22,31,32,25];

const temperaturaMinima = temperaturas.reduce ((mini, tempe)=>{
    if (tempe<mini)
        return tempe;
    else
    return mini;
});
console.log("La teperatura minima es de:", temperaturaMinima);



//Encuentre el valor menor de las temperaturas siguientes:
const temperaturas2 =[25,20,26,28,19,17,22,31,32,25];

const temperaturaMinima2 = temperaturas2.reduce (function(mini, tempe){
    if (tempe<mini)
        return tempe;
    else
    return mini;
});
console.log("La teperatura minima v2 es de:", temperaturaMinima2);




//Encuentre el valor menor de las temperaturas siguientes:
const temperaturas3 =[25,20,26,28,19,17,22,31,32,25];

function GetempeMenor(mini, tempe){
    if (tempe<mini)
        return tempe;
    else
    return mini;
}

const temperaturaMinima3 = temperaturas3.reduce (GetempeMenor);
console.log("La teperatura minima v3 es de:", temperaturaMinima3);


