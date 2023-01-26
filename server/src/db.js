require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// const sequelize = new Sequelize(
// 	`postgresql://postgres:kpSBAKrmRQHjfEsM4XDl@containers-us-west-123.railway.app:6728/railway`,
// 	{
// 		logging: false,
// 		native: false,
// 	},
// );


 const sequelize = new Sequelize(
  `postgres:${DB_USER}:${DB_PASSWORD}@${DB_HOST}/cava`,
  {
	logging: false,
	native: false,
  }
);



const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js",
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, "/models", file)));
	});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
	Category,
	Drink,
	Country,
	SubCategory,
	Role,
	User,
	AllCountry,
	AllState,
	AllCity,
	Historial,
	Address,
	RatingAndReview,
} = sequelize.models;

// Aca vendrian las relaciones

Category.hasMany(Drink);
Drink.belongsTo(Category);
Country.hasMany(Drink);
Drink.belongsTo(Country, { foreignKey: "countryId" });
Category.hasMany(SubCategory);
SubCategory.belongsTo(Category, { foreignKey: "categoryId" });
Role.hasMany(User);
User.belongsTo(Role);
User.belongsToMany(Historial, { through: "userHistory" });
Historial.belongsToMany(User, { through: "userHistory" });
Drink.belongsToMany(Historial, { through: "drinkHistory" });
Historial.belongsToMany(Drink, { through: "drinkHistory" });
AllCountry.hasMany(AllState);
AllState.belongsTo(AllCountry, { foreignKey: "id_country" });
AllState.hasMany(AllCity);
AllCity.belongsTo(AllState, { foreignKey: "id_state" });
Address.hasMany(User);
User.belongsTo(Address, { foreignKey: "id_user" });
User.belongsToMany(Drink, { through: RatingAndReview });
Drink.belongsToMany(User, { through: RatingAndReview });

module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
