const { Router } = require("express")
const router = Router()
const { welcome } = require("../controllers/mailer.js")


router.post('/', async (req, res) => {  
    try {
         const { name, email, mensaje } = req.body       
                
        res.status(200).json(await welcome(name, email))

    } catch (error) {
        res.json(error)
    }   
})

module.exports = router;