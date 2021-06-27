const express = require('express')
const app = express()
app.use(express.json())

const valor = ['defaultValue 0', 'defaultValue 1', 'defaultValue 2', 'defaultValue 3']


// Retorna um valor
app.get('/valor/:index', (req, res) => {
  const { index } = req.params
  return res.json(valor[index])
})

// Retorna todos valores
app.get('/valor', (req, res) => {
  return res.json(valor)
})

// Cria novo dado
app.post('/valor', function (req, res) {
  const { name } = req.body;
  valor.push(name)
  return res.json(valor)
})

// Atualiza um valor
app.put('/valor/:index', function(req, res) {
  const { index } = req.params
  const { name } = req.body
  valor[index] = name
  return res.json(valor)
});

// Deleta um valor
app.delete('/valor/:index', function(req, res) {
    const { index } = req.params
    valor.splice(index, 1)
    return res.json({ message: "O valor " + index + " foi deletado"})
})

app.listen(3000)

