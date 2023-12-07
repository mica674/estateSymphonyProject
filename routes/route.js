const express = require('express');
const router = express.Router();

const { getAllUser } = require('../controller/UsersController');
const { createUser } = require('../controller/CreateUserController');
const { getUser } = require('../controller/UserController');
const { loginUser } = require('../controller/LoginUserController');
const { middleWare } = require('../controller/MiddleWareController');
const {modifyPassword} = require('../controller/ModifyPasswordController');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bonjour'
    })
})

router.get('/users/:id', getUser);
router.get('/users', getAllUser);
router.post('/users', createUser);
router.post('/login', loginUser);
router.post('/modify', modifyPassword);
router.get('/me', middleWare);





module.exports = router;