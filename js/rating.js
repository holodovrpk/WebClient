async function loadRating() {
    const r = await get("/users/me");

    if (!r.success) {
        location.href = "login.html";
        return;
    }


    indexText.textContent = r.data.competentionIndex + "%";

    competenceBar.style.width = r.data.competentionIndex + "%";

    new Chart(ratingChart, {
        type: "pie",
        data: {
            labels: ["Образование", "Опыт", "Подтверждения"],
            datasets: [{
                data: [30, 30, 40]
            }]
        }
    });
}



let chart;
async function loadChart() {

    const days = period.value;

    const r = await get("/users/history?days=" + days);

    if (!r.success)
        return;

    const labels = r.data.map(x => x.dateEdit);
    const values = r.data.map(x => x.competenceIndex);

    if (chart)
        chart.destroy();

    chart = new Chart(historyChart, {
        type: "line",

        data: {
            labels: labels,

            datasets: [{
                label: "Рейтинг",
                data: values
            }]
        },

        options: 
        {
            responsive: false
        }
    });
}


async function loadRecomendation()
{
    recomendationTable.innerHTML = "";

    const r = await get("/users/recomendations");

    if (!r.success)
        return;

    r.data.forEach(x => {
        recomendationTable.innerHTML +=
            "<tr><td>" + x.text + "</td></tr>";
            });
}

loadChart();

loadRating();

loadRecomendation();