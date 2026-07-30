document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formRegistro");
    const usuarioInput = document.getElementById("usuario");
    const correoInput = document.getElementById("correo");
    const nivelSelect = document.getElementById("nivel");

    const errorUsuario = document.getElementById("error-usuario");
    const errorCorreo = document.getElementById("error-correo");
    const errorNivel = document.getElementById("error-nivel");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        let formularioValido = true;

        // Validar usuario
        if (usuarioInput.value.trim() === "") {
            errorUsuario.textContent = "Por favor, ingrese su nombre 🦀";
            formularioValido = false;
        } else if (usuarioInput.value.trim().length < 3) {
            errorUsuario.textContent = "El nombre debe tener al menos 3 caracteres.";
            formularioValido = false;
        } else {
            errorUsuario.textContent = "";
        }

        // Validar correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (correoInput.value.trim() === "") {
            errorCorreo.textContent = "El correo es obligatorio 🦐";
            formularioValido = false;
        } else if (!emailRegex.test(correoInput.value.trim())) {
            errorCorreo.textContent = "Ingrese un correo válido.";
            formularioValido = false;
        } else {
            errorCorreo.textContent = "";
        }

        // Validar select
        if (nivelSelect.value === "Elija") {
            errorNivel.textContent = "Seleccione una opción válida.";
            formularioValido = false;
        } else {
            errorNivel.textContent = "";
        }

        // Si todo está correcto
        if (formularioValido) {

            alert("Usuario registrado ✅");

            // Limpiar formulario
            form.reset();

            // Ir a la otra página
            window.location.href = "Inicio.html";
        }

    });

});