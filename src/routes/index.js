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