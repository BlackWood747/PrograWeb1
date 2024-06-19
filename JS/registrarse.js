// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUE LOS INPUTS DE NOMBRE Y APELLIDO NO ACEPTEN NUMEROS

// Variables
const REGEX_LETTERS = /^[a-zA-Z]*$/;
let nombre_input = document.querySelector("#name");
let apellido_input = document.querySelector("#surname");

// Funcion para validar que un input no acepte numeros
function validateLetters(input) {

    input.addEventListener("input", function() {
        if (!REGEX_LETTERS.test(input.value)) {
            input.value = input.value.replace(/[^a-zA-Z]/g, "");
        }
    });
}

// Ejecucion para que los inputs de nombre y apellido acepten solo letras
validateLetters(nombre_input);
validateLetters(apellido_input);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUE El INPUT DE NOMBRE DE USUARIO SOLO ACEPTE LETRAS Y NUMEROS

// Variables
const REGEX_ALPHANUMERIC = /^[a-zA-Z0-9]*$/;
let usuario_input = document.querySelector("#usuario");

// Funcion para validar que un input solo acepte letras y numeros
function validateAlphanumeric(input) {

    input.addEventListener("input", function() {
        if (!REGEX_ALPHANUMERIC.test(input.value)) {
            input.value = input.value.replace(/[^a-zA-Z0-9]/g, "");
        }
    });
}

// Ejecucion para que el input de usuario solo acepte letras y numeros
validateAlphanumeric(usuario_input);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUE LA CONTRASEÑA TENGA 8 CARACTERES ( MINIMO 2 LETRAS, 2 NUMEROS y 2 CARACTERES ESPECIALES)

// Variables
let contrasena_input = document.querySelector("#password");
let contrasena;
let contrasenaValida = false;

let verificarContrasena_input = document.querySelector("#verifypassword");
let verificacionContrasena;
let contrasenaVerificada = false;

// Funcion que valida la contraseña a medida que se va escribiendo
function validarYVerificarContrasena() {

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

        // Validación de longitud y requisitos mínimos
        if (contrasena.length >= 8 && letrasCount >= 2 && numerosCount >= 2 && especialesCount >= 2) {
            
            console.log("Contraseña válida");
            contrasenaValida = true;

        } else {

            console.log("La contraseña no cumple con los requisitos mínimos.");
            contrasenaValida = false;
        }


        if (contrasenaValida == true) {

            validezDeContrasenaIcon.className = "fa-solid fa-circle-check"
            document.querySelector(".contrasena_li").append(validezDeContrasenaIcon);

        } else {

            validezDeContrasenaIcon.className = "fa-solid fa-circle-xmark"
            document.querySelector(".contrasena_li").append(validezDeContrasenaIcon);
        }


        verificacionContrasena = verificarContrasena_input.value;

        if (verificacionContrasena === contrasena) {
            console.log("Contraseña verificada exitosa");
            contrasenaVerificada = true;
        } else {
            console.log("Las contraseñas no coinciden");
            contrasenaVerificada = false;
        }

        
        if (contrasenaVerificada == true) {

            verificacionDeContrasenaIcon.className = "fa-solid fa-circle-check"
            document.querySelector(".verificarContrasena_li").append(verificacionDeContrasenaIcon);

        } else {

            verificacionDeContrasenaIcon.className = "fa-solid fa-circle-xmark"
            document.querySelector(".verificarContrasena_li").append(verificacionDeContrasenaIcon);
        }
    });


    verificarContrasena_input.addEventListener("input", function() {

        verificacionContrasena = verificarContrasena_input.value;

        if (verificacionContrasena === contrasena) {
            console.log("Contraseña verificada exitosa");
            contrasenaVerificada = true;
        } else {
            console.log("Las contraseñas no coinciden");
            contrasenaVerificada = false;
        }

        
        if (contrasenaVerificada == true) {

            verificacionDeContrasenaIcon.className = "fa-solid fa-circle-check"
            document.querySelector(".verificarContrasena_li").append(verificacionDeContrasenaIcon);

        } else {

            verificacionDeContrasenaIcon.className = "fa-solid fa-circle-xmark"
            document.querySelector(".verificarContrasena_li").append(verificacionDeContrasenaIcon);
        }
    });

}

validarYVerificarContrasena();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

        } else if(claveTarjeta == "000"){
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

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

            } else if (esNumeroImparOPar(ultimoDigito) == "impar" && sumaDeNumerosDeLaTarjetaMenosElUltimoEsImparOPar(numeroTarjeta) == "par") {

                console.log("Numero de trjeta valida");
                numeroTarjetaValida = true;
                
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


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUE TODOS LOS DATOS SEAN CORRECTOS AL ENVIAR LOS DATOS DEL FORMULARIO

let formulario = document.querySelector(".formulario")

// Funcion que previene que no se envien los datos del formulario si la contraseña no es valida o si la contraseña verificada no es igual a la que se introdujo
function formularioPrevent(event) {

    let radioInputs = document.querySelectorAll('input[type="radio"]');
    let isRadioChecked = Array.from(radioInputs).some(radio => radio.checked);

    if (contrasenaValida != true) {

        event.preventDefault();
        contrasenaValida = false;
        contrasenaVerificada = false;
        alert("La contraseña no es valida, cambiala para continuar!");

    } else if(contrasenaVerificada != true) {

        event.preventDefault();
        contrasenaVerificada = false;
        alert("La contraseña verificada es diferente a la contraseña introducida :(");

    } else if(isRadioChecked != true) {

        event.preventDefault();
        alert("Debe seleccionar al menos un metodo de pago antes de enviar el formulario.");

    }
}

// Ejecucion de la funcion para prevenir que al enviar los datos del formulario con las contraseñas mal, no se envien los datos
formulario.addEventListener("submit", formularioPrevent);