const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
   res.render('index.html',{title:'Mi primera pagina web'});

 });

 router.get('/contact',(req, res) => {
   res.render('contact.html',{title:'contact page'});

 });

 router.get('/registro',(req, res) => {
   res.render('registro.html',{title:'Pagina de registro'});

 });




 module.exports = router;