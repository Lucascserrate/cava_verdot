const { Country } = require("../../db");

const postCountry = async (req, res) => {
  const { country } = req.body;
  try {
    //verificamos que no exista previamente la categoría,
    //si ya existe enviamos mensaje de error
    //si no creamos la categoría
    const validateCountry = await Country.findOne({
      where: {
        country: country,
      },
    });
    if (validateCountry !== null) {
      return res.status(404).send(`Country '${Country}' already exists`);
    }
    const newCountry = await Country.create({
      country: country,
    });
    console.log(newCountry);
    res.status(200).send(`Success '${newCountry.country}' has been created`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = postCountry;
