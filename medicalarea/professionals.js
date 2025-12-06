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
    code: 12345,
    password: "pediatria",
  },
];

localStorage.setItem("professionalUser", JSON.stringify(professionalUser));

const medicalForm = document.querySelector("#medical-form");
const loginButton = document.querySelector("#login-button");
const patients = document.querySelector("#patients");
const btn = document.querySelector("#btn")
const h4 = document.querySelector("h4")
const formBox = document.querySelector("#data-box")
const infos = document.querySelector("#infos")

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
        infos.innerHTML = `
          <p>Paciente: Leonidas Figueiredo Lemos</p>
          <p>Idade: 65</p>
          <p>Situação: Taquicardia frequente</p>
          <p>Data da consulta: 15/12/2025</p>
        `
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
  const appointments = document.querySelector("#appointments")
   formBox.style.display = 'block'
   appointments.style.display = 'block' 
   h4.style.display = 'block'
   btn.style.display = 'block'
      
  redirectToMedicArea();

  } else {
    alert("Código ou senha incorretos. Tente novamente.");
  }
  
});

//Adicionar paciente para consulta
const deleteInfo = document.querySelector("#delete-info")
//Verificar se é possível adicionar valores aos inputs e deixar os mesmos em formato de consulta agendada
btn.addEventListener("click", () => {
      
    //Função para salvar o valor dos dados do input
    const inputName = document.querySelector("#input-name").value
    const inputSituation = document.querySelector("#input-situation").value
    const inputVisit = document.querySelector("#input-visit").value
  
    infos.innerHTML = `
      <p>${inputName}</p>
      <p>${inputSituation}</p>
      <p>${inputVisit}</p>
    `

    if (inputName == '' || inputSituation == '' || inputVisit == '') {
        alert("Preencha os dados!")
    }
    else {
      alert("Agendamento salvo!")
    }

  /* formBox.style.display = 'grid'
      const patientName = prompt("Informe o nome do paciente: ")
      const day = prompt("Informe o dia para agendamento: ")
      const hour = prompt("Informe o horário: ")
      alert("Agendamento concluído!")

      infos.innerHTML = `
        <ul type="none">
          <li>${patientName}</li>
          <li>${day}</li>
          <li>${hour}h</li>
        </ul>
      ` */
  })
  //VERIFICAR A LÓGICA NOVAMENTE, NÃO FUNCIONANDO 100% 
  deleteInfo.addEventListener('click', () => {
      infos.innerHTML = 'Nenhum agendamento!'
      alert("Agendamento deletado")
  })

 
 //Criar um input para colocar as informações (?)
 //Checar to-do list para ter ideia
 //usar window.prompt para informações
  //Criar lista para inserir dados do paciente
 

  //Após dados salvos no local storage e função executada, exibir dados na aba de agendamento