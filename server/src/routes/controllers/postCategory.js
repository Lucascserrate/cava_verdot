const { Category } = require("../../db");

const postCategory = async (req, res) => {
    const {category} = req.body;
    try {
        //verificamos que no exista previamente la categoría, 
        //si ya existe enviamos mensaje de error
        //si no creamos la categoría
        const validateCategory = await Category.findOne({
            where: {
                category: category,
            },
        });
        if (validateCategory !== null) {
            return res.status(404).send(`category '${category}' already exists`);
        }
        const newCategory = await Category.create({
            category:category,
        });
        console.log(newCategory)
        res.status(200).send(`Success '${newCategory.category}' has been created`);
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error.message})
    }
}

module.exports = postCategory;
