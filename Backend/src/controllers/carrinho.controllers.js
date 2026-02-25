async function createProduct (req, res) {
    const { idCarrinho, idProduto, quatidade } = req.body;

    const newProduct = {
        idCarrinho,
        idProduto,
        quatidade
    };

    res.status(201).json({
        message: 'Produto adicionado ao carrinho!',
        product: newProduct
    });
};

async function listProduct (req, res) {

    res.send({
        message: 'Olá mundo',
    });
};

module.exports = {createProduct, listProduct}