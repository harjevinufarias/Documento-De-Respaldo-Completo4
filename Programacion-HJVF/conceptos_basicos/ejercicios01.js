
//Diseño de una funcion en programacion estructurada.
function Saludos(nombre, edad)
{
    //console.log("Bienbenidos"+ nombre);
    console.log(`Bienbenido ${nombre}, tu edad es ${edad} años`);
}

Saludos(" Juan Alverto", 30);
Saludos(" Marta Alsivar", 19);

//diseño de fucion en programacion funcional
const DiHola=function(nombre, edad)
{
    console.log(`Bienbenido a la PUCESE ${nombre}, tu edad es ${edad} años`);
}

DiHola("Carlos Moreno",14);
DiHola("Josue Enrrique",20);

//diseño de fucion en programacion funcional- usando funcion de flecha (funcions anónimas)
var mensaje =(ciudad, temperatura)=>
{
    console.log(`En la ciudad ${ciudad} la temperatura promedio es ${temperatura} grados centigrados`)
};
mensaje("Esmeraldas",28);
mensaje("Quito", 16);

//Funciones dentro de un objetos 
const estudiante ={
    nombres: "Juan carlos",
    apellidos:"Prias Enrrique",
    edad: 29,
    imprime(nombres, apellidos,edad)
    {
        console.log(`PUCESE: ${nombres} ${apellidos} tu edad es ${edad} años`)
    },
    imprime2:(edad)=> 
        {
        if(edad>= 18)
            console.log("Eres mayor de edad.");
        else
            console.log("Esres menor de edad.")
    }
};
console.log("Datos del estudiante:", estudiante.nombres);
estudiante.imprime(estudiante.nombres, estudiante.apellidos, estudiante.edad);
estudiante.imprime2(estudiante.edad);

//Funciones dentro de los arreglos
const actividad=[
    "Estudiar el dialogo en ingles",//Indice 0
    "Parcticar los ejercicios de matematicas",//Indice 1
    "Escuchar el audio libro de motivacion personal",//Indice 2
    function (){ //Indice 3
        console.log(this[0]);
    },
    10, //Indice 4
    11,  //Indice 5
    12,  //Indice 6
    (valor, otroValor )=>{   //Indice 7
        console.log ("Elvalor es", valor + otroValor);
    }

];
console.log(actividad[1]);
console.log(actividad[2]);
actividad[3]();
actividad[7](15, actividad [4]);