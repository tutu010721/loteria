// Adiciona um listener que espera o conteúdo da página carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DO CONTADOR REGRESSIVO ---
    function updateCountdown() {
        const now = new Date();
        const brasiliaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));

        // Data alvo é sempre o final do dia corrente
        const targetTime = new Date(brasiliaTime);
        targetTime.setHours(23, 59, 59, 999);
        
        const difference = targetTime - brasiliaTime;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = String(days).padStart(2, '0');
            document.getElementById('hours').innerText = String(hours).padStart(2, '0');
            document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
            document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
        }
    }
    // Inicia o contador e atualiza a cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // --- LÓGICA DO PAGAMENTO ---
    const formModalElement = document.getElementById('formModal');
    const formModal = new bootstrap.Modal(formModalElement);
    const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));

    const nomeCompletoInput = document.getElementById('nomeCompleto');
    const cpfInput = document.getElementById('cpf');
    const whatsappInput = document.getElementById('whatsapp');

    // Função global para ser chamada pelo HTML
    window.processarPagamento = function(valor, nomeBolao) {
        document.getElementById('valorPagamento').value = valor;
        document.getElementById('nomeBolao').value = nomeBolao;
        formModal.show();
    }

    // Lógica para buscar nome via API de CPF (VAMOS CONSTRUIR ISSO)
    cpfInput.addEventListener('blur', async function() {
        const cpf = cpfInput.value.replace(/\D/g, '');
        if (cpf.length === 11) {
            nomeCompletoInput.value = "Buscando nome...";
            // AQUI FAREMOS A CHAMADA PARA NOSSA API NO RENDER
            // Exemplo: const response = await fetch(`https://seu-backend.onrender.com/cpf/${cpf}`);
            // const data = await response.json();
            // if(data.nome) {
            //     nomeCompletoInput.value = data.nome;
            // } else {
            //     nomeCompletoInput.value = "CPF não encontrado.";
            // }
            // Por enquanto, vamos simular:
            setTimeout(() => {
                nomeCompletoInput.value = "NOME COMPLETO DE TESTE"; // Simulação
            }, 1000);
        }
    });
    
    // Validação e continuação para o checkout
    document.getElementById('btnContinuar').addEventListener('click', function() {
        if (!document.getElementById('contatoForm').checkValidity()) {
            document.getElementById('contatoForm').classList.add('was-validated');
            return;
        }

        formModal.hide();
        loadingModal.show();

        // AQUI FAREMOS A CHAMADA PARA O NOSSO BACKEND NO RENDER
        // que por sua vez se comunicará com o gateway de pagamento.
        console.log("Iniciando processo de pagamento final...");
        setTimeout(() => { // Simula o processo
             loadingModal.hide();
             alert("Redirecionando para o gateway de pagamento!");
             // Exemplo: window.location.href = data.checkout_url;
        }, 2000);
    });

    // --- FUNÇÃO ÚNICA PARA "VER MAIS" ---
    window.toggleJogos = function(elementId) {
        const jogosDiv = document.getElementById(elementId);
        const botao = jogosDiv.previousElementSibling.querySelector('button'); // Pega o botão que veio antes

        if (jogosDiv.style.display === 'none' || jogosDiv.style.display === '') {
            jogosDiv.style.display = 'block';
            botao.textContent = 'Ver Menos';
        } else {
            jogosDiv.style.display = 'none';
            botao.textContent = 'Ver Mais';
        }
    }
});
