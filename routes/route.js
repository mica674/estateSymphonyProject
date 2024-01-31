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
 *                          message: Erreur survenue lors de la récupération d\'un utilisateur par son EMAIL
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *                          message: Select all users
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
*/
//  GET ALL BY ID ROLE
/**
 * @swagger
 * /users/{idRole}:
 *  get:
 *      summary: Récupérer tous les utilisateurs qui ont un role spécifique
 *      tags: [USER]
 *      parameters:
 *          -   in : path
 *              name: idRole
 *              required: true
 *              description: idRole of User
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
 *                          message: Login successed
 *                          data: 
 *                              token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFsYmVydGxlYmVhdWdvc3NlQGdtYWlsLmNvbSIsImlhdCI6MTcwNTAwNzc3NywiZXhwIjoxNzA1MDk0MTc3fQ.7odUw0Z5gf3ONpAE5o96uyXgzlU6H3BweChaaj6IU2g
 *          400:
 *              description: Erreur lors de la connexion de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: La connexion a échouée
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *          400:
 *              description: Erreur lors de la modification du role
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du nom du role
 *                          error: Message de l'erreur spécifique le cas échéant
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
*              400:
*                description: Erreur lors de la suppression du role
*                content: 
*                    application/json:
*                        example:
*                            message: Erreur survenue lors de la suppression d\'un role par son ID
*                            error: Message de l'erreur spécifique le cas échéant
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
*              404:
*                description: Estimation was not found
*                content: 
*                    application/json:
*                        example:
*                            message: Erreur survenue lors de la vérification de l'existence d'une estimation par son ID dans la base de donnée
*/


//  MESSAGE
// ------
//  GET BY ID
/**
 * @swagger
 * /message/{id}:
 *      get:
 *          summary: To find a 'Message' with his ID
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
 *              404:
 *                  description: Erreur lors de la récupération du message
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Message was not found
 *                              error: Message de l'erreur spécifique le cas échéant
 */
