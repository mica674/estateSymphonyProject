const express = require('express');
const router = express.Router();

//------------------------------------- USER ---------------------------------------
const { getAllUser } = require('../controller/User/UsersController');
const { createUser } = require('../controller/User/CreateUserController');
const { getUser } = require('../controller/User/UserController');
const { loginUser } = require('../controller/User/LoginUserController');
const { middleWare } = require('../controller/User/MiddleWareController');
const {modifyPassword} = require('../controller/User/ModifyPasswordController');
const {modifyEmail} = require('../controller/User/ModifyEmailController');

//------------------------------------- PROPERTIES ----------------------------------
const {createProperties} = require ('../controller/Properties/createProperties');
const {modifyProperties} = require ('../controller/Properties/modifyProperties');
const {viewProperties} = require ('../controller/Properties/viewProperties');
const {delectedProperties} = require ('../controller/Properties/delectedProperties');

//------------------------------------- ESTIMATIONS ----------------------------------
const {createEstimations} = require ('../controller/Estimations/createEstimations');
const {modifyEstimations} = require ('../controller/Estimations/modifyEstimations');
const {viewEstimations} = require ('../controller/Estimations/viewEstimations');
const {delectedEstimations} = require ('../controller/Estimations/delectedEstimations');






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
/*router.put('/modifyProperties', modifyProperties);
router.get('/viewsProperties', viewProperties);
router.put('/delectedProperties', delectedProperties);*/


//------------------------------------- ESTIMATIONS ROUTER ---------------------------------
/*router.post('/createEstimations', createEstimations);
router.put('/modifyEstimations', modifyEstimations);
router.get('/viewsEstimations', viewEstimations);
router.put('/delectedEstimations', delectedEstimations);*/

//router.get('/me', middleWare );



//test email
// require ('../NodeMailerTest.js');

module.exports = router;