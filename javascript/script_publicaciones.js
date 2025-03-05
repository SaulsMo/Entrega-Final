// Función para incrementar el contador de likes
function incrementLikes(likeId) {
    var likeCountElement = document.getElementById(likeId);
    var currentCount = parseInt(likeCountElement.innerText);
    likeCountElement.innerText = currentCount + 1;
}

// Función para aplicar los filtros
function applyFilter() {
    var filterValue = document.getElementById("filterSelect").value;
    var postContainer = document.getElementById("postContainer");
    var posts = Array.from(postContainer.getElementsByClassName("post"));

    if (filterValue === "date-new") {
        posts.sort((a, b) => new Date(b.getAttribute("data-date")) - new Date(a.getAttribute("data-date")));
    } else if (filterValue === "date-old") {
        posts.sort((a, b) => new Date(a.getAttribute("data-date")) - new Date(b.getAttribute("data-date")));
    } else if (filterValue === "likes-high") {
        posts.sort((a, b) => b.getAttribute("data-likes") - a.getAttribute("data-likes"));
    } else if (filterValue === "likes-low") {
        posts.sort((a, b) => a.getAttribute("data-likes") - b.getAttribute("data-likes"));
    }

    // Vaciar y reinsertar las publicaciones ordenadas
    postContainer.innerHTML = '';
    posts.forEach(post => postContainer.appendChild(post));
}
