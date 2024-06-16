let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Descendo
        header.style.top = "-100px"; // Oculta a barra de navegação
    } else {
        // Subindo ou scroll para cima
        header.style.top = "0"; // Mostra a barra de navegação
    }
    lastScrollTop = currentScroll;
});


// Seleciona os elementos relevantes
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const certificadosWrapper = document.querySelector('.certificados-wrapper');

// Adiciona ouvintes de evento aos botões
prevBtn.addEventListener('click', () => {
    certificadosWrapper.scrollLeft -= 250; // Ajuste a quantidade de rolagem conforme necessário
});

nextBtn.addEventListener('click', () => {
    certificadosWrapper.scrollLeft += 250; // Ajuste a quantidade de rolagem conforme necessário
});