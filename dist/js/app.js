import { Negociacion } from "../models/negociacion.js";

const negociacion = new Negociacion(new Date(), 10, 100);
console.log(negociacion);
negociacion.cantidad = 20;
console.log(negociacion);