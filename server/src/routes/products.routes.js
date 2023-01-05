const { Router } = require('express')
const router = Router()
const getAllProducts = require('./controllers/products.js');

router.get('/', getAllProducts)
router.get('/:id', getAllProducts)
router.get('/?name', getAllProducts)


module.exports = router;
