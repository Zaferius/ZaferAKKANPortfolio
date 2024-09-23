//HOME

var navButtons = document.getElementsByClassName("navButton");
var navButtonsTexts = [];

function chooseSection(button) {
  // navButton'ların innerText'lerini bir diziye ekleyelim
  for (var i = 0; i < navButtons.length; i++) {
    navButtonsTexts.push(navButtons[i].innerText);
  }

  for (var i = 0; i < navButtons.length; i++) {
    // Her section için döngü oluşturuyoruz
    navButtons[i].disabled = false;
    navButtons[i].innerText = navButtonsTexts[i];
  }

  button.disabled = true;
  button.innerText = "•" + " " + button.innerText;

  var sections = document.getElementsByClassName("msection"); // Tüm msection sınıflarını seçiyoruz
  for (var i = 0; i < sections.length; i++) {
    // Her section için döngü oluşturuyoruz
    sections[i].classList.remove("active");
    sections[i].classList.add("hidden");
  }

  if (button.classList.contains("homeButton")) {
    var section = document.querySelector(".home-section");
    if (section) {
      section.classList.remove("hidden");
      section.classList.add("active");
    }
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

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementsByClassName("contactButton")[0]; // İlk homeButton öğesini al
  if (button) {
    chooseSection(button); // Buton var ise fonksiyonu çağır
  }

  var contactAnchors = document.getElementsByClassName("contact-anchor");

  const buttons = document.querySelectorAll(".navButton");
  const footer = document.getElementById("footer");
  const introDiv = document.getElementById("intro-text");
  const border = document.getElementById("main-frame");

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
    }, 2000);
  }
  // Glow fonksiyonu (border elementine glow efekti ekleme)
  function applyGlowEffect() {
    border.style.animation = "none";

    setTimeout(() => {
      border.style.animation = "glowEffect 0.5s ease forwards";
    }, 1);

    border.addEventListener("animationend", function () {
      border.style.animation = "";
    });
  }

  // Her buton için tıklama olayını dinleyen bir döngü
  buttons.forEach((button) => {
    button.addEventListener("click", applyGlowEffect);
  });
});

//HOME
