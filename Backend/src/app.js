const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const carrinhoRouters = require('./routes/carrinho.routes');

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/carrinho', carrinhoRouters)

app.get('/ola', (req, res) => {
    res.send('Olá mundo!')
})

app.listen(3000)
// http://localhost:3000/

module.exports = app