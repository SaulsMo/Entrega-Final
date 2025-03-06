document.addEventListener("DOMContentLoaded", function () {
    // Lista de reportes simulada
    const reportes = [
        { idUsuario: 101, nombre: "Malcolm666", publicacion: "¡Hoy me siento genial! ¿Qué planes tienen para el fin de semana?", fecha: "21-2-2025", estado: "Pendiente" },
        { idUsuario: 102, nombre: "HalLover777", publicacion: "Este es un anuncio importante para todos.", fecha: "20-2-2025", estado: "Pendiente" },
        { idUsuario: 103, nombre: "LoisBitchy69", publicacion: "Imagen", fecha: "19-2-2025", estado: "Aprobada" }
    ];

    const reportesList = document.getElementById("reportes-list");

    // Función para cargar los reportes en la tabla
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

    // Función para filtrar reportes
    window.filtrarReportes = function () {
        let filtro = document.getElementById("search").value.toLowerCase();
        let filas = reportesList.getElementsByTagName("tr");

        for (let i = 0; i < filas.length; i++) {
            let texto = filas[i].textContent.toLowerCase();
            filas[i].style.display = texto.includes(filtro) ? "" : "none";
        }
    };

    // Cargar los reportes al inicio
    cargarReportes();
});
