const express = require('express');
const router = express.Router();

const {getAllUser} = require('../controller/UsersController');
const {createUser} = require('../controller/CreateUserController');
const {getUser} =require('../controller/UserController');


router.get('/', (req, res) => {
    res.status(200).json({
        message:'Bonjour'
    })
})

router.get('/users/:id', getUser);
router.get('/users', getAllUser );
router.post('/users', createUser);




module.exports = router;