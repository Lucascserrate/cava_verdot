const { Router } = require("express");
const router = Router();

router.post('/', async (req, res) => {
  const {email, password} = req.body
  try {
    
  } catch (e) {
    console.log(e)
    res.status(500).json({message: '¯\_(ツ)_/¯'})
  }
})

module.exports = router