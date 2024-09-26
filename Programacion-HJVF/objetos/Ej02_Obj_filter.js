//Ejercicio con array de objetos y filter
const estudiantes=[
    {
        Matricula:"001", 
        Nombres:"Ponce José", 
        Sexo: "M", 
        edad: 19, 
        Carrera: "Tegnologuia de la Informacion"
    },
    {
        Matricula:"002", 
        Nombres:"Ana Faranchesca ", 
        Sexo: "F", 
        edad: 20, 
        Carrera: "Contabilidad y Auditoria"
    },
    {
        Matricula:"003", 
        Nombres:"De la cruz Juan", 
        Sexo: "M", 
        edad: 22, 
        Carrera: "Tegnologuia de la Informacion"
    },
    {
        Matricula:"004", 
        Nombres:"Perlta Martha", 
        Sexo: "F", 
        edad: 22, 
        Carrera: "Contabilidad y Auditoria"
    },
    {
        Matricula:"005", 
        Nombres:"Mriuxi Picazo", 
        Sexo: "F", 
        edad: 23, 
        Carrera: "Tegnologuia de la Informacion"
    },
  
];

//Liste los estudiante de soxo Masculino
const estudianteMasculino=estudiantes.filter(estudiante =>{
    return estudiante.Sexo=="M"
});
console.log("Estudiantes Masculinos",estudianteMasculino);

//Liste los estudiantes con edades menores o iguales a 22 años 
const estudianteEdades=estudiantes.filter(estudiante1 =>{
    return estudiante1.edad<=22
});
console.log("Estudiantes de edades menor o igual a 22 años",estudianteEdades);

//Enliste de tegnologia de la informacion que sean estudiantes femeninos 
const estudiantetic=estudiantes.filter(estudian =>{
    return estudian.Carrera=="Tegnologuia de la Informacion"&& estudian.Sexo =="F"
});
console.log("Estudiantes que son femeninos de la Carrera de Tegnologuia ",estudiantetic);

//Liste los estudiantes que inicien con la letra p
const estudianteP=estudiantes.filter(estudian =>{
    return estudian.Nombres[0]=="P"
});
console.log("Estudiantes que inicien con la letra P son: ",estudianteP);