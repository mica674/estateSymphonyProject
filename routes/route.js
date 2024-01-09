const express = require('express');
const {specs, swaggerUi} = require('../Swagger/swaggerConfig')
const router = express.Router();

//------------------------------------- USER ---------------------------------------
const UserController = require('../controller/User/UserController')

//------------------------------------- PROPERTIES ----------------------------------
const {createProperties} = require ('../controller/Properties/PropertiesController');

//------------------------------------- ESTIMATIONS ----------------------------------
//------------------------------------- ROLE ---------------------------------------
const roleController = require('../controller/Roles/RolesController');

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bonjour'
    })
})


//------------------------------------- ROLE ROUTER ---------------------------------------
/**
 * @swagger
 * /example:
 *   get:
 *     summary: Récupérer toutes les données d'exemple
 *     description: Obtenez toutes les données d'exemple à partir de la base de données.
 *     responses:
 *       200:
 *         description: Succès
 *       500:
 *         description: Erreur du serveur
*/
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