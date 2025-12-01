alert("Bem-vindo à área administrativa!");

const medicInfo = document.querySelector("#medic-info");
medicInfo.innerHTML = '<h3>Informações dos Profissionais de Saúde Cadastrados:</h3>';

// Puxa os dados dos profissionais do localStorage
const storedUsers = JSON.parse(localStorage.getItem("professionalUser")) || [];

// Cria um loop para exibir o cartão de informações de cada profissional
storedUsers.forEach(user => {
    const userDiv = document.createElement("div"); //Cria a div para o cartão do médico
    userDiv.classList.add("user-card"); //Adiciona a classe CSS para estilizar o cartão
    // Insere o conteúdo do cartão
    userDiv.innerHTML = `
        <p><strong>Nome:</strong> ${user.name}</p>
        <p><strong>Profissão:</strong> ${user.profession}</p>
        <p><strong>Contato:</strong> ${user.contact}</p>
        <hr>
    `;
    // Adiciona o cartão ao contêiner principal
    medicInfo.appendChild(userDiv);
});

const logoutButton = document.querySelector("button");
logoutButton.addEventListener("click", function() {
    alert("Você saiu da área administrativa.");
    // Fecha a janela atual
    window.close();
});

