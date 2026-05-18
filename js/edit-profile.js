function showTab(id) {
    document.querySelectorAll(".tab").forEach(x => x.style.display = "none");
    document.getElementById(id).style.display = "block";
}

async function load() {
    const r = await get("/users/me");
    if (!r.success) return location.href = "login.html";

    fullName.value = r.data.fullName;
    email.value = r.data.email;
    phone.value = r.data.phone || "";
}

async function saveMain() {
    const r = await put("/users/me", {
        fullName: fullName.value,
        email: email.value,
        phone: phone.value
    });

    msg.textContent = r.message || "Сохранено";
}

async function addEducation() {
    const r = await post("/education", {
        type: eduType.value,
        name: eduName.value,
        period: eduPeriod.value,
        documentName: eduDoc.value
    });

    eduList.innerHTML += `<div class="border p-2 mb-2">${eduType.value} | ${eduName.value} | ${eduPeriod.value}</div>`;
}

async function addExperience() {
    const r = await post("/experience", {
        type: expType.value,
        company: company.value,
        position: position.value,
        period: expPeriod.value
    });

    expList.innerHTML += `<div class="border p-2 mb-2">${company.value} | ${position.value} | ${expPeriod.value}</div>`;
}

async function addSkill() {
    const r = await post("/skills", {
        name: skillName.value,
        level: Number(skillLevel.value)
    });

    skillList.innerHTML += `<div class="border p-2 mb-2">${skillName.value} — ${skillLevel.value}/10</div>`;
}

load();
