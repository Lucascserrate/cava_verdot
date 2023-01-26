const { Router } = require("express")
const { Historial } = require("../db.js")
const router = Router()
const { getIdHistory, getHistory } = require("./controllers/getIdHistory.js")
const { Amount } = require("../routes/controllers/Filter&OrderHistory/OrderByAmount.js")



router.get("/amount", Amount);
router.get("/", getHistory);

router.get("/:id", async (req, res) => {

  try {

    const { id } = req.params

    if (id) res.status(200).send(await getIdHistory(id))


  } catch (error) {
    res.status(404).send({ error: error.message })
  }

})

router.post("/", async (req, res) => {
  const {
    nameUser,
    surname,
    email,
    userId,
    drinkId,
    amount,
    name,
    subtotal,
  } = req.body

console.log( 'soy el body hist' , req.body);


  try {
    // if (userId && amount && drinkId && subtotal && name && email && nameUser &&
    //   surName) 
      
      // {

      const newData = await Historial.create({
        nameUser,
        surname,
        email,
        userId,
        amount,
        drinkId,
        name,
        subtotal
      })
      console.log(newData);
      res.status(200).send("se cargo la data")
    // }

  } catch (error) {
    console.log(error);
    res.status(404).send({ error: error.message })
  }
})



module.exports = router;


