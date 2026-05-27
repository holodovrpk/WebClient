async function loadConfirmations() {

    const r = await get("/users/" + localStorage.getItem("id") + "/confirmations");

    if (!r.success)
        return;

    confirmationsList.innerHTML = "";

    let items = r.data;

    if (items.length == 0) {

        confirmationsList.innerHTML =
            "<div>" +
            "У вас нет активных запросов на подтверждение" +
            "</div>";

        return;
    }


    let item_in = items.filter(x => x.incoming == true && x.status == "Ожидает");

    item_in.forEach(x => {

        

        confirmationsList.innerHTML +=

            "<div class='card mb-3'>" +

                "<div class='card-body'>" +

                    "<h6>" +
                        x.skill + " " +
                        x.level + "/10" +
                    "</h6>" +

                    "<div>" +
                       "запросил " + x.fromUser +
                    "</div>" +

                    "<div class='text-muted mb-2'>" +
                        x.date +
                    "</div>" +

                    "<button>Подтвердить</button>" +

                   "<button>Отклонить</button>" +

                   "<button>Детали</button>";

                "</div>" +

            "</div>";
    });

    let item_out = items.filter(x => x.incoming == false && x.status == "Подтвежден");

    item_out.forEach(x => {

        

        confirmationsList.innerHTML +=

            "<div class='card mb-3'>" +

                "<div class='card-body'>" +

                    "<h6>" +
                        x.skill + " " +
                        x.level + "/10" +
                    "</h6>" +

                    "<div>" +
                       "подтвержден " + x.toUser +
                    "</div>" +

                    "<div class='text-muted mb-2'>" +
                        x.date +
                    "</div>" +

                   "<button>Отозвать</button>" +

                   "<button>Детали</button>";

                "</div>" +

            "</div>";
    });


}

loadConfirmations();

setInterval(loadConfirmations, 3000);