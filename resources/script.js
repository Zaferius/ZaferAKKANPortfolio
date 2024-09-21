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
  var homeButton = document.getElementsByClassName("projectsButton")[0]; // İlk homeButton öğesini al
  if (homeButton) {
    chooseSection(homeButton); // Buton var ise fonksiyonu çağır
  }

  const gallery = document.getElementById("gallery");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  const images = ["images/hellevatorGif.gif", "images/hellevatorGif.gif"];
  let currentIndex = 0;

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(); // Bu çalışmazsa, butonun doğru şekilde seçilemediği anlamına gelir
  });

  function updateImage() {
    var img = gallery.querySelector("#current-image");
    img.classList.add("fade-out");
    setTimeout(() => {
      img.src = images[currentIndex];
      img.alt = images[currentIndex];
      img.classList.remove("fade-out");
    }, 500);
  }
});

//HOME
