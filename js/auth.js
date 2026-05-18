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
        localStorage.setItem("token", btoa(result.message));
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


function stubshow() {
    alert("Функционал в разработке");
}


async function frgoutpassword()
{
    email = prompt("Введите email для напоминания");

    if (!(email.includes("@") && email.includes(".")))
            msg.textContent = "Некорректный email";

    const result = await post("/auth/password", {
        email: email
    });

    if (result.success)
        msg.textContent = "Запрос на восстановление пароля отправлен";

}