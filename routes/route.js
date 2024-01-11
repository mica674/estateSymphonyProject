//SWAGGER
//  USER
    //  GET BY ID
/**
 * @swagger
 * /user/id/{id}:
 *  get:
 *      summary: Récupérer les informations d'un utilisateur
 *      tags: [USER]
 *      parameters:
 *          -   in : path
 *              name: id
 *              required: true
 *              description: ID of User
 *              schema:
 *                  type: integer
 *                  required: true
 *      description: Récupère les informations d'un utilisateur dans la base de données à partir de son ID
 *      responses:
 *          200:
 *              description: Utilisateur trouvé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Bonjour firstname lastname
 *                          data: 
 *                              firstname: Mickaël
 *                              lastname: Fournier
 *          400:
 *              description: Erreur lors de la récupétion de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d\'un utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
*/
    //  GET BY EMAIL
/**
 * @swagger
 * /user/email/{email}:
 *  get:
 *      summary: Récupérer les informations d'un utilisateur
 *      tags: [USER]
 *      parameters:
 *          -   in : path
 *              name: email
 *              required: true
 *              description: EMAIL of User
 *              schema:
 *                  type: string
 *      description: Récupère les informations d'un utilisateur dans la base de données à partir de son EMAIL
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
 *      responses:
 *          200:
 *              description: Utilisateurs trouvés avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Bonjour firstname lastname
 *                          data: 
 *                              firstname: Mickaël
 *                              lastname: Fournier
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
 *                          message: Select all
 *                          data: $users
 *          400:
 *              description: Erreur lors de la création de l'utilisateur
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
 *      summary: Récupérer tous les utilisateurs qui ont un certains role
 *      tags: [USER]
 *      parameters:
 *          -   in : path
 *              name: idRole
 *              required: true
 *              description: ID ROLE of User
 *              schema:
 *                  type: integer
 *      description: Récupère tous les utilisateurs qui ont un role spécifique
 *      responses:
 *          200:
 *              description: Utilisateurs trouvés avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Select all by idRole
 *                          data: $users
 *          400:
 *              description: Erreur lors de la création de l'utilisateur
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
*      description: Crée un nouvel utilisateur dans la base de données
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
*                          password:
*                              type: string
*                              description: Mot de passe de l'utilisateur
*      responses:
*          200:
*              description: Utilisateur créé avec succès
*              content:
*                  application/json:
*                      example:
*                          message: Create
*                          data: 
*                              email: contact-amiens@lamanu.fr
*                              password: $2b$12$FRE3BYhXhUyfeOI/ryIs3OG/ZomZJbO7QiPwslNAFEdDkBU8z1Mt
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
 *                          password:
 *                              type: string
 *                              description: Mot de passe de l'utilisateur
 *      responses:
 *          200:
 *              description: Utilisateur connecté avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Login successed
 *                          data: 
 *                              token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFsYmVydGxlYmVhdWdvc3NlQGdtYWlsLmNvbSIsImlhdCI6MTcwNDc5NTEyMCwiZXhwIjoxNzA0ODgxNTIwfQ.lBRfXtbc-TH8oPQv3kgb04D9xEqarU7IQF0qHNO2rz4
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
 *      parameters:
 *          -   in: header
 *              name: Authorization
 *              required: true
 *              description: Token d'authentification de l'utilisateur
 *              example:
 *                  Authorization: Bearer $TOKEN
 *              schema:
 *                  type: string
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
 *      parameters:
 *          -   in: header
 *              name: Authorization
 *              required: true
 *              description: Token d'authentification de l'utilisateur
 *              schema:
 *                  type: string
 *                  requried: true
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
 *                          lastname:
 *                              type: string
 *                              description: Nom de l'utilisateur
 *                          phone:
 *                              type: string
 *                              description: Numéro de téléphone de l'utilisateur
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
 *      responses:
 *          200:
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
 *                             -   id: 1
 *                                 name: A MODIFIER APRES TEST
 *                                 createdAt: 
 *                                 updatedAt: 
 *                             -   id: 2
 *                                 name: Manager
 *                                 createdAt: 
 *                                 updatedAt: 
 *                             -   id: 3
 *                                 name: Employee
 *                                 createdAt: 
 *                                 updatedAt: 
 *                             -   id: 4
 *                                 name: User
 *                                 createdAt: 
 *                                 updatedAt: 
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
 *                  example:
 *                      location: Achat
 *                      houseType: Maison
 *                      surface: 90
 *                      showerRoom: 1
 *                      room: 5
 *                      floor: 2
 *                      balcony: 1
 *                      parking: true
 *                      idUser: 1
 *                  schema:
 *                      type: object
 *                      properties:
 *                          location:
 *                              type: string
 *                              description: Type de vente (achat/vente ou location) du bien
 *                          houseType:
 *                              type: string
 *                              description: Type de bien (maison, appartement ...)
 *                          surface:
 *                              type: integer
 *                              description: Surface en m²
 *                          showerRoom:
 *                              type: integer
 *                              description: Nombre de pièces d'eau (salle de bain, salle de douche ...)
 *                          room:
 *                              type: integer
 *                              description: Nombre de pièces du bien
 *                          floor:
 *                              type: integer
 *                              description: Nombre d'étage du bien
 *                          balcony:
 *                              type: integer
 *                              description: Balcon/Terrasse
 *                          parking:
 *                              type: boolean
 *                              description: Présence d'une place parking (true/false)
 *                          idUser:
 *                              type: integer
 *                              description: ID de l'utilisateur demandeur de l'estimation
 *      responses:
 *          200:
 *              description: Estimation créée avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Estimation créée
 *                          data: 
 *                              id: 25
 *                              name: A MODIFIER APRES TEST
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
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
 *      description: Modifie les informations d'une estimation dans la base de données d'après son ID
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  example:
 *                      location: Achat
 *                      houseType: Maison
 *                      surface: 90
 *                      showerRoom: 1
 *                      room: 5
 *                      floor: 2
 *                      balcony: 1
 *                      parking: true
 *                      idUser: 1
 *                  schema:
 *                      type: object
 *                      properties:
 *                          location:
 *                              type: string
 *                              description: Type de vente (achat/vente ou location) du bien
 *                          houseType:
 *                              type: string
 *                              description: Type de bien (maison, appartement ...)
 *                          surface:
 *                              type: integer
 *                              description: Surface en m²
 *                          showerRoom:
 *                              type: integer
 *                              description: Nombre de pièces d'eau (salle de bain, salle de douche ...)
 *                          room:
 *                              type: integer
 *                              description: Nombre de pièces du bien
 *                          floor:
 *                              type: integer
 *                              description: Nombre d'étage du bien
 *                          balcony:
 *                              type: integer
 *                              description: Balcon/Terrasse
 *                          parking:
 *                              type: boolean
 *                              description: Présence d'une place parking (true/false)
 *                          idUsers:
 *                              type: integer
 *                              description: ID de l'utilisateur demandeur de l'estimation
 *      responses:
 *          200:
 *              description: Informations de l'estimation modifiées avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Estimation modifiée avec succès
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
 *          description: Deleting a 'Estimation' in the database
 *          responses: 
 *              200:
 *                  description: Delete Estimation by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Estimation supprimée
 *              400:
 *                description: Erreur lors de la suppression de l'estimation
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d\'une estimation par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 */
   
 //  MESSAGE
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
 *          description: Obtenir un message par son ID
 *          responses: 
 *              200:
 *                  description: Message by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: Message id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la récupération du message
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d\'un message par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *                                 name: MODIFIER APRES TEST
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
 *                          userIdSender:
 *                              type: integer
 *                              description: ID de l'utilisateur expéditeur du message
 *                          userIdReceiver:
 *                              type: integer
 *                              description: ID de l'utilisateur destinataire du message
 *      responses:
 *          200:
 *              description: Message créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Message créé
 *                          data: 
 *                              id: 25
 *                              name: A MODIFIER APRES TEST
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
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
 *                            message: Erreur survenue lors de la suppression d\'un message par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 */

