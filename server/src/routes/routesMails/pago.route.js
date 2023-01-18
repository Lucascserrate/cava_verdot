const { Router } = require("express")
const router = Router()
const { pago } = require("../controllers/mailer.js")


router.post('/', async (req, res) => {  
    try {
         const { name, email } = req.body       
                
        res.status(200).json(await pago(name, email))

    } catch (error) {
        res.json(error)
    }   
})




module.exports = router;