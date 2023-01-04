const { Router } = require('express');
const router = Router()
const category = require('./categories.routes.js')
const productMiddleware = require('./products.routes.js')

router.use('/categories', category)
router.use('/products', productMiddleware)

module.exports = router
