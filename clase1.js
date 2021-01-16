console.log("Hola Mundo JS");
var nombre = 'Daniel';
console.log(` Hola ${nombre}`);


//*********************************************
function cumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad +1
    }
}
var objetoConMasEdad = cumpleanos({nombre:"daniel", apellido:"rico", edad:35});



//*********************************************


var daniel = {
    nombre : 'Daniel',
    apellido : 'Rico',
    edad : 35,
    ingeniero : true,
    cocinero : false,
    cnatente : false,
    jd : false,
    guitarrista : false,
    drone : true,

}
function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`);
    if(persona.ingeniero ){
        console.log('Ingeniero')
    }
}

imprimirProfesiones(daniel);

//*********************************************  opcion 1

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(` ${persona.nombre} es mayor de edad`);
    }else{
        console.log(` ${persona.nombre} es menor de edad`);
    }
}
imprimirSiEsMayorDeEdad(daniel);

//********************************************* opcion 2 funcion anonima


/* se puede minificar mas
var esMayorDeEdad = (persona) =>{
    return persona.edad >= MAYORIA_DE_EDAD;
}
*/

//const esMayordeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const esMayordeEdad = persona => ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(` ${persona.nombre} es mayor de edad`);
    }else{
        console.log(` ${persona.nombre} es menor de edad`);
    }
}
imprimirSiEsMayorDeEdad(daniel);

//*******************************************

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas= [sacha,alan,martin,dario,vicky,paula]

for( i = 0; i < personas.length; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} mt2`)
}

var personasAltas1 = personas.filter(function(persona){
    return persona.altura>1.8
});
//Equivalentes
var personasAltas2 = personas.filter(persona=>persona.altura>1.8);


//*******************************************


const pasarAlturaACms = persona => {
    return {
        ...persona,
        altura: persona.altura*100
    }
}

var personasCms = personas.map(pasarAlturaACms)


//*******************************************


var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula]

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;


let totalDeLibros =  personas.reduce(reducer,0)
console.log(` En total todos tienen ${totalDeLibros} libros`)