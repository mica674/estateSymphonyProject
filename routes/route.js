const express = require('express');
const router = express.Router();

const { getAllUser } = require('../controller/User/UsersController');
const { createUser } = require('../controller/User/CreateUserController');
const { getUser } = require('../controller/User/UserController');
const { loginUser } = require('../controller/User/LoginUserController');
const { middleWare } = require('../controller/User/MiddleWareController');
const {modifyPassword} = require('../controller/User/ModifyPasswordController');
const {modifyEmail} = require('../controller/User/ModifyEmailController');



router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bonjour'
    })
})

router.get('/users/:id', getUser);
router.get('/users', getAllUser);
router.post('/users', createUser);
router.post('/login', loginUser);
router.put('/modifyPassword', middleWare, modifyPassword);
router.put('/modifyEmail', middleWare, modifyEmail);

router.get('/me', middleWare );





module.exports = router;