//SWAGGER

//  USER
// ------
//  GET BY ID
/**
 * @swagger
 * /user/id/{id}:
 *  get:
 *      summary: Récupérer les informations d'un utilisateur par son id
 *      tags: [USER]
 *      parameters:
 *          -   in : path
 *              name: id
 *              required: true
 *              description: ID of User
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Récupère les informations d'un utilisateur dans la base de données à partir de son ID
 *      responses:
 *          200:
 *              description: Utilisateur trouvé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Bonjour firstname lastname
 *                          data: 
 *                              id: 2
 *                              firstname: Mickaël
 *                              lastname: Fournier
 *                              email: mickael.fournier@gmail.com
 *                              password: $2b$12$LsSuRasqNwR6kX.Ua3Uni.ofB1eRbK5iP4Fqw7sJGIV5QhoN3VXmu
 *                              phone: "0612345678"
 *                              idRole: 2
 *                              createdAt: 2024-01-08T14:05:18.000Z
 *                              updatedAt: 2024-01-08T14:05:18.000Z
 *          400:
 *              description: Erreur lors de la récupération de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d'un utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération d'un utilisateur par son ID
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d'un utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Utilisateur n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Utilisateur pas trouvé
*/
//  GET BY EMAIL
/**
 * @swagger
 * /user/email/{email}:
 *  get:
 *      summary: Récupérer les informations d'un utilisateur par email
 *      tags: [USER]
 *      parameters:
 *          -   in : path
 *              name: email
 *              required: true
 *              description: EMAIL of User
 *              schema:
 *                  type: string
 *                  description: Adresse email de l'utilisateur ciblé
 *                  example: mickael.fournier@gmail.com 
 *      description: Récupère les informations d'un utilisateur dans la base de données à partir de son EMAIL
 *      responses:
 *          200:
 *              description: Utilisateurs trouvés avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Bonjour Mickaël (prénom) Fournier (nom) 2 (idRole) mickael.fournier@gmail.com (email) 
 *                          data: 
 *                              id: 2
 *                              firstname: Mickaël
 *                              lastname: Fournier
 *                              email: mickael.fournier@gmail.com
 *                              password: $2b$12$LsSuRasqNwR6kX.Ua3Uni.ofB1eRbK5iP4Fqw7sJGIV5QhoN3VXmu
 *                              phone: "0612345678"
 *                              idRole: 2
 *                              createdAt: 2024-01-08T14:05:18.000Z
 *                              updatedAt: 2024-01-08T14:05:18.000Z
 *          400:
 *              description: Erreur lors de la récupétion de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d\'un utilisateur par son email
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération d'un utilisateur par son email
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d'un utilisateur par son email
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Utilisateur n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Utilisateur n'a pas été trouvé
*/
//  GET ALL
/**
 * @swagger
 * /users:
 *  get:
 *      summary: Récupérer les informations de tous les utilisateurs
 *      tags: [USER]
 *      description: Récupère les informations de tous les utilisateurs dans la base de données
 *      responses:
 *          200:
 *              description: Utilisateurs trouvés avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          data: 
 *                              -   id: 1
 *                                  firstname: Nawelle
 *                                  lastname: Bedrouni
 *                                  email: nawelle.bedrouni@gmail.com
 *                                  password: $2b$12$DMery5ubhzFNfDmvnX7APuJhm/bcEM3QsI5/DTm5x1lawiR742dlq
 *                                  phone: "0712345678"
 *                                  idRole: 1
 *                                  createdAt: 2024-01-08T14:05:18.000Z
 *                                  updatedAt: 2024-01-08T14:05:18.000Z
 *                              -   id: 33
 *                                  firstname: Thierry
 *                                  lastname: Lachat
 *                                  email: thierry.lachat@gmail.com
 *                                  password: $2b$12$DMery5ubhzFNfDmvnX7APuJhm/bcEM3QsI5/DTm5x1lawiR742dlq
 *                                  phone: "0712345689"
 *                                  idRole: 3
 *                                  createdAt: 2024-01-08T14:05:18.000Z
 *                                  updatedAt: 2024-01-08T14:05:18.000Z
 *                              -   id: 42
 *                                  firstname: Nicolas
 *                                  lastname: Personne
 *                                  email: nicolas.personne@gmail.com
 *                                  password: $2b$12$DMery5ubhzFNfDmvnX7APuJhm/bcEM3QsI5/DTm5x1lawiR742dlq
 *                                  phone: "0712345690"
 *                                  idRole: 4
 *                                  createdAt: 2024-01-08T14:05:18.000Z
 *                                  updatedAt: 2024-01-08T14:05:18.000Z
 *          400:
 *              description: Erreur lors de la récupération de tous les utilisateurs
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération de tous les utilisateurs
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération de tous les utilisateurs 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération de tous les utilisateurs
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Aucun utilisateur trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Pas d'utilisateur trouvé
*/
//  GET ALL BY ID ROLE
/**
 * @swagger
 * /users/{idRoles}:
 *  get:
 *      summary: Récupérer tous les utilisateurs qui ont un role spécifique
 *      tags: [USER]
 *      parameters:
 *          -   in : path
 *              name: idRoles
 *              required: true
 *              description: idRoles of User
 *              schema:
 *                  type: integer
 *                  description: Id du role cible
 *                  example: 1
 *      description: Récupère tous les utilisateurs qui ont un role spécifique
 *      responses:
 *          200:
 *              description: Utilisateurs trouvés avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Select all by idRole
 *                          data: 
 *                              id: 42
 *                              firstname: Nicolas
 *                              lastname: Personne
 *                              email: nicolas.personne@gmail.com
 *                              password: $2b$12$DMery5ubhzFNfDmvnX7APuJhm/bcEM3QsI5/DTm5x1lawiR742dlq
 *                              phone: "0712345690"
 *                              idRole: 4
 *                              createdAt: 2024-01-08T14:05:18.000Z
 *                              updatedAt: 2024-01-08T14:05:18.000Z
 *          400:
 *              description: Erreur lors de la récupération de tous les utilisateurs avec un rôle spécifique
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération de tous les utilisateurs avec un role spécifique
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération de tous les utilisateurs avec un role spécifique
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération de tous les utilisateurs avec un role spécifique
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Aucun utilisateur trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Aucun utilisateur trouvé
*/
//  CREATE
/**
 * @swagger
 * /user/create:
 *  post:
 *      summary: Créer un nouvel utilisateur
 *      tags: [USER]
 *      description: Insère un nouvel utilisateur dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              description: Email de l'utilisateur
 *                              required: true
 *                              example: nicolas.personne@gmail.com
 *                          password:
 *                              type: string
 *                              description: Mot de passe de l'utilisateur
 *                              required: true
 *                              example: Abc123&
 *                          firstname:
 *                              type: string
 *                              description: Prénom de l'utilisateur
 *                              required: false
 *                              example: Nicolas
 *                          lastname:
 *                              type: string
 *                              description: Nom de l'utilisateur
 *                              required: false
 *                              example: Personne
 *                          phone:
 *                              type: string
 *                              description: Numéro de téléphone de l'utilisateur
 *                              required: false
 *                              example: "0712345678"
 *                          idRole:
 *                              type: integer
 *                              description: Role de l'utilisateur
 *                              required: false
 *                              example: 4
 *      responses:
 *          201:
 *              description: Utilisateur créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: User created
 *                          data: 
 *                              id: 42
 *                              firstname: Nicolas
 *                              lastname: Personne
 *                              email: nicolas.personne@gmail.com
 *                              password: $2b$12$DMery5ubhzFNfDmvnX7APuJhm/bcEM3QsI5/DTm5x1lawiR742dlq
 *                              phone: "0712345690"
 *                              idRole: 4
 *                              createdAt: 2024-01-08T14:05:18.000Z
 *                              updatedAt: 2024-01-08T14:05:18.000Z
 *          400:
 *              description: Erreur lors de la création de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: L'adresse email existe déjà
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Email déjà utilisé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Email déjà utilisé
*/
//  LOGIN
/**
 * @swagger
 * /login:
 *  post:
 *      summary: Connexion d'un nouvel utilisateur
 *      tags: [USER]
 *      description: Connecte un nouvel utilisateur
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              description: Email de l'utilisateur
 *                              example: Albertlebeaugosse@gmail.com
 *                          password:
 *                              type: string
 *                              description: Mot de passe de l'utilisateur
 *                              example: Abc123&
 *      responses:
 *          200:
 *              description: Utilisateur connecté avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Connexion réussi
 *                          data: 
 *                              token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFsYmVydGxlYmVhdWdvc3NlQGdtYWlsLmNvbSIsImlhdCI6MTcwNTAwNzc3NywiZXhwIjoxNzA1MDk0MTc3fQ.7odUw0Z5gf3ONpAE5o96uyXgzlU6H3BweChaaj6IU2g
 *          400:
 *              description: Erreur lors de la connexion de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: La connexion a échouée
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la connexion d'un utilisateur 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la connexion d'un utilisateur
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Adresse email et/ou mot de passe incorrect(s)
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Adresse email et/ou mot de passe incorrect(s)
*/
//  MODIFY PASSWORD
/**
 * @swagger
 * /user/modifyPassword:
 *  put:
 *      summary: Modifier le mot de passe d'un utilisateur
 *      tags: [USER]
 *      description: Modifie le mot de passe d'un utilisateur dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          password:
 *                              type: string
 *                              description: Mot de passe de l'utilisateur
 *                              example: Abc123&
 *      responses:
 *          200:
 *              description: Mot de passe utilisateur modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Mot de passe modifié avec succès
 *                          data: newPassword
 *          400:
 *              description: Erreur lors de la modification de mot de passe de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du mot de passe
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la modification de mot de passe de l'utilisateur 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la modification de mot de passe de l'utilisateur
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Ancien mot de passe incorrect
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Ancien mot de passe incorrect
*/
//  MODIFY 
/**
 * @swagger
 * /user/modify:
 *  put:
 *      summary: Modifier les informations d'un utilisateur
 *      tags: [USER]
 *      description: Modifie les informations d'un utilisateur dans la base de données
 *      requestBody:
 *          required: false
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          firstname:
 *                              type: string
 *                              description: Prénom de l'utilisateur
 *                              example: Albert
 *                          lastname:
 *                              type: string
 *                              description: Nom de l'utilisateur
 *                              example: Einstein
 *                          phone:
 *                              type: string
 *                              description: Numéro de téléphone de l'utilisateur
 *                              example: "0998989898"
 *      responses:
 *          200:
 *              description: Informations de l'utilisateur modifiés avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Informations modifiés avec succès
 *                          data: 
 *                              firstname: Mickaël
 *                              lastname: Fournier
 *                              phone: "0612345678"
 *          400:
 *              description: Erreur lors de la modification des informations de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification des informations de l'utilisateur
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la modification des informations de l'utilisateur 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la modification des informations de l'utilisateur
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Les informations n'ont pas été modifiées
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Les informations n'ont pas été modifiées
*/


