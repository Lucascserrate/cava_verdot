const { Router } = require("express")
const router = Router()
const { baja } = require("../controllers/mailer.js")
const User = require("../../db.js")


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, email } = req.body

        await User.destroy(
            { name, email },
            {
                where:
                    { id, }
            }
        )

        res.status(200).json(await baja(name, email)).send("Usuario eliminado")

    } catch (error) {
        res.status(400).send("No se pudo eliminar el usuario")
    }
})

module.exports = router;