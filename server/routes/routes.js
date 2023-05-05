const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')

router.post('/signup', loginController.signup)

module.exports = router;