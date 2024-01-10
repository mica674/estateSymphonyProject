const multer = require('multer');

//Type de MIME TYPES
const MIME_TYPES = {
  "image/jpeg" : "jpg",
  "image/jpg" : "jpg",
  "image/png" : "png"
}

//La destiantion du fichier (repertoire) et générer un nom de fichier unique.
const storage = multer.diskStorage({
  //La desination de stokage du ficher.
  destination : (req, file, callback) => {    
    console.log("Coucou");

    callback(null, "images");
  }, 
  //supprimer les espaces dans le nom du fichier.
  filename : (req, file, callback, next) => {
    //On récupère le nom d'origine du fichier et on remplace les espaces par un underscore.
    const name = file.originalname.split(" ").join("_");
    //On donne une extention à notre fichier d'upload.
    const extension = MIME_TYPES[file.mimetype];

    callback(null, name + '_' + Date.now() + '.'+extension);
    next;
  }
})
//On export le middleware multer en disant qu'on peut upload seulement 10 images.
const upload = multer({ storage: storage }).array("image", 10);

module.exports = {upload}