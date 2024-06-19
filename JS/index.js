// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUE AL HACER CLICK EN INICIAR SESION CHEQUEE EL NOMBRE DE USUARIO EN EL LOCALSTORAGE(INGRESADO AL REGISTRARSE)

// Variables
let iniciarSesion_form = document.querySelector('.iniciarSesion_form');
let nombreDeUsuario_input = document.querySelector('#usuario');
let contrasena_input = document.querySelector("#contraseña");

// Funcion para chequear que el nombre de usuario ingresado sea igual al del localStorage
function usuarioValido() {
    
    let auxBoolean = false;

    let nombreDeUsuarioIngresado = nombreDeUsuario_input.value;
    let nombreDeUsarioLocalStorage = localStorage.getItem("nombreDeUsuario");

    if (nombreDeUsuarioIngresado === nombreDeUsarioLocalStorage) {
        auxBoolean = true;
    } else {
        auxBoolean = false;
    }

    return auxBoolean;
}

// Funcion para chequear que la contraseña ingresada sea igual a la del localStorage
function contrasenaValida() {
    
    let auxBoolean = false;

    let contrasenaIngresada = contrasena_input.value;
    let contrasenaLocalStorage = localStorage.getItem("contrasena");

    if (contrasenaIngresada === contrasenaLocalStorage) {
        auxBoolean = true;
    } else {
        auxBoolean = false;
    }

    return auxBoolean;
}

// Funcion que previene que los datos no se manden si el nombre de usuario y contraseña no son correctos
function inicioDeSesionPrevent(event) {

    if (usuarioValido() == false) {
        
        event.preventDefault();
        alert("Nombre de usuario no encontrado, registrese o cambielo!");

    } else if (contrasenaValida() == false) {
        
        event.preventDefault();
        alert("Contraseña incorrecta :(");
    }
}

// Evento para que cuando se inicia sesion se guarde en nombre de usuario en el localStorage
iniciarSesion_form.addEventListener("submit", inicioDeSesionPrevent);