document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores de los campos
    let nombre = document.querySelector('input[placeholder="Ingresa tu Nombre"]').value.trim();
    let apellidoPaterno = document.querySelector('input[placeholder="Ingresa tu apellido paterno"]').value.trim();
    let apellidoMaterno = document.querySelector('input[placeholder="Ingresa tu apellido materno"]').value.trim();
    let sexo = document.querySelector("select").value;
    let fechaNacimiento = document.querySelector('input[type="date"]').value;
    let correo = document.querySelector('input[placeholder="Ingresa tu correo electrónico"]').value.trim();
    let nombreUsuario = document.querySelector('input[placeholder="Ingresa un nombre de usuario"]').value.trim();
    let contraseña = document.querySelector('input[type="password"]').value.trim();

    // Verificación de campos vacíos
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !sexo || !fechaNacimiento || !correo || !nombreUsuario || !contraseña) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validación de formato de correo
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Si pasa todas las validaciones, mostrar mensaje de éxito
    alert("Usuario registrado exitosamente.");
    this.submit(); // Enviar formulario si está todo correcto
});

// Vista previa de la imagen de perfil
document.getElementById("fileInput").addEventListener("change", function(event) {
    let file = event.target.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let profilePic = document.getElementById("profilePic");
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
