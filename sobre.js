// Variáveis para o carrossel
let slideIndex = 0;
const slides = document.querySelectorAll(".team-slide");

// Função para mostrar o slide atual
function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${(i - index) * 100}%)`;
    }
}

// Avançar para o próximo slide
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

// Voltar para o slide anterior
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

showSlide(slideIndex); // Mostrar o primeiro slide

// Função para abrir o pop-up
function openPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

// Função para fechar o pop-up
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
