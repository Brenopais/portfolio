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

document.addEventListener('DOMContentLoaded', (event) => {
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

    // Modo escuro
    const modeIcon = document.getElementById('mode_icon');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDarkScheme) {
        document.body.classList.add('dark-mode');
    }

    modeIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            modeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Efeito de digitação suave
    var app = document.getElementById('typewriter');
    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 100, // Aumente o delay para tornar a digitação mais suave
    });

    function hideText() {
        app.style.opacity = 0; // Animação de desaparecimento suave
        setTimeout(() => {
            app.style.opacity = 1; // Restaura a opacidade
            typewriter.start(); // Reinicia a digitação
        }, 1000); // Pausa de 1.2 segundos antes de recomeçar
    }

    typewriter
        .typeString('Breno Pais')
        .pauseFor(3000) // Pausa depois de digitar o texto completo
        .callFunction(hideText) // Chamada da função para ocultar o texto
        .start(); // Inicia o efeito de digitação
});
