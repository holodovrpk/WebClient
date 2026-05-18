const API = "https://localhost:7058";

function token() {

   t = localStorage.getItem("token")
  if (t == null)
        return "";

   return atob(localStorage.getItem("token"));

}



async function get(url) {
    const r = await fetch(API + url, {
        headers: {
            "Authorization": "Bearer " + token()
        }
    });

    return await r.json();
}

async function post(url, data) {
    const r = await fetch(API + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token()
        },
        body: JSON.stringify(data)
    });
    return await r.json();
}

async function put(url, data) {
    const r = await fetch(API + url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token()
        },
        body: JSON.stringify(data)
    });
    return await r.json();
}

function logout() {
    localStorage.removeItem("token");
    location.href = "login.html";
}