//  GET ALL
/**
 * @swagger
 * /messages:
 *      get:
 *          summary: Récupérer tous les messages de la base de données
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
 *      summary: Créer un nouveau message
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
 *      summary: Modifier le contenu d'un message
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
*          summary: To delete a 'Message' with his ID
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
 *              400:
 *                  description: Erreur lors de la récupération de tous les commentaires
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les commentaires
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *          400:
 *              description: Erreur lors de la création du commentaire
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création du commentaire
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *          400:
 *              description: Erreur lors de la modification du commentaire
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Comment was not updated
 *                          error: Message de l'erreur spécifique le cas échéant
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
*              400:
*                description: Erreur lors de la suppression du commentaire
*                content: 
*                    application/json:
*                        example:
*                            message: Comment not deleted
*                            error: Message de l'erreur spécifique le cas échéant
*              404:
*                description: Le commentaire a supprimer n'a pas été trouvé
*                content: 
*                    text/plain:
*                        example:
*                            message: Comment not found
*                            error: Message de l'erreur spécifique le cas échéant
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
 *              404:
 *                  description: Le dossier client n'a pas été trouvé 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Client folder not found
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *              404:
 *                  description: Aucun dossier client n'a été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: No client folder found
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
 *          404:
 *              description: idUsers n'existe pas
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: idUsers not found
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
 *                          message: Client folder was updated
 *          400:
 *              description: Erreur lors de la modification du dossier client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Client folder was not updated
 *                          error: Message de l'erreur spécifique le cas échéant
 *          404:
 *              description: Le dossier client n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Client folder not found
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
 *                              message: Client folder deleted
 *              400:
 *                description: Erreur lors de la suppression du dossier client
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Client folder was not deleted
 *                            error: Message de l'erreur spécifique le cas échéant
 *              404:
 *                description: Le dossier client n'a pas été trouvé
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Client folder not found
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
 *              400:
 *                  description: Erreur lors de la récupération de l'employé 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de l'employé par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              404:
 *                  description: L'employé n'a pas été trouvé 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Employee not found
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
 *              400:
 *                  description: Erreur lors de la récupération des employés
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les employés
 *                              error: Message de l'erreur spécifique le cas échéant
 *              404:
 *                  description: Aucun employés n'a été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: No employees found
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
 *          400:
 *              description: Erreur lors de la création de l'employé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création de l'employé
 *                          error: Message de l'erreur spécifique le cas échéant
 *          404:
 *              description: L'idUsers n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: idUsers not found
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
 *          400:
 *              description: Erreur lors de la modification de l'employé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification de l'employé
 *                          error: Message de l'erreur spécifique le cas échéant
 *          404:
 *              description: L'employé a modifier n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Employee not found
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
 *              400:
 *                description: Erreur lors de la suppression de l'employé
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression de l'employé par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              404:
 *                description: L'employé n'a pas été trouvé
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Employee not found
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
 *              400:
 *                  description: Erreur lors de la récupération du district 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération du district par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              404:
 *                  description: Le district n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: District not found
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
 *              400:
 *                  description: Erreur lors de la récupération des districts
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les districts
 *                              error: Message de l'erreur spécifique le cas échéant
 *              404:
 *                  description: Aucun district n'a été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: No district found
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
 *          400:
 *              description: Erreur lors de la création du district
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création du district
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *          400:
 *              description: Erreur lors de la modification du district
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du district
 *                          error: Message de l'erreur spécifique le cas échéant
 *          404:
 *              description: Le district n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: District not found
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
 *              400:
 *                description: Erreur lors de la suppression du district
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression du district par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              404:
 *                description: Le district n'a pas été trouvé
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: District not found
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
 *              400:
 *                  description: Erreur lors de la récupération du employees-districts 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération du employees-districts par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 *              404:
 *                  description: L'employees-districts n'a pas été trouvé
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Employees-Districts not found
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
 *              400:
 *                  description: Erreur lors de la récupération des employees-districts
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les employees-districts
 *                              error: Message de l'erreur spécifique le cas échéant
 *              404:
 *                  description: La table Employees-Districts est vide
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: No Employees-Districts found
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
 *          400:
 *              description: Erreur lors de la création du employees-districts
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création du employees-districts
 *                          error: Message de l'erreur spécifique le cas échéant
 *          404:
 *              description: L'employé n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Employee not found
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
 *          400:
 *              description: Erreur lors de la modification du employees-districts
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du employees-districts
 *                          error: Message de l'erreur spécifique le cas échéant
 *          404:
 *              description: L'employé, le district ou l'employees-district n'a pas été trouvé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Employee not found
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
 *              400:
 *                description: Erreur lors de la suppression du employees-districts
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression du employees-districts par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 *              404:
 *                description: L'employees-District n'a pas été trouvé
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Employees-District not found
 */


//  AGENDAS
// ------
//  GET BY ID
/**
 * @swagger
 * /agendas/{id}:
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
 *          description: Obtenir un agenda par son ID
 *          responses: 
 *              200:
 *                  description: agenda by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: agenda id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              date: true
 *                              visitInformations: "Location meublé..."
 *                              idUsers: 52
 *                              idEmployees: 69
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un agenda 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un agenda par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *                        example:
 *                         message: select all of agendas
 *                         data: 
 *                             -    id: A MODIFIER APRES TEST
 *                                  date: "2024-05-08T14:47:27.000Z"
 *                                  visitInformations: "Location meublée..."
 *                                  idUsers: 52
 *                                  idEmployees: 69
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 2
 *                                  date: "2024-05-08T14:47:27.000Z"
 *                                  visitInformations: "Location meublée..."
 *                                  idUsers: 52
 *                                  idEmployees: 69
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *                             -    id: 3
 *                                  date: "2024-05-08T14:47:27.000Z"
 *                                  visitInformations: "Location meublée..."
 *                                  idUsers: 52
 *                                  idEmployees: 69
 *                                  createdAt: "2024-01-08T14:47:27.000Z"
 *                                  updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération des agendas
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les agendas
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *                          visitInformations: 
 *                              type: string
 *                              description: Informations complémentaire pour le rendez-vous
 *                          idUsers: 
 *                              type: integer
 *                              description: ID de l'utilisateur (client)
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
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
 *                          visitInformations:
 *                              type: string
 *                              description: Infomations complémentaires pour le rendez-vous
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur (client)
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
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
 */