//  ROLE
// ------
//  GET BY ID
/**
 * @swagger
 * /role/{id}:
 *      get:
 *          summary: To find a 'Role' with his ID
 *          tags: [ROLE]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of Role
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un role par son ID
 *          responses: 
 *              200:
 *                  description: Role by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: Role 2
 *                          data:
 *                              id: 2
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la récupération du role
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d\'un role par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Le role n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Le role n'a pas été trouvé
 */
//  GET ALL
/**
 * @swagger
 * /roles:
 *      get:
 *          summary: Récupérer tous les roles de la base de données
 *          tags: [ROLE]
 *          description: Récupère tous les roles ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Roles ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         message: select all
 *                         data: 
 *                             -   id: 1
 *                                 name: Admin
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: "2024-01-09T08:22:15.000Z"
 *                             -   id: 2
 *                                 name: Manager
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *                             -   id: 3
 *                                 name: Employee
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *                             -   id: 4
 *                                 name: User
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *              400:
 *                  description: Erreur lors de la récupération des roles
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les roles
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *              description: Le role n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Le role n'a pas été trouvé
 */
//  CREATE
/**
 * @swagger
 * /role/create:
 *  post:
 *      summary: Créer un nouveau role
 *      tags: [ROLE]
 *      description: Crée un nouveau role dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: Nom du role
 *                              example: userOverrited
 *      responses:
 *          201:
 *              description: Role créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Role créé
 *                          data: 
 *                              id: 25
 *                              name: SuperAdmin
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
 *          400:
 *              description: Erreur lors de la création de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: L'adresse email existe déjà
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Le role n'a pas été créé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Le role n'a pas été créé
*/
//  MODIFY 
/**
 * @swagger
 * /role/modify/{id}:
 *  put:
 *      summary: Modifier le nom d'un role
 *      tags: [ROLE]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du role
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie le nom d'un role dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: Nom du role
 *                              example: admin
 *      responses:
 *          200:
 *              description: Nom du role modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Role modifié avec succès
 *          422:
 *              description: Le role n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Le role n'a pas été trouvé
*/
//  DELETE
/**
* @swagger
 * /role/delete/{id}:
 *      delete:
 *          summary: To delete a 'Role' with his ID
 *          tags: [ROLE]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of Role
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 28
 *          description: Deleting a 'Role' in the database
 *          responses: 
 *              200:
 *                  description: Delete Role by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Role supprimé
 *              422:
 *              description: Le role n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Le role n'a pas été trouvé
*/


//  ESTIMATION
// ------
//  GET BY ID
/**
 * @swagger
 * /estimation/{id}:
 *      get:
 *          summary: To find a 'Estimation' with his ID
 *          tags: [ESTIMATION]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of Estimation
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1 
 *          description: Obtenir une estimation par son ID
 *          responses: 
 *              200:
 *                  description: Estimation by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: Estimation 2
 *                          data:
 *                              id: 2
 *                              location: Achat
 *                              houseType: Maison
 *                              surface: 90
 *                              showerRoom: 1
 *                              room: 5
 *                              floor: 2
 *                              balcony: 1
 *                              parking: true
 *                              idUsers: 1
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la récupération de l'estimation
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d\'une estimation par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *                  description: L'estimation n'a pas été trouvée
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Estimation pas trouvée
 */
//  GET ALL
/**
 * @swagger
 * /estimations:
 *      get:
 *          summary: Récupérer toutes les estimations de la base de données
 *          tags: [ESTIMATION]
 *          description: Récupère toutes les estimations ajoutées dans la base de données
 *          responses: 
 *              200:
 *                  description: Estimations ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         message: select all
 *                         data: 
 *                             -    id: 1
 *                                  location: Achat
 *                                  houseType: Maison
 *                                  surface: 90
 *                                  showerRoom: 1
 *                                  room: 5
 *                                  floor: 2
 *                                  balcony: 1
 *                                  parking: true
 *                                  idUsers: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 2
 *                                  location: Achat
 *                                  houseType: Maison
 *                                  surface: 90
 *                                  showerRoom: 1
 *                                  room: 5
 *                                  floor: 2
 *                                  balcony: 1
 *                                  parking: true
 *                                  idUsers: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 3
 *                                  location: Achat
 *                                  houseType: Maison
 *                                  surface: 90
 *                                  showerRoom: 1
 *                                  room: 5
 *                                  floor: 2
 *                                  balcony: 1
 *                                  parking: true
 *                                  idUsers: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 4
 *                                  location: Achat
 *                                  houseType: Maison
 *                                  surface: 90
 *                                  showerRoom: 1
 *                                  room: 5
 *                                  floor: 2
 *                                  balcony: 1
 *                                  parking: true
 *                                  idUsers: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération de toutes les estimations
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de toutes les estimations
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Aucune estimation n'a été trouvée
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Pas d'estimation trouvée
 */
//  GET ALL BY IDUSER
/**
 * @swagger
 * /estimations/{id}:
 *      get:
 *          summary: Récupérer toutes les estimations d'un utilisateur de la base de données
 *          tags: [ESTIMATION]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of User
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Récupère toutes les estimations d'un utilisateur dans la base de données
 *          responses: 
 *              200:
 *                  description: Estimations ALL BY USER
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                             -    id: 1
 *                                  location: Achat
 *                                  houseType: Maison
 *                                  surface: 90
 *                                  showerRoom: 1
 *                                  room: 5
 *                                  floor: 2
 *                                  balcony: 1
 *                                  parking: true
 *                                  idUsers: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 2
 *                                  location: Achat
 *                                  houseType: Maison
 *                                  surface: 90
 *                                  showerRoom: 1
 *                                  room: 5
 *                                  floor: 2
 *                                  balcony: 1
 *                                  parking: true
 *                                  idUsers: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 3
 *                                  location: Achat
 *                                  houseType: Maison
 *                                  surface: 90
 *                                  showerRoom: 1
 *                                  room: 5
 *                                  floor: 2
 *                                  balcony: 1
 *                                  parking: true
 *                                  idUsers: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération de toutes les estimations
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de toutes les estimations
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: L'estimation n'a pas été créée
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: L'estimation n'a pas été créée
 */
//  CREATE
/**
 * @swagger
 * /estimation/create:
 *  post:
 *      summary: Créer une nouvelle estimation
 *      tags: [ESTIMATION]
 *      description: Crée une nouvelle estimation dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          location:
 *                              type: string
 *                              description: Type de vente (Achat/Vente ou Location) du bien
 *                              example: Achat
 *                          houseType:
 *                              type: string
 *                              description: Type de bien (maison, appartement ...)
 *                              example: Maison
 *                          surface:
 *                              type: integer
 *                              description: Surface en m²
 *                              example: 90
 *                          showerRoom:
 *                              type: integer
 *                              description: Nombre de pièces d'eau (salle de bain, salle de douche ...)
 *                              example: 1
 *                          room:
 *                              type: integer
 *                              description: Nombre de pièces du bien
 *                              example: 3
 *                          floor:
 *                              type: integer
 *                              description: Nombre d'étage du bien
 *                              example: 1
 *                          balcony:
 *                              type: integer
 *                              description: Balcon/Terrasse
 *                              example: 1
 *                          parking:
 *                              type: boolean
 *                              description: Présence d'une place parking (true/false)
 *                              example: false
 *                          idUser:
 *                              type: integer
 *                              description: ID de l'utilisateur demandeur de l'estimation
 *                              example: 2
 *      responses:
 *          201:
 *              description: Estimation créée avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Estimation créée
 *                          data: 
 *                              id: 25
 *                              location: Achat
 *                              houseType: Maison
 *                              surface: 90
 *                              showerRoom: 1
 *                              room: 5
 *                              floor: 2
 *                              balcony: 1
 *                              parking: true
 *                              idUsers: 1
 *          400:
 *              description: Erreur lors de la création de l'estimation
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'une estimation
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *                  description: L'estimation n'a pas été trouvée
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: L'estimation n'a pas été trouvée
*/
//  MODIFY 
/**
 * @swagger
 * /estimation/modify/{id}:
 *  put:
 *      summary: Modifier les informations d'une estimation
 *      tags: [ESTIMATION]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID de l'estimation
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie les informations d'une estimation dans la base de données d'après son ID
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          location:
 *                              type: string
 *                              description: Type de vente (achat/vente ou location) du bien
 *                              example: Achat
 *                          houseType:
 *                              type: string
 *                              description: Type de bien (maison, appartement ...)
 *                              example: Maison
 *                          surface:
 *                              type: integer
 *                              description: Surface en m²
 *                              example: 90
 *                          showerRoom:
 *                              type: integer
 *                              description: Nombre de pièces d'eau (salle de bain, salle de douche ...)
 *                              example: 1
 *                          room:
 *                              type: integer
 *                              description: Nombre de pièces du bien
 *                              example: 3
 *                          floor:
 *                              type: integer
 *                              description: Nombre d'étage du bien
 *                              example: 1
 *                          balcony:
 *                              type: integer
 *                              description: Balcon/Terrasse
 *                              example: 1
 *                          parking:
 *                              type: boolean
 *                              description: Présence d'une place parking (true/false)
 *                              example: 1
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur demandeur de l'estimation
 *                              example: 1
 *      responses:
 *          200:
 *              description: Informations de l'estimation modifiées avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Estimation modifiée
 *          400:
 *              description: Erreur lors de la modification des informations de l'estimation
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification des informations de l'estimation
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *                  description: L'estimation n'a pas été trouvée
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: L'estimation n'a pas été trouvée
*/
//  DELETE
/**
* @swagger
* /estimation/delete/{id}:
*      delete:
*          summary: To delete a 'Estimation' with his ID
*          tags: [ESTIMATION]
*          parameters:
*              -   in : path
*                  name: id
*                  description: ID of Estimation
*                  schema: 
*                      type: integer
*                      required: true
*                      example: 1
*          description: Deleting a 'Estimation' in the database
*          responses: 
*              200:
*                  description: Delete Estimation by ID
*                  content:
*                      application/json:
*                          example:
*                              message: Estimation deleted
*              400:
*                description: Erreur lors de la suppression de l'estimation
*                content: 
*                    application/json:
*                        example:
*                            message: Erreur survenue lors de la suppression d'une estimation par son ID
*                            error: Message de l'erreur spécifique le cas échéant
*              422:
*                description: Estimation n'a pas été trouvée
*                content: 
*                    application/json:
*                        example:
*                            message: L'estimation n'a pas été trouvée
*/


//  MESSAGE
// ------
//  GET BY ID
/**
 * @swagger
 * /message/{id}:
 *      get:
 *          summary: To find a 'Message' with his ID (OBSOLETE)
 *          tags: [MESSAGE]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of Message
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un message par son ID
 *          responses: 
 *              200:
 *                  description: Message by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Message id = 2
 *                              data:
 *                                  id: 2
 *                                  message: Message test
 *                                  idUser1: 1
 *                                  idUser2: 2
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération du message
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur lors de la récupération du message
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur lors de la récupération du message
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Message n'a pas été trouvé
 */
