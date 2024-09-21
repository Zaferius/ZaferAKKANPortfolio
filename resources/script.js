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
  button.innerText = "•";

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
  var homeButton = document.getElementsByClassName("homeButton")[0]; // İlk homeButton öğesini al
  if (homeButton) {
    chooseSection(homeButton); // Buton var ise fonksiyonu çağır
  }
});