//  STATUSES
// ------
//  GET BY ID
/**
 * @swagger
 * /status/{id}:
 *      get:
 *          summary: Pour trouver un status avec son ID
 *          tags: [STATUS]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of status
 *                  schema: 
 *                      type: integer
 *                      required: true
 *          description: Obtenir un status par son ID
 *          responses: 
 *              200:
 *                  description: Status by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: Status id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un status 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un status par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
*/
//  GET ALL
/**
 * @swagger
 * /statuses:
 *      get:
 *          summary: Récupérer tous les status de la base de données
 *          tags: [STATUS]
 *          description: Récupère tous les status ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Statuses ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         message: select all of statuses
 *                         data: 
 *                             -    id: A MODIFIER APRES TEST
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
*/
//  CREATE
/**
 * @swagger
 * /status/create:
 *  post:
 *      summary: Créer un nouveau status
 *      tags: [STATUS]
 *      description: Crée un nouveau status dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          sold: 
 *                              type: boolean
 *                              description: Bien vendu (true/false)
 *                          rent: 
 *                              type: boolean
 *                              description: Bien loué (true/false)
 *                          hidden: 
 *                              type: boolean
 *                              description: Bien caché (true/false)
 *      responses:
 *          200:
 *              description: Status créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Status créé
 *                          data: 
 *                              id: 3
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création du status
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création du status
 *                          error: Message de l'erreur spécifique le cas échéant
*/
//  MODIFY 
/**
 * @swagger
 * /status/modify/{id}:
 *  put:
 *      summary: Modifier les informations du status
 *      tags: [STATUS]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du status
 *              schema:
 *                  type: integer
 *                  required: true
 *      description: Modifie les informations du status dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          date:
 *                              type: MODIFIER APRES TEST
 *                              description: Date du rendez-vous
 *                          visitInformations:
 *                              type: string
 *                              description: Infomations complémentaires pour le rendez-vous
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur (client)
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
 *      responses:
 *          200:
 *              description: Status modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Status modifié avec succès
 *          400:
 *              description: Erreur lors de la modification du status
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du status
 *                          error: Message de l'erreur spécifique le cas échéant
*/
//  DELETE
/**
 * @swagger
 * /status/delete/{id}:
 *      delete:
 *          summary: Pour supprimer un status avec son ID
 *          tags: [STATUS]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID du status
 *                  schema: 
 *                      type: integer
 *                      required: true
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
 */


