// Função para abrir o QR Code
function openPopup() {
    var qrCodePopup = document.getElementById("qr-code-popup");
    qrCodePopup.style.display = "block";
}

// Função para fechar o QR Code
function closePopup() {
    var qrCodePopup = document.getElementById("qr-code-popup");
    qrCodePopup.style.display = "none";
}

// Mantenha o QR Code aberto por padrão
document.addEventListener("DOMContentLoaded", function() {
    var qrCodePopup = document.getElementById("qr-code-popup");
    qrCodePopup.style.display = "block";
});
