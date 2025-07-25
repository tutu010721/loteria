/* assets/css/style.css (ATUALIZADO E COMPLETO) */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

body {
    /* ATUALIZAÇÃO AQUI: Adicionamos fontes de segurança */
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
    background-color: #f0f2f5; 
}

.age-gate-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.age-gate-box {
    background-color: white;
    padding: 30px 40px;
    border-radius: 8px;
    text-align: center;
    max-width: 550px;
    width: 90%;
    box-shadow: 0 5px 20px rgba(0,0,0,0.25);
}

.age-gate-logo {
    max-width: 200px;
    margin-bottom: 25px;
}

.age-gate-box h1 {
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
}

.age-gate-box p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 30px;
}

.age-gate-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.btn-age {
    padding: 10px 0;
    width: 130px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.btn-age:hover {
    opacity: 0.9;
    transform: scale(1.05);
}

.btn-no {
    background-color: #ffffff;
    color: #007bff;
    border: 2px solid #007bff;
}

.btn-yes {
    background-color: #007bff;
    color: white;
    border: 2px solid #007bff;
}

.age-gate-container.fade-out {
    opacity: 0;
    transition: opacity 0.5s ease-out;
    pointer-events: none;
}
