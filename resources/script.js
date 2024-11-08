//HOME

var navButtons = document.getElementsByClassName("navButton");
var navButtonsTexts = [];

function chooseSection(button) {
    var section = document.querySelector(".hyper-casual-text");
    if (section) {
        section.classList.remove("active");
        section.classList.add("hidden");
    }

    for (var i = 0; i < navButtons.length; i++) {
        navButtonsTexts.push(navButtons[i].innerText);
    }

    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].disabled = false;
        navButtons[i].innerText = navButtonsTexts[i];
    }

    button.disabled = true;
    button.innerText = "•" + " " + button.innerText;

    var sections = document.getElementsByClassName("msection");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
        sections[i].classList.add("hidden");
    }

    if (button.classList.contains("homeButton")) {
        var section = document.querySelector(".home-section");
        if (section) {
            section.classList.remove("hidden");
            section.classList.add("active");
        }

        resetGif();
        startGifEffectLoop();
    }

    if (button.classList.contains("projectsButton")) {
        var section = document.querySelector(".projects-section");
        if (section) {
            section.classList.remove("hidden");
            section.classList.add("active");
        }
    }

    if (button.classList.contains("infoButton")) {
        var section = document.querySelector(".info-section");
        if (section) {
            section.classList.remove("hidden");
            section.classList.add("active");
        }
    }

    if (button.classList.contains("contactButton")) {
        var section = document.querySelector(".contact-section");
        if (section) {
            section.classList.remove("hidden");
            section.classList.add("active");
        }
    }
}

function resetGif() {
    const gif = document.getElementById("home-gif");
    gif.src = ""; // Geçici olarak boş bırak
    setTimeout(() => (gif.src = "./resources/images/hellevatorGif.gif"), 0); // Yeniden başlat
}

const gifDuration = 4950; // GIF'in toplam döngü süresi (ms cinsinden, örneğin 10 saniye)
const fireEffectTimes = [1550, 1900, 2400, 2750, 4750]; // Ateş efektinin tetikleneceği milisaniye cinsinden anlar
let intervalId;

function startGifEffectLoop() {
    if (intervalId) clearInterval(intervalId);

    const startTime = Date.now();

    // GIF süresi boyunca her milisaniyede bir kontrol et
    intervalId = setInterval(() => {
        const elapsedTime = (Date.now() - startTime) % gifDuration;

        // Ateş efekti tetiklenme zamanına ulaşıldığında çalıştır
        fireEffectTimes.forEach((time) => {
            if (Math.abs(elapsedTime - time) < 50) {
                // Yaklaşık eşitlik kontrolü
                HomeGifFireEffect();
            }
        });
    }, 50); // Her 50 ms'de bir k
}

function HomeGifFireEffect() {
    const gifContainer = document.getElementById("home-gif");

    gifContainer.style.transition = "none";
    gifContainer.style.boxShadow = "0 0 25px rgba(255, 228, 0, 0.8)";

    setTimeout(() => {
        gifContainer.style.transition = "box-shadow 0.2s ease"; // Smooth dönüş
        gifContainer.style.boxShadow = "0 0 20px rgba(255, 228, 0, 0.2)";
    }, 100);
}

document.addEventListener("DOMContentLoaded", function () {
    //
    const gifElement = document.getElementById("home-gif");
    const buttons = document.querySelectorAll(".navButton");
    const footer = document.getElementById("footer");
    const introDiv = document.getElementById("intro-text");
    const border = document.getElementById("main-frame");
    const hyperCasualText = document.getElementById("hyper-casual-text");

    gifElement.addEventListener("load", startGifEffectLoop);

    var button = document.getElementsByClassName("homeButton")[0];
    if (button) {
        chooseSection(button);
    }

    var contactAnchors = document.getElementsByClassName("contact-anchor");

    introDiv.style.opacity = "0";

    Intro();

    function Intro() {
        introDiv.style.opacity = "1";
        border.style.opacity = "0";
        footer.style.opacity = "0";

        setTimeout(() => {
            introDiv.style.animation = "fadeOut 1s ease forwards";
        }, 1000);

        setTimeout(() => {
            border.style.opacity = "1";
            footer.style.opacity = "1";
            border.style.animation = "fadeIn 3s ease forwards";
            footer.style.animation = "fadeIn 3s ease forwards";
            resetGif();
            startGifEffectLoop();
        }, 2000);
    }

    function applyGlowEffect() {
        border.style.animation = "none";

        setTimeout(() => {
            border.style.animation = "glowEffect 0.5s ease forwards";
        }, 1);

        border.addEventListener("animationend", function () {
            border.style.animation = "";
        });
    }

    buttons.forEach((button) => {
        button.addEventListener("click", applyGlowEffect);
    });
});

//HOME
