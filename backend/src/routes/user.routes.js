const userController = require('../controllers/userController')
const router = require('express').Router()
const verifyToken = require('../middleware/authMiddleware');

router.get('/all', verifyToken, userController.getAllUsers) 

module.exports = router