//  PROPERTIES
// ------
//  GET BY ID
/**
 * @swagger
 * /property/{id}:
 *      get:
 *          summary: Pour trouver une propriété avec son ID
 *          tags: [PROPERTY]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of property
 *                  schema: 
 *                      type: integer
 *                      required: true
 *          description: Obtenir une propriété par son ID
 *          responses: 
 *              200:
 *                  description: Property by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: Property id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'une propriété 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'une propriété par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
*/
//  GET ALL
/**
 * @swagger
 * /properties:
 *      get:
 *          summary: Récupérer toutes les propriétés de la base de données
 *          tags: [PROPERTY]
 *          description: Récupère toutes les propriétés ajoutées dans la base de données
 *          responses: 
 *              200:
 *                  description: properties ALL
 *                  content:
 *                      application/json:
 *                        example:
 *                         message: Select all of properties
 *                         data: 
 *                             -    id: A MODIFIER APRES TEST
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
 *                  description: Erreur lors de la récupération des propriétés
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de toutes les propriétés
 *                              error: Message de l'erreur spécifique le cas échéant
*/
//  CREATE
/**
 * @swagger
 * /property/create:
 *  post:
 *      summary: Créer une nouvelle propriété
 *      tags: [PROPERTY]
 *      description: Crée une nouvelle propriété dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          sold: 
 *                              type: boolean
 *                              description: A MODIFIER APRES TEST
 *                          rent: 
 *                              type: boolean
 *                              description: Bien loué (true/false)
 *                          hidden: 
 *                              type: boolean
 *                              description: Bien caché (true/false)
 *      responses:
 *          200:
 *              description: Propriété créée avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Propriété créée
 *                          data: 
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'une proprété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'une propriété
 *                          error: Message de l'erreur spécifique le cas échéant
*/
//  MODIFY 
/**
 * @swagger
 * /property/modify/{id}:
 *  put:
 *      summary: Modifier les informations d'une propriété
 *      tags: [PROPERTY]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID de la propriété
 *              schema:
 *                  type: integer
 *                  required: true
 *      description: Modifie les informations de la propriété dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          date:
 *                              type: MODIFIER APRES TEST
 *                              description: Date du rendez-vous
 *                          visitInformations:
 *                              type: string
 *                              description: Infomations complémentaires pour le rendez-vous
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur (client)
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
 *      responses:
 *          200:
 *              description: Propriété modifiée avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Propriété modifiée avec succès
 *          400:
 *              description: Erreur lors de la modification de la propriété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification de la propriété
 *                          error: Message de l'erreur spécifique le cas échéant
*/
//  DELETE
/**
 * @swagger
 * /property/delete/{id}:
 *      delete:
 *          summary: Pour supprimer une propriété avec son ID
 *          tags: [PROPERTY]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID de la propriété
 *                  schema: 
 *                      type: integer
 *                      required: true
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
 *          description: Obtenir un dossier de propriété par son ID
 *          responses: 
 *              200:
 *                  description: PropertiesFolders by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: PropertiesFolders id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un dossier de propriété 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un dossier de propriété par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *                             -    id: A MODIFIER APRES TEST
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
 *                  description: Erreur lors de la récupération des dossiers de propriété
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les dossiers de propriété
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *                          sold: 
 *                              type: boolean
 *                              description: A MODIFIER APRES TEST
 *                          rent: 
 *                              type: boolean
 *                              description: Bien loué (true/false)
 *                          hidden: 
 *                              type: boolean
 *                              description: Bien caché (true/false)
 *      responses:
 *          200:
 *              description: Dossier de propriété créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Dossier de propriété créé
 *                          data: 
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'un dossier de propriété
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'un dossier de propriété
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *      description: Modifie les informations du dossier de la propriété dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          date:
 *                              type: MODIFIER APRES TEST
 *                              description: Date du rendez-vous
 *                          visitInformations:
 *                              type: string
 *                              description: Infomations complémentaires pour le rendez-vous
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur (client)
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
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
 *          description: Obtenir un historique utilisateur par son ID
 *          responses: 
 *              200:
 *                  description: Hystory by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: Hystory id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un historique utilisateur 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un historique utilisateur par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *                             -    id: A MODIFIER APRES TEST
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
 *                  description: Erreur lors de la récupération des historiques utilisateur
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les historiques utilisateur
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *                          sold: 
 *                              type: boolean
 *                              description: A MODIFIER APRES TEST
 *                          rent: 
 *                              type: boolean
 *                              description: Bien loué (true/false)
 *                          hidden: 
 *                              type: boolean
 *                              description: Bien caché (true/false)
 *      responses:
 *          200:
 *              description: Historique utilisateur créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Historique utilisateur créée
 *                          data: 
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'un historique utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'un historique utilisateur
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *      description: Modifie les informations de l'historique utilisateur dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          date:
 *                              type: MODIFIER APRES TEST
 *                              description: Date du rendez-vous
 *                          visitInformations:
 *                              type: string
 *                              description: Infomations complémentaires pour le rendez-vous
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur (client)
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
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
 *          description: Supprime l'historique utilisateur dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression d'un historique utilisateur par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: History deleted
 *              400:
 *                description: Erreur lors de la suppression d'un historique utilisateur
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'un historique utilisateur par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
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
 *          description: Obtenir un favori par son ID
 *          responses: 
 *              200:
 *                  description: Favorite by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: Favorite id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un favori 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un favori par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *                         message: Select all of favorites
 *                         data: 
 *                             -    id: A MODIFIER APRES TEST
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
 *                  description: Erreur lors de la récupération des favoris
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les favoris
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *                          sold: 
 *                              type: boolean
 *                              description: A MODIFIER APRES TEST
 *                          rent: 
 *                              type: boolean
 *                              description: Bien loué (true/false)
 *                          hidden: 
 *                              type: boolean
 *                              description: Bien caché (true/false)
 *      responses:
 *          200:
 *              description: Favori créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Favori créée
 *                          data: 
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'un favori
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'un favori
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *      description: Modifie les informations du favori dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          date:
 *                              type: MODIFIER APRES TEST
 *                              description: Date du rendez-vous
 *                          visitInformations:
 *                              type: string
 *                              description: Infomations complémentaires pour le rendez-vous
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur (client)
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
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
 *          description: Supprime le favori dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression d'un favori par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Favorite deleted
 *              400:
 *                description: Erreur lors de la suppression d'un favori
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'un favori par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
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
 *          description: Obtenir un usersProperties par son ID
 *          responses: 
 *              200:
 *                  description: UsersProperties by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: UsersProperties id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *              400:
 *                  description: Erreur lors de la récupération d'un usersProperties 
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d'un usersProperties par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *                         message: Select all of usersProperties
 *                         data: 
 *                             -    id: A MODIFIER APRES TEST
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
 *                  description: Erreur lors de la récupération des usersProperties
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les usersProperties
 *                              error: Message de l'erreur spécifique le cas échéant
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
 *                          sold: 
 *                              type: boolean
 *                              description: A MODIFIER APRES TEST
 *                          rent: 
 *                              type: boolean
 *                              description: Bien loué (true/false)
 *                          hidden: 
 *                              type: boolean
 *                              description: Bien caché (true/false)
 *      responses:
 *          200:
 *              description: UsersProperties créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: UsersProperties créé
 *                          data: 
 *                              id: A MODIFIER APRES TEST
 *                              sold: true
 *                              rent: false
 *                              hidden: false
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la création d'un usersProperties
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création d'un usersProperties
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *      description: Modifie les informations du usersProperties dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          date:
 *                              type: MODIFIER APRES TEST
 *                              description: Date du rendez-vous
 *                          visitInformations:
 *                              type: string
 *                              description: Infomations complémentaires pour le rendez-vous
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur (client)
 *                          idEmployees:
 *                              type: integer
 *                              description: ID de l'employé
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
 *          description: Supprime le usersProperties dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression d'un usersProperties par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: UsersProperties deleted
 *              400:
 *                description: Erreur lors de la suppression d'un usersProperties
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d'un usersProperties par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 */