//  COMMENTS
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
 *          description: Obtenir un commentaire par son ID
 *          responses: 
 *              200:
 *                  description: Commentaire par son ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          Comments: Comment id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la récupération du commentaire 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération du commentaire par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *                                 name: MODIFIER APRES TEST
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
 *                          userID:
 *                              type: integer
 *                              description: ID de l'utilisateur auteur du commentaire
 *                          comment:
 *                              type: string
 *                              description: Contenu du commentaire
 *      responses:
 *          200:
 *              description: Commentaire créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Commentaire créé
 *                          data: 
 *                              id: 25
 *                              name: A MODIFIER APRES TEST
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
 *      responses:
 *          200:
 *              description: Commentaire modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Commentaire modifié avec succès
 *          400:
 *              description: Erreur lors de la modification du commentaire
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du contenu du commentaire
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
 *          description: Supprime le commentaire dans la base de données
 *          responses: 
 *              200:
 *                  description: Commentaire supprimé avec succès 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Commentaire supprimé
 *              400:
 *                description: Erreur lors de la suppression du commentaire
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression du commentaire par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 */

//  CLIENT FOLDERS
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
 *          description: Obtenir un dossier client par son ID
 *          responses: 
 *              200:
 *                  description: ClientFolder by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: Dossier client id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la récupération du dossier client 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération du dossier client par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *                         message: select all
 *                         data: 
 *                             -   id: 1
 *                                 name: MODIFIER APRES TEST
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
 *                  description: Erreur lors de la récupération des dossiers clients
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les dossiers clients
 *                              error: Message de l'erreur spécifique le cas échéant
 */
    //  CREATE
