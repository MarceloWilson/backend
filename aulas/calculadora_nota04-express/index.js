const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("-----------###-----------");
    console.log("Tempo", new Date().toLocaleString())
    console.log("Método", req.method)
    console.log("Rota", req.url)
    next()
})

app.get('/nome', (req, res, next) => {
    const primeiroNome = req.query.primeiroNome
    const sobreNome = req.query.sobreNome
    res.send(`Olá ${primeiroNome} ${sobreNome}`)
    res.send("Funcionou!!!!!")
})

const calculadoraNotRouter = require('./routes/calculadoraNotaRouter')
app.use('/calculadora', calculadoraNotRouter)

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})


