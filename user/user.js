const dados = JSON.parse(localStorage.getItem("clienteCadastro"));

if (dados) {
  document.getElementById("dadosCliente").innerHTML = `
    <br>
    <h3>Informações do paciente</h3>
    <br>
    <p><strong>Nome:</strong> ${dados.nome}</p><br>
    <p><strong>Email:</strong> ${dados.email}</p><br>
    <p><strong>CPF:</strong> ${dados.cpf}</p><br>
  `;
} 
else {
  document.getElementById("dadosCliente").innerHTML = "<p>Nenhum dado encontrado.</p>";
}

const checkInfo = document.querySelector("#check-info")
checkInfo.addEventListener('click', () => {
  alert("Sem informações no histórico!")
})