const { Router } = require('express')
const router = Router()
const {getAllProducts, postProduct} = require('./controllers/products.js');

router.get('/', getAllProducts)
router.get('/:id', getAllProducts)
router.get('/?name', getAllProducts)

router.post('/', postProduct);

module.exports = router;
