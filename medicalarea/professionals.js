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
    function redirectToMedicArea() {
    medicalForm.remove();
    document.createElement("button")
    
    //Mostrar o(a) médico(a) logado(a)
    const h3 = document.querySelector("h3")
    

    //De acordo com o médico que logar, exibir a tabela de acordo (tabelas escondidas e serão exibidas se atenderem à lógica)
    const childOne = patients.children[0]
    const childTwo = patients.children[1]
    const childThree = patients.children[2]
    const childFour = patients.children[3]
    
    
    if (authenticatedUser == storedUsers[0] ) {
        h3.innerHTML = `
        <h3>Bem-vindo(a) ${storedUsers[0].name}</h3>
        `
        childOne.style.display = 'block'
    }

    if (authenticatedUser == storedUsers[1] ) {
      h3.innerHTML = `
        <h3>Bem-vindo(a) ${storedUsers[1].name}</h3>
        `
        childTwo.style.display = 'block'
    }
    if (authenticatedUser == storedUsers[2] ) {
        h3.innerHTML = `
          <h3>Bem-vindo(a) ${storedUsers[2].name}</h3>
        `
        childThree.style.display = 'block'
    }

    if (authenticatedUser == storedUsers[3] ) {
        h3.innerHTML = `
        <h3>Bem-vindo(a) ${storedUsers[3].name}</h3>
        `
        childFour.style.display = 'block'
    }
  }
      
  redirectToMedicArea();

  } else {
    alert("Código ou senha incorretos. Tente novamente.");
  }
  
});

  //Adicionar paciente para consulta
  //Código teste
  //Verificar se é possível adicionar valores aos inputs e deixar os mesmos em formato de consulta agendada
  /* const h4 = document.querySelector("h4")
  h4.style.display = 'block'
  
  const btn = document.querySelector("#btn")
  btn.addEventListener("click", () => {
      const p = document.createElement("input")
      document.getElementById("appointments").appendChild(p)   
  }) */