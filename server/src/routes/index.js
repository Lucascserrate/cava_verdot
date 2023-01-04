const { Router } = require('express');
const router = Router()
const category = require('./categories.routes.js')

router.use('/categories', category)

module.exports = router
