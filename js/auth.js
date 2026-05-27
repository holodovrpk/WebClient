function showLogin() {
    loginBlock.style.display = "block";
    registerBlock.style.display = "none";
}

function showRegister() {
    loginBlock.style.display = "none";
    registerBlock.style.display = "block";
}

async function login() {
    const result = await post("/auth/login", {
        email: loginEmail.value,
        password: loginPassword.value,
    });

    if (result.success) {
        localStorage.setItem("id", result.data.userId);
        location.href = "profile.html";
    } else {
        msg.textContent = "Ошибка входа";
    }
}

async function register() {
    if (regPassword.value.length < 8) {
        msg.textContent = "Пароль должен быть больше 8 символов";
        return;
    }

    if (regPassword.value !== regPassword2.value) {
        msg.textContent = "Пароли не совпадают";
        return;
    }

    const result = await post("/auth/register", {
        fullName: fullName.value,
        email: regEmail.value,
        password: regPassword.value
    });

    msg.textContent = "Регистрация выполнена";
}


async function frgoutpassword()
{

        msg.textContent = "Запрос на восстановление пароля отправлен";

}