//  GET ALL
/**
 * @swagger
 * /messages:
 *      get:
 *          summary: Récupérer tous les messages de la base de données (OBSOLETE)
 *          tags: [MESSAGE]
 *          description: Récupère tous les messages ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Messages ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         message: select all
 *                         data: 
 *                             -   id: 1
 *                                 message: Contenu du message
 *                                 idUser1: 1
 *                                 idUser2: 2
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: "2024-01-09T08:22:15.000Z"
 *                             -   id: 2
 *                                 message: Message avec immagination
 *                                 idUser1: 2
 *                                 idUser2: 1
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: "2024-01-09T08:22:15.000Z"
 *                             -   id: 3
 *                                 message: Bonjour je suis un message
 *                                 idUser1: 1
 *                                 idUser2: 2
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: "2024-01-09T08:22:15.000Z"
 *                             -   id: 4
 *                                 message: Bonjour moi aussi je suis un message
 *                                 idUser1: 2
 *                                 idUser2: 1
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: "2024-01-09T08:22:15.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des messages
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les messages
 *                              error: Message de l'erreur spécifique le cas échéant
 */
//  CREATE
/**
 * @swagger
 * /message/create:
 *  post:
 *      summary: Créer un nouveau message (OBSOLETE)
 *      tags: [MESSAGE]
 *      description: Crée un nouveau message dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: Contenu du message
 *                              example: Exemple de message 
 *                          idUser1:
 *                              type: integer
 *                              description: ID de l'utilisateur expéditeur du message
 *                              example: 1 
 *                          idUser2:
 *                              type: integer
 *                              description: ID de l'utilisateur destinataire du message
 *                              example: 2 
 *      responses:
 *          201:
 *              description: Message créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Message créé
 *                          data: 
 *                              id: 1
 *                              message: Contenu du message
 *                              idUser1: 1
 *                              idUser2: 2
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T08:22:15.000Z"
 *          400:
 *              description: Erreur lors de la création du message
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création du message
 *                          error: Message de l'erreur spécifique le cas échéant
*/
//  MODIFY 
/**
 * @swagger
 * /message/modify/{id}:
 *  put:
 *      summary: Modifier le contenu d'un message (OBSOLETE)
 *      tags: [MESSAGE]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du message
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie le contenu d'un message dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: Contenu du message
 *                              example: Message type
 *                          idUser1:
 *                              type: string
 *                              description: Id de l'utilisateur expéditeur
 *                              example: 1
 *                          idUser2:
 *                              type: string
 *                              description: Id de l'utilisateur destinataire
 *                              example: 2
 *      responses:
 *          200:
 *              description: Contenu du message modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Message modifié avec succès
 *          400:
 *              description: Erreur lors de la modification du message
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du contenu du message
 *                          error: Message de l'erreur spécifique le cas échéant
*/
//  DELETE
/**
* @swagger
* /message/delete/{id}:
*      delete:
*          summary: To delete a 'Message' with his ID (OBSOLETE)
*          tags: [MESSAGE]
*          parameters:
*              -   in : path
*                  name: id
*                  description: ID of Message
*                  schema: 
*                      type: integer
*                      required: true
*                      example: 1
*          description: Deleting a 'Message' in the database
*          responses: 
*              200:
*                  description: Delete Message by ID
*                  content:
*                      application/json:
*                          example:
*                              message: Message supprimé
*              400:
*                description: Erreur lors de la suppression du message
*                content: 
*                    application/json:
*                        example:
*                            message: Erreur survenue lors de la suppression d'un message par son ID
*                            error: Message de l'erreur spécifique le cas échéant
*/


//  COMMENTS
// ------
//  GET BY ID
/**
 * @swagger
 * /comment/{id}:
 *      get:
 *          summary: To find a 'Comment' with his ID
 *          tags: [COMMENT]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID du commentaire
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un commentaire par son ID
 *          responses: 
 *              200:
 *                  description: Commentaire par son ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              Comments: Comment id = 1
 *                              data:
 *                                  id: 1
 *                                  content: Contenu du message
 *                                  idUsers: 1 
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération du commentaire 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération du commentaire par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *              description: Le commentaire n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Le commentaire n'a pas été trouvé
 */
//  GET ALL
/**
 * @swagger
 * /comments:
 *      get:
 *          summary: Récupérer tous les commentaires de la base de données
 *          tags: [COMMENT]
 *          description: Récupère tous les commentaires ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Comments ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         message: select all
 *                         data: 
 *                             -   id: 1
 *                                 content: Contenu du message
 *                                 idUsers: 23
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: "2024-01-09T08:22:15.000Z"
 *                             -   id: 2
 *                                 content: Contenu du message
 *                                 idUsers: 52
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *                             -   id: 3
 *                                 content: Contenu du message
 *                                 idUsers: 74
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *              422:
 *              description: Aucun commentaire trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Aucun commentaire trouvé
 */
//  CREATE
/**
 * @swagger
 * /comment/create:
 *  post:
 *      summary: Créer un nouveau commentaire
 *      tags: [COMMENT]
 *      description: Crée un nouveau commentaire dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur auteur du commentaire
 *                              example: 1
 *                          comment:
 *                              type: string
 *                              description: Contenu du commentaire
 *                              example: Exemple de commentaire
 *      responses:
 *          200:
 *              description: Commentaire créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Comment created
 *                          data: 
 *                              id: 1
 *                              idUsers: 1
 *                              comment: Exemple de commentaire
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
 *          422:
 *              description: Le commentaire n'a pas été créé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Le commentaire n'a pas été créé
*/
//  MODIFY 
/**
 * @swagger
 * /comment/modify/{id}:
 *  put:
 *      summary: Modifier le contenu d'un commentaire
 *      tags: [COMMENT]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du commentaire
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie le contenu d'un commentaire dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          comment:
 *                              type: string
 *                              description: Contenu du commentaire
 *                              example: Nouveau commentaire
 *      responses:
 *          200:
 *              description: Commentaire modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Comment was updated
 *          422:
 *              description: Le commentaire n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Le commentaire n'a pas été trouvé
*/
//  DELETE
/**
* @swagger
* /comment/delete/{id}:
*      delete:
*          summary: Pour supprimer un commentaire avec son ID
*          tags: [COMMENT]
*          parameters:
*              -   in : path
*                  name: id
*                  description: ID du commentaire
*                  schema: 
*                      type: integer
*                      required: true
*                      example: 1
*          description: Supprime le commentaire dans la base de données
*          responses: 
*              200:
*                  description: Commentaire supprimé avec succès 
*                  content:
*                      application/json:
*                          example:
*                              message: Comment deleted
*              422:
 *              description: Le commentaire n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Le commentaire n'a pas été trouvé
*/


//  CLIENT FOLDERS
// ------
//  GET BY ID
/**
 * @swagger
 * /clientFolder/{id}:
 *      get:
 *          summary: Pour trouver un dossier client avec son ID
 *          tags: [CLIENTFOLDER]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of ClientFolder
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un dossier client par son ID
 *          responses: 
 *              200:
 *                  description: ClientFolder by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Dossier client id = 2
 *                              data:
 *                                  id: 1
 *                                  idUsers: 1
 *                                  name: Nom du fichier
 *                                  pdf: Chemin du fichier
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération du dossier client 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération du dossier client par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Le dossier client n'a pas été trouvé 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Le dossier client n'a pas été trouvé
 */
//  GET ALL
/**
 * @swagger
 * /clientFolders:
 *      get:
 *          summary: Récupérer tous les dossiers clients de la base de données
 *          tags: [CLIENTFOLDER]
 *          description: Récupère tous les dossiers clients ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: ClientFolders ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                             -   id: 1
 *                                 idUsers: 32
 *                                 name: Nom du fichier
 *                                 pdf: Chemin du fichier
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: "2024-01-09T08:22:15.000Z"
 *                             -   id: 2
 *                                 idUsers: 143
 *                                 name: Nom du fichier
 *                                 pdf: Chemin du fichier
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *                             -   id: 3
 *                                 idUsers: 235
 *                                 name: Nom du fichier
 *                                 pdf: Chemin du fichier
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *                             -   id: 4
 *                                 idUsers: 1245
 *                                 name: Nom du fichier
 *                                 pdf: Chemin du fichier
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *              400:
 *                  description: Erreur lors de la récupération des dossiers clients
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les dossiers clients
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Aucun dossier client trouvé 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Aucun dossier client trouvé
 */
//  CREATE
/**
 * @swagger
 * /clientFolder/create:
 *  post:
 *      summary: Créer un nouveau dossier client
 *      tags: [CLIENTFOLDER]
 *      description: Crée un nouveau dossier client dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur
 *                              example: 1
 *                          name:
 *                              type: string
 *                              description: Nom du dossier
 *                              example: Folder name
 *                          pdf:
 *                              type: string
 *                              description: Nom du fichier pdf
 *                              example: File name
 *      responses:
 *          200:
 *              description: Dossier client créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Client folder created
 *                          data: 
 *                              id: 3
 *                              idUsers: 2
 *                              name: Nom du dossier
 *                              pdfcreate: Nom du fichier
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
 *          400:
 *              description: Erreur lors de la création du dossier client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création du dossier client
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: L'utilisateur n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: L'utilisateur n'a pas été trouvé
*/
//  MODIFY 
/**
 * @swagger
 * /clientFolder/modify/{id}:
 *  put:
 *      summary: Modifier le contenu d'un dossier client
 *      tags: [CLIENTFOLDER]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du dossier client
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie le contenu d'un dossier client dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idUsers:
 *                              type: integer
 *                              description: Id de l'utilisateur
 *                              example: 1
 *                          name:
 *                              type: string
 *                              description: Nom du dossier
 *                              example: Nom du dossier modifié
 *                          pdf:
 *                              type: string
 *                              description: Nom du fichier pdf
 *                              example: Nom du fichier modifié
 *      responses:
 *          200:
 *              description: Dossier client modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Client folder modifié
 *          422:
 *              description: Le dossier client n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Le dossier client n'a pas été trouvé
*/
//  DELETE
/**
 * @swagger
 * /clientFolder/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un dossier client avec son ID
 *          tags: [CLIENTFOLDER]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID du dossier client
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime le dossier client dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression du dossier client par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Client folder supprimé
 *              422:
 *                description: Le dossier client n'a pas été trouvé
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Le dossier client n'a pas été trouvé
 */


//  EMPLOYEES
// ------
//  GET BY ID
/**
 * @swagger
 * /employee/{id}:
 *      get:
 *          summary: Pour trouver un employé avec son ID
 *          tags: [EMPLOYEE]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of Employee
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un employé par son ID
 *          responses: 
 *              200:
 *                  description: Employee by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              data:
 *                                  id: 1
 *                                  descriptions: Description employé
 *                                  name: Mickaël
 *                                  idUsers: 2
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              422:
 *                  description: L'employé n'a pas été trouvé 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: L'employé n'a pas été trouvé
 */
