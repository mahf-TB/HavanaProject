const client = require('../controllers/clientController')
const verifyToken = require('../middleware/authMiddleware');

const router = require('express').Router()


router.post('/ajouter', verifyToken, client.newClient);
// router.get('/show/:id', verifyToken, fournisseur.show_FournisseurArticles);
router.get('/index', verifyToken, client.listeClient);


module.exports = router 