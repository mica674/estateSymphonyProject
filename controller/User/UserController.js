const db = require('../../models/index.js');
const bcrypt = require('bcrypt');
const userTable = db['User'];


const createUser = async (req, res) => {

    try {

        const { password } = req.body;
        //  Génération du SALT pour le chiffrement du mot de passe
        const salt = await bcrypt.genSaltSync(12);
        //  Chiffrement du mot de passe avec 'bcrypt'
        const hash = await bcrypt.hashSync(password, salt);
        //  Récupère les données du body et modifie le password et l'id de Role
        let data = { ...req.body, password: hash, roleId: 2 }
        //  Créé l'utilisateur dans la base de données
        const newUser = await userTable.create(data);

        //  Réponse avec l'action faite ('message') et les données de l'utilisateur créé ('data')
        res.status(200).send({
            message: 'Create',
            data: newUser
        })

    } catch (error) {
        console.log(error.message);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })

        res.status(401).send({
            message: 'Vous n\'êtes pas autorisé.',
            error: error.message
        })

        res.status(403).send({
            message: 'Vous n\'avez pas les droits d\'accès.',
            error: error.message
        })

        res.status(404).send({
            message: 'Le serveur n\'a pas trouvé la source demandé.',
            error: error.message
        })

        res.status(500).send({
            message: 'Erreur serveur.',
            error: error.message
        })
    }
}
const loginUser = async (req, res, next) => {
    try {
        //Recherche d'un utilisateur correspondant à l'adresse email renseignée
        const user = await userTable.findOne({ where: { email: req.body.email }});
        //Test si un utilisateur avec cette adresse email existe
        if (user) {
            //Comparaison du mot de passe renseigné par l'utilisateur et le hash stocké en base
            const compare = await bcrypt.compareSync(req.body.password, user.password);
            console.log(compare);
            //Si la comparaison est bonne
            if (compare) {
                //Génération d'un token contenant les informations (id et email) & la clé secrète 'SECRET_TOKEN'
                let token = jwt.sign({ email: user.email }, process.env.SECRET_TOKEN, {
                    expiresIn : '1d'
                });
                //Réponse HTTP 200 et le token en data
                res.status(200).send({ token: token });
            }
        }

        
    } catch (error) {
        
        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })

        res.status(401).send({
            message : 'Vous n\'êtes pas autorisé.',
            error : error.message
        })

        res.status(403).send({
            message : 'Vous n\'avez pas les droits d\'accès.',
            error : error.message
        })

        res.status(404).send({
            message : 'Le serveur n\'a pas trouvé la source demandé.',
            error : error.message
        })

        res.status(500).send({
            message : 'Erreur serveur.',
            error : error.message
        })        
    }

}
const middleWare = async (req, res, next) => {

    let token = req.headers['authorization'].split(" ")[1];
    console.log("token : " + token);
    let decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    console.log("decoded : " + decoded);
    req.user = decoded;
    console.log("req.user : " + req.user);
    req.token = token;
    // res.status(200).json(req.user);
    next();

    // CODE DE NICOLAS
    // const token = req.headers.authorization;
    // if (!token)
    //     res.status(401).json({ error: "Vous n'avez pas le droit d'être ici" });
    // else {
    //     console.log(token.split(" "));
    //     jwt.verify(
    //         token.split(" ")[1],
    //         process.env.SECRET_TOKEN,
    //         (err, value) => {
    //             if (err)
    //                 {res.status(401).json({ error: "Authentification échoué" });}
    //                 else{

    //                     console.log(value);
    //                 }
    //             // req.user = value.id;
    //             // console.log(req.user);
    //         }
    //     );
    // }
}
const modifyEmail = async (req, res) =>{

    try {

        const { email } = req.body;
        let newData = {email: email};
        //req.token est le token transmis par le middleware
        let email1 = jwt.verify(req.token,process.env.SECRET_TOKEN).email;
        console.log(email1);


        const newEmail = await userTable.update(newData, {
            where:{ 
                email:email1           
            }
        });
        

        res.status(200).send({
            message : 'Vous avez bien modifié votre email',
            data : newEmail
        })

    } catch (error) {
        
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })

        res.status(401).send({
            message : 'Vous n\'êtes pas autorisé.',
            error : error.message
        })

        res.status(403).send({
            message : 'Vous n\'avez pas les droits d\'accès.',
            error : error.message
        })

        res.status(404).send({
            message : 'Le serveur n\'a pas trouvé la source demandé.',
            error : error.message
        })

        res.status(500).send({
            message : 'Erreur serveur.',
            error : error.message
        })

    }

}
const modifyPassword = async (req, res) =>{
    try {
        
        const { password } = req.body;
        const salt = await bcrypt.genSaltSync(12);
        const hash = await bcrypt.hashSync(password, salt);
        let newData = {password: hash};
        //req.token est le token transmis par le middleware
        let email = jwt.verify(req.token,process.env.SECRET_TOKEN).email;
        console.log(email);


        const newPassword = await userTable.update(newData, {
            where:{ 
                email:email           
            }
        });
        
        res.status(200).send({
            message : 'Vous avez bien modifié votre mot de passe',
            data : newPassword
        })

    } catch (error) {
        
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })

        res.status(401).send({
            message : 'Vous n\'êtes pas autorisé.',
            error : error.message
        })

        res.status(403).send({
            message : 'Vous n\'avez pas les droits d\'accès.',
            error : error.message
        })

        res.status(404).send({
            message : 'Le serveur n\'a pas trouvé la source demandé.',
            error : error.message
        })

        res.status(500).send({
            message : 'Erreur serveur.',
            error : error.message
        })
    }
    
}
const getUser = async (req, res) => {

    try {
        //  Récupération de l'utilisateur avec son id passé en paramètre d'URL
        const user = await userTable.findByPk(req.params.id);

        
        res.status(200).send({
            message : `Bonjour ${user.firstname} ${user.firstname}`
        })

    } catch (error) {

        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })

        res.status(401).send({
            message : 'Vous n\'êtes pas autorisé.',
            error : error.message
        })

        res.status(403).send({
            message : 'Vous n\'avez pas les droits d\'accès.',
            error : error.message
        })

        res.status(404).send({
            message : 'Le serveur n\'a pas trouvé la source demandé.',
            error : error.message
        })

        res.status(500).send({
            message : 'Erreur serveur.',
            error : error.message
        })
    }
}
const getAllUser = async (req, res) =>{
    try {
        //  Récupération de tous les utilisateurs
        const user = await userTable.findAll();

        //  Envoie de tous les utilisateurs
        res.status(200).send({
            message : 'select',
            data : users
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })

        res.status(401).send({
            message : 'Vous n\'êtes pas autorisé.',
            error : error.message
        })

        res.status(403).send({
            message : 'Vous n\'avez pas les droits d\'accès.',
            error : error.message
        })

        res.status(404).send({
            message : 'Le serveur n\'a pas trouvé la source demandé.',
            error : error.message
        })

        res.status(500).send({
            message : 'Erreur serveur.',
            error : error.message
        })
    }
}
module.exports = { createUser, loginUser, middleWare, modifyEmail, modifyPassword, getUser, getAllUser};