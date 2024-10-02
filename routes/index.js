const router = require('express').Router();
const userInformation = require('../controllers/user.controller')

router.get('/user', userInformation.userInformation);


module.exports = router;