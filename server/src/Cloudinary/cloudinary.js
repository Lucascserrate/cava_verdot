require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET } = require('../../config') 
// configuracion de cloudinary
cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_KEY,
    api_secret: CLOUDINARY_SECRET,
    secure: true
});

//funcion para subir imagenes
//recibe como parametro la ruta donde esta el archivo
// esta funcion tiene dentro un metodo de cloudinary q recibe la ruta y el folder a guardar en la plataforma
const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "CAVA-verdot",
  });
};

module.exports = { cloudinary, uploadImage };