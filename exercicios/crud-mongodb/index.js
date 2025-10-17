const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json())


const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`



mongoose.connect("mongodb+srv://marcelowilson:M123456@cluster0.3pi2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Conectado ao MongoDB Atlas"))
  .catch(err => console.error("Erro ao conectar ao MongoDB:", err))


const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  ano: { type: Number, required: true },
  preco: { type: Number, required: true }
}, { timestamps: true })

const LivroModel = mongoose.model('Livro', LivroSchema)




app.post('/livros', async (req, res) => {
  try {
    const livro = req.body

   
    if (!livro.titulo || !livro.autor || !livro.editora || !livro.ano || !livro.preco) {
      return res.status(400).json({ erro: "Todos os campos são obrigatórios!" })
    }

    const novoLivro = await LivroModel.create(livro)
    res.status(201).json(novoLivro)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar livro", detalhes: err.message })
  }
})


app.get('/livros', async (req, res) => {
  try {
    const livros = await LivroModel.find()
    res.json(livros)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar livros" })
  }
})


app.get('/livros/:id', async (req, res) => {
  try {
    const { id } = req.params
    const livro = await LivroModel.findById(id)

    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado" })
    }

    res.json(livro)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar livro", detalhes: err.message })
  }
})


app.put('/livros/:id', async (req, res) => {
  try {
    const { id } = req.params
    const dados = req.body

    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, dados, { new: true })

    if (!livroAtualizado) {
      return res.status(404).json({ erro: "Livro não encontrado" })
    }

    res.json(livroAtualizado)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar livro", detalhes: err.message })
  }
})


app.delete('/livros/:id', async (req, res) => {
  try {
    const { id } = req.params
    const livroRemovido = await LivroModel.findByIdAndDelete(id)

    if (!livroRemovido) {
      return res.status(404).json({ erro: "Livro não encontrado" })
    }

    res.json({ mensagem: "Livro removido com sucesso!" })
  } catch (err) {
    res.status(500).json({ erro: "Erro ao remover livro", detalhes: err.message })
  }
})



const porta = process.env.PORT || 3000
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`)
})
