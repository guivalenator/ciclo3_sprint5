//Funcion para validar nombre de usuario
function validar_nombre_usuario(string){
    var nombre = string;
    if (nombre[0].match(/^[0-9\s]+$/) || nombre[nombre.length-1]==" ") {//Se verifica con una expresion regular si el nombre usuario inicia con numero o espacio
        alert("Nombre de usuario no debe iniciar con número o espacio, ni terminar con espacio")
        document.getElementById("dato_nombre_usuario").value="";//Se limpia el input
        document.getElementById("dato_nombre_usuario").focus(); // Se ubica el cursor en el input
        return false;
    }
    else if(nombre.match(/^[a-zA-Z0-9\s]+$/) && nombre[0].match(/^[A-Z]+$/ )){ //Se verifica con una regxpr que el nombre de usuario  inicie con mayusculas y solo tenga numeros letras y espacio
        for(var i=0; i < nombre.length;i++){
            if(nombre[i]==" "){ 
                if (nombre[i+1].match(/^[A-Z]+$/)){ //Se valida que despues de un espacio se inicie con mayuscula 
                    return true;
                }
                else{
                    alert("Despues de un espacio debe Iniciar con mayuscula");
                    document.getElementById("dato_nombre_usuario").value=""; //Limpia input
                    document.getElementById("dato_nombre_usuario").focus();// ubica cursor
                    return false;
                }
            }
        }
    }
    else{
        alert("Las letras iniciales deben ser en mayusculas")
        document.getElementById("dato_nombre_usuario").value=""; //limpia input
        document.getElementById("dato_nombre_usuario").focus(); // ubica cursor
        return false;
    }

}

//Funcion para validar edad
function validar_edad_usuario(edad){
    
    var edad = parseInt(edad);
    if(isNaN(edad)== true){
            
        window.alert("El dato ingresado debe ser numerico");
        document.getElementById("dato_edad_usuario").value=""; //limpia input
        document.getElementById("dato_edad_usuario").select(); //Ubica cursor
        
        return false;
        
    }
    else if(edad >=13 && edad <110){
       return true;
    }
    else{
        document.getElementById("dato_edad_usuario").value=""; //limpia input
        document.getElementById("dato_edad_usuario").focus(); //Ubica cursor
        alert("La edad  debe estar entre 13 y 109 años")
        return false;

    }

}
//Funcion validar contraseña
function validar_contrasena(string){
    
    console.log(string.length)
    var passwd = string;
    if (passwd.length==6){
        return true;
    }
    else{
        document.getElementById("dato_contrasena").value=""; //Limpia input
        document.getElementById("dato_contrasena").focus();// ubica cursor
        alert("La contraseña debe ser de 6 digitos");
        return false;
    }
    

}


//=====================================================//

function agregarRegistro() {
    const pool = require('pool')
    const registros = [];
    let usuario = document.getElementById("dato_nombre_usuario").value;
    let edad = document.getElementById("dato_edad_usuario").value;
    let contrasena = document.getElementById("dato_contrasena").value;
    
    console.log(usuario);
    console.log(edad);
    console.log(contrasena);

    registros.push({
        usuario: usuario,
        edad: edad,
        contrasena: contrasena
    });
    console.log(registros.values)
    pool.query("insert into usuarios set?",registros.values);
    
    console.log(registros);
    //OrdenarArreglo(registros);
    
}
/*
function OrdenarArreglo(registros) {
    registros.sort(function (a, b) {
        if (a.edad > b.edad) {
            return 1;
        }
        if (a.edad < b.edad) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    console.log(registros);
    return registros;
}
*/
//module.exports.registros = registros;
//module.exports.agregarRegistro = agregarRegistro;
//module.exports.ordenarArreglo = OrdenarArreglo;
//module.exports.validar_nombre_usuario = validar_nombre_usuario;
//module.exports.validar_edad_usuario = validar_edad_usuario;
//module.exports.validar_contasena = validar_contasena;

/*let registros = [];

function agregarRegistro() {
    let usuario = document.getElementById("dato_nombre_usuario").value;
    let edad = document.getElementById("dato_edad_usuario").value;
    let contrasena = document.getElementById("dato_contrasena").value;

    registros.push({
        usuario: usuario,
        edad: edad,
        contrasena: contrasena
    });

    console.log(registros);
}

function OrdenarArreglo(arreglo) {
    arreglo.sort((a, b)=> {
        if (a.edad > b.edad) {
            return 1;
        }
        if (a.edad < b.edad) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    console.log(arreglo);
    return arreglo;
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.OrdenarArreglo = OrdenarArreglo;
*/