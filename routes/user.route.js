const express = require('express');
const auth = require('../routes/auth');
const router = express.Router();

const users_controller = require('../controllers/user.controller');
router.post('/', auth.optional, users_controller.signup);
router.get('/current', auth.required, users_controller.getuser);
router.post('/login', auth.optional, users_controller.login);
module.exports = router;