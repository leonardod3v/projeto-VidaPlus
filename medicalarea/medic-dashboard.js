// A depender do médico que logou, criar uma tabela de 3 pacientes fictícios para ele
const patientsContainer = document.querySelector("#patients");
const storedUsers = JSON.parse(localStorage.getItem("professionalUser")) || [];
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    // Limpar dados de login e voltar para a página inicial
    window.location.href = "../index.html";
    alert("Você saiu da área médica.");
});

if (storedUsers.find(user => user.code == 56902)) { 
    patientsContainer.innerHTML = `
        <h3>Seus Pacientes:</h3>
        <ul>
            <li>Paciente 1: João Silva - Consulta em 10/10/2024</li>
            <li>Paciente 2: Maria Oliveira - Consulta em 15/10/2024</li>
            <li>Paciente 3: Carlos Pereira - Consulta em 20/10/2024</li>
        </ul>
    `;
}

else if (storedUsers.find(user => user.code === 78345)) {
    patientsContainer.innerHTML = `
        <h3>Seus Pacientes:</h3>
        <ul>
            <li>Paciente 1: Ana Souza - Consulta em 12/10/2024</li>
            <li>Paciente 2: Pedro Lima - Consulta em 18/10/2024</li>
            <li>Paciente 3: Lucas Fernandes - Consulta em 22/10/2024</li>
        </ul>
    `;
}

else if (storedUsers.find(user => user.code === 34567)) {
    patientsContainer.innerHTML = `
        <h3>Seus Pacientes:</h3>
        <ul>
            <li>Paciente 1: Beatriz Gomes - Consulta em 11/10/2024</li>
            <li>Paciente 2: Felipe Rocha - Consulta em 16/10/2024</li>
            <li>Paciente 3: Gabriela Martins - Consulta em 21/10/2024</li>
        </ul>
    `;
} else if (storedUsers.find(user => user.code === 89012)) {
    patientsContainer.innerHTML = `
        <h3>Seus Pacientes:</h3>
        <ul>
            <li>Paciente 1: Sofia Alves - Consulta em 13/10/2024</li>
            <li>Paciente 2: Matheus Cardoso - Consulta em 17/10/2024</li>
            <li>Paciente 3: Laura Dias - Consulta em 23/10/2024</li>
        </ul>
    `;
}