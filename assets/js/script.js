// Espera o documento HTML carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DA VERIFICAÇÃO DE IDADE ---

    // Pega os elementos da página que vamos usar
    const ageGateContainer = document.getElementById('age-gate');
    const mainContent = document.getElementById('main-content');
    const btnSim = document.getElementById('btn-sim');
    const btnNao = document.getElementById('btn-nao');

    // O que acontece quando clica em "SIM"
    btnSim.addEventListener('click', function() {
        // Adiciona uma classe para fazer a tela de verificação desaparecer com uma animação
        ageGateContainer.classList.add('fade-out');

        // Depois que a animação terminar (500ms), remove a tela da frente e mostra o conteúdo principal
        setTimeout(() => {
            ageGateContainer.style.display = 'none'; // Esconde a verificação de idade
            mainContent.style.display = 'block';     // Mostra o conteúdo principal
        }, 500);
    });

    // O que acontece quando clica em "NÃO"
    btnNao.addEventListener('click', function() {
        // Informa o usuário que a página vai fechar
        alert("Você precisa ser maior de idade para continuar. A página será fechada.");
        // Tenta fechar a janela/aba do navegador
        window.close();
        // Se não conseguir fechar (alguns navegadores bloqueiam), redireciona para uma página segura
        setTimeout(() => {
            window.location.href = 'https://www.google.com';
        }, 500);
    });
});
