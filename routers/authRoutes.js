const router = require('express').Router()
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')


// REGISTER A USER
router.post('/register', authController.register)
// LOGIN A USER
router.post('/login', authController.login)
// TESTING ROUTE
router.get('/' , authMiddleware, authController.testRoute)



module.exports = router