//  GET ALL
/**
 * @swagger
 * /employees:
 *      get:
 *          summary: Récupérer tous les employés de la base de données
 *          tags: [EMPLOYEE]
 *          description: Récupère tous les employés ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Employees ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                             -   id: 1
 *                                 descriptions: Description employé
 *                                 name: Mickaël
 *                                 idUsers: 2
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -   id: 2
 *                                 descriptions: Description employé
 *                                 name: Nicolas
 *                                 idUsers: 52
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *                             -   id: 3
 *                                 descriptions: Description employé
 *                                 name: Alfred
 *                                 idUsers: 5432
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *              422:
 *                  description: Aucun employé trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Aucun employé trouvé
 */
//  CREATE
/**
 * @swagger
 * /employee/create:
 *  post:
 *      summary: Créer un nouvel employé
 *      tags: [EMPLOYEE]
 *      description: Crée un nouvel employé dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          descriptions:
 *                              type: string
 *                              description: Description de l'employé
 *                              example: Description de l'employé
 *                          idUsers:
 *                              type: integer
 *                              description: ID utilisateur (foreign key)
 *                              example: 1
 *      responses:
 *          200:
 *              description: Employé créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Employee created
 *                          data: 
 *                              id: 2
 *                              descriptions: Description de l'employé
 *                              idUsers: 2
 *                              name: Nom de l'employé
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
 *          422:
 *              description: L'employé n'a pas été créé 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: L'employé n'a pas été créé
*/
//  MODIFY 
/**
 * @swagger
 * /employee/modify/{id}:
 *  put:
 *      summary: Modifier les informations de l'employé
 *      tags: [EMPLOYEE]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID de l'employé
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie les informations de l'employé dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          descriptions:
 *                              type: string
 *                              description: Description de l'employé
 *                              example: Description de l'employé
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur
 *                              example: 1
 *      responses:
 *          200:
 *              description: Employé modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Employee updated
 *                          data: 
 *                              descriptions: Description de l'employé 
 *                              idUsers: 2 
 *                              name: Mickaël
 *          422:
 *              description: L'employé n'a pas été trouvé 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: L'employé n'a pas été trouvé
*/
//  DELETE
/**
 * @swagger
 * /employee/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un employé avec son ID
 *          tags: [EMPLOYEE]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID de l'employé
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime l'employé dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression de l'employé par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Employee deleted
 *                              data: 
 *                                  id: 2 
 *                                  descriptions: Description de l'employé 
 *                                  name: Mickaël 
 *                                  idUsers: 2 
 *              422:
 *                  description: L'employé n'a pas été trouvé 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: L'employé n'a pas été trouvé
 */


//  DISTRICTS
// ------
//  GET BY ID
/**
 * @swagger
 * /district/{id}:
 *      get:
 *          summary: Pour trouver un district avec son ID
 *          tags: [DISTRICT]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of District
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un district par son ID
 *          responses: 
 *              200:
 *                  description: District by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              data:
 *                                  id: 2
 *                                  name: Centre-ville
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              422:
 *                  description: Le district n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Le district n'a pas été trouvé
 */
//  GET ALL
/**
 * @swagger
 * /districts:
 *      get:
 *          summary: Récupérer tous les districts de la base de données
 *          tags: [DISTRICT]
 *          description: Récupère tous les districts ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Districts ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                             -   id: 1
 *                                 name: Centre-ville
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: "2024-01-09T08:22:15.000Z"
 *                             -   id: 2
 *                                 name: Quartier Nord
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *                             -   id: 3
 *                                 name: Quartier Sud
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *                             -   id: 4
 *                                 name: Gare
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *              422:
 *                  description: Le district n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Le district n'a pas été trouvé
 */
//  CREATE
/**
 * @swagger
 * /district/create:
 *  post:
 *      summary: Créer un nouvel district
 *      tags: [DISTRICT]
 *      description: Crée un nouveau district dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: Nom du district
 *                              example: Quartier
 *      responses:
 *          200:
 *              description: District créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: District created
 *                          data: 
 *                              id: 2
 *                              name: Quartier
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
 *          422:
 *                  description: Le district n'a pas été créé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Le district n'a pas été créé
*/
//  MODIFY 
/**
 * @swagger
 * /district/modify/{id}:
 *  put:
 *      summary: Modifier les informations du district
 *      tags: [DISTRICT]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du district
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie les informations du district dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: Nom du district
 *                              example: Quartier
 *      responses:
 *          200:
 *              description: District modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: District updated
 *          422:
 *                  description: Le district n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Le district n'a pas été trouvé
*/
//  DELETE
/**
 * @swagger
 * /district/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un district avec son ID
 *          tags: [DISTRICT]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID du district
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime le district dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression du district par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: District deleted
 *              422:
 *                  description: Le district n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Le district n'a pas été trouvé
 */


//  EMPLOYEES DISTRICTS
// ------
//  GET BY ID
/**
 * @swagger
 * /employeesDistricts/one/{id}:
 *      get:
 *          summary: Pour trouver un employees-districts avec son ID
 *          tags: [EMPLOYEES_DISTRICTS]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of employees-districts
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un employees-districts par son ID
 *          responses: 
 *              200:
 *                  description: employees-districts by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              data:
 *                                  id: 2
 *                                  idEmployees: 73
 *                                  idDistricts: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              422:
 *                  description: L'employé-Quartier n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: L'employé-Quartier n'a pas été trouvé
*/
//  GET BY ID EMPLOYEE
/**
 * @swagger
 * /employeesDistrictsByIdEmployee/{id}:
 *      get:
 *          summary: Pour trouver un employees-districts avec l'id d'un employé
 *          tags: [EMPLOYEES_DISTRICTS]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID de l'employé
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un employees-districts selon l'id d'un employé
 *          responses: 
 *              200:
 *                  description: employees-districts par l'id d'un employé
 *                  content:
 *                      application/json:
 *                          example:
 *                              data:
 *                                  id: 2
 *                                  idEmployees: 73
 *                                  idDistricts: 82
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              422:
 *                  description: L'employé-Quartier n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: L'employé-Quartier n'a pas été trouvé
*/
//  GET ALL
/**
 * @swagger
 * /employeesDistricts/all:
 *      get:
 *          summary: Récupérer tous les employees-districts de la base de données
 *          tags: [EMPLOYEES_DISTRICTS]
 *          description: Récupère tous les employees-districts ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Employees-districts ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                             -    id: 1
 *                                  idEmployees: 73
 *                                  idDistricts: 3
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T08:22:15.000Z"
 *                             -    id: 2
 *                                  idEmployees: 74
 *                                  idDistricts: 3
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T08:22:15.000Z"
 *                             -    id: 3
 *                                  idEmployees: 75
 *                                  idDistricts: 3
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T08:22:15.000Z"
 *              422:
 *                  description: Aucun employé-Quartier trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Aucun employé-Quartier trouvé
 */
//  CREATE
/**
 * @swagger
 * /employeesDistricts/create:
 *  post:
 *      summary: Créer un nouvel employees-districts
 *      tags: [EMPLOYEES_DISTRICTS]
 *      description: Crée un nouvel employees-districts dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
 *                              example: 1
 *                          idDistrict:
 *                              type: integer
 *                              description: ID du district
 *                              example: 73
 *      responses:
 *          200:
 *              description: Employees-districts créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Employee-district created
 *                          data: 
 *                              id: 2
 *                              idEmployees: 1
 *                              idDistrict: 73
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
 *          422:
 *                  description: L'employé-Quartier n'a pas été créé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: L'employé-Quartier n'a pas été créé
*/
//  MODIFY 
/**
 * @swagger
 * /employeesDistricts/modify/{id}:
 *  put:
 *      summary: Modifier les informations du employees-districts
 *      tags: [EMPLOYEES_DISTRICTS]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du employees-districts
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie les informations du employees-districts dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
 *                              example: 2
 *                          idDistrict:
 *                              type: integer
 *                              description: ID du district
 *                              example: 73
 *      responses:
 *          200:
 *              description: Employees-districts modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Employees-districts updated
 *                          data: 
 *                              id: 2
 *                              idEmployees: 1
 *                              idDistrict: 73
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
 *          422:
 *                  description: L'employé-Quartier n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: L'employé-Quartier n'a pas été trouvé
*/
//  DELETE
/**
 * @swagger
 * /employeesDistricts/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un employees-districts avec son ID
 *          tags: [EMPLOYEES_DISTRICTS]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID du employees-districts
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime le employees-districts dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression du employees-districts par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Employee-district deleted
 *              422:
 *                  description: L'employé-Quartier n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: L'employé-Quartier n'a pas été trouvé
 */


