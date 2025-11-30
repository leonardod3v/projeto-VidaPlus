// --------------------
// CADASTRO
// --------------------
document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const cpf = document.getElementById("cpf").value;
  const senha = document.getElementById("senha").value;

  const cliente = {
    nome: nome,
    email: email,
    cpf: cpf,
    senha: senha
  };

  // Armazena dados no LocalStorage
  localStorage.setItem("clienteCadastro", JSON.stringify(cliente));

  alert("Cadastro realizado com sucesso!");
});


// --------------------
// LOGIN
// --------------------
document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();

  const cpfLogin = document.getElementById("loginCPF").value;
  const senhaLogin = document.getElementById("loginSenha").value;

  const cliente = JSON.parse(localStorage.getItem("clienteCadastro"));

  if (!cliente) {
    alert("Nenhum cliente cadastrado!");
    return;
  }

  if (cpfLogin === cliente.cpf && senhaLogin === cliente.senha) {
    alert("Login realizado!");

    // Redireciona para página falsa exibindo os dados
    window.location.href = "../user/user.html";
  } else {
    alert("CPF ou senha incorretos.");
  }
});
