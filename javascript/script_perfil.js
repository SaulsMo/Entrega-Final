let approvedPostCount = 0;

document.getElementById("submitPost").addEventListener("click", function() {
    const postContent = document.getElementById("postContent").value.trim();
    const postImage = document.getElementById("postImage").files[0];
    const statusMessage = document.getElementById("statusMessage");

    // Obtener la imagen de perfil y nombre del usuario
    const profilePic = document.querySelector(".avatar").src;
    const userName = "Juan Pérez";
    const userLastName = "Gómez";

    if (postContent === "" && !postImage) {
        statusMessage.textContent = "Debes escribir algo o subir una imagen.";
        statusMessage.style.color = "red";
        return;
    }

    statusMessage.textContent = "Tu publicación está siendo revisada...";
    statusMessage.style.color = "orange";

    setTimeout(() => {
        const approved = Math.random() > 0.3; // 70% de probabilidades de aprobación

        if (approved) {
            approvedPostCount++;
            updatePostCounter();

            const postList = document.getElementById("approvedPostsList");
            const newPost = document.createElement("li");

            // Crear contenedor de usuario
            const userInfo = document.createElement("div");
            userInfo.classList.add("user-info");

            const userAvatar = document.createElement("img");
            userAvatar.src = profilePic;
            userAvatar.alt = "Avatar del usuario";
            userAvatar.classList.add("post-avatar");

            const userNameElement = document.createElement("span");
            userNameElement.textContent = `${userName} ${userLastName}`;
            userNameElement.classList.add("post-user-name");

            userInfo.appendChild(userAvatar);
            userInfo.appendChild(userNameElement);
            newPost.appendChild(userInfo);

            // Contenido del post
            if (postContent) {
                const contentParagraph = document.createElement("p");
                contentParagraph.textContent = postContent;
                newPost.appendChild(contentParagraph);
            }

            // Imagen del post
            let imageUrl = "";
            if (postImage) {
                const img = document.createElement("img");
                imageUrl = URL.createObjectURL(postImage);
                img.src = imageUrl;
                img.alt = "Imagen de la publicación";
                img.classList.add("post-image");
                newPost.appendChild(img);
            }

            // Fecha y hora de aprobación
            const approvalDate = new Date();
            const formattedDate = approvalDate.toLocaleString();
            const dateElement = document.createElement("p");
            dateElement.classList.add("post-date");
            dateElement.textContent = `Aprobado el: ${formattedDate}`;
            newPost.appendChild(dateElement);

            postList.appendChild(newPost);
            statusMessage.textContent = "¡Tu publicación ha sido aprobada!";
            statusMessage.style.color = "green";

            // Guardar la publicación en localStorage para mostrarla en publicacion.html
            const savedPosts = JSON.parse(localStorage.getItem("publicaciones")) || [];
            savedPosts.push({
                profilePic,
                userName,
                userLastName,
                postContent,
                imageUrl,
                formattedDate
            });
            localStorage.setItem("publicaciones", JSON.stringify(savedPosts));
        } else {
            statusMessage.textContent = "Tu publicación fue rechazada.";
            statusMessage.style.color = "red";
        }

        document.getElementById("postContent").value = "";
        document.getElementById("postImage").value = null;
    }, 2000);
});

function updatePostCounter() {
    document.getElementById("postCounter").textContent = `Total de publicaciones aprobadas: ${approvedPostCount}`;
}
