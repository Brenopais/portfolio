// Seleciona o ícone do menu
const menuIcon = document.getElementById('menu-icon');

// Seleciona a lista de opções de navegação
const lista = document.querySelector('.lista');

// Adiciona um ouvinte de eventos de clique ao ícone do menu
menuIcon.addEventListener('click', () => {
    // Adiciona ou remove a classe 'ativo' na lista de opções de navegação
    lista.classList.toggle('ativo');
});

// Fecha o menu quando um item de navegação é clicado (opcional)
lista.addEventListener('click', () => {
    // Remove a classe 'ativo' da lista de opções de navegação
    lista.classList.remove('ativo');
});
