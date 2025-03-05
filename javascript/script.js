document.getElementById("login-btn").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Inicio de sesión exitoso.");
    }
});

// Mostrar el formulario para reestablecer la contraseña al hacer clic en el enlace
document.getElementById("forgot-password").addEventListener("click", function() {
    document.getElementById("reset-password-form").style.display = "block";
});

// Enviar el enlace de recuperación
document.getElementById("send-reset-link").addEventListener("click", function() {
    var email = document.getElementById("reset-email").value;
    
    if (email) {
        document.getElementById("reset-message").textContent = "Te hemos enviado un correo para que reingreses una nueva contraseña.";
        document.getElementById("reset-message").style.display = "block";
        document.getElementById("reset-password-form").reset(); // Limpiar el formulario
    } else {
        alert("Por favor, ingresa un correo válido.");
    }
});

