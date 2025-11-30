// PACIENTES: Cadastrar dados, visualizar histórico clínico, agendar/cancelar consultas, receber notificações, acessar teleconsultas.

// puxar dados do formulário de cadastro e armazenar no localStorage
const user = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#registrationForm');
const welcomeDiv = document.querySelector('#welcome');
const usernameSpan = document.querySelector('#username');
const logoutButton = document.querySelector('#logout');
const cpf = document.querySelector('#cpf');
const logar = document.querySelector('#logar');

//Salvar dados no localStorage ao cadastrar
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const userData = { 
        name: user.value,
        email: email.value,
        password: password.value,
        cpf: cpf.value
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    showWelcomeMessage(userData.name);
});

//Mostrar mensagem de boas-vindas
function showWelcomeMessage(name) {
    form.style.display = 'none';
    usernameSpan.textContent = name;
    welcomeDiv.style.display = 'block';
}

//Fazer logout
logoutButton.addEventListener('click', function() {
    localStorage.removeItem('userData');
    welcomeDiv.style.display = 'none';
    form.style.display = 'block';
});

//Verificar se o usuário já está logado
window.onload = function() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        showWelcomeMessage(userData.name);
    }
};


