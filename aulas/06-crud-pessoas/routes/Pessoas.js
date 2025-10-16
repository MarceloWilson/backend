const express = require('express');
const router = express.Router();


let ListaPessoas = [
    {
        id:1,
        nome: 'João',
        cpf: '123.456.789-00',
        email: 'joao@pedro.com',
        dataNascimento: '1990-01-01'

    },

    {
        id:2,
        nome: 'Maria',
        cpf: '987.654.321-00',
        email: 'maria@feitosa.com',
        dataNascimento: '1992-02-02'
    },
]


router.get('/pessoas', (req, res) => {
        res.json(ListaPessoas);
});


router.get('/pessoas/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const pessoa = ListaPessoas.find(p => p.id === id);
    if (!pessoa) {
        const err = new Error('Pessoa não encontrada');
        err.status = 404;
        return next(err);
    }
    res.json(pessoa);
});

module.exports = router;