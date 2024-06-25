/*const button_submitt = document.querySelector(".button-confirm")
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
button_submitt.addEventListener("click",verificar_Contraseña);*/

// QUE LA CONTRASEÑA TENGA 8 CARACTERES ( MINIMO 2 LETRAS, 2 NUMEROS y 2 CARACTERES ESPECIALES)

// Variables
let contrasena_input = document.querySelector("#nuevaContraseña");
let contrasena;
let contrasenaValida = false;

let verificarContrasena_input = document.querySelector("#confirmarContraseña");
let verificacionContrasena;
let contrasenaVerificada = false;


// Funcion que valida la contraseña a medida que se va escribiendo
function validarYVerificarContrasena() {
let contrasena_requerimientos = document.querySelector(".contrasena_requerimientos");
let requerimiento_8caracteres = document.querySelector(".requerimiento_8caracteres");
let requerimiento_2letras = document.querySelector(".requerimiento_2letras");
let requerimiento_2nros = document.querySelector(".requerimiento_2nros");
let requerimiento_2caracEspeciales = document.querySelector(".requerimiento_2caracEspeciales");

    const letrasRegex = /[a-zA-Z]/g;
    const numerosRegex = /[0-9]/g;
    const especialesRegex = /[\W_]/g;

    let validezDeContrasenaIcon = document.createElement("i");
    let verificacionDeContrasenaIcon = document.createElement("i");

    contrasena_input.addEventListener("input", function() {

        
        contrasena = contrasena_input.value;

        let letrasCount = (contrasena.match(letrasRegex) || []).length;
        let numerosCount = (contrasena.match(numerosRegex) || []).length;
        let especialesCount = (contrasena.match(especialesRegex) || []).length;
         if (contrasena.length >= 8) {
        requerimiento_8caracteres.style.color= "#30ec39";
    } else {
        requerimiento_8caracteres.style.color= "#ec3049"
    }

    if (letrasCount >= 2) {
        requerimiento_2letras.style.color= "#30ec39";
    } else {
        requerimiento_2letras.style.color= "#ec3049"
    }

    if (numerosCount >= 2) {
        requerimiento_2nros.style.color= "#30ec39";
    } else {
        requerimiento_2nros.style.color= "#ec3049"
    }

    if (especialesCount >= 2) {
        requerimiento_2caracEspeciales.style.color= "#30ec39";
    } else {
        requerimiento_2caracEspeciales.style.color= "#ec3049"
    }


        // Validación de longitud y requisitos mínimos
        if (contrasena.length >= 8 && letrasCount >= 2 && numerosCount >= 2 && especialesCount >= 2) {
            
            console.log("Contraseña válida");
            contrasenaValida = true;
            validezDeContrasenaIcon.className = "fa-solid fa-circle-check"
            document.querySelector(".li-nuevacontraseña").append(validezDeContrasenaIcon);

        } else {

           
            contrasenaValida = false;
            
            validezDeContrasenaIcon.className = "fa-solid fa-circle-xmark"
            document.querySelector(".li-nuevacontraseña").append(validezDeContrasenaIcon);
        }


});
       verificarContrasena_input.addEventListener('input' ,function (){
               if (verificarContrasena_input.value === contrasena) {
           
            contrasenaVerificada = true;
            verificacionDeContrasenaIcon.className = "fa-solid fa-circle-check"
            document.querySelector("#confirmcontraseña").append(verificacionDeContrasenaIcon); verificacionContrasena = verificarContrasena_input.value;

        } else {
           
            verificacionDeContrasenaIcon.className = "fa-solid fa-circle-xmark"
            document.querySelector("#confirmcontraseña").append(verificacionDeContrasenaIcon);
            contrasenaVerificada = false;
            
        }

     
    })   
   
 // VALIDACION DE CONFIRMAR CONTRASEÑA 
       
     


   


}

validarYVerificarContrasena();

// QUE EL CAMPO CLAVE DE LA TARJETA SOLO ACEPTA 3 NUMEROS DISTINTOS DE CERO.

// Variables
const REGEX_NUMBERS = /^[0-9]*$/;
let claveTarjeta_input = document.querySelector(".codigotarjeta");
let claveTarjetaValida = false;

// Funcion para que solo se puedan escribir numeros en un input
function validateNumbers(input) {

    input.addEventListener("input", function() {
        if (!REGEX_NUMBERS.test(input.value)) {
            input.value = input.value.replace(/[^0-9]/g, "");
        }
    });
}

