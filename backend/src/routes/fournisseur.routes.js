const fournisseur = require('../controllers/fournisseurController')
const verifyToken = require('../middleware/authMiddleware');

const router = require('express').Router()


router.post('/ajouter', verifyToken, fournisseur.ajouterFournisseur);
router.get('/show/:id', verifyToken, fournisseur.show_FournisseurArticles);
router.get('/index', verifyToken, fournisseur.get_fournisseur);


module.exports = router 