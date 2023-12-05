const express = require('express');
const router = express.Router();
const {getAllUser} = require('../controller/UsersController');

router.get('/', (req, res) => {
    res.status(200).json({
        message:'Bonjour'
    })
})

router.get('/users', getAllUser )

module.exports = router;