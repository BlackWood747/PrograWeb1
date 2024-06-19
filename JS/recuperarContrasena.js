
let recuperarContrasena_form = document.querySelector(".recuperarContrasena_form");
let usuario_input = document.querySelector("#NombreDeUsuario");

// Funcion para chequear que el nombre de usuario ingresado sea igual al del localStorage
function usuarioValido() {
    
    let auxBoolean = false;

    let usuarioIngresado = usuario_input.value;
    let usarioLocalStorage = localStorage.getItem("nombreDeUsuario");

    if (usuarioIngresado === usarioLocalStorage) {
        auxBoolean = true;
    } else {
        auxBoolean = false;
    }

    return auxBoolean;
}

// Funcion que previene que el mail no se manden si el nombre de usuario no existe en el localStorage
function recuperarContrasenaPrevent(event) {

    if (usuarioValido() == false) {
        
        event.preventDefault();
        alert("Nombre de usuario no encontrado en la plataforma!");
    }
}

// Evento para que antes de enviar el mail valide que el usuario esta registrado
recuperarContrasena_form.addEventListener("submit", recuperarContrasenaPrevent);