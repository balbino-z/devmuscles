document.addEventListener("DOMContentLoaded", function () {
    const imageContent = document.querySelector(".image-content");
    const form = document.querySelector(".form");

    // Adicione uma classe para mostrar a imagem gradualmente
    imageContent.classList.add("fade-in");

    // Adicione uma classe para mostrar o formulário com um atraso
    setTimeout(function () {
        form.classList.add("slide-in");
    }, 500);
});
