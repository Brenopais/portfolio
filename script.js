// Debounce para evento de scroll
let debounceScroll;
const header = document.querySelector("header");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    if (debounceScroll) clearTimeout(debounceScroll);
    
    debounceScroll = setTimeout(() => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Descendo
            header.style.top = "-100px"; // Oculta a barra de navegação
        } else {
            // Subindo
            header.style.top = "0"; // Mostra a barra de navegação
        }
        lastScrollTop = currentScroll;
    }, 100); // Tempo de debounce em ms
});

// Função para rolar os certificados
const scrollCertificados = (offset) => {
    certificadosWrapper.scrollBy({
        left: offset,
        behavior: 'smooth'
    });
};

// Seleciona os elementos relevantes
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const certificadosWrapper = document.querySelector('.certificados-wrapper');

// Adiciona ouvintes de evento aos botões
prevBtn.addEventListener('click', () => {
    scrollCertificados(-350); // Ajuste a quantidade de rolagem conforme necessário
});

nextBtn.addEventListener('click', () => {
    scrollCertificados(350); // Ajuste a quantidade de rolagem conforme necessário
});
