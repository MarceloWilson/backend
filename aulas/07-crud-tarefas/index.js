const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()

app.use(express.json())

// Connetar no banco Mongo
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao MongoDB")
  })
  .catch(err => {
    console.log("Erro ao conectar no banco Mo'ngoDB: ", err)
  })


const TarefaModel = mongoose.model('Tarefa', new mongoose.Schema(
    {
        nome: String,
    }
))


app.post('/tarefas', async (req, res, next) => {
    const tarefa = req.body
    if(!tarefa.nome) {
        return res.status(400).json({ erro: "O campo nome é obrigatório!!!" })
    })
    TarefaModel.create(tarefa)




app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000")
})