localStorage.getItem("professionalUser", JSON.stringify(professionalUser));
const main = document.querySelector("main");

if (professionalUser.code = 56902 && professionalUser.password === "cardio2024") {
    main.innerHTML = `
         <table>
            <thead>
                <tr>
                    <th>Nome do Paciente</th>
                    <th>Data da Consulta</th>
                    <th>Especialidade</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>João Silva</td>
                    <td>2024-07-10</td>
                    <td>Cardiologia</td>
                    <td>Confirmada</td>
                </tr>
                <tr>
                    <td>Maria Oliveira</td>
                    <td>2024-07-12</td>
                    <td>Pediatria</td>
                    <td>Pendente</td>
                </tr>
                <tr>
                    <td>Carlos Souza</td>
                    <td>2024-07-15</td>
                    <td>Ortopedia</td>
                    <td>Cancelada</td>
                </tr>
            </tbody>
         </table>
    `;
}