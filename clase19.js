var jose ={
    nombre: 'jose',
    apellido: 'calvano',
    estatura: 1.70
}
var elias ={
    nombre: 'elias',
    apellido: 'zigaran',
    estatura: 1.60
}
var juan ={
    nombre: 'juan',
    apellido: 'caceres',
    estatura: 1.78
}
var maria ={
    nombre: 'maria',
    apellido: 'gomez',
    estatura: 1.33
}

// definicion del ARRAY
var personas = [jose, elias, juan, maria];

const esAlta = ({estatura}) => {
  return estatura > 1.7
}
//const esAlta = persona => persona.estatura > 1.7

const esBaja = ({estatura}) => estatura < 1.7

var personasAltas = personas.filter(esAlta)
//filter va ir iterando el array de personas
//filter nos devuelve un array nuevo
//var personasAltas = personas.filter(function (persona) {
  //return persona.estatura > 1.7
//})

var personasBajas = personas.filter(esBaja)


//////////////////////////Clase 19///////////////////////////////\
//Transformar un array por medio de la funcion MAP()
//recordar que los objetos se pasan por referencia
const pasarAlturaCms = persona => ({
  //persona.estatura = persona.estatura*100
  //persona.estatura *= 100
  //return {
   ...persona,
   estatura: persona.estatura*100
  //}
})

var personasCms = personas.map(pasarAlturaCms)


console.log(personasAltas);

console.log(personasCms);
