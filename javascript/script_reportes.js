document.addEventListener("DOMContentLoaded", function () {
    const reportes = [
        { idUsuario: 101, nombre: "Malcolm666", publicacion: "¡Hoy me siento genial!", fecha: "21-2-2025", estado: "Pendiente" },
        { idUsuario: 102, nombre: "HalLover777", publicacion: "Este es un anuncio importante.", fecha: "20-2-2025", estado: "Pendiente" },
        { idUsuario: 103, nombre: "LoisBitchy69", publicacion: "Imagen", fecha: "19-2-2025", estado: "Aprobada" },
        { idUsuario: 101, nombre: "Malcolm666", publicacion: "Otro post más", fecha: "22-2-2025", estado: "Pendiente" }
    ];

    const usuarios = [
        { idUsuario: 101, username: "Malcolm666", nombreReal: "Malcolm Reyes", fechaRegistro: "10-1-2025" },
        { idUsuario: 102, username: "HalLover777", nombreReal: "Harold Smith", fechaRegistro: "5-1-2025" },
        { idUsuario: 103, username: "LoisBitchy69", nombreReal: "Lois Carter", fechaRegistro: "8-1-2025" }
    ];

    const reportesList = document.getElementById("reportes-list");
    const cantidadPostsList = document.getElementById("cantidad-posts");
    const cantidadUsuariosList = document.getElementById("cantidad-usuarios");

    function cargarReportes() {
        reportesList.innerHTML = "";
        reportes.forEach(reporte => {
            let row = `
                <tr>
                    <td>${reporte.idUsuario}</td>
                    <td>${reporte.nombre}</td>
                    <td>${reporte.publicacion}</td>
                    <td>${reporte.fecha}</td>
                    <td>${reporte.estado}</td>
                </tr>
            `;
            reportesList.innerHTML += row;
        });
    }

    function cargarCantidadPosts() {
        cantidadPostsList.innerHTML = "";
        let conteo = {};

        reportes.forEach(reporte => {
            if (!conteo[reporte.idUsuario]) {
                conteo[reporte.idUsuario] = { nombre: reporte.nombre, cantidad: 0 };
            }
            conteo[reporte.idUsuario].cantidad++;
        });

        Object.keys(conteo).forEach(id => {
            let row = `
                <tr>
                    <td>${id}</td>
                    <td>${conteo[id].nombre}</td>
                    <td>${conteo[id].cantidad}</td>
                </tr>
            `;
            cantidadPostsList.innerHTML += row;
        });
    }

    function cargarCantidadUsuarios() {
        cantidadUsuariosList.innerHTML = "";
        usuarios.forEach(usuario => {
            let row = `
                <tr>
                    <td>${usuario.idUsuario}</td>
                    <td>${usuario.username}</td>
                    <td>${usuario.nombreReal}</td>
                    <td>${usuario.fechaRegistro}</td>
                </tr>
            `;
            cantidadUsuariosList.innerHTML += row;
        });
    }

    // Función para descargar la tabla en un archivo .txt
    window.descargarTabla = function (idTabla, nombreArchivo) {
        let tabla = document.getElementById(idTabla);
        if (!tabla) {
            alert("Error: La tabla no existe.");
            return;
        }

        let filas = tabla.getElementsByTagName("tr");
        if (filas.length === 0) {
            alert("Error: La tabla está vacía.");
            return;
        }

        let contenido = "";

        // Obtener encabezados de la tabla
        let encabezados = tabla.parentElement.querySelector("thead tr").children;
        let encabezadoTexto = [];
        for (let i = 0; i < encabezados.length; i++) {
            encabezadoTexto.push(encabezados[i].textContent.trim());
        }

        contenido += encabezadoTexto.join(" | ") + "\n";
        contenido += "-".repeat(50) + "\n";

        // Obtener datos de la tabla
        for (let i = 0; i < filas.length; i++) {
            let celdas = filas[i].getElementsByTagName("td");
            if (celdas.length > 0) {
                let filaTexto = [];
                for (let j = 0; j < celdas.length; j++) {
                    filaTexto.push(celdas[j].textContent.trim());
                }
                contenido += filaTexto.join(" | ") + "\n";
            }
        }

        // Crear y descargar el archivo .txt
        let blob = new Blob([contenido], { type: "text/plain" });
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = nombreArchivo + ".txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    window.filtrarReportes = function () {
        let filtro = document.getElementById("search").value.toLowerCase();
        let filas = reportesList.getElementsByTagName("tr");

        for (let i = 0; i < filas.length; i++) {
            let texto = filas[i].textContent.toLowerCase();
            filas[i].style.display = texto.includes(filtro) ? "" : "none";
        }
    };

    cargarReportes();
    cargarCantidadPosts();
    cargarCantidadUsuarios();
});
