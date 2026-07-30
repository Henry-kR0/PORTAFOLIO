// Credenciales válidas
const usuarioCorrecto = "Vegeta";
const claveCorrecta = "777";

// Formulario
const formLogin = document.querySelector('#FormLogin');

// Campos
const usuario = document.querySelector('#Usuario');
const clave = document.querySelector('#Clave');
const rol = document.querySelector('#rol')

// Errores
const errorUsuario = document.querySelector('#errorUsuario');
const errorClave = document.querySelector('#errorClave');
const mensajeGeneral = document.querySelector('#mensajeGeneral');

// Checkbox
const mostrarClave = document.querySelector('#MostrarClave');

// Secciones
const loginCard = document.querySelector('#loginCard');
const panelBienvenida = document.querySelector('#panelBienvenida');

// Usuario en bienvenida
const nombreUsuario = document.querySelector('#nombreUsuario');

// Botón cerrar sesión
const btnCerrarSesion = document.querySelector('#btnCerrarSesion');


// Mostrar contraseña
mostrarClave.addEventListener("change", function () {
    clave.type = this.checked ? "text" : "password";
});


// Submit login
formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    limpiarMensajes();

    let valido = true;

    const valorUsuario = usuario.value.trim();
    const valorClave = clave.value.trim();

    // Validación del usuario vacio
    if (valorUsuario === "") {
        mostrarError(usuario, errorUsuario, "Debe ingresar el usuario");
        valido = false;
    } else {
        mostrarCorrecto(usuario, errorUsuario);
    }

    // Validación de clave vacia
    if (valorClave === "") {
        mostrarError(clave, errorClave, "Debe ingresar la contraseña");
        valido = false;
    } else {
        mostrarCorrecto(clave, errorClave);
    }

    if (!valido) {
        mensajeGeneral.textContent = "Complete los campos requeridos";
        mensajeGeneral.style.color = "red";
        return;
    }

    // Credenciales
    if (valorUsuario === usuarioCorrecto && valorClave === claveCorrecta) {

        loginCard.classList.add("oculto");
        panelBienvenida.classList.remove("oculto");

        nombreUsuario.textContent = valorUsuario;

    } else {

        mensajeGeneral.textContent = "Usuario o contraseña incorrectos";
        mensajeGeneral.style.color = "red";
    }
});


// Cerrar sesión
btnCerrarSesion.addEventListener("click", function () {

    usuario.value = "";
    clave.value = "";
    mostrarClave.checked = false;
    clave.type = "password";

    panelBienvenida.classList.add("oculto");
    loginCard.classList.remove("oculto");

    limpiarMensajes();
});


// Funcion para marcar un campo correcto
function mostrarError(campo, error, texto) {
    error.textContent = texto;
    campo.classList.add("incorrecto");
}

function mostrarCorrecto(campo, error) {
    error.textContent = "";
    campo.classList.remove("incorrecto");
}

function limpiarMensajes() {
    errorUsuario.textContent = "";
    errorClave.textContent = "";
    mensajeGeneral.textContent = "";
} 