const express = require('express');
const router = express.Router();

//------------------------------------- USER ---------------------------------------
const { getAllUser } = require('../controller/User/UserController');
const { createUser } = require('../controller/User/UserController');
const { getUser } = require('../controller/User/UserController');
const { loginUser } = require('../controller/User/UserController');
const { middleWare } = require('../controller/User/UserController');
const {modifyPassword} = require('../controller/User/UserController');
const {modifyEmail} = require('../controller/User/UserController');

//------------------------------------- PROPERTIES ----------------------------------
const {createProperties} = require ('../controller/Properties/PropertiesController');

//------------------------------------- ESTIMATIONS ----------------------------------






router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bonjour'
    })
})

//------------------------------------- USER ROUTER ---------------------------------------
router.get('/users/:id', getUser);
router.get('/users', getAllUser);
router.post('/users', createUser);
router.post('/login', loginUser);
router.put('/modifyPassword', middleWare, modifyPassword);
router.put('/modifyEmail', middleWare, modifyEmail);


//------------------------------------- PROPERTIES ROUTER ---------------------------------
router.post('/createProperties', createProperties);


//------------------------------------- ESTIMATIONS ROUTER ---------------------------------
/*router.post('/createEstimations', createEstimations);
router.put('/modifyEstimations', modifyEstimations);
router.get('/viewsEstimations', viewEstimations);
router.put('/delectedEstimations', delectedEstimations);*/

//router.get('/me', middleWare );




module.exports = router;