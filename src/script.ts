
const pantalla = document.querySelector('.pantalla') as HTMLElement;
const btn = document.querySelectorAll('.btn');

let numero1: string = '';
let operacion: string | undefined = '';
let numero2: string = '';

function actualizarPantalla(valor: number): void {
  pantalla.textContent = valor.toString();  //nota: textContent (contenido del texto)
}

function calcular(): void {
  let resultado: number = 0;

  const num1: number = Number(numero1);
  const num2: number = Number(numero2);

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

    if (!isNaN(Number(valor)) || valor === '.') {
      if (operacion) {
        numero2 += valor;
        actualizarPantalla(Number(numero2));
      } else {
        numero1 += valor;
        actualizarPantalla(Number(numero1));
      }
    } else if (valor === 'C') {
      actualizarPantalla(0);
      numero1 = '';
      operacion = '';
      numero2 = '';
    } else if (valor === '←') {
      if (operacion) { //operacion = boolean
        numero2 = numero2.slice(0, -1); //nota: elimino el ultimo numero de la cadena
        actualizarPantalla(Number(numero2));
      } else {
        numero1 = numero1.slice(0, -1);
        actualizarPantalla(Number(numero1));
      }
    } else if (valor === '=') {
      calcular();
    } else {
      operacion = valor?.toString();
    }
  });
});











