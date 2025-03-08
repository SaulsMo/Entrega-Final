//Verificacion del Registro
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.querySelector('input[placeholder="Ingresa tu Nombre"]').value.trim();
    let apellidoPaterno = document.querySelector('input[placeholder="Ingresa tu apellido paterno"]').value.trim();
    let apellidoMaterno = document.querySelector('input[placeholder="Ingresa tu apellido materno"]').value.trim();
    let sexo = document.querySelector("select").value;
    let fechaNacimiento = document.querySelector('input[type="date"]').value;
    let correo = document.querySelector('input[placeholder="Ingresa tu correo electrónico"]').value.trim();
    let nombreUsuario = document.querySelector('input[placeholder="Ingresa un nombre de usuario"]').value.trim();
    let contraseña = document.querySelector('input[type="password"]').value.trim();

    //Verifica si los campos estan vacios
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !sexo || !fechaNacimiento || !correo || !nombreUsuario || !contraseña) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    let rol = document.querySelector(".role-btn.selected")?.textContent.toLowerCase() || "usuario";

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioExistente = usuarios.find(user => user.correo === correo || user.nombreUsuario === nombreUsuario);
    
    if (usuarioExistente) {
        alert("Este correo o nombre de usuario ya está registrado.");
        return;
    }

    let nuevoUsuario = { nombre, apellidoPaterno, apellidoMaterno, sexo, fechaNacimiento, correo, nombreUsuario, contraseña, rol };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado exitosamente.");
    window.location.href = "index.html";
});

//Verifica el rol
document.querySelectorAll(".role-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("selected"));
        this.classList.add("selected");
    });
});

//Añade la imagen
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
