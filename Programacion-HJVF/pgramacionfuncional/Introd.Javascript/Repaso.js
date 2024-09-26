/*
Programacion estructurada (Paracdicma imperactivo):
1) Setencias secuenciales: Las de lineas se ejecutan una a continuacion de otra 
2) Setencias de decisión (condicionales ): Depende de como se evalue la condicion, se ejecutan un de terminado bloque del programa. (if)
3) Setencias repetitivas: prtocesos que se repiten dependiendo de la evaluacion de una condicion se las conoce como (Blucles)

*/

/*
Programacion funcional: (PARADIGMA declarativo )
cad= "universidad"
cad.ToUpper();  //resultado: UNIVERSIDAD
Funciones: LAS funciones son el pilar en este tipo de programacion.
Una funcion se asignara a una variable , se puede pasar como parmetro, se puede devolver dentro de una o otra funcion,
se puede asignar a un objeto, se puede asignar a un objeto, se pueda signar un array - las funciones son ciudadanas de primera clase.

*/
//declarar un array de entero e imprimo las temperaturas mayores de 20 grados.
//Use  programacion estructurada.
const temperaturas =[20,22,25,18,17,29,30,32,16];

for(i=0; i<temperaturas.length; i++)//length devuelve el tamaño del vector 
{
    if(temperaturas[i]> 20)
       console.log(temperaturas[i]);
}

//Resuelve el ejercicio anrterior utilizando programacion funcional 

const resultado = temperaturas.filter(elemento =>

    {
        return elemento >20;
    }
);
console.log(resultado);

//Es lo mimo pero simplificado 
console.log(temperaturas.filter(ele=>ele>20));

//Objetos (clave : valor)
const Universidad ={
    nombre: "PUCE Esmeraldas",
    fecha_fundacion: "1981-06-06",
    carreras_grado:15,
    carreras_tec: 5,
};
console.log("El objeto de universidad es ", Universidad);

//Crear el objeto estudiante de una universidad 
const estudiante={
    nombre: "Laura",
    carrera: "Tic",
    Nivel: "4",
    cohorte: "2023-2027"

};
console.log("El objeto estudiante: ", estudiante);

//ojeto dentro de otros objetos (objetos anidados)
// array de objetos 
const est={
    nombre: "Estafani",
    carrera: "ingieneria en contabilidad y auditoria ",
    semestres_crusados: [
        1,2,3,4,5
    ],
    Materias_matriculadas:[
        {
            materia:"Contabilidad de costos",
            creditos :3,
            horarios:{
                "Lunes":"18:00-20:00",
                "Martes":"17:00-18:00"
            }
        },
        {
            materia:"Auditoria informatica ",
            creditos :3,
            horarios:{
                "Miercoles":"18:00-20:00",
                "Viernes":"17:00-18:00"
            }
        },
        {
            materia:"Matematicas financieras ",
            creditos :3,
            horarios:{
                "Jueves":"16:00-18:00",
                "Viernes":"15:00-17:00"
            }
        }
    ]

}
console.log("Objetivos que contiene arreglos y otros objetos",est);

//array de objetos 
//Crear un array de objetos de personas naturales 
const personas=[
    
    {
       Nombre: "Maria Alejandra",
       edad: 22,
       sexo: " Femenina ",
       Actividades:[
        {
            horario:"06:00-12:00",
            nombre_de_la_actividad: "aseo dela casa "
        },
        {
            horario:"13:00-19:00",
            nombre_de_la_actividad: "Trabajo d emedio tiempo "
        }
    ]
    },
    {
        Nombre: "Juan Carlos ",
        edad: 30,
        sexo: "Masculino ",
        Actividades:[
         {
             horario:"06:00-12:00",
             nombre_de_la_actividad: "Ayudar en las labores del campo"
         },
         {
             horario:"13:00-19:00",
             nombre_de_la_actividad: "Atender el comedor"
         }
        ]
    }
]
console.log(personas)


