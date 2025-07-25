document.addEventListener('DOMContentLoaded', function() {
    const ageGateContainer = document.getElementById('age-gate');
    const mainContent = document.getElementById('main-content');
    const btnSim = document.getElementById('btn-sim');
    const btnNao = document.getElementById('btn-nao');

    if (btnSim) {
        btnSim.addEventListener('click', function() {
            ageGateContainer.classList.add('fade-out');
            setTimeout(() => {
                ageGateContainer.style.display = 'none';
                mainContent.style.display = 'block';
            }, 500);
        });
    }

    if (btnNao) {
        btnNao.addEventListener('click', function() {
            alert("Você precisa ser maior de idade para continuar. A página será fechada.");
            window.close();
            setTimeout(() => {
                window.location.href = 'https://www.google.com';
            }, 500);
        });
    }
});
