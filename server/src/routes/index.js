const { Router } = require('express');
const router = Router();
const category = require('./categories.routes.js');
const product = require('./products.routes.js');

router.use('/categories', category)
router.use('/productos', product)

module.exports = router
