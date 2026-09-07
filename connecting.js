"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const connectingScreen =
        document.getElementById("connectingScreen");

    const actionCards =
        document.querySelectorAll(".action-card");

    if (!connectingScreen || !actionCards.length) {
        return;
    }


    actionCards.forEach(function (card) {

        card.addEventListener("click", function (event) {

            event.preventDefault();

            const whatsappURL = card.href;

            connectingScreen.classList.add("active");

            connectingScreen.setAttribute(
                "aria-hidden",
                "false"
            );

            setTimeout(function () {

                window.location.href = whatsappURL;

            }, 2800);

        });

    });

});