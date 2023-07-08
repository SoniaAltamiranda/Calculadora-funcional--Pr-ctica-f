var pantalla = document.querySelector('.pantalla');
var btn = document.querySelectorAll('.btn');
var numero1 = '';
var operacion = '';
var numero2 = '';
function actualizarPantalla(valor) {
    pantalla.textContent = valor.toString(); //nota: textContent (contenido del texto)
}
function calcular() {
    var resultado = 0;
    var num1 = Number(numero1);
    var num2 = Number(numero2);
    if (operacion === '+') {
        resultado = num1 + num2;
    }
    else if (operacion === '-') {
        resultado = num1 - num2;
    }
    else if (operacion === '*') {
        resultado = num1 * num2;
    }
    else if (operacion === '/') {
        resultado = num1 / num2;
    }
    actualizarPantalla(resultado);
    numero1 = resultado.toString();
    operacion = '';
    numero2 = '';
}
btn.forEach(function (boton) {
    boton.addEventListener('click', function () {
        var valor = boton.textContent;
        if (!isNaN(Number(valor)) || valor === '.') {
            if (operacion) {
                numero2 += valor;
                actualizarPantalla(Number(numero2));
            }
            else {
                numero1 += valor;
                actualizarPantalla(Number(numero1));
            }
        }
        else if (valor === 'C') {
            actualizarPantalla(0);
            numero1 = '';
            operacion = '';
            numero2 = '';
        }
        else if (valor === '←') {
            if (operacion) { //operacion = boolean
                numero2 = numero2.slice(0, -1); //nota: elimino el ultimo numero de la cadena
                actualizarPantalla(Number(numero2));
            }
            else {
                numero1 = numero1.slice(0, -1);
                actualizarPantalla(Number(numero1));
            }
        }
        else if (valor === '=') {
            calcular();
        }
        else {
            operacion = valor === null || valor === void 0 ? void 0 : valor.toString();
        }
    });
});
