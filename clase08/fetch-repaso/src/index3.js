import axios from 'axios';

const fraseTxt = document.getElementById('frase-txt');
const lista1 = document.getElementById('lista1');
const lista2 = document.getElementById('lista2');

function loadData() {
  const url = 'http://localhost:3000/list';

  axios.get(url)
    .then(response => {
      llenarLista(response.data);
    });
}

function llenarLista(data) {
  lista1.innerHTML = data.map(item => `<div>${item.sentence}</div>`).join('');
}

function onClickAgregar(event) {
  event.preventDefault();

  axios.post(url, {
    sentence: fraseTxt.value
  })
    .then(response => {
      console.log('POST THEN', response)

      lista1.innerHTML = `${lista1.innerHTML}<div>${response.data.sentence}</div>`;

    })
    .catch(err => {
      console.log('POST ERROR', err);
    })
}

function onClickMoverIzquierda(event) {
  event.preventDefault();

}

function onClickMoverDerecha(event) {
  event.preventDefault();


}

function init() {
  loadData();

  const agregarBtn = document.getElementById('agregar-btn');
  agregarBtn.addEventListener('click', onClickAgregar, true);

  const moverIzquierda = document.getElementById('mover-a-izquierda');
  moverIzquierda.addEventListener('click', onClickMoverIzquierda, true);

  const moverDerecha = document.getElementById('mover-a-derecha');
  moverDerecha.addEventListener('click', onClickMoverDerecha, true);
}

init();
