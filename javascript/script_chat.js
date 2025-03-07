document.addEventListener("DOMContentLoaded", () => {
    const chatTitle = document.getElementById("chat-title");
    const chatBox = document.getElementById("messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const imageUpload = document.getElementById("image-upload");

    let currentChat = null;
    let messages = {};

    // Seleccionar chat
    window.selectChat = (user) => {
        currentChat = user;
        chatTitle.textContent = `Estas Chateando con ${user}`;
        messageInput.disabled = false;
        sendButton.disabled = false;

        chatBox.innerHTML = messages[user] ? messages[user].join("") : "";
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    // Enviar mensaje
    sendButton.addEventListener("click", () => {
        if (!currentChat) return;

        const message = messageInput.value.trim();
        if (message !== "") {
            sendMessage("Tú", message);
            messageInput.value = "";
        }
    });

    // Enviar imagen
    imageUpload.addEventListener("change", (event) => {
        if (!currentChat) return;

        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                sendMessage("Tú", `<img src="${e.target.result}" width="100px">`);
            };
            reader.readAsDataURL(file);
        }
    });

    // Enviar mensaje con Enter
    messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendButton.click();
    });

    // Función para enviar mensajes con timestamps
    function sendMessage(user, content) {
        const timestamp = new Date().toLocaleTimeString();
        const msgHtml = `<p><strong>${user} (${timestamp}):</strong> ${content}</p>`;

        if (!messages[currentChat]) messages[currentChat] = [];
        messages[currentChat].push(msgHtml);

        chatBox.innerHTML += msgHtml;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
