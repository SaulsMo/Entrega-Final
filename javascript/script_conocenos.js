document.addEventListener("DOMContentLoaded", function() {
    alert("Bienvenido a nuestra plataforma. ¡Conócenos mejor!");

    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
        sections.forEach(section => {
            section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        });
    }, 500);

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
        document.getElementById("contactForm").reset();
    });
});