// Funcion que valida la clave de la tarjeta al momento de escribir en el input
function validarClaveTarjeta() {

    validateNumbers(claveTarjeta_input);

    claveTarjeta_input.addEventListener("input", function() {

        claveTarjeta = claveTarjeta_input.value;

        if (claveTarjeta.length > 3) {
            claveTarjeta = claveTarjeta.slice(0, 3);
        }

        claveTarjeta_input.value = claveTarjeta;

        if (claveTarjeta.length == 3 && claveTarjeta != "000") {

            console.log("Clave de trjeta valida");
            claveTarjetaValida = true;
            localStorage.setItem("codigoTarjeta",claveTarjeta_input.value)

        } else if(claveTarjeta == "000"){
            alert("La clave de la tarjeta no puede ser 000");
            claveTarjetaValida = false;
            console.log("La clave de la tarjeta no puede ser 000")
            
        } else {

            console.log("La clave de la tarjeta no cumple con los requisitos mínimos.");
            claveTarjetaValida = false;
        }
    });
}

// Ejecucion de la funcion que valida la clave de la tarjeta
validarClaveTarjeta();
// QUE El CAMPO TARJETA DE CREDITO SOLO ACEPTE NUMEROS CON UNA LONGITUD DE ENTRE 16 Y 19 DIGITOS

// El último número de la tarjeta debe ser par si la suma de todos los números anteriores (el último no cuenta) es un número impar.

let numeroTarjeta_input = document.querySelector(".numerotarjeta");
let numeroTarjetaValida = false;

function esNumeroImparOPar(numero) {
    
    let resultado = "";

    if (numero % 2 === 0) {
        resultado = "par";
    } else {
        resultado = "impar";
    }

    return resultado;
}

function sumaDeNumerosDeLaTarjetaMenosElUltimoEsImparOPar(numeroDeTarjeta) {
    
    let suma = 0;
    let numeroDeTarjetaStr = numeroDeTarjeta.toString();

    for (let i = 0; i < numeroDeTarjetaStr.length - 1; i++) {

        suma += parseInt(numeroDeTarjetaStr[i], 10);
    }

    return esNumeroImparOPar(suma);
}

function validarNumeroTarjeta() {

    validateNumbers(numeroTarjeta_input);

    numeroTarjeta_input.addEventListener("input", function() {

        let numeroTarjeta = numeroTarjeta_input.value;

        if (numeroTarjeta.length > 19) {
            numeroTarjeta = numeroTarjeta.slice(0, 19);
            numeroTarjeta_input.value = numeroTarjeta;
        }

        let numeroDeTarjetaStr = numeroTarjeta.toString();
        let ultimoDigito = parseInt(numeroDeTarjetaStr.charAt(numeroDeTarjetaStr.length - 1), 10);

        if (numeroTarjeta.length >= 16 && numeroTarjeta.length <= 19) {
            
            if (esNumeroImparOPar(ultimoDigito) === "par" && sumaDeNumerosDeLaTarjetaMenosElUltimoEsImparOPar(numeroTarjeta) === "impar") {

                console.log("Numero de trjeta valida");
                numeroTarjetaValida = true;
                localStorage.setItem("numeroTarjeta", numeroTarjeta_input.value)

            } else if (esNumeroImparOPar(ultimoDigito) == "impar" && sumaDeNumerosDeLaTarjetaMenosElUltimoEsImparOPar(numeroTarjeta) == "par") {

                console.log("Numero de trjeta valida");
                numeroTarjetaValida = true;
                localStorage.setItem("numeroTarjeta", numeroTarjeta_input.value)
                
            } else {

                console.log("El número de la tarjeta no cumple con los requisitos mínimos.");
                numeroTarjetaValida = false;
            }

        } else {

            console.log("El numero de la tarjeta no cumple con los requisitos mínimos.");
            numeroTarjetaValida = false;
        }
    });
}

validarNumeroTarjeta();

// QUE TODOS LOS DATOS SEAN CORRECTOS AL ENVIAR LOS DATOS DEL FORMULARIO
/*if(
    contrasenaValida = true && contrasenaVerificada
)*/

// Funcion que previene que no se envien los datos del formulario si la contraseña no es valida o si la contraseña verificada no es igual a la que se introdujo


