// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUE AL HACER CLICK EN INICIAR SESION SE GUARDE EL NOMBRE DE USUARIO EN EL LOCALSTORAGE

// Variables
let iniciarSesion_btn = document.querySelector('.iniciarSesion_btn');
let nombreDeUsuario_input = document.querySelector('#usuario');

// Funcion para guarduar nombre de usuario en el localStorage
function guardarNombreDeUsuarioEnLocalStorage() {
    
    let nombreDeUsuario = nombreDeUsuario_input.value;
    localStorage.setItem("nombreDeUsuario", nombreDeUsuario);
}

// Evento para que cuando se inicia sesion se guarde en nombre de usuario en el localStorage
iniciarSesion_btn.addEventListener("click", guardarNombreDeUsuarioEnLocalStorage);
