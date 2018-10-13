sumar(3, 6); // 9

// ES5
function sumar(a, b) {
	return a + b;
}

var sumar = function (a, b) {
	return a + b;
};

// ES6
const sumar = (a, b) => {
	return a + b;
};

const sumar = (a, b) => a + b;




function sumar (a) {
	return function (b) {
		return a + b;
	}
}

// Antes
// sumar(3, 6); // 9

sumar(3); // Function (b) { ... }

sumar(3)(6); // 9

const sumar2 = sumar(3);
sumar2(6); // 9


function fullname(firstname, lastname) {
	return `${firstname} ${lastname}`;
}

fullname('Renzo', 'Castro');



fullname('Renzo', 'Castro').length
fullname('Renzo', 'Castro')[1] // 
'Renzo Castro'[1] // e



let nombre;

nombre = 'Renzo Castro';
nombre[nombre.length - 1] // o

nombre = 'Adriana Sangama';
nombre[nombre.length - 1] // a




function operaciones(a, b) {

	function sumar(n1, n2) {
		return n1 + n2;
	}

	function restar(n1, n2) {
		return n1 - n2;
	}

	return [
		sumar(a, b),
		restar(a, b)
	];
}

operaciones(5, 3);





function operaciones(a, b) {

	function sumar() {
		return a + b;
	}

	function restar() {
		return a - b;
	}

	return [
		sumar(),
		restar()
	];
}
operaciones(5, 3); // [8, 2]






