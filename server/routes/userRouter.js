const router = require('express').Router()
const user = require('../controllers/userController')

router.post('/register', user.register)
router.post('/login', user.login)
router.post('/googleSign', user.googleSign)

module.exports = router