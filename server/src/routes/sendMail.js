const { Router } = require("express")
const router = Router()
const { mailActivateAccount } = require("./controllers/mailer.js")

router.get('/', async (req, res) => {
    try {
        const { name, email } = req.body
        res.json(await mailActivateAccount(name, email))
    } catch (error) {
        res.json(error)
    }
})

module.exports = router