//  AGENDAS
// ------
//  GET BY ID
/**
 * @swagger
 * /agenda/{id}:
 *      get:
 *          summary: Pour trouver un agenda avec son ID
 *          tags: [AGENDA]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of agenda
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un agenda par son ID
 *          responses: 
 *              200:
 *                  description: agenda by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                           data:
 *                                  id: 1
 *                                  date: "2024-01-08T14:47:27.000Z"
 *                                  visitInformations: "Location meublé..."
 *                                  idUsers: 52
 *                                  idEmployees: 69
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un agenda 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un agenda par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Agenda n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Agenda pas trouvé
*/
//  GET BY ID USER
/**
 * @swagger
 * /agendas/{idUsers}:
 *      get:
 *          summary: Pour trouver les agendas d'un utilisateur
 *          tags: [AGENDA]
 *          parameters:
 *              -   in : path
 *                  name: idUsers
 *                  description: ID of user
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir les agendas d'un utilisateur
 *          responses: 
 *              200:
 *                  description: agenda by ID USER
 *                  content:
 *                      application/json:
 *                          example:
 *                           data: 
 *                              -    id: 1
 *                                   date: "2024-05-08T14:47:27.000Z"
 *                                   visitInformations: "Location meublée..."
 *                                   idUsers: 52
 *                                   idEmployees: 69
 *                                   createdAt: "2024-01-08T14:47:27.000Z"
 *                                   updatedAt: "2024-01-09T14:52:34.000Z"
 *                              -    id: 2
 *                                   date: "2024-05-08T14:47:27.000Z"
 *                                   visitInformations: "Location non meublée..."
 *                                   idUsers: 52
 *                                   idEmployees: 69
 *                                   createdAt: "2024-01-08T14:47:27.000Z"
 *                                   updatedAt: "2024-01-09T14:52:34.000Z"
 *                              -    id: 3
 *                                   date: "2024-05-08T14:47:27.000Z"
 *                                   visitInformations: "Location presques meublée..."
 *                                   idUsers: 52
 *                                   idEmployees: 69
 *                                   createdAt: "2024-01-08T14:47:27.000Z"
 *                                   updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des agendas d'un utilisateur
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération des agendas d'un utilisateur
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Agendas pas trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Agenda pas trouvé
*/
//  GET ALL
/**
 * @swagger
 * /agendas:
 *      get:
 *          summary: Récupérer tous les agendas de la base de données
 *          tags: [AGENDA]
 *          description: Récupère tous les agendas ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Agendas ALL
 *                  content:
 *                      application/json:
 *                          example:
 *                           data: 
 *                              -    id: 1
 *                                   date: "2024-05-08T14:47:27.000Z"
 *                                   visitInformations: "Location meublée..."
 *                                   idUsers: 52
 *                                   idEmployees: 69
 *                                   createdAt: "2024-01-08T14:47:27.000Z"
 *                                   updatedAt: "2024-01-09T14:52:34.000Z"
 *                              -    id: 2
 *                                   date: "2024-05-08T14:47:27.000Z"
 *                                   visitInformations: "Location non meublée..."
 *                                   idUsers: 52
 *                                   idEmployees: 69
 *                                   createdAt: "2024-01-08T14:47:27.000Z"
 *                                   updatedAt: "2024-01-09T14:52:34.000Z"
 *                              -    id: 3
 *                                   date: "2024-05-08T14:47:27.000Z"
 *                                   visitInformations: "Location presques meublée..."
 *                                   idUsers: 52
 *                                   idEmployees: 69
 *                                   createdAt: "2024-01-08T14:47:27.000Z"
 *                                   updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des agendas
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les agendas
 *                              error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération d'un historique utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Agenda pas trouvé
*/
//  CREATE
/**
 * @swagger
 * /agenda/create:
 *  post:
 *      summary: Créer un nouvel agenda
 *      tags: [AGENDA]
 *      description: Crée un nouvel agenda dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          date: 
 *                              type: string
 *                              description: Date du rendez-vous
 *                              example: "2024-05-08T14:47:27.000Z"
 *                          visitInformations: 
 *                              type: string
 *                              description: Informations complémentaire pour le rendez-vous
 *                              example: Location meublée
 *                          idUsers: 
 *                              type: integer
 *                              description: ID de l'utilisateur (client)
 *                              example: 1
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
 *                              example: 1
 *      responses:
 *          200:
 *              description: Agenda créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Agenda créé
 *                          data: 
 *                              id: 3
 *                              date: "2024-05-08T14:47:27.000Z"
 *                              visitInformations: "Location meublée..."
 *                              idUsers: 52
 *                              idEmployees: 69
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'un agenda
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'un agenda
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération d'un historique utilisateur 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Erreur à envoyé au client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Agenda pas trouvé
*/
//  MODIFY 
/**
 * @swagger
 * /agenda/modify/{id}:
 *  put:
 *      summary: Modifier les informations de l'agenda
 *      tags: [AGENDA]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du agenda
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie les informations du agenda dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          date:
 *                              type: string
 *                              description: Date du rendez-vous
 *                              example: "2024-05-08T14:47:27.000Z"
 *                          visitInformations:
 *                              type: string
 *                              description: Infomations complémentaires pour le rendez-vous
 *                              example: Location meublée
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur (client)
 *                              example: 1
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
 *                              example: 1
 *      responses:
 *          200:
 *              description: Agenda modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Agenda modifié avec succès
 *          400:
 *              description: Erreur lors de la modification d'un agenda
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification d'un agenda
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Cet agenda n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Agenda pas trouvé
*/
//  DELETE
/**
 * @swagger
 * /agenda/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un agenda avec son ID
 *          tags: [AGENDA]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID du agenda
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime l'agenda dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression d'un agenda par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Agenda deleted
 *              400:
 *                description: Erreur lors de la suppression d'un agenda
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'un agenda par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                description: Cet agenda n'a pas été trouvé
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Agenda pas trouvé
 */


//  STATUSES
// ------
//  GET BY ID
/**
 * @swagger
 * /status/{id}:
 *      get:
 *          summary: Pour trouver un status avec son ID
 *          tags: [STATUSES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of status
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un status par son ID
 *          responses: 
 *              200:
 *                  description: Status by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              data:
 *                                  id: 1
 *                                  sold: true
 *                                  rent: false
 *                                  hidden: false
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un status 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un status par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Ce status n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Status pas trouvé
*/
//  GET ALL
/**
 * @swagger
 * /statuses:
 *      get:
 *          summary: Récupérer tous les status de la base de données
 *          tags: [STATUSES]
 *          description: Récupère tous les status ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Statuses ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                             -    id: 1
 *                                  sold: true
 *                                  rent: false
 *                                  hidden: false
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 2
 *                                  sold: true
 *                                  rent: false
 *                                  hidden: false
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 3
 *                                  sold: true
 *                                  rent: false
 *                                  hidden: false
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des status
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les status
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: La table statuses est vide
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Pas de status trouvé
*/
//  CREATE
/**
 * @swagger
 * /status/create:
 *      post:
 *          summary: Créer un nouveau status
 *          tags: [STATUSES]
 *          description: Crée un nouveau status dans la base de données
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              sold: 
 *                                  type: boolean
 *                                  description: Bien vendu (true/false)
 *                                  example: false
 *                              rent: 
 *                                  type: boolean
 *                                  description: Bien loué (true/false)
 *                                  example: false
 *                              hidden: 
 *                                  type: boolean
 *                                  description: Bien caché (true/false)
 *                                  example: false
 *          responses:
 *              200:
 *                  description: Status créé avec succès
 *                  content:
 *                      application/json:
 *                          example:
 *                              data: 
 *                                  id: 3
 *                                  sold: true
 *                                  rent: false
 *                                  hidden: false
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la création du status
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Une erreur est survenue lors de la création du status
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Aucun status n'a été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Pas de status trouvé
*/
//  MODIFY 
/**
 * @swagger
 * /status/modify/{id}:
 *      put:
 *          summary: Modifier les informations du status
 *          tags: [STATUSES]
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  description: ID du status
 *                  schema:
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Modifie les informations du status dans la base de données
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              sold: 
 *                                  type: boolean
 *                                  description: Bien vendu (true/false)
 *                                  example: true
 *                              rent: 
 *                                  type: boolean
 *                                  description: Bien loué (true/false)
 *                                  example: false
 *                              hidden: 
 *                                  type: boolean
 *                                  description: Bien caché (true/false)
 *                                  example: false
 *          responses:
 *              200:
 *                  description: Status modifié avec succès
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Status updated
 *              400:
 *                  description: Erreur lors de la modification du status
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Echec de la modification du status
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Ce status n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Status pas trouvé
*/
//  DELETE
/**
 * @swagger
 * /status/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un status avec son ID
 *          tags: [STATUSES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID du status
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime le status dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression d'un status par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Status deleted
 *              400:
 *                description: Erreur lors de la suppression d'un status
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'un status par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                description: Ce status n'a pas été trouvé
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Status pas trouvé
 */


