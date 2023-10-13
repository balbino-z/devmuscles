// Carrossel automático
const images = document.querySelectorAll('.carousel img');
let currentImage = 0;

function startCarousel() {
    setInterval(() => {
        images[currentImage].style.opacity = '0.5';
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.opacity = '1';
    }, 3000); // Mude a cada 3 segundos (ajuste conforme necessário)
}

window.addEventListener('load', startCarousel);

// Rolagem suave ao clicar nos links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop - 50, // Ajuste o valor conforme necessário
            });
        }
    });
});

// Obtenha todas as âncoras do menu
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        // Redimensione o indicador para o tamanho do texto
        const textWidth = this.getBoundingClientRect().width;
        this.style.setProperty('--indicator-width', `${textWidth}px`);
    });

    link.addEventListener('mouseout', function () {
        // Redimensione o indicador de volta para zero
        this.style.setProperty('--indicator-width', '0');
    });
});


// Cabeçalho fixo ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) { // Ajuste a altura em que o cabeçalho se torna fixo
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});