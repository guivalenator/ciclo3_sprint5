const express = require('express');
const router = express.Router();
const User = require ("../controllers/user.controller.js");

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



// Rutas gestion DB

  

  //Crea un nuevo usuario
<<<<<<< HEAD
  app.post("/usuarios", users.create);

  //Consulta todos los usuarios
  app.get("usuarios", users.findAll);

  //consultar un usuario por Id
  app.get("/usuarios/:usuarioId", users.findOne);

  //Actualizar usuario por Id
  app.put("/usuarios/:usuarioId", users.update);
=======
  router.post("/usuarios", User.create);

  //Consulta todos los usuarios
  router.get("/usuarios", User.findAll);

  //consultar un usuario por Id
  router.get("/usuarios/:usuarioId", User.findOne);

  //Actualizar usuario por Id
  router.put("/usuarios/:usuarioId", User.update);
>>>>>>> cc0084d13a5e48c6c35e10ba1a88faad3747b0fd

  //Eliminar usuario por Id
  router.delete("/usuarios/:usuarioId", User.delete);

  //Eliminar todos los usuarios
<<<<<<< HEAD
  app.delete("/usuarios", users.deleteAll);
}


 
=======
  router.delete("/usuarios", User.deleteAll);
  
  module.exports = router;
>>>>>>> cc0084d13a5e48c6c35e10ba1a88faad3747b0fd