// INITIALISATION DES CONSTANTES
//ROUTER
const express = require('express');
const router = express.Router();
//SWAGGER
const { specs, swaggerUi, swaggerUiOptions } = require('../Swagger/swaggerConfig')

//------------------------------------- USER -------------------------------------
const userController = require('../controller/User/UserController');
//------------------------------------- ROLE -------------------------------------
const roleController = require('../controller/Roles/RolesController');
//------------------------------------- ESTIMATIONS -------------------------------------
const estimationController = require('../controller/Estimations/EstimationsController');
//------------------------------------- MESSAGES -------------------------------------
const messageController = require('../controller/Messages/MessagesController');
//------------------------------------- COMMENTS -------------------------------------
const commentController = require('../controller/Comments/CommentsController');
//------------------------------------- CLIENTS FOLDERS -------------------------------------
const clientFolderController = require('../controller/Client Folder/ClientFolderController');
//------------------------------------- EMPLOYEES -------------------------------------
const employeeController = require('../controller/Employees/EmployeesController');
//------------------------------------- DISTRICTS -------------------------------------
const districtController = require('../controller/Districts/DistrictController');
//------------------------------------- EMPLOYEES DISTRICTS -------------------------------------
const employeeDistrictController = require('../controller/EmployeesDistricts/EmployeesDistricts');
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
const photosMiddleware = require('../middleware/Photos/PhotosMiddleware');
//------------------------------------- PHOTOS FOLDERS -------------------------------------
const PhotosMiddleware = require('../middleware/Photos/PhotosMiddleware');


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

