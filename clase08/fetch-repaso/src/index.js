// npm install json-server --save-dev
// npm install axios

import axios from 'axios';

const urlBase = 'http://localhost:3000';
const fraseTxt = document.getElementById('frase-txt');

const lista1 = document.getElementById('lista1');
const lista2 = document.getElementById('lista2');

let datos1 = [];
let datos2 = [];

function loadData() {
  axios.get(`${urlBase}/list1`)
    .then(response => {
      datos1 = response.data;
      llenarDatos();
    });

  axios.get(`${urlBase}/list2`)
    .then(response => {
      datos2 = response.data;
      llenarDatos();
    });
}

function llenarDatos() {
  lista1.innerHTML = datos1.map(item => `${item.sentence}<br>`).join('');
  lista2.innerHTML = datos2.map(item => `${item.sentence}<br>`).join('');
}

async function onClickMoverIzquierda(event) {
  event.preventDefault();

  const ultimoDato = datos2.pop();

  moverDerecha.disabled = true;
  moverIzquierda.disabled = true;

  await axios.delete(`${urlBase}/list2/${ultimoDato.id}`, ultimoDato);

  delete ultimoDato.id;
  const response = await axios.post(`${urlBase}/list1`, ultimoDato);

  datos1.push(response.dato);

  moverDerecha.disabled = false;
  moverIzquierda.disabled = false;

  llenarDatos();
}

async function onClickMoverDerecha(event) {
  event.preventDefault();

  const ultimoDato = datos1.pop();

  moverDerecha.disabled = true;
  moverIzquierda.disabled = true;

  await axios.delete(`${urlBase}/list1/${ultimoDato.id}`, ultimoDato);

  delete ultimoDato.id;
  const response = await axios.post(`${urlBase}/list2`, ultimoDato);

  datos2.push(response.dato);

  moverDerecha.disabled = false;
  moverIzquierda.disabled = false;

  llenarDatos();
}

function onClickAgregar(event) {
  event.preventDefault();

  const dato = {
    sentence: fraseTxt.value.trim()
  };
  fraseTxt.value = '';
  fraseTxt.focus();

  axios.post(`${urlBase}/list1`, dato)
    .then(response => {
      datos1.push(response.data);
      llenarDatos();
    });
}

const moverIzquierda = document.getElementById('mover-a-izquierda');
moverIzquierda.addEventListener('click', onClickMoverIzquierda, true);

const moverDerecha = document.getElementById('mover-a-derecha');
moverDerecha.addEventListener('click', onClickMoverDerecha, true);

const agregarBtn = document.getElementById('agregar-btn');
agregarBtn.addEventListener('click', onClickAgregar, true);

loadData();