//  PROPERTIES
// ------
//  GET BY ID
/**
 * @swagger
 * /property/{id}:
 *      get:
 *          summary: Pour trouver une propriété avec son ID
 *          tags: [PROPERTIES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of property
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir une propriété par son ID
 *          responses: 
 *              200:
 *                  description: Property by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Property id = 2
 *                              data:
 *                                  id: 1
 *                                  price: 1000
 *                                  location: string
 *                                  surface: 50
 *                                  showerRoom: 50
 *                                  energising: A
 *                                  typeEnergic: Gas
 *                                  clicCount: 234
 *                                  description: Description du bien
 *                                  heatingSystem: String
 *                                  floor: 3
 *                                  balcony: 1
 *                                  parking: 1
 *                                  rooms: 3
 *                                  idStatus: 3
 *                                  idDistrict: 2
 *                                  archived: 0
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'une propriété 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'une propriété par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Cette propriété n'a pas été trouvée
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Propriété pas trouvée
*/
//  GET ALL
/**
 * @swagger
 * /properties:
 *      get:
 *          summary: Récupérer toutes les propriétés de la base de données
 *          tags: [PROPERTIES]
 *          description: Récupère toutes les propriétés ajoutées dans la base de données
 *          responses: 
 *              200:
 *                  description: properties ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                              -   id: 1
 *                                  price: 1000
 *                                  location: string
 *                                  surface: 50
 *                                  showerRoom: 50
 *                                  energising: A
 *                                  typeEnergic: Gas
 *                                  clicCount: 234
 *                                  description: Description du bien
 *                                  heatingSystem: String
 *                                  floor: 3
 *                                  balcony: 1
 *                                  parking: 1
 *                                  rooms: 3
 *                                  idStatus: 3
 *                                  idDistrict: 2
 *                                  archived: 0
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                              -   id: 2
 *                                  price: 898
 *                                  location: string
 *                                  surface: 67
 *                                  showerRoom: 12
 *                                  energising: E
 *                                  typeEnergic: Electrique
 *                                  clicCount: 23
 *                                  description: Description du bien
 *                                  heatingSystem: String
 *                                  floor: 9
 *                                  balcony: 0
 *                                  parking: 0
 *                                  rooms: 2
 *                                  idStatus: 1
 *                                  idDistrict: 53
 *                                  archived: 0
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des propriétés
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de toutes les propriétés
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Aucune propriété n'a été trouvée
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Pas de propriété trouvée
*/
//  GET PROPERTIES BY STATUS
/**
 * @swagger
 * /propertiesByStatus/{id}:
 *      get:
 *          summary: Récupérer toutes les propriétés de la base de données avec un status déterminé par l'id
 *          tags: [PROPERTIES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of property
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Récupère toutes les propriétés ajoutées dans la base de données avec un status déterminé par l'id
 *          responses: 
 *              200:
 *                  description: Toutes les propriétés qui ont un idStatuses = :id
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                              -   id: 1
 *                                  price: 1000
 *                                  location: string
 *                                  surface: 50
 *                                  showerRoom: 50
 *                                  energising: A
 *                                  typeEnergic: Gas
 *                                  clicCount: 234
 *                                  description: Description du bien
 *                                  heatingSystem: String
 *                                  floor: 3
 *                                  balcony: 1
 *                                  parking: 1
 *                                  rooms: 3
 *                                  idStatus: 1
 *                                  idDistrict: 2
 *                                  archived: 0
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                              -   id: 2
 *                                  price: 898
 *                                  location: string
 *                                  surface: 67
 *                                  showerRoom: 12
 *                                  energising: E
 *                                  typeEnergic: Electrique
 *                                  clicCount: 23
 *                                  description: Description du bien
 *                                  heatingSystem: String
 *                                  floor: 9
 *                                  balcony: 0
 *                                  parking: 0
 *                                  rooms: 2
 *                                  idStatus: 1
 *                                  idDistrict: 53
 *                                  archived: 0
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des propriétés
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de toutes les propriétés
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Aucune propriété n'a été trouvée
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Pas de propriété trouvée
*/
//  GET ARCHIVED PROPERTIES
/**
 * @swagger
 * /properties/archived:
 *      get:
 *          summary: Récupérer toutes les propriétés de la base de données ayant archived = 1
 *          tags: [PROPERTIES]
 *          description: Récupère toutes les propriétés ajoutées dans la base de données ayant archived = 1
 *          responses: 
 *              200:
 *                  description: Toutes les propriétés qui ont archived = 1
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                              -   id: 1
 *                                  price: 1000
 *                                  location: string
 *                                  surface: 50
 *                                  showerRoom: 50
 *                                  energising: A
 *                                  typeEnergic: Gas
 *                                  clicCount: 234
 *                                  description: Description du bien
 *                                  heatingSystem: String
 *                                  floor: 3
 *                                  balcony: 1
 *                                  parking: 1
 *                                  rooms: 3
 *                                  idStatus: 1
 *                                  idDistrict: 2
 *                                  archived: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                              -   id: 2
 *                                  price: 898
 *                                  location: string
 *                                  surface: 67
 *                                  showerRoom: 12
 *                                  energising: E
 *                                  typeEnergic: Electrique
 *                                  clicCount: 23
 *                                  description: Description du bien
 *                                  heatingSystem: String
 *                                  floor: 9
 *                                  balcony: 0
 *                                  parking: 0
 *                                  rooms: 2
 *                                  idStatus: 1
 *                                  idDistrict: 53
 *                                  archived: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des propriétés
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de toutes les propriétés
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Aucune propriété n'a été trouvée
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Pas de propriété trouvée
*/
//  CREATE
/**
 * @swagger
 * /property/create:
 *  post:
 *      summary: Créer une nouvelle propriété
 *      tags: [PROPERTIES]
 *      description: Crée une nouvelle propriété dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          file: 
 *                              type: string 
 *                              format: binary
 *                              pattern: .*\/(jpeg|jpg|png)$
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          price: 
 *                              type: int
 *                              description: Prix du bien 
 *                              example: 999 
 *                          location: 
 *                              type: string
 *                              description: Location
 *                              example: Location
 *                          surface: 
 *                              type: int
 *                              description: Surface du bien
 *                              example: 50
 *                          showerRoom: 
 *                              type: int
 *                              description: Nombre de salle de bain
 *                              example: 1
 *                          energising: 
 *                              type: string
 *                              description: Catégorie énergétique
 *                              example: A
 *                          typeEnergic: 
 *                              type: string
 *                              description: Type de chauffage
 *                              example: Electrique
 *                          clicCount: 
 *                              type: int
 *                              description: Nombre de clique sur le bien
 *                              example: 312
 *                          description: 
 *                              type: string
 *                              description: Description du bien
 *                              example: Maison de campagne
 *                          heatingSystem: 
 *                              type: string
 *                              description: String
 *                              example: Je sais pas
 *                          floor: 
 *                              type: int
 *                              description: Nombre d'étage du bien
 *                              example: 2
 *                          balcony: 
 *                              type: int
 *                              description: Nombre de balcon
 *                              example: 1
 *                          parking: 
 *                              type: int
 *                              description: Nombre de place de parking
 *                              example: 1
 *                          rooms: 
 *                              type: int
 *                              description: Nombre de pièces totales du bien
 *                              example: 1
 *                          idStatus: 
 *                              type: int
 *                              description: ID du status correspond au bien
 *                              example: 1
 *                          idDistrict: 
 *                              type: int
 *                              description: ID du district affecté au bien
 *                              example: 1
 *      responses:
 *          200:
 *              description: Propriété créée avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Property created
 *                          data: 
 *                              id: 2
 *                              price: 898
 *                              location: string
 *                              surface: 67
 *                              showerRoom: 12
 *                              energising: E
 *                              typeEnergic: Electrique
 *                              clicCount: 23
 *                              description: Description du bien
 *                              heatingSystem: String
 *                              floor: 9
 *                              balcony: 0
 *                              parking: 0
 *                              rooms: 2
 *                              idStatus: 1
 *                              idDistrict: 53
 *                              archived: 0
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'une proprété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'une propriété
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *                  description: Aucune propriété n'a été trouvée
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: La propriété n'a pas été créée
*/
//  MODIFY 
/**
 * @swagger
 * /property/modify/{id}:
 *  put:
 *      summary: Modifier les informations d'une propriété
 *      tags: [PROPERTIES]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID de la propriété
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie les informations de la propriété dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          file: 
 *                              type: string 
 *                              format: binary
 *                              pattern: .*\/(jpeg|jpg|png)$
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          price: 
 *                              type: int
 *                              description: Prix du bien 
 *                              example: 999 
 *                          location: 
 *                              type: string
 *                              description: Location
 *                              example: Location
 *                          surface: 
 *                              type: int
 *                              description: Surface du bien
 *                              example: 50
 *                          showerRoom: 
 *                              type: int
 *                              description: Nombre de salle de bain
 *                              example: 1
 *                          energising: 
 *                              type: string
 *                              description: Catégorie énergétique
 *                              example: A
 *                          typeEnergic: 
 *                              type: string
 *                              description: Type de chauffage
 *                              example: Electrique
 *                          clicCount: 
 *                              type: int
 *                              description: Nombre de clique sur le bien
 *                              example: 312
 *                          description: 
 *                              type: string
 *                              description: Description du bien
 *                              example: Maison de campagne
 *                          heatingSystem: 
 *                              type: string
 *                              description: String
 *                              example: Je sais pas
 *                          floor: 
 *                              type: int
 *                              description: Nombre d'étage du bien
 *                              example: 2
 *                          balcony: 
 *                              type: int
 *                              description: Nombre de balcon
 *                              example: 1
 *                          parking: 
 *                              type: int
 *                              description: Nombre de place de parking
 *                              example: 1
 *                          rooms: 
 *                              type: int
 *                              description: Nombre de pièces totales du bien
 *                              example: 1
 *                          idStatus: 
 *                              type: int
 *                              description: ID du status correspond au bien
 *                              example: 1
 *                          idDistrict: 
 *                              type: int
 *                              description: ID du district affecté au bien
 *                              example: 1
 *                          archived: 
 *                              type: int
 *                              description: Archivée (1) ou non (0)
 *                              example: 0
 *      responses:
 *          200:
 *              description: Propriété modifiée avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Propriété modifiée
 *                          data: 
 *                              id: 2
 *                              price: 898
 *                              location: string
 *                              surface: 67
 *                              showerRoom: 12
 *                              energising: E
 *                              typeEnergic: Electrique
 *                              clicCount: 23
 *                              description: Description du bien
 *                              heatingSystem: String
 *                              floor: 9
 *                              balcony: 0
 *                              parking: 0
 *                              rooms: 2
 *                              idStatus: 1
 *                              idDistrict: 53
 *                              archived: 0
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la modification de la propriété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification de la propriété
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Cette propriété n'a pas été trouvée
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Propriété pas trouvée
*/
//  PROPERTY ARCHIVE 
/**
 * @swagger
 * /property/archive/{id}:
 *  put:
 *      summary: Archiver une propriété
 *      tags: [PROPERTIES]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID de la propriété
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Passe le booléen archived à 1 dans la base de données
 *      responses:
 *          200:
 *              description: Propriété archivée avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Propriété archivée
 *                          data: 
 *                              id: 2
 *                              price: 898
 *                              location: string
 *                              surface: 67
 *                              showerRoom: 12
 *                              energising: E
 *                              typeEnergic: Electrique
 *                              clicCount: 23
 *                              description: Description du bien
 *                              heatingSystem: String
 *                              floor: 9
 *                              balcony: 0
 *                              parking: 0
 *                              rooms: 2
 *                              idStatus: 1
 *                              idDistrict: 53
 *                              archived: 1
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la modification de la propriété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification de la propriété
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Cette propriété n'a pas été trouvée
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Propriété pas trouvée
*/
//  PROPERTY RESTORE 
/**
 * @swagger
 * /property/restore/{id}:
 *  put:
 *      summary: Restaurer une propriété
 *      tags: [PROPERTIES]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID de la propriété
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Passe le booléen archived à 0 dans la base de données
 *      responses:
 *          200:
 *              description: Propriété restaurée avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Propriété restaurée
 *                          data: 
 *                              id: 2
 *                              price: 898
 *                              location: string
 *                              surface: 67
 *                              showerRoom: 12
 *                              energising: E
 *                              typeEnergic: Electrique
 *                              clicCount: 23
 *                              description: Description du bien
 *                              heatingSystem: String
 *                              floor: 9
 *                              balcony: 0
 *                              parking: 0
 *                              rooms: 2
 *                              idStatus: 1
 *                              idDistrict: 53
 *                              archived: 0
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la modification de la propriété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification de la propriété
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Cette propriété n'a pas été trouvée
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Propriété pas trouvée
*/
//  DELETE
/**
 * @swagger
 * /property/delete/{id}:
 *      delete:
 *          summary: Pour supprimer une propriété avec son ID
 *          tags: [PROPERTIES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID de la propriété
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime la propriété dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression d'une propriété par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Property deleted
 *              400:
 *                description: Erreur lors de la suppression d'une propriété
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'une propriété par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                description: Cette propriété n'a pas été trouvée
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Propriété pas trouvée
 */


//  PROPERTIES FOLDERS
// ------
//  GET BY ID
/**
 * @swagger
 * /propertiesFolders/one/{id}:
 *      get:
 *          summary: Pour trouver un dossier de propriété avec son ID
 *          tags: [PROPERTIES_FOLDERS]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of properties-folders
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un dossier de propriété par son ID
 *          responses: 
 *              200:
 *                  description: PropertiesFolders by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: PropertiesFolders id = 2
 *                              data:
 *                                  id: 1
 *                                  idProperties: 1
 *                                  idClientFolders: 12
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un dossier de propriété 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un dossier de propriété par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération d'un dossier de propriété 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un dossier de propriété par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Propriété pas trouvée
*/
//  GET ALL
/**
 * @swagger
 * /propertiesFolders/all:
 *      get:
 *          summary: Récupérer tous les dossiers de propriété de la base de données
 *          tags: [PROPERTIES_FOLDERS]
 *          description: Récupère tous les dossiers de propriété ajoutées dans la base de données
 *          responses: 
 *              200:
 *                  description: propertiesFolders ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         message: Select all of propertiesFolders
 *                         data: 
 *                             -    id: 1
 *                                  idProperties: 1
 *                                  idClientFolders: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 2
 *                                  idProperties: 2
 *                                  idClientFolders: 2
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des dossiers de propriété
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les dossiers de propriété
 *                              error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération des dossiers de propriété
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les dossiers de propriété
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Propriété pas trouvée
 */
//  CREATE
/**
 * @swagger
 * /propertiesFolders/create:
 *  post:
 *      summary: Créer un nouveau dossier de propriété
 *      tags: [PROPERTIES_FOLDERS]
 *      description: Crée un nouveau dossier de propriété dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idProperties: 
 *                              type: integer
 *                              description: ID de la propriété
 *                              example: 1
 *                          idClientFolders: 
 *                              type: integer
 *                              description: ID du dossier client
 *                              example: 1           
 *      responses:
 *          200:
 *              description: Dossier de propriété créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Dossier de propriété créé
 *                          data: 
 *                              id: A MODIFIER APRES TEST
 *                              idProperties: true
 *                              idClientFolders: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'un dossier de propriété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'un dossier de propriété
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la création d'un dossier de propriété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'un dossier de propriété
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Erreur à envoyé au client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Id property n'existe pas
 */
