const db = require('../models/index.js');
const userTable = db['User'];


const getAllUser = async (req, res) =>{
    try {
        
        const users = await userTable.findAll();

        res.status(200).send({
            message : 'select',
            data : users
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllUser};