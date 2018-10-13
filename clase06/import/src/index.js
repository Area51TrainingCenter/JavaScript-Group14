import { map } from 'lodash';
import {
  sumar, restar,
} from './modules/utils';
import Humano from './modules/Humano';

// const _ = require('lodash');



// Webpack busca los archivos que importamos por las extensiones
// .wasm, .mjs, .js y .json en ese orden.

let resultado;

resultado = sumar(5, 2);
console.log('sumar(5, 2)', resultado);

resultado = restar(5, 2);
console.log('restar(5, 2)', resultado);

// resultado = multiplicar(5, 2);
// console.log('multiplicar(5, 2)', resultado);

// resultado = dividir(5, 2);
// console.log('dividir(5, 2)', resultado);

// node dist/main


const personas = [
  { nombre: 'Pedro', edad: 23 },
  { nombre: 'Juana', edad: 27 },
  { nombre: 'Marco', edad: 31 },
];

console.log( personas.map(item => item.edad) );
console.log( map(personas, item => item.edad) );

const humano1 = new Humano('Pedro', 'Gonzales');
console.log(humano1);

const humano2 = new Humano('Julia', 'Ruiz');
console.log(humano2);

console.log( { nombre: 'Omunculo', edad: 30 } );


humano1.hablar();
