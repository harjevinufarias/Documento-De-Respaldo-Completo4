//array de objetos 
const notas =[
    {
        apellidios: "Ponce",
        nombre: "José",
        asignaturas: [
            {
             nombre: "Programación 1",
             notasParcial:[45,45,45],
             examenFinal:30
            },
            {
                nombre: "Matematicas",
                notasParcial:[30,30,30],
                examenFinal:25
            },


        ],
        
    },
    {
        apellidios: "Acevedo",
        nombre: "Ana",
        asignaturas: [
            {
             nombre: "Programación 1",
             notasParcial:[40,32,38],
             examenFinal:31
            },
            {
                nombre: "Matematicas",
                notasParcial:[31,32,34],
                examenFinal:35
            },


        ],
        
    },
    {
        apellidios: "Zambrano",
        nombre: "Alberto",
        asignaturas: [
            {
             nombre: "Programación 1",
             notasParcial:[25,26,27],
             examenFinal:28
            },
            {
                nombre: "Matematicas",
                notasParcial:[35,36,40],
                examenFinal:45
            },


        ],
        
    },

];
//Calcule el promedio de las notas parciales 
const promedios=notas.map(est=>{
    return {
        nobre_completo:`${est.nombre} ${est.apellidios}`,
        asignaturas: est.asignaturas.map(materia=>{
            return{
                nombre: materia.nombre,
                notasP: materia.notasParcial,
                prom:materia.notasParcial.reduce((ac,va)=>ac+va,0)/materia.notasParcial.length,
                ex: materia.examenFinal

            }
        })
    }
});
console.log (promedios[0]);

//Con el siguiente array de objetos, calcule el promedio de edades de cada ciudad 
const ciudades=[
    {
        ciudad:"Esmeraldas",
        edades:[25,30,33,28,19,31,35,26,36]
    },
    {
        ciudad:"Guayaquil",
        edades:[18,32,33,45,48,19,20,20,25,29,39]
    },
    {
        ciudad:"Quito",
        edades:[33,32,38,21,17]
    },
    {
        ciudad:"Cuenca",
        edades:[18,19,26,38,55,19,17]
    },
    {
        ciudad:"Ambato",
        edades:[36,37,38,39,22,25]
    },
    {
        ciudad:"Portobiejo",
        edades:[30,30,30]
    },
];

//Calcule el promedio de las edades de las Ciudades 
const prome = ciudades.map(ciudad => {
    suma = ciudad.edades.reduce((acc, edad) => acc + edad, 0);
    promedio = suma / ciudad.edades.length;
    return {
        ciudad: ciudad.ciudad,
        promedio: promedio
    };
});
console.log(prome);

//Calcule el promedio de todas las edades 

// Sumar todas las edades para el promedio general
//flatmap: primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz
const todasLasEdades = ciudades.flatMap(ciudad => ciudad.edades);
sumaTotal = todasLasEdades.reduce((acc, edad) => acc + edad, 0);
promedioTotal = sumaTotal / todasLasEdades.length;

//toFixed: redondea el número a n dígitos después del punto decimal y devuelve una cadena que representa el resultado.
console.log(`\nEl promedio de todas las edades es: ${promedioTotal.toFixed(15)}`);//


// tambien se puede hacer con este metodo 
const promTodos = prome.reduce((ac, va)=>{
    return ac+va.promedio
},0)/prome.length;
console.log("Promedios de todos las edades", promTodos);
