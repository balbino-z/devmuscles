document.addEventListener("DOMContentLoaded", function () {
    const dicas = document.querySelectorAll(".dica");
    let currentIndex = 0;

    function showDica(index) {
        dicas.forEach((dica) => dica.classList.remove("active"));
        dicas[index].classList.add("active");
    }

    function nextDica() {
        showDica(currentIndex);
        currentIndex = (currentIndex + 1) % dicas.length;
    }

    function startCarousel() {
        setInterval(nextDica, 5000); // Altera a dica a cada 5 segundos
    }

    showDica(currentIndex);
    startCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
    loadCarousel();

    const messageInput = document.getElementById("message-input");
    const chatBox = document.querySelector(".chat-box");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const messageText = messageInput.value;
        if (messageText.trim() === "") {
            return;
        }

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.innerHTML = `<div class="user-message">${messageText}</div>`;
        chatBox.appendChild(messageDiv);

        // Lógica para enviar a mensagem para um email ou servidor
        const data = new URLSearchParams();
        data.append("message", messageText);

        fetch("send_email.php", {
            method: "POST",
            body: data,
        })
        .then(response => response.text())
        .then(data => {
            // Lógica para lidar com a resposta, se necessário
            console.log(data);
        });

        // Limpe o campo de entrada após o envio
        messageInput.value = "";
    });
});
