const { Router } = require("express")
const router = Router()
const { news } = require("../controllers/mailer.js")


router.post('/', async (req, res) => {  
    try {
         const { name, email, mensaje } = req.body       
                
        res.status(200).json(await news(name, email, mensaje))

    } catch (error) {
        res.json(error)
    }   
})




module.exports = router;