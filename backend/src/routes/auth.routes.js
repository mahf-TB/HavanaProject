const authController = require('../controllers/authController')
const verifyToken = require('../middleware/authMiddleware');

const router = require('express').Router()


//Route pour obtenir les informations de l'utilisateur authentifié
router.get('/user', verifyToken, authController.user_Auth);


//Route pour enregistrer un utilisateur
router.post('/register', authController.registerUser) 
router.post('/login', authController.loginUser) 


module.exports = router