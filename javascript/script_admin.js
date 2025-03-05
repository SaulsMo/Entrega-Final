// Simular publicaciones pendientes
const pendingPosts = [
  {
    id: 1,
    userName: "Malcolm666", // Nombre del usuario
    userProfileImage: "recursos/malcolm.webp", // Imagen de perfil
    content: "¡Hoy me siento genial! ¿Qué planes tienen para el fin de semana?",
    image: "recursos/malcolmpublifacion.avif", // Imagen de la publicación
    date: new Date(), // Fecha de la publicación
  },
  {
    id: 2,
    userName: "HalLover777", // Nombre del usuario
    userProfileImage: "recursos/hal.webp", // Imagen de perfil
    content: "Este es un anuncio importante para todos.",
    image: null,
    date: new Date(), // Fecha de la publicación
  },
];

// Cargar las publicaciones pendientes al cargar la página
window.onload = function() {
  const postQueue = document.getElementById("postQueue");

  pendingPosts.forEach(post => {
    const postItem = document.createElement("li");

    // Crear el contenedor para la información del usuario
    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    // Imagen de perfil del usuario
    if (post.userProfileImage) {
      const profileImg = document.createElement("img");
      profileImg.src = post.userProfileImage;
      profileImg.alt = `${post.userName}'s Profile`;
      profileImg.classList.add("profile-img");
      userInfo.appendChild(profileImg);
    }

    // Nombre del usuario
    const userName = document.createElement("span");
    userName.textContent = post.userName;
    userInfo.appendChild(userName);

    // Fecha de publicación
    const publishDate = document.createElement("span");
    const formattedDate = post.date.toLocaleString(); // Formato de fecha
    publishDate.textContent = `Publicado el: ${formattedDate}`;
    userInfo.appendChild(publishDate);

    postItem.appendChild(userInfo);

    // Agregar contenido de texto si existe
    if (post.content) {
      const contentParagraph = document.createElement("p");
      contentParagraph.textContent = post.content;
      postItem.appendChild(contentParagraph);
    }

    // Agregar imagen de la publicación si existe
    if (post.image) {
      const img = document.createElement("img");
      img.src = post.image;
      img.alt = "Imagen de la publicación";
      postItem.appendChild(img);
    }

    // Botones de acción (aprobar/rechazar)
    const actionButtons = document.createElement("div");
    actionButtons.classList.add("action-buttons");

    const approveButton = document.createElement("button");
    approveButton.classList.add("approve");
    approveButton.textContent = "Aprobar";
    approveButton.addEventListener("click", () => {
      postItem.remove();
      alert("Publicación aprobada.");
    });

    const rejectButton = document.createElement("button");
    rejectButton.classList.add("reject");
    rejectButton.textContent = "Rechazar";
    rejectButton.addEventListener("click", () => {
      postItem.remove();
      alert("Publicación rechazada.");
    });

    actionButtons.appendChild(approveButton);
    actionButtons.appendChild(rejectButton);

    postItem.appendChild(actionButtons);
    postQueue.appendChild(postItem);
  });
};
