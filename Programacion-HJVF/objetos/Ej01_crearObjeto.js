//creacion de Objetos
/*{
    key1:value1, 
    Key2:value2
}*/
//Cree el objeto persona
const persona={
    cedula:"08000000",
    apellidos:"Ponce Andrade",
    nombres:"José Iván",
    edad:23,
    sexo:"Masculino"
};
console.log("objeto persona",persona);

//diseñe el objeto estudiante 
const estudiante={
    idBanner:"P0054004",
    apellidos:"Alvarado Acevedo",
    nombre: "Hector Sebastian ",
    sexo:"Masculino",
    cursoAprobados:["Primero","Segundo","Tercero"],
    crusoActual:[
        {matria:"Base de datos 1", Cresitos:4,Docente:"Juan Alcivar"},
        {matria:"Ingles IV", Cresitos:5,Docente:"Lisette Moya"},
        {matria:"Mt. Financiera", Cresitos:3,Docente:"Pedro Castro"},
        {matria:"Cont. de Costos", Cresitos:2,Docente:"Ana Vargas"},
    ]
};
console.log(estudiante);

//Diseñe un array de objetos para las carrearas de la Universidad 
const carreras=
[
    {
        codigo:"es001",
        nombre:"Ingeniería en Tecnologia de la Informacion",
        duracion: "8 semestres",
        titulacion: ["Tesis de Grado","Examen Complexivo"],
        titulo_otorgado:[
            {tit: "Ingeniero en Tecnologia de la Informacion", sexo: "M"},
            {tit: "Ingeniera en Tecnologia de la Informacion", sexo: "F"}
        ]
    },
    {
        codigo:"es002",
        nombre:"Licenciatura en Contabilidad y auditoría",
        duracion: "8 semestres",
        titulacion: ["Tesis de Grado","Examen Complexivo"],
        titulo_otorgado:[
            {tit: "Licenciado en Contabilidad y auditoría", sexo: "M"},
            {tit: "Licenciada en Contabilidad y auditoría", sexo: "F"}
        ]
    },
    {
        codigo:"es003",
        nombre:"Tegnóloguia en Gestíon Culinaria",
        duracion: "4 semestres",
        titulacion: ["Examen Complexivo"],
        titulo_otorgado:[
            {tit: "Tegnólogo en Gestión Culinaria", sexo: "M"},
            {tit: "Tegnóloga en Gestión Culinaria", sexo: "F"}
        ]
    }
]