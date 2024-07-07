document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const header = document.querySelector("header");
    const certificadosWrapper = document.querySelector('.certificados-wrapper');
    const modeIcon = document.getElementById('mode_icon');
    const app = document.getElementById('typewriter');
    const slider = document.querySelectorAll('.slider');
    const btnPrev = document.querySelector('.prev-button');
    const btnNext = document.querySelector('.next-button');

    // Variáveis e Estado
    let debounceScroll;
    let lastScrollTop = 0;
    let currentSlide = 0;

    // Verifica o esquema de cores preferido
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Event Listener para scroll com debounce
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

    // Funções para manipulação de slider
    function hideSlider() {
        slider.forEach(item => item.classList.remove('on'));
    }

    function showSlider() {
        slider[currentSlide].classList.add('on');
    }

    function nextSlider() {
        hideSlider();
        currentSlide = (currentSlide === slider.length - 1) ? 0 : currentSlide + 1;
        showSlider();
    }

    function prevSlider() {
        hideSlider();
        currentSlide = (currentSlide === 0) ? slider.length - 1 : currentSlide - 1;
        showSlider();
    }

    btnNext.addEventListener('click', nextSlider);
    btnPrev.addEventListener('click', prevSlider);

    // Configuração inicial do modo escuro
    if (prefersDarkScheme) {
        document.body.classList.add('dark-mode');
        modeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    // Alternância de modo escuro
    modeIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        modeIcon.classList.toggle('fa-moon');
        modeIcon.classList.toggle('fa-sun');
    });

    // Efeito de digitação suave
    const typewriter = new Typewriter(app, {
        loop: true,
        delay: 100,
    });

    function hideText() {
        app.style.opacity = 0;
        setTimeout(() => {
            app.style.opacity = 1;
            typewriter.start();
        }, 1000);
    }

    typewriter
        .typeString('Breno Pais')
        .pauseFor(3000)
        .callFunction(hideText)
        .start();
});
