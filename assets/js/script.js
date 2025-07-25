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

        // Depois que a animação terminar (600ms), remove a tela da frente e mostra o conteúdo principal
        setTimeout(() => {
            ageGateContainer.style.display = 'none'; // Esconde a verificação de idade
            mainContent.style.display = 'block';     // Mostra o conteúdo principal
        }, 600);
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

// Adiciona um pouco de CSS no final do arquivo style.css para a animação de fade-out
// (Pode adicionar esta parte no final do seu arquivo assets/css/style.css)
/*
.age-gate-container.fade-out {
    opacity: 0;
    transition: opacity 0.6s ease-out;
}
*/