/**
 * @swagger
 * /clientFolder/Create:
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
 *                          userId:
 *                              type: integer
 *                              description: ID de l'utilisateur
 *                          name:
 *                              type: string
 *                              description: Nom du dossier
 *                          pdf:
 *                              type: string
 *                              description: Nom du fichier pdf
 *      responses:
 *          200:
 *              description: Dossier client créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Dossier client créé
 *                          data: 
 *                              userId: 2
 *                              name: A MODIFIER APRES TEST
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
 *          400:
 *              description: Erreur lors de la création du dossier client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création du dossier client
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *      description: Modifie le contenu d'un dossier client dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userId:
 *                              type: integer
 *                              description: Id de l'utilisateur
 *                          name:
 *                              type: string
 *                              description: Nom du dossier
 *                          pdf:
 *                              type: string
 *                              description: Nom du fichier pdf
 *      responses:
 *          200:
 *              description: Dossier client modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Dossier client modifié avec succès
 *          400:
 *              description: Erreur lors de la modification du dossier client
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du dossier client
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *          description: Supprime le dossier client dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression du dossier client par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Dossier client supprimé
 *              400:
 *                description: Erreur lors de la suppression du dossier client
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression du dossier client par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 */

//  EMPLOYEES
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
 *          description: Obtenir un employé par son ID
 *          responses: 
 *              200:
 *                  description: Employee by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: Employé id = 2
 *                          data:
 *                              id: A MODIFIER APRES TEST
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la récupération de l'employé 
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération de l'employé par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *                         message: select all
 *                         data: 
 *                             -   id: 1
 *                                 name: MODIFIER APRES TEST
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
 *                  description: Erreur lors de la récupération des employés
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération de tous les employés
 *                              error: Message de l'erreur spécifique le cas échéant
 */
    //  CREATE
/**
 * @swagger
 * /employee/Create:
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
 *                          description:
 *                              type: string
 *                              description: Description de l'employé
 *                          name:
 *                              type: string
 *                              description: Nom de l'employé
 *                          idUser:
 *                              type: integer
 *                              description: ID utilisateur (foreign key)
 *      responses:
 *          200:
 *              description: Employé créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Employé créé
 *                          data: 
 *                              userId: 2
 *                              name: A MODIFIER APRES TEST
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
 *          400:
 *              description: Erreur lors de la création de l'employé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Une erreur est survenue lors de la création de l'employé
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *                          name:
 *                              type: string
 *                              description: Nom de l'employé
 *                          idUser:
 *                              type: integer
 *                              description: ID de l'utilisateur
 *      responses:
 *          200:
 *              description: Employé modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Employé modifié avec succès
 *          400:
 *              description: Erreur lors de la modification de l'employé
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification de l'employé
 *                          error: Message de l'erreur spécifique le cas échéant
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
 *          description: Supprime l'employé dans la base de données
 *          responses: 
 *              200:
 *                  description: Suppression de l'employé par son ID 
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Employé supprimé
 *              400:
 *                description: Erreur lors de la suppression de l'employé
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression de l'employé par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 */


 // INITIALISATION DES CONSTANTES
    //ROUTER
const express = require('express');
const router = express.Router();
    //SWAGGER
const {specs, swaggerUi} = require('../Swagger/swaggerConfig')

