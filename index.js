const express = require('express')
const app = express()
app.use(express.json())

const valor = ['valor padrão 0', 'valor padrão 1', 'valor padrão 2', 'valor padrão 3']


// retorna um valor
app.get('/valor/:index', (req, res) => {
  const { index } = req.params
  return res.json(valor[index])
})

// retorna todos valores
app.get('/valor', (req, res) => {
  return res.json(valor)
})

//cria novo dado
app.post('/valor', function (req, res) {
  const { name } = req.body;
  valor.push(name)
  return res.json(valor)
})

//atualizar valor
app.put('/valor/:index', function(req, res) {
  const { index } = req.params
  const { name } = req.body
  valor[index] = name
  return res.json(valor)
});

//deletar valor
app.delete('/valor/:index', function(req, res) {
    const { index } = req.params
    valor.splice(index, 1)
    return res.json({ message: "O valor foi deletado"})
})

app.listen(3000)

