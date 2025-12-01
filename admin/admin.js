const admin = {
    user: "admin",
    password: "vidaplus#2026"
}

const adminArea = document.querySelector("#admin-area");
const passwordArea = document.querySelector("#password-area");
const btnLogin = document.querySelector("#login-button");

btnLogin.addEventListener("click", checkAdminAccess);
function checkAdminAccess() {
    //Se o usuário admin e senha digitados forem iguais aos do objeto admin, exibe "Acesso concedido!", senão exibe "Acesso negado!"
    if (admin.user === adminArea.value && admin.password === passwordArea.value) {
        alert("Acesso concedido!");
        adminArea.value = "";
        passwordArea.value = "";
        window.location.href = "admin-dashboard.html";
    }
    else {
        alert("Acesso negado!");
    }
}