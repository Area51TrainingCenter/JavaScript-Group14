const lista1 = document.getElementById('lista1');
const lista2 = document.getElementById('lista2');

function onClickMoverIzquierda(event) {
  event.preventDefault();

  const ultimoElemento = lista2.querySelector('div:last-child');
  lista1.appendChild(ultimoElemento);
}

function onClickMoverDerecha(event) {
  event.preventDefault();

  // 1.
  // const hijos = lista1.querySelectorAll('div');
  // const ultimoElemento = hijos[hijos.length - 1];

  // 2.
  // const ultimoElemento = lista1.children[lista1.children.length - 1];

  // 3.
  // const ultimoElemento = lista1.lastChild;

  // 4.
  const ultimoElemento = lista1.querySelector('div:last-child');
  lista2.appendChild(ultimoElemento);
}

const moverIzquierda = document.getElementById('mover-a-izquierda');
moverIzquierda.addEventListener('click', onClickMoverIzquierda, true);

const moverDerecha = document.getElementById('mover-a-derecha');
moverDerecha.addEventListener('click', onClickMoverDerecha, true);