//  MODIFY 
/**
 * @swagger
 * /propertiesFolders/modify/{id}:
 *  put:
 *      summary: Modifier les informations d'un dossier de propriété
 *      tags: [PROPERTIES_FOLDERS]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du dossier de la propriété
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie les informations du dossier de la propriété dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idProperties:
 *                              type: integer
 *                              description: ID de la propriété
 *                              example: 1
 *                          idClientFolders:
 *                              type: integer
 *                              description: ID du dossier client
 *                              example: 1
 *      responses:
 *          200:
 *              description: Dossier de propriété modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Dossier de propriété modifié avec succès
 *          400:
 *              description: Erreur lors de la modification du dossier de la propriété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du dossier de la propriété
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la modification du dossier de la propriété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du dossier de la propriété
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Erreur à envoyé au client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Id property n'existe pas
*/
//  DELETE
/**
 * @swagger
 * /propertiesFolders/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un dossier de propriété avec son ID
 *          tags: [PROPERTIES_FOLDERS]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID du dossier de la propriété
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime le dossier de propriété dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression d'un dossier de propriété par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: PropertyFolder deleted
 *              400:
 *                description: Erreur lors de la suppression d'un dossier de propriété
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'un dossier de propriété par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                description: Erreur lors de la suppression d'un dossier de propriété
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'un dossier de propriété par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Id propertiesFolders n'existe pas
 */


//  HISTORIES
// ------
//  GET BY ID
/**
 * @swagger
 * /history/{id}:
 *      get:
 *          summary: Pour trouver un historique utilisateur avec son ID
 *          tags: [HISTORIES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of history
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un historique utilisateur par son ID
 *          responses: 
 *              200:
 *                  description: Hystory by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              data:
 *                                  id: 1
 *                                  idUsers: 1
 *                                  idProperties: 2
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un historique utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération d'un historique utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Historique pas trouvé
 */
//  GET ALL
/**
 * @swagger
 * /histories:
 *      get:
 *          summary: Récupérer tous les historiques utilisateur de la base de données
 *          tags: [HISTORIES]
 *          description: Récupère tous les historiques utilisateur ajoutées dans la base de données
 *          responses: 
 *              200:
 *                  description: Histories ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         message: Select all of histories
 *                         data: 
 *                             -    id: 1
 *                                  idUsers: 1
 *                                  idProperties: 2
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 2
 *                                  idUsers: 2
 *                                  idProperties: 2
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 3
 *                                  idUsers: 1
 *                                  idProperties: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des historiques utilisateur
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les historiques utilisateur
 *                              error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération d'un historique utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Aucun historique trouvé
*/
//  CREATE
/**
 * @swagger
 * /history/create:
 *  post:
 *      summary: Créer un nouvel historique utilisateur
 *      tags: [HISTORIES]
 *      description: Crée un nouvel historique utilisateur dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idUsers: 
 *                              type: integer
 *                              description: ID utilisateur
 *                              example: 1
 *                          idProperties: 
 *                              type: integer
 *                              description: ID propriété
 *                              example: 1
 *      responses:
 *          200:
 *              description: Historique utilisateur créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Historique utilisateur créée
 *                          data: 
 *                              id: 1
 *                              idUsers: 1
 *                              idProperties: 2
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'un historique utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'un historique utilisateur
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération d'un historique utilisateur 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Erreur à envoyé au client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Historique pas créé
*/
//  MODIFY 
/**
 * @swagger
 * /history/modify/{id}:
 *  put:
 *      summary: Modifier les informations d'un historique utilisateur
 *      tags: [HISTORIES]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID de l'historique utilisateur
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie les informations de l'historique utilisateur dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idUsers:
 *                              type: integer
 *                              description: ID utilisateur
 *                              example: 1
 *                          idProperties:
 *                              type: integer
 *                              description: ID propriété
 *                              example: 1
 *      responses:
 *          200:
 *              description: Historique utilisateur modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Historique utilisateur modifié avec succès
 *          400:
 *              description: Erreur lors de la modification de l'historique utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification de l'historique utilisateur
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération d'un historique utilisateur 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Erreur à envoyé au client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Historique pas trouvé
*/
//  DELETE
/**
 * @swagger
 * /history/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un historique utilisateur avec son ID
 *          tags: [HISTORIES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID de l'historique utilisateur
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime l'historique utilisateur dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression d'un historique utilisateur par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Historique supprimé
 *              400:
 *                description: Erreur lors de la suppression d'un historique utilisateur
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'un historique utilisateur par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
  *              401:
 *                  description: Erreur lors de la récupération d'un historique utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Historique pas trouvé
*/


//  FAVORITES
// ------
//  GET BY ID
/**
 * @swagger
 * /favorite/{id}:
 *      get:
 *          summary: Pour trouver un favori avec son ID
 *          tags: [FAVORITES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of favorite
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un favori par son ID
 *          responses: 
 *              200:
 *                  description: Favorite by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              data:
 *                                  id: 1
 *                                  idUsers: 1
 *                                  idProperties: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un favori 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un favori par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération d'un favori d'un utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un favori d'un utilisateur par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Favori pas trouvé
*/
//  GET ALL
/**
 * @swagger
 * /favorites:
 *      get:
 *          summary: Récupérer tous les favoris de la base de données
 *          tags: [FAVORITES]
 *          description: Récupère tous les favoris ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Favorites ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                             -    id: 1
 *                                  idUsers: 1
 *                                  idProperties: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 2
 *                                  idUsers: 1
 *                                  idProperties: 2
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 3
 *                                  idUsers: 1
 *                                  idProperties: 3
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des favoris
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les favoris
 *                              error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération des favoris 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération des favoris par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Pas de favoris trouvé
*/
//  GET ALL By IDUSER
/**
 * @swagger
 * /favorites/{id}:
 *      get:
 *          summary: Récupérer tous les favoris de la base de données d'un utilisateur
 *          tags: [FAVORITES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of user
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Récupère tous les favoris ajoutés dans la base de données pour un utilisateur
 *          responses: 
 *              200:
 *                  description: Favorites ALL BY ONE USER
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                             -    id: 1
 *                                  idUsers: 1
 *                                  idProperties: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 2
 *                                  idUsers: 1
 *                                  idProperties: 2
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 3
 *                                  idUsers: 1
 *                                  idProperties: 3
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des favoris
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les favoris
 *                              error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération des favoris d'un utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération des favoris d'un utilisateur
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Pas de favoris trouvé
*/
//  CREATE
/**
 * @swagger
 * /favorite/create:
 *  post:
 *      summary: Créer un nouveau favori
 *      tags: [FAVORITES]
 *      description: Crée un nouveau favori dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idUsers: 
 *                              type: integer
 *                              description: ID utilisateur
 *                              example: 1
 *                          idProperties: 
 *                              type: integer
 *                              description: ID propriété
 *                              example: 1
 *      responses:
 *          200:
 *              description: Favori créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Favori créé
 *                          data: 
 *                              id: 3
 *                              idUsers: 1
 *                              idProperties: 1
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'un favori
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'un favori
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération d'un historique utilisateur 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Erreur à envoyé au client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Favori pas trouvé
*/
//  MODIFY 
/**
 * @swagger
 * /favorite/modify/{id}:
 *  put:
 *      summary: Modifier les informations d'un favori
 *      tags: [FAVORITES]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du favori
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie les informations du favori dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idUsers:
 *                              type: integer
 *                              description: ID utilisateur
 *                              example: 1
 *                          idProperties:
 *                              type: integer
 *                              description: ID propriété
 *                              example: 1
 *      responses:
 *          200:
 *              description: Favori modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Favori modifié avec succès
 *          400:
 *              description: Erreur lors de la modification du favori
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du favori
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération d'un historique utilisateur 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Erreur à envoyé au client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Favori pas trouvé
*/
//  DELETE
/**
 * @swagger
 * /favorite/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un favori avec son ID
 *          tags: [FAVORITES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID du favori
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime le favori dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression d'un favori par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Favorite supprimé
 *                              data:
 *                                  id: 1
 *                                  idUsers: 1
 *                                  idProperties: 3
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                description: Erreur lors de la suppression d'un favori
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'un favori par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                description: Erreur lors de la récupération d'un historique utilisateur 
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                description: Erreur à envoyé au client
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Historique pas trouvé
*/


//  USERS PROPERTIES
// ------
//  GET BY ID
/**
 * @swagger
 * /usersProperties/one/{id}:
 *      get:
 *          summary: Pour trouver un usersProperties avec son ID
 *          tags: [USERS_PROPERTIES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of usersProperties
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Obtenir un usersProperties par son ID
 *          responses: 
 *              200:
 *                  description: UsersProperties by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              data:
 *                                  id: 1
 *                                  idUsers: 1
 *                                  idProperties: 1
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un usersProperties 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un usersProperties par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération d'un historique utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: User-Property pas trouvé
*/
//  GET ALL
/**
 * @swagger
 * /usersProperties/all:
 *      get:
 *          summary: Récupérer tous les usersProperties de la base de données
 *          tags: [USERS_PROPERTIES]
 *          description: Récupère tous les usersProperties ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: UsersProperties ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         data: 
 *                             -    id: 1
 *                                  idUsers: 1
 *                                  idProperties: 2
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 2
 *                                  idUsers: 1
 *                                  idProperties: 3
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 3
 *                                  idUsers: 1
 *                                  idProperties: 43
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des usersProperties
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les usersProperties
 *                              error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération d'un historique utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Pas d'user-property  trouvé
*/
//  CREATE
/**
 * @swagger
 * /usersProperties/create:
 *  post:
 *      summary: Créer un nouveau usersProperties
 *      tags: [USERS_PROPERTIES]
 *      description: Crée un nouveau usersProperties dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idUsers: 
 *                              type: integer
 *                              description: ID utilisateur
 *                              example: 1
 *                          idProperties: 
 *                              type: integer
 *                              description: ID propriété
 *                              example: 1
 *      responses:
 *          200:
 *              description: UsersProperties créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: UsersProperties créé
 *                          data: 
 *                              id: 1
 *                              idUsers: 1
 *                              idProperties: 2
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'un usersProperties
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'un usersProperties
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération d'un historique utilisateur 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Erreur à envoyé au client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Utilisateur pas trouvé
*/
//  MODIFY 
/**
 * @swagger
 * /usersProperties/modify/{id}:
 *  put:
 *      summary: Modifier les informations d'un usersProperties
 *      tags: [USERS_PROPERTIES]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du usersProperties
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *      description: Modifie les informations du usersProperties dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idUsers:
 *                              type: integer
 *                              description: ID utilisateur
 *                              example: 2
 *                          idProperties:
 *                              type: integer
 *                              description: ID propriété
 *                              example: 2
 *      responses:
 *          200:
 *              description: UsersProperties modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: UsersProperties modifié avec succès
 *          400:
 *              description: Erreur lors de la modification du usersProperties
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du usersProperties
 *                          error: Message de l'erreur spécifique le cas échéant
 *          401:
 *              description: Erreur lors de la récupération d'un historique utilisateur 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 *          422:
 *              description: Erreur à envoyé au client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: User-Property pas trouvé
*/
//  DELETE
/**
 * @swagger
 * /usersProperties/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un usersProperties avec son ID
 *          tags: [USERS_PROPERTIES]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID du usersProperties
 *                  schema: 
 *                      type: integer
 *                      required: true
 *                      example: 1
 *          description: Supprime le usersProperties dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression d'un usersProperties par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: UsersProperties deleted
 *                              data:
 *                                  id: 1
 *                                  idUsers: 1
 *                                  idProperties: 1
 *              400:
 *                description: Erreur lors de la suppression d'un usersProperties
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'un usersProperties par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              401:
 *                  description: Erreur lors de la récupération d'un historique utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              422:
 *                  description: Erreur à envoyé au client
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: User-Property pas trouvé
 */


