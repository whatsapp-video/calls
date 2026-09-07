"use strict";


/* =========================================
   LOADING TIME
========================================= */

const SEARCH_TIME = 5000;


/* =========================================
   SUBTITLE MESSAGES
========================================= */

const subtitleMessages = [
    "Checking active profile",
    "Checking hot girl's",
    "Checking hot aunty's",
    "Ready to connect"
];


const subtitleElement =
    document.getElementById("loadingSubtitle");

let currentSubtitle = 0;


/* =========================================
   CHANGE SUBTITLE TEXT
========================================= */

const subtitleInterval = setInterval(function () {

    if (!subtitleElement) {
        return;
    }


    subtitleElement.style.opacity = "0";


    setTimeout(function () {

        currentSubtitle++;

        if (currentSubtitle >= subtitleMessages.length) {
            currentSubtitle = 0;
        }


        subtitleElement.textContent =
            subtitleMessages[currentSubtitle];


        subtitleElement.style.opacity = "1";

    }, 250);

}, 1300);


/* =========================================
   GO TO PROFILE
========================================= */

setTimeout(function () {

    clearInterval(subtitleInterval);


    sessionStorage.setItem(
        "showFinding",
        "no"
    );


    window.location.replace(
        "profile.html"
    );

}, SEARCH_TIME);