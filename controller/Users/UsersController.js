const db = require('../../models/index.js');
const bcrypt = require('bcrypt');
const usersTable = db['Users'];
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createUser = async (req, res) => {
    try {
        //Test si l'adresse email existe déjà en base
        const { email } = req.body;
        let userFound = await usersTable.findOne({
            where: { email: email }
        })
        if (userFound == null) {
            const { password } = req.body;
            //  Génération du SALT pour le chiffrement du mot de passe
            const salt = await bcrypt.genSaltSync(12);
            //  Chiffrement du mot de passe avec 'bcrypt'
            const hash = await bcrypt.hashSync(password, salt);
            //  Récupère les données du body et modifie le password et l'id de Role
            let data = { ...req.body, password: hash, idRole: 4 }
            //  Créé l'utilisateur dans la base de données
            let userCreated = await usersTable.create(data);
            //  Réponse avec l'action faite ('message') et les données de l'utilisateur créé ('data')
            res.status(200).send({
                message: 'Created',
                data: userCreated
            })
        } else {
            res.status(422).send({
                message: 'Adresse email déjà utilisée'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Une erreur est survenue.',
            error: error.message
        })
    }
}
const loginUser = async (req, res) => {
    try {
        //Recherche d'un utilisateur correspondant à l'adresse email renseignée
        const user = await usersTable.findOne({ where: { email: req.body.email } });
        //Test si un utilisateur avec cette adresse email existe
        if (user) {
            //Comparaison du mot de passe renseigné par l'utilisateur et le hash stocké en base
            const compare = await bcrypt.compareSync(req.body.password, user.password);
            //Si la comparaison est bonne
            if (compare) {
                //Génération d'un token contenant les informations (id et email) & la clé secrète 'SECRET_TOKEN'
                let token = jwt.sign({ email: user.email }, process.env.SECRET_TOKEN, {
                    expiresIn: '1d'
                });
                //Réponse HTTP 200 et le token en data
                res.status(200).send({ token: token });
            } else {
                res.status(422).send({
                    message: 'Adresse email et/ou mot de passe incorrect(s)'
                })
            }
        } else {
            res.status(422).send({
                message: 'Adresse email inconnue'
            })
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const middleWare = async (req, res, next) => {
    try {
        if (typeof req.headers['authorization'] === 'undefined') {
            // throw new Error("Erreur lors de la récupération du TOKEN (headers/Authorization)");
            res.status(401).send({
                message: 'Token no valid'
            })
        } else {
            let token = req.headers['authorization'].split(" ")[1];
            // console.log("token : " + token);
            // console.log(process.env.SECRET_TOKEN);
            let decoded = jwt.verify(token, process.env.SECRET_TOKEN);
            console.log("decoded : " + decoded);
            req.user = decoded;
            console.log("req.user : " + req.user.email);
            req.token = token;
            // res.status(200).json(req.user);
            next();
        }
    } catch (error) {
        res.status(400).send({
            message: 'Une erreur est survenue',
            error: error.message
        })
    }

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
    //         }
    //     );
    // }
}
const modifyEmail = async (req, res) => {
    try {
        const { email } = req.body;
        let newData = { email: email };
        //req.token est le token transmis par le middleware
        let emailVerify = jwt.verify(req.token, process.env.SECRET_TOKEN).email;
        const newEmail = await usersTable.update(newData, {
            where: {
                email: emailVerify
            }
        });
        if (newEmail === 1) {
            res.status(200).send({
                message: 'Email modifié',
                data: newEmail
            })
        } else {
            res.status(422).send({
                message: 'Email pas modifié'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modify = async (req, res) => {
    try {
        const { firstname, lastname, phone } = req.body;
        let newData = { firstname: firstname, lastname: lastname, phone: phone };
        //req.token est le token transmis par le middleware
        let email = jwt.verify(req.token, process.env.SECRET_TOKEN).email;
        const dataUpdated = await usersTable.update(newData, {
            where: {
                email: email
            }
        });
        if (dataUpdated[0] === 1) {
            console.log('Informations utilisateur mise à jour');
            res.status(200).send({
                message: 'Informations modifiées',
                data: newData
            })
        } else {
            res.status(422).send({
                message: 'Informations pas modifiées'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyPassword = async (req, res) => {
    try {
        const { password, passwordOld } = req.body;
        const user = req.user;
        const userFound = await usersTable.findOne({ where: { email: user.email } });
        if (userFound) {
            const compare = await bcrypt.compareSync(passwordOld, userFound.password);
            if (compare) {
                const salt = await bcrypt.genSaltSync(12);
                const hash = await bcrypt.hashSync(password, salt);
                let newData = { password: hash };
                //req.token est le token transmis par le middleware
                let email = jwt.verify(req.token, process.env.SECRET_TOKEN).email;
                const newPassword = await usersTable.update(newData, {
                    where: { email: email }
                });
                if (newPassword[0] === 1) {
                    console.log('Mot de passe modifié');
                    res.status(200).send({
                        message: 'Mot de passe modifié'
                    })
                } else {
                    res.status(422).send({
                        message: 'Mot de passe pas modifié'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'Ancien mot de passe incorrect'
                })
            }
        } else {
            throw 'error';
        }
    } catch (error) {
        console.error('Erreur modification password : ', error.message);
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })

    }
}
const getUserId = async (req, res) => {
    try {
        //  Récupération de l'utilisateur avec son id passé en paramètre d'URL
        const user = await usersTable.findByPk(req.params.id);
        if (user) {
            res.status(200).send({
                data: user
            })
        } else {
            res.status(422).send({
                message: 'User pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur survenue lors de la récupération d\'un utilisateur par son ID.',
            error: error.message
        })
    }
}
const getUserEmail = async (req, res) => {
    try {
        //  Récupération de l'utilisateur avec son id passé en paramètre d'URL
        const user = await usersTable.findOne({ where: { email: req.params.email } });
        if (user) {
            res.status(200).send({
                data: user
            });
        } else (
            res.status(422).send({
                message: "Aucune correspondance trouvée"
            })
        )
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getAllUser = async (req, res) => {
    try {
        //  Récupération de tous les utilisateurs
        const users = await usersTable.findAll();
        if (users) {
            //  Envoie de tous les utilisateurs
            res.status(200).send({
                data: users
            })
        } else {
            res.status(422).send({
                message: 'Pas d\'utilisateur trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getAllUserByIdRole = async (req, res) => {
    try {
        //  Récupération de tous les utilisateurs
        const users = await usersTable.findAll(
            {
                where: { idRole: req.params.idRole }
            });
        if (users) {
            res.status(200).send({
                data: users
            })
        } else {
            res.status(422).send({
                message: 'Pas d\'utilisateur trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
module.exports = { createUser, loginUser, middleWare, modifyEmail, modifyPassword, getUserId, getUserEmail, getAllUser, getAllUserByIdRole, modify };