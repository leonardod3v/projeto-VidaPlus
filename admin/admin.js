const admin = {
    user: "admin",
    password: "vidaplus2026"
}
const formAdm = document.querySelector("#form-adm")
const adminArea = document.querySelector("#admin-area");
const passwordArea = document.querySelector("#password-area");
const btnLogin = document.querySelector("#login-button");

btnLogin.addEventListener("click", () => {
    //Se o usuário admin e senha digitados forem iguais aos do objeto admin, exibe "Acesso concedido!", senão exibe "Acesso negado!"
    if (admin.user === adminArea.value && admin.password === passwordArea.value) {
        alert("Acesso concedido!");
        function redirectToAdmDashboard() {
            formAdm.remove()
            //Criar os demais elementos (médicos, dashboard, finanças)
        }

    redirectToAdmDashboard()    


    }
    else {
        alert("Acesso negado!");
    }

})
