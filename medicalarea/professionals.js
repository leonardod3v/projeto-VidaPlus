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
    }
    
]

localStorage.setItem("professionalUser", JSON.stringify(professionalUser));

const loginButton = document.querySelector("#login-button");
    
loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    const codeInput = document.querySelector("input[type='number']").value;
    const passwordInput = document.querySelector("input[type='password']").value;
    const storedUsers = JSON.parse(localStorage.getItem("professionalUser")) || [];

    const authenticatedUser = storedUsers.find(user => user.code == codeInput && user.password === passwordInput);
    if (authenticatedUser) {
        alert(`Bem-vindo, ${authenticatedUser.name}!`);
        // Redirecionar para a área médica
        window.location.href = "medic-dashboard.html";
    } else {
        alert("Código ou senha incorretos. Tente novamente.");
    }


});

