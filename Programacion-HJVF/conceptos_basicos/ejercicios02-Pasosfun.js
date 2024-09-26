//Pasos de funciones como argumento (parametros)
/*


//en esta funcion se pasan variables 
funcions ejemplo(nombre, edad)
{

}
*/

function Saludos(nombre)
{
    return `Bienvenido ${nombre}`;
    //retorna la cadena "Bienvenido Chenoa"
}

function Mensaje(nombre)
{
    return `${nombre}, ya eres estudiante de la Puce Esmeraldas`;
}

function PasoFuncionParam(nombre,funcionSaludos)
{
    //console.log("Esta funcion recibe una funcions como parámetro");
    console.log(funcionSaludos(nombre));
}

//Llamada a la funcion que recibe como parametro otra funcion
PasoFuncionParam("Carlos", Saludos);
PasoFuncionParam("Carlos", Mensaje);