// utils/fileUpload.js
const multer = require('multer');
const path = require('path');


// Configuration du stockage des fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/articles'); // Dossier de stockage des images
  }, 
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Nom du fichier
  },
});


// Filtrage des fichiers pour accepter uniquement les images
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


// Configuration de multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limite de taille de 5MB
  },
  fileFilter: fileFilter,
});

module.exports = upload;
