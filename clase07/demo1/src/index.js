const endpoint = 'http://localhost:3000/empleados';
const tableBody = document.querySelector('#table-body');
const filaHTML = document.querySelector('#fila').innerHTML;

const prepararFilaHTML = empleado => {
  return filaHTML
    .replace('{nombre}', empleado.nombre)
    .replace('{apellido}', empleado.apellido)
    .replace('{email}', empleado.email);
};

const loadData = () => {
  fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      tableBody.innerHTML = json.map(prepararFilaHTML).join('');
    });
};

loadData();


// --

const onClickBtnCreate = event => {
  event.preventDefault();

  fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({
      
    })
  })
};

const btnCreate = document.querySelector('#btn-create');
btnCreate.addEventListener('click', onClickBtnCreate, true);
