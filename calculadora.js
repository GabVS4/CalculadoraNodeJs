function som(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function mult(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}

function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

function log(numero, base) {
    return Math.log(numero) / Math.log(base);
}

function seno(angulo) {
    return Math.sin(angulo * Math.PI / 180);
}

function coss(angulo) {
    return Math.cos(angulo * Math.PI / 180); // Convertendo o ângulo de graus para radianos
}

module.exports = {
    som,
    sub,
    mult,
    div,
    fatorial,
    log,
    seno,
    coss
}