// INITIALISATION DES CONSTANTES
//ROUTER
const express = require('express');
const router = express.Router();
//SWAGGER
const { specs, swaggerUi, swaggerUiOptions } = require('../Swagger/swaggerConfig')


//------------------------------------- USER -------------------------------------
const userController = require('../controller/Users/UsersController');
//------------------------------------- ROLE -------------------------------------
const roleController = require('../controller/Roles/RolesController');
//------------------------------------- ESTIMATIONS -------------------------------------
const estimationController = require('../controller/Estimations/EstimationsController');
//------------------------------------- MESSAGES -------------------------------------
const messageController = require('../controller/Messages/MessagesController');
//------------------------------------- COMMENTS -------------------------------------
const commentController = require('../controller/Comments/CommentsController');
//------------------------------------- CLIENTS FOLDERS -------------------------------------
const clientFolderController = require('../controller/ClientFolders/ClientFoldersController');
//------------------------------------- EMPLOYEES -------------------------------------
const employeeController = require('../controller/Employees/EmployeesController');
//------------------------------------- DISTRICTS -------------------------------------
const districtController = require('../controller/Districts/DistrictController');
//------------------------------------- EMPLOYEES DISTRICTS -------------------------------------
const employeeDistrictController = require('../controller/EmployeesDistricts/EmployeesDistrictsController');
//------------------------------------- AGENDAS -------------------------------------
const agendasController = require('../controller/Agendas/AgendasController');
//------------------------------------- STATUSES -------------------------------------
const statusesController = require('../controller/Statuses/StatusesController');
//------------------------------------- PROPERTIES -------------------------------------
const propertiesController = require('../controller/Properties/PropertiesController');
//------------------------------------- PROPERTIES FOLDERS -------------------------------------
const propertiesFoldersController = require('../controller/PropertiesFolders/PropertiesFoldersController');
//------------------------------------- HISTORIES -------------------------------------
const historiesController = require('../controller/Histories/HistoriesController');
//------------------------------------- FAVORITES -------------------------------------
const favoritesController = require('../controller/Favorites/FavoritesController');
//------------------------------------- USERS PROPERTIES -------------------------------------
const usersPropertiesController = require('../controller/UsersProperties/UsersProperties');

//------------------------------------- PHOTOS -------------------------------------
const { upload } = require('../middleware/Photos/PhotosMiddleware');


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

//  RACINE
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bonjour'
    })
})



//------------------------------------- ROLES ROUTER -------------------------------------//Tested with swagger
router.get('/role/:id', roleController.getRole);
router.get('/roles', roleController.getAllRoles);
router.post('/role/create', roleController.createRole);
router.put('/role/modify/:id', roleController.modifyRole);
router.delete('/role/delete/:id', roleController.deleteRole);

//------------------------------------- USERS ROUTER -------------------------------------//Tested with swagger
router.get('/user/id/:id', userController.middleWare, userController.getUserId);
router.get('/user/email/:email', userController.middleWare, userController.getUserEmail);
router.get('/users', userController.middleWare, userController.getAllUser);
router.get('/users/:idRoles', userController.middleWare, userController.getAllUserByIdRole);
router.post('/user/create', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/user/modifyPassword', userController.middleWare, userController.modifyPassword);
router.put('/user/modify', userController.middleWare, userController.modify);
// router.put('/user/modifyEmail', UserController.middleWare, UserController.modifyEmail);

//------------------------------------- ESTIMATIONS ROUTER -------------------------------------//Tested with swagger
router.get('/estimation/:id', estimationController.getEstimationID);
router.get('/estimations', estimationController.getEstimations);
router.get('/estimations/:id', estimationController.getEstimationsByOne);
router.post('/estimation/create', estimationController.createEstimation);
router.put('/estimation/modify/:id', estimationController.modifyEstimation);
router.delete('/estimation/delete/:id', estimationController.deleteEstimation);

//------------------------------------- MESSAGES ROUTER -------------------------------------
router.get('/message/:id', messageController.getMessageID);
router.get('/messages', messageController.getMessages);
router.post('/message/create', messageController.createMessage);
router.put('/message/modify/:id', messageController.modifyMessage);
router.delete('/message/delete/:id', messageController.deleteMessage);

//------------------------------------- COMMENTS ROUTER -------------------------------------
router.get('/comment/:id', commentController.getComment);
router.get('/comments', commentController.getComments);
router.post('/comment/create', commentController.createComment);
router.put('/comment/modify/:id', commentController.modifyComment);
router.delete('/comment/delete/:id', commentController.deleteComment);

//------------------------------------- CLIENTFOLDERS ROUTER -------------------------------------
router.post('/clientFolder/create', clientFolderController.createClientFolder);
router.put('/clientFolder/modify/:id', clientFolderController.modifyClientFolder);
router.delete('/clientFolder/delete/:id', clientFolderController.deleteClientFolder);
router.get('/clientFolders', clientFolderController.getClientFolders)
router.get('/clientFolder/:id', clientFolderController.getClientFolder);

//------------------------------------- EMPLOYEES ROUTER -------------------------------------
router.get('/employee/:id', employeeController.getEmployee);
router.get('/employees', employeeController.getEmployees);
router.post('/employee/create', employeeController.createEmployee);
router.put('/employee/modify/:id', employeeController.modifyEmployee);
router.delete('/employee/delete/:id', employeeController.deleteEmployee);

//------------------------------------- DISTRICTS ROUTER -------------------------------------
router.get('/district/:id', districtController.getDistrict);
router.get('/districts', districtController.getDistricts);
router.post('/district/create', districtController.createDistrict);
router.put('/district/modify/:id', districtController.modifyDistrict);
router.delete('/district/delete/:id', districtController.deleteDistrict);

//------------------------------------- EMPLOYEES DISTRICTS ROUTER -------------------------------------
router.get('/employeesDistricts/one/:id', employeeDistrictController.getEmployeeDistrict);
router.get('/employeesDistrictsByIdEmployee/:id', employeeDistrictController.getEmpDisByIdEmployee);
router.get('/employeesDistricts/all', employeeDistrictController.getEmployeesDistricts);
router.post('/employeesDistricts/create', employeeDistrictController.createEmployeeDistrict);
router.put('/employeesDistricts/modify/:id', employeeDistrictController.modifyEmployeeDistrict);
router.delete('/employeesDistricts/delete/:id', employeeDistrictController.deleteEmployeeDistrict);

//------------------------------------- AGENDAS ROUTER -------------------------------------
router.get('/agenda/:id', agendasController.getAgenda);
router.get('/agendas', agendasController.getAgendas);
router.get('/agendas/:id', agendasController.getAgendasByUser);
router.post('/agenda/create', agendasController.createAgenda);
router.put('/agenda/modify/:id', agendasController.modifyAgenda);
router.delete('/agenda/delete/:id', agendasController.deleteAgenda);

//------------------------------------- STATUS ROUTER -------------------------------------
router.get('/status/:id', statusesController.getStatus);
router.get('/statuses', statusesController.getStatuses);
router.post('/status/create', statusesController.createStatus);
router.put('/status/modify/:id', statusesController.modifyStatus);
router.delete('/status/delete/:id', statusesController.deleteStatus);

//------------------------------------- PROPERTIES ROUTER -------------------------------------
router.get('/property/:id', propertiesController.getProperty);
router.get('/properties', propertiesController.getProperties);
router.post('/propertiesBySearch', propertiesController.getPropertiesBySearch);
router.get('/propertiesByStatus/:id', propertiesController.getPropertiesByStatus);
router.get('/properties/archived', propertiesController.getPropertiesArchived);
router.post('/property/create', upload, propertiesController.createProperty);
router.post('/upload-test', upload, (req, res) => {
    if (req.file) {
        console.log('File uploaded successfully:', req.file);
        res.send('File uploaded successfully');
    } else {
        res.send('No file uploaded');
    }
})
router.put('/property/modify/:id', propertiesController.modifyProperty);
router.put('/property/archive/:id', propertiesController.archiveProperty);
router.put('/property/restore/:id', propertiesController.restoreProperty);
router.delete('/property/delete/:id', propertiesController.deleteProperty);

//------------------------------------- PROPERTIES FOLDERS ROUTER -------------------------------------
router.get('/propertiesFolders/one/:id', propertiesFoldersController.getPropertyFolder);
router.get('/propertiesFolders/all', propertiesFoldersController.getPropertiesFolders);
router.post('/propertiesFolders/create', propertiesFoldersController.createPropertyFolder);
router.put('/propertiesFolders/modify/:id', propertiesFoldersController.modifyPropertyFolder);
router.delete('/propertiesFolders/delete/:id', propertiesFoldersController.deletePropertyFolder);

//#NAWELLE 
//  Je sais pas si c'est normal qu'il y ait ca donc je laisse en commentaire mais pour moi ca va dans Properties ça
//
// router.post('/property/create', function (req, res) {
//     photosMiddleware.upload(req, res, function (err) {
//         console.log(err);
//         res.status(400).send({ message: err.code, code: 400 })
//     })
// }, propertiesController.createProperty);


//------------------------------------- HISTORIES ROUTER -------------------------------------
router.get('/history/:id', historiesController.getHistory);
router.get('/histories', historiesController.getHistories);
router.post('/history/create', historiesController.createHistory);
router.put('/history/modify/:id', historiesController.modifyHistory);
router.delete('/history/delete/:id', historiesController.deleteHistory);

//------------------------------------- FAVORIES ROUTER -------------------------------------
router.get('/favorite/:id', favoritesController.getFavorite);
router.get('/favorites', favoritesController.getFavorites);
router.get('/favorites/:id', favoritesController.getFavoritesByOne);
router.post('/favorite/create', favoritesController.createFavorite);
router.put('/favorite/modify/:id', favoritesController.modifyFavorite);
router.delete('/favorite/delete/:id', favoritesController.deleteFavorite);

//------------------------------------- USERS PROPERTIES ROUTER -------------------------------------
router.get('/usersProperties/one/:id', usersPropertiesController.getUserProperty);
router.get('/usersProperties/all', usersPropertiesController.getUsersProperties);
router.post('/usersProperties/create', usersPropertiesController.createUserProperty);
router.put('/usersProperties/modify/:id', usersPropertiesController.modifyUserProperty);
router.delete('/usersProperties/delete/:id', usersPropertiesController.deleteUserProperty);


//------------------------------------- PHOTOS ROUTER -------------------------------------
// router.post('/photos', photosMiddleware.upload);

//router.get('/me', middleWare );


module.exports = router;