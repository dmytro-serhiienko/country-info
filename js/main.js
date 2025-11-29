//* Clock
function updateClock() {
  const now = new Date();
  // Отримуємо години, хвилини, секунди
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  // Додаємо 0 спереду, якщо менше 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // Вставляємо у HTML
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
// Оновлюємо кожну секунду
setInterval(updateClock, 1000);
// Викликаємо одразу при завантаженні
updateClock();

// * Country
const container = document.querySelector("#container");
const capitalEl = document.querySelector("#capital");
const areaEl = document.querySelector("#area");
const inputEl = document.querySelector("#country-input");
const btnEl = document.querySelector("#search-btn");

btnEl.addEventListener("click", () => {
  const countryName = inputEl.value.trim();

  fetch("https://restcountries.com/v3.1/name/" + countryName)
    .then((response) => response.json())
    .then((data) => {
      capitalEl.textContent = data[0].capital[0];
      areaEl.textContent = data[0].area;
    })
    .catch(() => {
      capitalEl.textContent = "Wrong name";
      areaEl.textContent = "-";
    });
});

// клік за межами
window.addEventListener("click", (event) => {
  if (!event.target.closest(".body-container")) {
    inputEl.value = "";

    capitalEl.textContent = "Capital";
    areaEl.textContent = "Area";
  }
});

// Enter для пошуку
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btnEl.click();
    inputEl.value = "";
  }
});
