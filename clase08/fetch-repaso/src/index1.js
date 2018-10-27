const lista1 = document.getElementById('lista1');
const lista2 = document.getElementById('lista2');

const datos1 = ['Palabra 1', 'Palabra 2', 'Palabra 3'];
const datos2 = [];

function llenarDatos() {
  lista1.innerHTML = datos1.map(item => `${item}<br>`).join('');
  lista2.innerHTML = datos2.map(item => `${item}<br>`).join('');
}

llenarDatos();

function onClickMoverIzquierda(event) {
  event.preventDefault();

  const ultimoDato = datos2.pop();
  datos1.push(ultimoDato);

  llenarDatos();
}

function onClickMoverDerecha(event) {
  event.preventDefault();

  const ultimoDato = datos1.pop();
  datos2.push(ultimoDato);

  llenarDatos();
}

const moverIzquierda = document.getElementById('mover-a-izquierda');
moverIzquierda.addEventListener('click', onClickMoverIzquierda, true);

const moverDerecha = document.getElementById('mover-a-derecha');
moverDerecha.addEventListener('click', onClickMoverDerecha, true);
