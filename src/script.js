document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const header = document.querySelector("header");
    const certificadosWrapper = document.querySelector('.certificados-wrapper');
    const modeIcon = document.getElementById('mode_icon');
    const app = document.getElementById('typewriter');
    const slider = document.querySelectorAll('.slider');
    const btnPrev = document.querySelector('.prev-button');
    const btnNext = document.querySelector('.next-button');
    const contactForm = document.getElementById('contact-form');

    // Variáveis e Estado
    let debounceScroll;
    let lastScrollTop = 0;
    let currentSlide = 0;

    // Verifica o esquema de cores preferido
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

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

    // Envio de formulário
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.init('BBb0C8GYZ9Q-SlelO');
        emailjs.sendForm('service_137vb77', 'template_dsonzlg', contactForm)
            .then(function() {
                console.log('Email enviado com sucesso!');
                
                contactForm.reset();
                // Exibe uma mensagem de confirmação ou feedback visual
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Mensagem enviada com sucesso!';
                successMessage.style.color = 'green';
                contactForm.appendChild(successMessage);

                // Remove a mensagem após alguns segundos (opcional)
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);

            }, function(error) {
                console.error('Erro ao enviar o email:', error);
                
                // Exibe uma mensagem de erro
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.';
                errorMessage.style.color = 'red';
                contactForm.appendChild(errorMessage);

                // Remove a mensagem após alguns segundos (opcional)
                setTimeout(() => {
                    errorMessage.remove();
                }, 5000);
            });
    });

    // Adiciona o evento de clique para redirecionar ao URL armazenado
    slider.forEach(image => {
        image.addEventListener('click', () => {
            const url = image.getAttribute('data-url');
            console.log(`Abrindo URL: ${url}`); // Adicione esta linha para depurar
            if (url) {
                window.open(url, '_blank'); // Abre o URL em uma nova aba
            }
        });
    });
});
