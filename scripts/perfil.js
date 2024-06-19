const button_submitt = document.querySelector(".button-confirm")
 const input_contraseña = document.getElementById('nuevaContraseña')
const input_confirm_contraseña= document.getElementById('confirmarContraseña')
function verificar_Contraseña(evento){
    evento.preventDefault();
    const message_warning= document.querySelector('.is-hidden')
   
    if(input_contraseña.value === input_confirm_contraseña.value)
        {
        
        console.log("OK")
    }
        
    else { message_warning.classList.remove('is-hidden')
    console.log ("Las contraseñas deben ser iguales")
}
}
button_submitt.addEventListener("click",verificar_Contraseña);