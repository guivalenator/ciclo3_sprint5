console.log("Ingreso a user.modelo.js")
const { renderFile } = require("ejs");
const pool = require("./database.js");


//constructor
const User = function(user){
    console.log("...Construyendo")
    this.usuario = user.usuario;
    this.contrasena = user.contrasena;
    this.edad = user.edad;
    
};

User.create = (newUser, result) => {
    console.log("Voy a insertar en la BD")
    console.log(User.usuario)
    pool.query("INSERT INTO usuarios SET ?", newUser,(err, res) =>{
        if(err){
            console.log("error: ", err);
            result(err,null);
            return;
        }
        console.log("Usuario creado: ", {id: res.insertId, ...newUser});
        result(null,{id: res.insertId, ...newUser});
    });
};

User.findById = (usuarioId, result) => {
    pool.query(`SELECT * FROM usuarios WHERE id= ${usuarioId}`,(err, res) =>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("Usuario hallado: ", res[0]);
            result(null, res[0]);
            return;
        }

        //Usuario no hallado con id
        result({kind: "No encontrado"}, null);
    });
};

User.getAll = result =>{
    pool.query("SELECT * FROM usuarios", (err, res) =>{
        if(err){
            console.log("error: ", err)
            result(null, err);
            return;
        }

        console.log("usuarios: ", res);
        result(null, res);
    });
};

User.updateById = (id, usuario, result) => {
    sql.query("UPDATE usuarios SET usuario = ?, edad = ?, contrasena = ? WHERE id = ?", [usuario.usuario, usuario.edad, usuario.contrasena, id],
    (err, res) => {
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if(res.affectedRows ==0){
            //No se encontraron usuarios con id
            result({kind: "No encontrado"}, null);
            return;
        }

        console.log("Usuario actualizado: ", {id: id, ... usuario});
        result(null,{id: id, ...customrt});
    });
};

User.remove = (id, result) =>{
    pool.query("DELETE FROM usuarios WHERE id =?", id, (err, res) =>{
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if(res.affectedRows == 0){
            // No se encontro usuario con Id
            result({kind:  "No encontrado" }, null);
            return;
        }

        console.log("Usuario con id borrado", id);
        result(null, res);
    });
};

User.removeAll = result => {
    pool.query("DELETE FROM usuarios", (err, res) =>{
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log (`deleted ${res.affectedRows} customer`);
        result(null, res);
    });
};

module.exports = User;