//  RACINE
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bonjour'
    })
})


//------------------------------------- ROLES ROUTER -------------------------------------//Tested with swagger
router.get('/role/:id', roleController.getRole);//S
router.get('/roles', roleController.getAllRoles);//S
router.post('/role/create', roleController.createRole);//S
router.put('/role/modify/:id', roleController.modifyRole);//S
router.delete('/role/delete/:id', roleController.deleteRole);//S

//------------------------------------- USERS ROUTER -------------------------------------//Tested with swagger
router.get('/user/id/:id', userController.getUserId);//S
router.get('/user/email/:email', userController.getUserEmail);//S
router.get('/users', userController.getAllUser);//S
router.get('/users/:idRole', userController.getAllUserByIdRole);//S
router.post('/user/create', userController.createUser);//S
router.post('/login', userController.loginUser);//S
router.put('/user/modifyPassword', userController.middleWare, userController.modifyPassword);//S
router.put('/user/modify', userController.middleWare, userController.modify);//S
// router.put('/user/modifyEmail', UserController.middleWare, UserController.modifyEmail);

//------------------------------------- ESTIMATIONS ROUTER -------------------------------------//Tested with swagger
router.get('/estimation/:id', estimationController.getEstimationID);
router.get('/estimations', estimationController.getEstimations);
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
router.get('/employeesDistricts/all', employeeDistrictController.getEmployeesDistricts);
router.post('/employeesDistricts/create', employeeDistrictController.createEmployeeDistrict);
router.put('/employeesDistricts/modify/:id', employeeDistrictController.modifyEmployeeDistrict);
router.delete('/employeesDistricts/delete/:id', employeeDistrictController.deleteEmployeeDistrict);

//------------------------------------- AGENDAS ROUTER -------------------------------------
router.get('/agenda/:id', agendasController.getAgenda);
router.get('/agendas', agendasController.getAgendas);
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
router.post('/property/create', photosMiddleware.upload, propertiesController.createProperty);
router.put('/property/modify/:id', propertiesController.modifyProperty);
router.delete('/property/delete/:id', propertiesController.deleteProperty);

//------------------------------------- PROPERTIES FOLDERS ROUTER -------------------------------------
router.get('/propertiesFolders/one/:id', propertiesFoldersController.getPropertyFolder);
router.get('/propertiesFolders/all', propertiesFoldersController.getPropertiesFolders);
router.post('/property/create', function (req, res) {
    photosMiddleware.upload(req, res, function (err) {
        console.log(err);
        res.status(400).send({ message: err.code, code: 400 })
    })
}, propertiesController.createProperty);
router.put('/propertiesFolders/modify/:id', propertiesFoldersController.modifyPropertyFolder);
router.delete('/propertiesFolders/delete/:id', propertiesFoldersController.deletePropertyFolder);

//------------------------------------- HISTORIES ROUTER -------------------------------------
router.get('/history/:id', historiesController.getHistory);
router.get('/histories', historiesController.getHistories);
router.post('/history/create', historiesController.createHistory);
router.put('/history/modify/:id', historiesController.modifyHistory);
router.delete('/history/:id', historiesController.deleteHistory);

//------------------------------------- FAVORIES ROUTER -------------------------------------
router.get('/favorite/:id', favoritesController.getFavorite);
router.get('/favorites', favoritesController.getFavorites);
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
router.post('/photos', photosMiddleware.upload);




//router.get('/me', middleWare );




module.exports = router;