//--------------------------------------------------------------------------------------------------------------------------
//funcion El botón confirmar se debe habilitar solo si ambos campos de contraseña están completos
// o si algún método de pago está tildado

let inputContraseña = document.getElementById('nuevaContraseña');
let inputConfirmarContraseña = document.getElementById('confirmarContraseña');
let radioInputs = document.querySelectorAll('input[type="radio"]');




habilitarBotonGuardar();
// evitar el envio del formulario si las contraseñas no son validas

function habilitarBotonGuardar() {
    let botonGuardar = document.querySelector('.button-confirm');
    botonGuardar.disabled = !(contrasenasCompletas() || metodoPagoSeleccionado());
}

function contrasenasCompletas() {
    return contrasena_input.value.trim() !== '' && contrasenaVerificada == true;
}

function metodoPagoSeleccionado() {
    let radioInputs = document.querySelectorAll('input[type="radio"]');
    return Array.from(radioInputs).some(radio => radio.checked);
}

habilitarBotonGuardar();

contrasena_input.addEventListener('input', habilitarBotonGuardar);
verificarContrasena_input.addEventListener('input', habilitarBotonGuardar);

radioInputs = document.querySelectorAll('input[type="radio"]');
radioInputs.forEach(radio => {
    radio.addEventListener('change', habilitarBotonGuardar);
});
let formulario = document.querySelector('.nuevaContrasena_form')
// Función para manejar el envío del formulario
function manejarEnvioFormulario(event) {
    let contrasenaCambiada = contrasena_input.value.trim() !== '';
    let confirmacionContrasenaCambiada = verificarContrasena_input.value.trim() !== '';
    let metodoPagoSeleccionado = Array.from(radioInputs).some(radio => radio.checked);

    if (contrasenaCambiada || confirmacionContrasenaCambiada) {
        if (contrasenaValida  != true || contrasenaVerificada != true) {
            event.preventDefault();
            alert("La contraseña no es válida o las contraseñas no coinciden.");
            return;
        }
    
    }

    if (metodoPagoSeleccionado) {
        let pagoTarjeta_radio = document.querySelector('input[name="pay-mettod"][value="credit-card"]');
        if (pagoTarjeta_radio.checked) {
            if (nroTarjeta_input.value === '') {
                btnsubmit.preventDefault();
                alert('Debe ingresar el número de la tarjeta!');
                return;
            }
            if (codigoTarjeta_input.value.trim() === '') {
                btnsubmit.preventDefault();
                alert('Debe ingresar el código de la tarjeta!');
                return;
            }
            if (!numeroTarjetaValida || !claveTarjetaValida) {
                btnsubmit.preventDefault();
                alert('Los datos de la tarjeta no son válidos.');
                return;
            }
        }
    }
}

// Agregar el evento submit al formulario


formulario.addEventListener('submit', manejarEnvioFormulario);

//---------------------------------------------------------------------------------------------------------------------





// funcion para mostrar el nombre de usuario, obteniendolo del array usuarios. 
function mostrarnombreDeUsuario(){
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const nombreDeUsuario = usuarios[0].nombreDeUsuario
    const nombreElemento = document.createElement("p");
    nombreElemento.textContent = nombreDeUsuario;

    
    const nombreYFoto = document.querySelector('.nombreyfoto');
    nombreYFoto.appendChild(nombreElemento); 

    
}
mostrarnombreDeUsuario();


// funcion para mostrar el email del usuario 
function mostrarEmail(){
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const pEmail = document.createElement("p");
    const email = usuarios[0].email;
    const liEmail = document.getElementById('email');
    pEmail.textContent = email;
    pEmail.style.display = 'inline';
    liEmail.appendChild(pEmail)

}
mostrarEmail();

// funcion para mostrar la contraseña del usuario
function mostrarContraseña(){
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const pContraseña = document.createElement('p');
    const liContraseña = document.getElementById('liContraseña');
     const contraseña = usuarios[0].contrasena;
     pContraseña.textContent = contraseña;
     pContraseña.style.display = 'inline';
     liContraseña.appendChild(pContraseña)
    
    }
    mostrarContraseña()
    const btnsubmit = document.querySelector('.nuevaContrasena_form')
    function evitarEnvioFormulario(event){
        let contrasena = contrasena_input.value;
        if (contraseña != null){
        alert("erorrr")
        }

    }
btnsubmit.addEventListener("submit", evitarEnvioFormulario)
