const txtMensaje = document.querySelector('#txt-mensaje');
const btnMostrar = document.querySelector('#btn-mostrar');

// .onclick = (/* Event */ event) => {};
// .click()

// .addEventListener(
//		/* string */ eventName,
//    /* callback Function */ (event) => { }
// )

// .dispatchEvent(/* Event */)

// Event | CustomEvent


// btnMostrar.onclick = event => {
// 	console.log('A) Click en Mostrar usando .onclick');
// };

// btnMostrar.onclick = event => {
// 	console.log('B) Click en Mostrar usando .onclick');
// };

// let nombre;

// nombre = 'Pedro';
// nombre = 'Julia';

// console.log(nombre); // 'Julia'


btnMostrar.addEventListener('click', event => {
	console.log('A) Click en Mostrar usando .addEventListener');
});

btnMostrar.addEventListener('click', event => {
	console.log('B) Click en Mostrar usando .addEventListener');

	console.log('txtMensaje.value:', txtMensaje.value);
});



const linkArea51 = document.querySelector('#link-area51');

linkArea51.addEventListener('click', event => {
	event.preventDefault();

	console.log('Click en enlace Area51');
});
