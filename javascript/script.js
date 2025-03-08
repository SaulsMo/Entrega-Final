//Verificacion del Inicio de Sesion
document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuario = usuarios.find(user => user.correo === email && user.contraseña === password);

    if (usuario) {
        alert(`Inicio de sesión exitoso. Rol: ${usuario.rol}`);
        localStorage.setItem("usuarioActual", JSON.stringify(usuario));

        if (usuario.rol === "administrador") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "publicaciones.html";
        }
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});
