// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUE AL HACER CLICK EN INICIAR SESION CHEQUEE EL NOMBRE DE USUARIO EN EL LOCALSTORAGE(INGRESADO AL REGISTRARSE)

// Variables
let iniciarSesion_form = document.querySelector('.iniciarSesion_form');
let mailDeUsuario_input = document.querySelector('#email');
let contrasena_input = document.querySelector("#contraseña");

// Funcion para chequear que el nombre de usuario ingresado sea igual al del localStorage

function mailExistePeroContrasenaNoCoincide(email, contrasena) {
    
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    return usuarios.some(usuario => usuario.email === email && usuario.contrasena != contrasena);
}


function mailNoExiste(email) {

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    return !usuarios.some(usuario => usuario.email === email);
}

function usuariosNoExiste() {
    
    return localStorage.getItem('usuarios') === null;
}

function mailExisteYContrasenaCoincide(email, contrasena) {
    
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    return usuarios.some(usuario => usuario.email === email && usuario.contrasena === contrasena);
}

function actualizarEstadoDeLogueo(email, estado) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios = usuarios.map(usuario => {
        if (usuario.email === email) {
            usuario.logeado = estado;
        }
        return usuario;
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Funcion que previene que los datos no se manden si el nombre de usuario y contraseña no son correctos
function inicioDeSesionPrevent(event) {

    let mailDeUsuarioIngresado = mailDeUsuario_input.value;
    let contrasenaIngresada = contrasena_input.value;

    if (usuariosNoExiste()) {

        event.preventDefault();
        alert("Mail de usuario no registrado! (Ningun usuario registrado)");
        return;

    }

    if (mailNoExiste(mailDeUsuarioIngresado)) {
        
        event.preventDefault();
        alert("Mail de usuario no registrado!");
        return;

    }

    if (mailExistePeroContrasenaNoCoincide(mailDeUsuarioIngresado, contrasenaIngresada)) {
        
        event.preventDefault();
        alert("Contraseña incorrecta!");
        return;
    }

    if (mailExisteYContrasenaCoincide(mailDeUsuarioIngresado, contrasenaIngresada)) {
        
        actualizarEstadoDeLogueo(mailDeUsuarioIngresado, true);

    }

}

// Evento para que cuando se inicia sesion se guarde en nombre de usuario en el localStorage
iniciarSesion_form.addEventListener("submit", inicioDeSesionPrevent);


// Función para cerrar sesión automáticamente al cargar la página de inicio de sesión
function cerrarSesionAutomatica() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios = usuarios.map(usuario => {

        if (usuario.logeado) {
            usuario.logeado = false;
        }
        return usuario;
    });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Llamar a la función para cerrar sesión automáticamente cuando se carga la página
document.addEventListener('DOMContentLoaded', cerrarSesionAutomatica);