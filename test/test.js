const nameForm = document.querySelector('#name-form');
const welcomeContainer = document.querySelector('#welcome');
const logoutBtn = document.querySelector('#logout');

function checkUser() {
    const userName = localStorage.getItem('name');

    if (userName) {
        nameForm.style.display = 'none';
        welcomeContainer.style.display = 'block';

        const userNameElement = document.querySelector("#username");
        userNameElement.textContent = userName;

    }
    else {
        nameForm.style.display = 'block';
        welcomeContainer.style.display = 'none';
    }
}

nameForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.querySelector('#name')

    localStorage.setItem('name', nameInput.value); // Salva o valor do nameInput no localStorage

    nameInput.value = ''; // Limpa o campo de entrada
    checkUser();
});

// Logout da página
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('name');
    checkUser();
    
})
checkUser();

