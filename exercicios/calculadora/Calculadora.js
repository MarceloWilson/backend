function somar (a, b) {
    return a + b;
}

function subtrair (a, b) {
    return a - b;
}

function multiplicar (a, b) {
    return a * b;
}

function dividir (a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero';
    }
    return a / b;
}

function potencia (a) {
    return Math.pow(a,2);
}

function raizQuadrada (a) {
    if (a < 0) {
        return 'Erro: Número negativo';
    }
    return Math.sqrt(a);
}


module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    potencia,
    raizQuadrada
};
