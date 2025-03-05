document.addEventListener("DOMContentLoaded", () => {
    const chatTitle = document.getElementById("chat-title");
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    let currentChat = null; // Usuario con quien se está chateando
    let messages = {}; // Objeto para guardar mensajes de cada usuario

    // Función para seleccionar un chat
    window.selectChat = (user) => {
        currentChat = user;
        chatTitle.textContent = `Chat con ${user}`;
        messageInput.disabled = false;
        sendButton.disabled = false;

        // Cargar mensajes previos
        chatBox.innerHTML = messages[user] ? messages[user].join("") : "";
    };

    // Enviar mensaje
    sendButton.addEventListener("click", () => {
        if (!currentChat) return;

        const message = messageInput.value.trim();
        if (message !== "") {
            const msgHtml = `<p><strong>Tú:</strong> ${message}</p>`;
            
            // Guardar el mensaje
            if (!messages[currentChat]) messages[currentChat] = [];
            messages[currentChat].push(msgHtml);

            chatBox.innerHTML += msgHtml;
            messageInput.value = "";
            chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll al final
        }
    });

    // Enviar mensaje con "Enter"
    messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendButton.click();
    });
});
