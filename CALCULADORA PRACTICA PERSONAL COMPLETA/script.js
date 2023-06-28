"use strict"
const pantalla = document.querySelector('.pantalla');
const btn = document.querySelectorAll('.btn');

let numero1 = '';
let operacion = '';
let numero2 = '';

function actualizarPantalla(valor) {
  pantalla.textContent = valor;  //nota: textContent (contenido del texto)
}

function calcular() {
  let resultado = '';

  const num1 = Number(numero1);
  const num2 = Number(numero2);

  if (operacion === '+') {
    resultado = num1 + num2;
  } else if (operacion === '-') {
    resultado = num1 - num2;
  } else if (operacion === '*') {
    resultado = num1 * num2;
  } else if (operacion === '/') {
    resultado = num1 / num2;
  }

  actualizarPantalla(resultado);
  numero1 = resultado.toString();
  operacion = '';
  numero2 = '';
}

btn.forEach((boton) => {
  boton.addEventListener('click', () => {
    const valor = boton.textContent;

    if (!isNaN(valor) || valor === '.') {
      if (operacion) {
        numero2 += valor;
        actualizarPantalla(numero2);
      } else {
        numero1 += valor;
        actualizarPantalla(numero1);
      }
    } else if (valor === 'C') {
      actualizarPantalla('0');
      numero1 = '';
      operacion = '';
      numero2 = '';
    } else if (valor === '←') {
      if (operacion) { //operacion = boolean
        numero2 = numero2.slice(0, -1); //nota: elimino el ultimo numero de la cadena
        actualizarPantalla(numero2);
      } else {
        numero1 = numero1.slice(0, -1);
        actualizarPantalla(numero1);
      }
    } else if (valor === '=') {
      calcular();
    } else {
      operacion = valor;
    }
  });
});











