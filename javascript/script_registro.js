document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Usuario registrado exitosamente.");
});


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
