const express = require('express');
const app = express();
const path = require ('path')

//settings
app.set('port',3000);
app.set('views',path.join(__dirname,'views'))
app.engine('html',require('ejs').renderFile ); 
app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.urlencoded({extended: true}));


//middlewares
/*app.get("/",(req,res) => {
    res.json({message: "Bienvenido a ñla aplicacion"})
})
*/
//routes
 app.use(require('./routes/user.routes'));
 //app.use(require("./routes/usuarios.routes.js"));

//statics files
app.use(express.static(path.join(__dirname,'public')));

//Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});
