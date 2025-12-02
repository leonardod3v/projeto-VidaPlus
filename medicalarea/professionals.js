let professionalUser = [
  {
    name: "Dra. Samia Lima",
    profession: "Cardiologista",
    contact: "(11) 98765-4321",
    code: 56902,
    password: "cardio2024",
  },

  {
    name: "Dr. Rafael Costa",
    profession: "Ortopedista",
    contact: "(21) 91234-5678",
    code: 78345,
    password: "ortho2025",
  },

  {
    name: "Dra. Mariana Olivas",
    profession: "Dermatologista",
    contact: "(31) 99876-5432",
    code: 34567,
    password: "derma0788",
  },

  {
    name: "Dr. Jorge Ferreira",
    profession: "Pediatra",
    contact: "(41) 93456-7890",
    code: 89012,
    password: "pediatria0254",
  },
];

localStorage.setItem("professionalUser", JSON.stringify(professionalUser));

const medicalForm = document.querySelector("#medical-form");
const loginButton = document.querySelector("#login-button");
const patients = document.querySelector("#patients");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  const codeInput = document.querySelector("input[type='number']").value;
  const passwordInput = document.querySelector("input[type='password']").value;
  const storedUsers =
    JSON.parse(localStorage.getItem("professionalUser")) || [];

  const authenticatedUser = storedUsers.find(
    (user) => user.code == codeInput && user.password === passwordInput
  );
  if (authenticatedUser) {
    alert(`Bem-vindo, ${authenticatedUser.name}!`);
    // Redirecionar para a área médica
  } else {
    alert("Código ou senha incorretos. Tente novamente.");
  }

  function redirectToMedicArea() {
    medicalForm.remove();
    document.createElement("button")
    //Criar uma tabela com pacientes diferentes, de acordo com o médico que fizer o login
    //Se o médico for cardiologista, criar tabela com 3 pacientes e seus dados
    if (authenticatedUser === storedUsers[0]) {
      patients.innerHTML = `
        <table>
        <thead>
            <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Condição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Marcos Avelar</td>
            <td>54</td>
            <td>Arritmia Supraventricular</td>
            </tr>
            <tr>
            <td>Helena Duarte</td>
            <td>62</td>
            <td>Insuficiência Cardíaca Congestiva</td>
            </tr>
            <tr>
            <td>Rogério Mendonça</td>
            <td>47</td>
            <td>Angina Estável</td>
            </tr>
        </tbody>
        </table>

            `;
    } else if (authenticatedUser === storedUsers[1]) {
      patients.innerHTML = `
        <table>
        <thead>
            <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Condição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Leonidas Trajano Torres</td>
            <td>59</td>
            <td>Lesão por estresse</td>
            </tr>
            <tr>
            <td>Rafaela Jardim Silveira</td>
            <td>21</td>
            <td>Fratura do pé esquerdo</td>
            </tr>
            <tr>
            <td>Jean Nogueira Freire</td>
            <td>27</td>
            <td>Bursite</td>
            </tr>
        </tbody>
        </table>
      `;
    }
  }
  redirectToMedicArea();
});
