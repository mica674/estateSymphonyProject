const multer = require('multer');
const fs = require('node:fs');

// MIME types
const MIME_TYPES = {
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/png": "png"
};

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("Hello, I'm the photos middleware...");
    let dir = './public/propertiesPhotos';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    callback(null, dir);
  },
  filename: (req, file, callback) => {
    console.log("Re I'm the photos middleware...");
    const extension = MIME_TYPES[file.mimetype];
    let name = file.originalname.split(" ").join("_");
    name = name.substring(0, name.length - extension.length - 1);
    callback(null, name + '_' + Date.now() + '.' + extension);
    console.log('MULTER OK');
  }
});

const upload = multer({ storage: storage }).array('photo', 10);

module.exports = { upload };
