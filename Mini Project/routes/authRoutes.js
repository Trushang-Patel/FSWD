const express = require('express');
const { registerController, loginController ,logoutController} = require('../controllers/authcontroller');

//router OBJECT
const router = express.Router();

//routes
//register route
router.post('/register', registerController)
//login route
router.post('/login', loginController)
//logout route
router.post('/logout', logoutController)
module.exports = router;