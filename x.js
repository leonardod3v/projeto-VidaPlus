
const logar = document.querySelector('#logar');
logar.addEventListener('submit', function() {
    const userData = { 
        password: password.value,
        cpf: cpf.value
    };
    
    localStorage.getItem('userData', JSON.stringify(userData));
    const storedUserData = localStorage.getItem('userData');

    if (!dataSaved) {
    alert("Nenhum dado cadastrado.");
    } else if (dataSaved.cpf === cpf.value && dataSaved.password === password.value) {
    alert("Login bem-sucedido!");
    } else {
    alert("Dados incorretos! Tente novamente.");
    }
    const dataSaved = JSON.parse(storedUserData);

});


    