//------------------------------------- USER ---------------------------------------
const userController = require('../controller/User/UserController');
//------------------------------------- ROLE ---------------------------------------
const roleController = require('../controller/Roles/RolesController');
//------------------------------------- ESTIMATIONS ----------------------------------
const estimationController = require('../controller/Estimations/EstimationsController');
//------------------------------------- MESSAGES ----------------------------------
const messageController = require('../controller/Messages/MessagesController');
//------------------------------------- COMMENTS ------------------------------------
const commentController= require ('../controller/Comments/CommentsController');
//------------------------------------- CLIENTS FOLDERS ------------------------------
const clientFolderController = require ('../controller/Client Folder/ClientFolderController');
//------------------------------------- EMPLOYEES ------------------------------
const employeeController = require ('../controller/Employees/EmployeesController');
//------------------------------------- DISTRICTS ------------------------------
const districtController = require ('../controller/Districts/DistrictController');
//------------------------------------- EMPLOYEES DISTRICTS ------------------------------
const employeeDistrictController = require ('../controller/EmployeesDistricts/EmployeesDistricts');
//------------------------------------- AGENDAS -------------------------------------
const agendasController= require ('../controller/Agendas/AgendasController');
//------------------------------------- STATUSES -------------------------------------
const statusesController= require ('../controller/Statuses/StatusesController');
//------------------------------------- PROPERTIES ----------------------------------
const propertiesController= require ('../controller/Properties/PropertiesController');
//------------------------------------- PROPERTIES FOLDERS ----------------------------------
const propertiesFoldersController= require ('../controller/PropertiesFolders/PropertiesFoldersController');
//------------------------------------- HISTORIES -----------------------------------
const historiesController= require ('../controller/Histories/HistoriesController');

//------------------------------------- FAVORIES ------------------------------------
const favoritesController= require ('../controller/Favorites/FavoritesController');
//------------------------------------- PHOTOS --------------------------------------
const photosMiddleware= require ('../middleware/Photos/PhotosMiddleware');
//------------------------------------- PHOTOS FOLDERS ------------------------------
const PhotosMiddleware = require('../middleware/Photos/PhotosMiddleware');


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    //  RACINE
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bonjour'
    })
})


//------------------------------------- ROLES ROUTER ---------------------------------------//Tested with swagger
router.get('/role/:id', roleController.getRole);//S
router.get('/roles', roleController.getAllRoles);//S
router.post('/role/create', roleController.createRole);//S
router.put('/role/modify/:id', roleController.modifyRole);//S
router.delete('/role/delete/:id', roleController.deleteRole);//S

//------------------------------------- USERS ROUTER ---------------------------------------//Tested with swagger
router.get('/user/id/:id', userController.getUserId);//S
router.get('/user/email/:email', userController.getUserEmail);//S
router.get('/users', userController.getAllUser);//S
router.get('/users/:idRole', userController.getAllUserByIdRole);//S
router.post('/user/create', userController.createUser);//S
router.post('/login', userController.loginUser);//S
router.put('/user/modifyPassword', userController.middleWare, userController.modifyPassword);//S
router.put('/user/modify', userController.middleWare, userController.modify);//S
// router.put('/user/modifyEmail', UserController.middleWare, UserController.modifyEmail);

//------------------------------------- ESTIMATIONS ROUTER ---------------------------------//Tested with swagger
router.get('/estimation/:id', estimationController.getEstimationID);
router.get('/estimations', estimationController.getEstimations);
router.post('/estimation/create', estimationController.createEstimation);
router.put('/estimation/modify/:id', estimationController.modifyEstimation);
router.delete('/estimation/delete/:id', estimationController.deleteEstimation);

//------------------------------------- MESSAGES ROUTER ---------------------------------
router.get('/message/:id', messageController.getMessageID);
router.get('/messages', messageController.getMessages);
router.post('/message/create', messageController.createMessage);
router.put('/message/modify/:id', messageController.modifyMessage);
router.delete('/message/delete/:id', messageController.deleteMessage);

//------------------------------------- COMMENTS ROUTER ---------------------------------
router.get('/comment/:id', commentController.getComment);
router.get('/comments', commentController.getComments);
router.post('/comment/create', commentController.createComment);
router.put('/comment/modify/:id', commentController.modifyComment);
router.delete('/comment/delete/;id', commentController.deleteComment);

