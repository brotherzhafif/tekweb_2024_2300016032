// Coba Slider
const slider = document.getElementById("slider");
const output1 = document.getElementById("output1");
output1.innerHTML = slider.value;

// Coba Color Picker
const picker = document.getElementById("picker");
const output2 = document.getElementById("output2");
output2.innerHTML = picker.value;

// Get all cards
const cards = document.querySelectorAll(".card");

// Light Mode dan Dark Mode
const mode = document.getElementById("mode");

// Font Family Gacha
const gacha = document.getElementById("gacha");
const huruf = document.getElementById("huruf");

// Gacha Font Logic
gacha.onclick = function () {
  const list = ["a", "b", "c", "d", "e", "f", "g"];
  const randomClass = list[Math.floor(Math.random() * list.length)];
  huruf.className = randomClass; // Set the new random class
};

// Change background color on color picker input
picker.oninput = function () {
  output2.innerHTML = this.value;
  document.body.style.backgroundColor = this.value;
};

// Change font size based on slider input
slider.oninput = function () {
  output1.innerHTML = this.value;
  output1.style.fontSize = this.value + "px";
};

// Toggle Light and Dark Mode
mode.onclick = function () {
  cards.forEach((card) => {
    if (card.classList.contains("putih")) {
      card.classList.replace("putih", "hitam");
      mode.value = "Sekarang Light Mode";
    } else {
      card.classList.replace("hitam", "putih");
      mode.value = "Sekarang Dark Mode";
    }
  });
};
