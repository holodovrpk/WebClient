const API = "https://localhost:7058";


async function get(url) {
    const r = await fetch(API + url);

    return await r.json();
}

async function post(url, data) {
    const r = await fetch(API + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return await r.json();
}

function logout() {
    localStorage.clear();
    location.href = "login.html";

}
