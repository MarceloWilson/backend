const express = require('express');

const router = express.Router();

let contatos = [
    { id: 1, nome: 'João', telefone: '123456789' },
    { id: 2, nome: 'Maria', telefone: '987654321' },
];
let nextId = 3;
// Listar todos os contatos
router.get('/contatos', (req, res) => {
    res.json(contatos);
});

// Obter um contato pelo ID
router.get('/contatos/:id', (req, res) => {
    const contato = contatos.find(c => c.id === parseInt(req.params.id));
    if (!contato) return res.status(404).send('Contato não encontrado');
    res.json(contato);
});

// Adicionar um novo contato
router.post('/contatos', (req, res) => {
    const { nome, telefone } = req.body;
    const novoContato = { id: nextId++, nome, telefone };
    contatos.push(novoContato);
    res.status(201).json(novoContato);
});

// Atualizar um contato existente
router.put('/contatos/:id', (req, res) => {
    const contato = contatos.find(c => c.id === parseInt(req.params.id));
    if (!contato) return res.status(404).send('Contato não encontrado');

    const { nome, telefone } = req.body;
    contato.nome = nome || contato.nome;
    contato.telefone = telefone || contato.telefone;

    res.json(contato);
});

// Deletar um contato
router.delete('/contatos/:id', (req, res) => {
    const contatoIndex = contatos.findIndex(c => c.id === parseInt(req.params.id));
    if (contatoIndex === -1) return res.status(404).send('Contato não encontrado');

    const contatoDeletado = contatos.splice(contatoIndex, 1);
    res.json(contatoDeletado[0]);
});

module.exports = router;