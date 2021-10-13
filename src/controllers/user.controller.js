const Users = require("../models/user.model.js");

//Crea y guarda un nuevo usuario
exports.create = (req, res) =>{
    //Se valida la peticion
    if(!req.body){
        res.status(400).send({
            message: "No se puede ingresar dados en blanco!"
        })
    }

    //Crea el usuario
    const user = new User({
        usuario: req.body.usuario,
        edad: req.body.edad,
        contrasena: req.body.contrasena
    });

    //Guarda el usuario en la base de datos

    User.create(user,(err, data) => {
        if(err)
            res.status(500).send({
                message:
                err.message || "Ha ocurrido un error mientras de almacenaba el usuario."
            });
        else res.send(data)
    });

};

//Consulta todos los usuarios de la base de datos
exports.findAll = (req, res) =>{

};

//Consulta un usuario por el Id
exports.findOne = (req, res) =>{

};

//Actualiza un usuario identificandolo por su Id
exports.update = (req, res) =>{

};

// Elimina un usuario con un Id espeficio
exports.delete = (req, res) =>{

};

//Elimina todo los usuario de la tabla
exports.deleteAll = (req, res) =>{

};

