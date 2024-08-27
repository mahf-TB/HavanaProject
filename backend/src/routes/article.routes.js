const articleController = require('../controllers/articleController')
const verifyToken = require('../middleware/authMiddleware');
const upload = require('../utils/fileUpload');

const router = require('express').Router()


router.post('/ajouter', verifyToken, upload.single('image') , articleController.ajouterProduit);
router.get('/index', verifyToken, articleController.get_allArticles);


module.exports = router  