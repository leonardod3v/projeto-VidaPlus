const admin = {
  user: "admin",
  password: "vidaplus2026",
};
const formAdm = document.querySelector("#form-adm");
const adminArea = document.querySelector("#admin-area");
const passwordArea = document.querySelector("#password-area");
const btnLogin = document.querySelector("#login-button");
const costs = document.querySelector("#costs");

btnLogin.addEventListener("click", () => {
  //Se o usuário admin e senha digitados forem iguais aos do objeto admin, exibe "Acesso concedido!", senão exibe "Acesso negado!"
  if (admin.user === adminArea.value && admin.password === passwordArea.value) {
    alert("Acesso concedido!");
    function redirectToAdmDashboard() {
      formAdm.remove();
      //Criar os demais elementos (médicos, dashboard, finanças)
      costs.innerHTML = `
        <h3>Gastos fixos mensais</h3>
        <table border = "1">
        <tr>
            <th>Nº</th>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Preço Unitário (R$)</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Luvas descartáveis (caixa)</td>
            <td>100 un</td>
            <td>35,00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Máscaras cirúrgicas</td>
            <td>50 un</td>
            <td>20,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Termômetro digital</td>
            <td>1 un</td>
            <td>48,00</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Esfigmomanômetro</td>
            <td>1 un</td>
            <td>120,00</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Oxímetro de pulso</td>
            <td>1 un</td>
            <td>90,00</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Gel para ultrassom</td>
            <td>1 L</td>
            <td>25,00</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Álcool 70%</td>
            <td>1 L</td>
            <td>12,00</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Gaze estéril</td>
            <td>100 un</td>
            <td>18,00</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Seringas 5ml</td>
            <td>50 un</td>
            <td>28,00</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Estetoscópio</td>
            <td>1 un</td>
            <td>150,00</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Curativos adesivos</td>
            <td>50 un</td>
            <td>10,00</td>
        </tr>
        <tr>
            <td>12</td>
            <td>Algodão hidrófilo</td>
            <td>500 g</td>
            <td>9,00</td>
        </tr>
        <tr>
            <td>13</td>
            <td>Conta de água (mês)</td>
            <td>-</td>
            <td>450,00</td>
        </tr>
        <tr>
            <td>14</td>
            <td>Conta de luz (mês)</td>
            <td>-</td>
            <td>700,00</td>
        </tr>
        <tr>
            <td>15</td>
            <td>Internet - Plano Corporativo Mensal</td>
            <td>-</td>
            <td>250,00</td>
        </tr>
    </table>

            `;
    
    const medicInfo = document.querySelector("#medic-info");
    medicInfo.innerHTML = '<h3>Informações dos Profissionais de Saúde Cadastrados:</h3>';

    // Puxa os dados dos profissionais do localStorage
    const storedUsers = JSON.parse(localStorage.getItem("professionalUser")) || [];

    // Cria uma repetição para exibir o cartão de informações de cada profissional
    storedUsers.forEach(user => {
    const userDiv = document.createElement("div"); //Cria a div para o cartão do médico
    userDiv.classList.add("user-card"); //Adiciona a classe CSS para estilizar o cartão
    // Insere o conteúdo do cartão
    userDiv.innerHTML = `
        <p><strong>Nome:</strong> ${user.name}</p>
        <p><strong>Profissão:</strong> ${user.profession}</p>
        <p><strong>Contato:</strong> ${user.contact}</p>
        <p><strong>Código:</strong> ${user.code}</p>
        <p><strong>Data de nascimento:</strong> ${user.birthday}</p>
        <br><hr>

    `;
    // Adiciona o cartão ao contêiner principal
    medicInfo.appendChild(userDiv);
});
        
            
    alert("Bem-vindo à área administrativa!");

    
const logoutButton = document.querySelector("#logout");
logoutButton.addEventListener("click", function() {
    alert("Você saiu da área administrativa.");
    // Fecha a janela atual
    window.close();
});


}




  redirectToAdmDashboard();
  } else {
    alert("Acesso negado!");
  }
});
