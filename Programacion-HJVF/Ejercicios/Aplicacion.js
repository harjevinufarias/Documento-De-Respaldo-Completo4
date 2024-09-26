/*
1) Determine si en siguiente array tiene cadenas de caracteres con una longitud de 5.
const cadena =["hola","Juan","Elefante ","Cantar","Teclado","Anona"];

2)Chequee si al menos uno de los elementos de la matriz , es tru.
const matriz=[
    [false, false, false],
    [false, false, false],
    [false, false, tru],
]

3)Determinr si pa palbra Pucese se encuentra en el siguiente array:
const frase=[
    "Bienvenidos a Esmeraldas tierra verde",
    "Pontificada Universidad católica del Ecuador sede en Esmeraldas",
    "Hola la PUCESE te da la bienvenida"
]

4)Determine si todos los elemntos de array sson números pares:
const numeros=[2,4,40,10,8,6,18];

5)Devuelve todo los elementos del array de objetos, pero el sueldo debe multiplicarlo por 2.
const datos =[
  {empleado:"Jose de la Cuadra", departamento:"Financiero", sueldo: 850},
  {empleado:"Veronica Andrade", departamento:"Sistemas", sueldo: 720},
  {empleado:"Juana Peña", departamento:"Pro-Rectorado", sueldo: 755},
  {empleado:"Carla Macías", departamento:"Financiero", sueldo: 990},
  {empleado:"Pedro Flores", departamento:"Sistemas", sueldo: 1000},
];
*/ 



//1)
const cadena =["hola","Juan","Elefante ","Cantar","Teclado","Anona"];
const logtud5 = cadena.some(co=> co.length==5 );
console.log ("La palabra que se compone 5 letras es: ", logtud5);



//2
const matriz=[
    [false, false, false],
    [false, false, false],
    [false, false, true]
];
const maTru = matriz.flat().some(elemen=> elemen== true );
console.log ("La revision dise que si hay un elemento de la matriz es true. ", maTru);



//3 Determinr si pa palbra Pucese se encuentra en el siguiente array:
//every() es un método iterativo. Llama a una función callbackFn proporcionada una vez por cada elemento de un arreglo, hasta que callbackFn devuelva un valor falsy. 
//Si se encuentra dicho elemento, every() devuelve inmediatamente false y deja de iterar por el arreglo.
const frase=[
    "Bienvenidos a Esmeraldas tierra verde",
    "Pontificada Universidad católica del Ecuador sede en Esmeraldas",
    "Hola la PUCESE te da la bienvenida"
];
const palabraPucese = !frase.every(elemen=> !elemen.includes("PUCESE") );
console.log (" ¿En alguna parte del array tiene la palabra pucese? ", palabraPucese);



//4 Determine si todos los elemntos de array son números pares:
const numeros=[2,4,40,10,8,6,18];
const sonPares = numeros.every( num => num % 2==0 );
console.log("¿Todos los elemmentos del array son numeros pares?", sonPares);



//5Devuelve todo los elementos del array de objetos, pero el sueldo debe multiplicarlo por 2.
const datos =[
    {empleado:"Jose de la Cuadra", departamento:"Financiero", sueldo: 850},
    {empleado:"Veronica Andrade", departamento:"Sistemas", sueldo: 720},
    {empleado:"Juana Peña", departamento:"Pro-Rectorado", sueldo: 755},
    {empleado:"Carla Macías", departamento:"Financiero", sueldo: 990},
    {empleado:"Pedro Flores", departamento:"Sistemas", sueldo: 1000},
];
const emplesueldo2= datos.map(({ empleado, departamento, sueldo }) => 
    ({empleado,departamento,sueldo:sueldo*2}));

const todosSuldos = datos.flatMap(dato => dato.sueldo);
sumaTotal = todosSuldos.reduce((acc, sueldo) => acc + sueldo, 0);
promedioTotal = sumaTotal / todosSuldos.length;

const todoSuldo = datos.flatMap(dat => dat.sueldo*2);
sumaTotal = todoSuldo.reduce((acc, sue) => acc + sue, 0);
promedio = sumaTotal / todoSuldo.length;

console.log("los datos del empleado con el sueldo multiplicado para 2 es:", emplesueldo2);
console.log(`El promedio de todos los sueldos sin multiplicar es: ${promedioTotal}`);
console.log(`El promedio de todos los sueldos multiplicados son: ${promedio}`);