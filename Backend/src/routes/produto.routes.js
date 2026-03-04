const express = require('express');
const router = express.Router();

const productController = require('./../controllers/produto.controller');
const validateProduct = require('./../middlewares/produto.middleware');

router.get