
let recuperarContrasena_form = document.querySelector(".recuperarContrasena_form");
let mail_input = document.querySelector("#email");
let usuario_input = document.querySelector("#nombreDeUsuario");

function mailExistePeroUsuarioNoCoincide(email, nombreDeUsuario) {
    
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    return usuarios.some(usuario => usuario.email === email && usuario.nombreDeUsuario != nombreDeUsuario);
}

function mailNoExiste(email) {
    
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    return usuarios.some(usuario => usuario.email != email);
}

// Funcion que previene que el mail no se manden si el nombre de usuario no existe en el localStorage
function recuperarContrasenaPrevent(event) {

    let mailIngresado = mail_input.value;
    let nombreDeUsuarioIngresado = usuario_input.value;

    if (mailNoExiste(mailIngresado)) {
        
        event.preventDefault();
        alert("Mail de usuario no registrado!");
        return;
    }

    if (mailExistePeroUsuarioNoCoincide(mailIngresado, nombreDeUsuarioIngresado)) {
        
        event.preventDefault();
        alert("Nombre de usuario incorrecto!");
        return;
    }
}

// Evento para que antes de enviar el mail valide que el usuario esta registrado
recuperarContrasena_form.addEventListener("submit", recuperarContrasenaPrevent);