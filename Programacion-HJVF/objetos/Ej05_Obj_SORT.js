//Array de objetos y sort 
const estudiantes =[
    {
        apellidos: "Palta Cabrera",
        nombres:"Camilo",
        sexo: "m",
        pasatiempos:["Leer","Jugar","Futbol"],
        notas:[
            {Materia: "Física", nota:38},
            {Materia: "Ingles", nota:35},
            {Materia: "Quimica ", nota:30},
        ]
    },
    {
        apellidos: "Zapata Alcivar ",
        nombres:"Pedro",
        sexo: "m",
        pasatiempos:["Jugar Tenis","Cantar","Bailar"],
        notas:[
            {Materia: "Física", nota:30},
            {Materia: "Ingles", nota:45},
            {Materia: "Quimica ", nota:33},
        ]
    },
    {
        apellidos: "De la Cruz",
        nombres:"Karla",
        sexo: "f",
        pasatiempos:["Ciclismo","Cantar","correr"],
        notas:[
            {Materia: "Física", nota:33},
            {Materia: "Ingles", nota:35},
            {Materia: "Quimica ", nota:31},
        ]
    },
    {
        apellidos: "Ñacul Pérez",
        nombres:"Carmen",
        sexo: "f",
        pasatiempos:["Leer","Danzar","esquiar","correr"],
        notas:[
            {Materia: "Física", nota:30},
            {Materia: "Ingles", nota:35},
            {Materia: "Quimica ", nota:41},
        ]
    },
    {
        apellidos: "Paliz Arguello",
        nombres:"Antonio",
        sexo: "m",
        pasatiempos:["Leer"],
        notas:[
            {Materia: "Física", nota:45},
            {Materia: "Ingles", nota:40},
            {Materia: "Quimica ", nota:41},
        ]
    },
    {
        apellidos: "Núñez Prado",
        nombres:"Karla",
        sexo: "f",
        pasatiempos:["Cantar"],
        notas:[
            {Materia: "Física", nota:30},
            {Materia: "Ingles", nota:35},
            {Materia: "Quimica ", nota:41},
        ]
    },
    {
        apellidos: "Predes Cantos",
        nombres:"Juan",
        sexo: "m",
        pasatiempos:["Indor Futbol","Juegos de video"],
        notas:[
            {Materia: "Física", nota:30},
            {Materia: "Ingles", nota:31},
            {Materia: "Quimica ", nota:32},
        ]
    },
    {
        apellidos: "Beltran Castillo",
        nombres:"Martha",
        sexo: "f",
        pasatiempos:["Voleibol","Juegos de Video"],
        notas:[
            {Materia: "Física", nota:33},
            {Materia: "Ingles", nota:34},
            {Materia: "Quimica ", nota:35},
        ]
    },
];
//1) Liste los estudiantes de sexo masculino
const estuMascu = estudiantes.filter(estudiante => estudiante.sexo=="m");
console.log("Los estudiante Masculino son:", estuMascu);





//2) Liste los estudiantes de sexo femenino
const estuFeme = estudiantes.filter(estudiante => estudiante.sexo=="f");
console.log("Los estudiante femeninos son:", estuFeme);






//3) Liste todos los estudiantes ordenados por apellidos 
const estudianOrdenado = estudiantes.sort((a, b) => {
    const apellidoA = a.apellidos.trim().toLowerCase(); // Convertir a minúsculas
    const apellidoB = b.apellidos.trim().toLowerCase(); // Convertir a minúsculas

    if (apellidoA < apellidoB) return -1; // a va antes que b
    if (apellidoA > apellidoB) return 1;  // b va antes que a
    return 0; // Son iguales
} );

estudianOrdenado.forEach(estudi => {
    console.log(`${estudi.apellidos} ${estudi.nombres}`);
});

//segundo metodo
const ordenTodos =estudiantes .sort ((a, b)=>{
    return a.apellidos.localeCompare(b.apellidos);
});
console.log (ordenTodos)





//4) Liste los estudiantes de sexo másculino ordenados por aplellidos 
const estudiantesMasculinos = estudiantes.filter(estudiante => estudiante.sexo === "m");
MasculinosOrdenados = estudiantesMasculinos.sort();
console.log("Los estudiantes masculinos ordenados por apellido son: ");
MasculinosOrdenados.forEach(estudiante => {
    console.log(`${estudiante.apellidos} ${estudiante.nombres}`);
});


//segundo metodo 
const estudianteMasculino = estudiantes.filter(estudiante => estudiante.sexo === "m");
MasculinosOrdenados = estudiantesMasculinos.sort();
MasculinosOrdenados  =estudiantes .sort ((a, b)=>{
    return a.apellidos.localeCompare(b.apellidos);
});
console.log(estudianteMasculino);





//5) Aplique la función map para obtner el siguiente resultado:
/*
  {
    apenom : "Beltran Castillo Martha",
    sexo: "femenino",
    promedio:34
  }
*/
const calcularPromedio = (notas) => {
    const suma = notas.reduce((acc, nota) => acc + nota.nota, 0);
    return suma / notas.length;
};

const resultado = estudiantes.map(estudiante => {
    return {
        apenom: `${estudiante.apellidos} ${estudiante.nombres}`,
        sexo: estudiante.sexo === "m" ? "masculino" : "femenino", // Convertir sexo a palabra
        promedio: calcularPromedio(estudiante.notas).toFixed(2) // Calcular promedio y formatear
    };
});
console.log("El resultado es: ",resultado);




//6) Siguiendo el modelo del ejercicio 5, ordene por el promedio de mayor a menor 
const calculaPromedio = (notas) => {
    const suma = notas.reduce((acc, nota) => acc + nota.nota, 0);
    return suma / notas.length;
};
const estudiantesConPromedio = estudiantes.map(estudiante => {
    return {
        apenom: `${estudiante.apellidos} ${estudiante.nombres}`,
        sexo: estudiante.sexo === "m" ? "masculino" : "femenino", // Convertir sexo a palabra
        promedio: calculaPromedio(estudiante.notas).toFixed(2)
    };
});
estudiantesConPromedio.sort((a, b) => b.promedio - a.promedio);
console.log("El promedio de mayor a menor de los estudiantes son: ",estudiantesConPromedio);



