export class Negociacion {
  #fecha;
  #cantidad;
  #valor;

  constructor(fecha,cantidad,valor) {
    this.#fecha = fecha;
    this.#cantidad = cantidad;
    this.#valor = valor;
  }
}