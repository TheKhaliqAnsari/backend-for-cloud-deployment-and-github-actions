const router = require('express').Router();
const userInformation = require('../controllers/user.controller')

router.get('/user', userInformation.userInformation);
router.get('/sayhello', userInformation.sayHello)


module.exports = router;