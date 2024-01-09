const express = require('express');
const router = express.Router();

//------------------------------------- USER ---------------------------------------
const UserController = require('../controller/User/UserController')

//------------------------------------- PROPERTIES ----------------------------------
const {createProperties} = require ('../controller/Properties/PropertiesController');

//------------------------------------- ESTIMATIONS ----------------------------------
//------------------------------------- ROLE ---------------------------------------
const roleController = require('../controller/Roles/RolesController');





router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bonjour'
    })
})

//------------------------------------- ROLE ROUTER ---------------------------------------
router.get('/roles/:id', roleController.getRole);
router.get('/roles', roleController.getAllRoles);
router.post('/role', roleController.createRole);
router.put('/modifyRole/:id', roleController.modifyRole);
router.delete('/role/:id', roleController.deleteRole);

//------------------------------------- USER ROUTER ---------------------------------------
router.get('/user/id/:id', UserController.getUserId);
router.get('/user/email/:email', UserController.getUserEmail);
router.get('/users', UserController.getAllUser);
router.get('/users/:idRole', UserController.getAllUserByIdRole);
router.post('/user/create', UserController.createUser);
router.post('/login', UserController.loginUser);
router.put('/user/modifyPassword', UserController.middleWare, UserController.modifyPassword);
router.put('/user/modify', UserController.middleWare, UserController.modify);
// router.put('/user/modifyEmail', UserController.middleWare, UserController.modifyEmail);


//------------------------------------- PROPERTIES ROUTER ---------------------------------
router.post('/createProperties', createProperties);


//------------------------------------- ESTIMATIONS ROUTER ---------------------------------
/*router.post('/createEstimations', createEstimations);
router.put('/modifyEstimations', modifyEstimations);
router.get('/viewsEstimations', viewEstimations);
router.put('/delectedEstimations', delectedEstimations);*/

//router.get('/me', middleWare );




module.exports = router;