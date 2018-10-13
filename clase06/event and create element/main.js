const txtMensaje = document.querySelector('#txt-mensaje');
const btnMostrar = document.querySelector('#btn-mostrar');


// event.preventDefault();
// event.currentTarget o event.target


const onClickMostrar1 = event => {
	// console.log( btnMostrar );
	// console.log( event.currentTarget );

	// if (txtMensaje.value !== '') {
	if (txtMensaje.value.length > 0 ) {
		console.log('A) Click en Mostrar usando .addEventListener');
	}
};

btnMostrar.addEventListener('click', onClickMostrar1);


const onClickMostrar2 = event => {
	console.log('B) Click en Mostrar usando .addEventListener');
	console.log('txtMensaje.value:', txtMensaje.value);
};

btnMostrar.addEventListener('click', onClickMostrar2);

// otros posibles nombres para mi función callback
// - mostrarMensajeEnConsola
// - linkArea51_clickHandler
const onClickLinkArea51 = event => {
	event.preventDefault();

	console.log('Click en enlace Area51');

	const link = event.currentTarget;
	// console.log('link.href', link.href);
	// console.log("link.getAttribute('href')", link.getAttribute('href'));
	
	setTimeout(() => {
		window.location = link.href;
		// window.location.href = link.href;
	}, 3000);
};

const linkArea51 = document.querySelector('#link-area51');
const bubbling = true;
linkArea51.addEventListener('click', onClickLinkArea51, bubbling);

// Nota: Pasar artículo sobre bubbling and capture



// Creación de Elementos

const contenedor = document.createElement('div');
// contenedor.innerHTML = '<h1 class="title">Soy contenedor</h1>';

const titulo = document.createElement('h1');
// titulo.className = 'title';
titulo.classList.add('title');
titulo.textContent = 'Soy contenedor';

contenedor.appendChild(titulo);
document.body.appendChild(contenedor);

// Crear DIV,
// dentro crear <A>,
// propiedad href a google, pero te enviará a facebook (usar evento CLICK)

const contenedorLink = document.createElement('div');
const linkGoogle = document.createElement('a');
contenedorLink.appendChild(linkGoogle);

linkGoogle.textContent = 'Google -> Facebook';
linkGoogle.href = 'https://google.com';
// linkGoogle.setAttribute('href', 'https://google.com');

const onClickLinkGoogle = event => {
	event.preventDefault();
	window.location = 'https://facebook.com';
};

linkGoogle.addEventListener('click', onClickLinkGoogle, true);
document.body.appendChild(contenedorLink);