//------------------------------------- CLIENTFOLDERS ROUTER -----------------------------
router.post('/clientFolder/create', clientFolderController.createClientFolder);
router.put('/clientFolder/modify/:id', clientFolderController.modifyClientFolder);
router.delete('/clientFolder/delete/:id', clientFolderController.deleteClientFolder);
router.get('/clientFolders', clientFolderController.getClientFolders)
router.get('/clientFolder/:id', clientFolderController.getClientFolder);

//------------------------------------- EMPLOYEES ROUTER ---------------------------------
router.get('/employee/:id', employeeController.getEmployee);
router.get('/employees', employeeController.getEmployees);
router.post('/employee/create', employeeController.createEmployee);
router.put('/employee/modify/:id', employeeController.modifyEmployee);
router.delete('/employee/delete/:id', employeeController.deleteEmployee);

//------------------------------------- DISTRICTS ROUTER ---------------------------------
router.get('/district/:id', districtController.getDistrict);
router.get('/districts', districtController.getDistricts);
router.post('/district/create', districtController.createDistrict);
router.put('/district/modify/:id', districtController.modifyDistrict);
router.delete('/district/delete/:id', districtController.deleteDistrict);

//------------------------------------- EMPLOYEES DISTRICTS ROUTER ---------------------------------
router.get('/employeesDistricts/one/:id', employeeDistrictController.getEmployeeDistrict);
router.get('/employeesDistricts/all', employeeDistrictController.getEmployeesDistricts);
router.post('/employeesDistricts/create', employeeDistrictController.createEmployeeDistrict);
router.put('/employeesDistricts/modify/:id', employeeDistrictController.modifyEmployeeDistrict);
router.delete('/employeesDistricts/delete/:id', employeeDistrictController.deleteEmployeeDistrict);

//------------------------------------- AGENDAS ROUTER ---------------------------------
router.get('/agenda/:id', agendasController.getAgenda);
router.get('/agendas', agendasController.getAgendas);
router.post('/agenda/create', agendasController.createAgenda);
router.put('/agenda/modify/:id', agendasController.modifyAgenda);
router.delete('/agenda/delete/:id', agendasController.deleteAgenda);

//------------------------------------- STATUS ROUTER ---------------------------------
router.get('/status/:id', statusesController.getStatus);
router.get('/statuses', statusesController.getStatuses);
router.post('/status/create', statusesController.createStatus);
router.put('/status/modify/:id', statusesController.modifyStatus);
router.delete('/status/delete/:id', statusesController.deleteStatus);

//------------------------------------- PROPERTIES ROUTER ---------------------------------
router.get('/property/:id', propertiesController.getProperty);
router.get('/properties', propertiesController.getProperties);
router.post('/property/create', photosMiddleware.upload, propertiesController.createProperty);
router.put('/property/modify/:id', propertiesController.modifyProperty);
router.delete('/property/delete/:id', propertiesController.deleteProperty);

//------------------------------------- PROPERTIES FOLDERS ROUTER ---------------------------------
router.get('/propertyFolder/:id', propertiesFoldersController.getPropertyFolder);
router.get('/properties', propertiesFoldersController.getPropertiesFolders);
router.post('/propertyFolder/create', propertiesFoldersController.createPropertyFolder);
router.put('/propertyFolder/modify/:id', propertiesFoldersController.modifyPropertyFolder);
router.delete('/propertyFolder/delete/:id', propertiesFoldersController.deletePropertyFolder);

//------------------------------------- HISTORIES ROUTER ---------------------------------
router.get('/history/:id', historiesController.getHistory);
router.get('/histories', historiesController.getHistories);
router.post('/history/create', historiesController.createHistory);
router.put('/history/modify/:id', historiesController.modifyHistory);
router.delete('/history/:id', historiesController.deleteHistory);

//------------------------------------- FAVORIES ROUTER ---------------------------------
router.get('/favorite/:id', favoritesController.getFavorite);
router.get('/favorites', favoritesController.getFavorites);
router.post('/favorite/create', favoritesController.createFavorite);
router.put('/favorite/modify/:id', favoritesController.modifyFavorite);
router.delete('/favorite/delete/:id', favoritesController.deleteFavorite);




//------------------------------------- PHOTOS ROUTER -----------------------------
router.post('/photos', photosMiddleware.upload);




//router.get('/me', middleWare );




module.exports = router;