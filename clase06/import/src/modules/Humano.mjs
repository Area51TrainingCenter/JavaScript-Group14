export default class Humano {
  constructor(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = 20;

    this.nombreCompleto = () => `${this.nombre} ${this.apellidos}`;
  }

  hablar() {
    console.log(`${this.nombre} esta hablando!`);
  }
}
