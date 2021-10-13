const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
   res.render('index.html',{title:'Mi primera pagina web'});

 });

 router.get('/contact',(req, res) => {
   res.render('contact.html',{title:'Pagina de Contacto'});

 });

router.get('/registro',(req, res) => {
  res.render('registro.html',{title:'Pagina de registro'});

});

router.get('/login',(req, res) => {
  res.render('login.html',{title:'Pagina de Ingreso'});

});

module.exports = router;

// Rutas gestion DB
module.exports = app =>{
  const users = require ("../controllers/user.controller.js");

  //Crea un nuevo usuario
  app.post("/usuarios", User.create);

  //Consulta todos los usuarios
  app.get("usuarios", User.findAll);

  //consultar un usuario por Id
  app.get("/usuarios/:usuarioId", usuarios.findOne);

  //Actualizar usuario por Id
  app.put("/usuarios/:usuarioId", usuarios.update);

  //Eliminar usuario por Id
  app.delete("/usuarios/:usuarioId", usuarios.delete);

  //Eliminar todos los usuarios
  app.delete("/usuarios", usuarios.deleteAll);
}


 