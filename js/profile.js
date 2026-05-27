async function loadProfile() {

    const r = await get("/users/" + localStorage.getItem("id") + "/me");

    if (!r.success) {
        location.href = "login.html";
        return;
    }
    
    user_name.textContent = r.data.fullName;
    competenceText.textContent = r.data.competentionIndex + "%";
    trustText.textContent = r.data.trustLevel + "%";

    competenceBar.style.width = r.data.competentionIndex + "%";
    trustBar.style.width = r.data.trustLevel + "%";

    confCount.textContent = r.data.userConfirmations;
    skillsCount.textContent = r.data.userSkills;
    recomendationsCount.textContent = r.data.userRecomendations;
}

loadProfile();
