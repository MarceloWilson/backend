let {describe, expect, test} = require('@jest/globals');

describe('Testando modulo Calculadora de notas', () => {
    test('Testando soma', () => {
        let calculadora = require('./calculadora');
        expect(calculadora.somar(5, 2)).toBe(7);
    })
});