let entradaActual = "0";
let operador = "";
let entradaAnterior = "";
let esNegativo = false; // Nueva variable para rastrear el signo

function press(numero) {
    if (entradaActual === "0" || entradaActual === "-0") {
        entradaActual = numero.toString();
        esNegativo = false;
    } else {
        entradaActual += numero.toString();
    }
    document.getElementById('display').innerText = entradaActual;
}

function setOP(op) {
    entradaAnterior = entradaActual;
    operador = op;
    entradaActual = "0";
}

function calculate() {
    let resultado;
    const anterior = parseFloat(entradaAnterior);
    const actual = parseFloat(entradaActual);

    if (operador === '+') resultado = anterior + actual;
    else if (operador === '-') resultado = anterior - actual;
    else if (operador === '*') resultado = anterior * actual;
    else if (operador === '/') resultado = anterior / actual;

    entradaActual = resultado.toString();
    operador = "";
    entradaAnterior = "";
    document.getElementById('display').innerText = entradaActual;
}

function toggleSign() {
    if (entradaActual !== "0") {
        esNegativo = !esNegativo; // Alternar el estado negativo
        entradaActual = (parseFloat(entradaActual) * -1).toString();
        document.getElementById('display').innerText = entradaActual;
    }
}

function clr() {
    entradaActual = "0";
    entradaAnterior = "";
    operador = "";
    esNegativo = false; // Reiniciar el estado negativo
    document.getElementById('display').innerText = entradaActual;
}