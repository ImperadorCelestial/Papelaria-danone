const express = require('express');
const router = express.Router();

const {createProduct, listProduct} = require('./../controllers/carrinho.controllers');

router.post('/carrinho', createProduct);
router.get('/listar-carrinho', listProduct);

module.exports = router;