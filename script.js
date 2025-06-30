const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "q"];
let keyEl = document.getElementById("key");

function newKey() {
  keyEl.textContent = keys[Math.floor(Math.random() * keys.length)];
}

newKey();

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === keyEl.textContent) {
    PNotify.success({ text: "Правильно!" });
    newKey();
  } else {
    PNotify.error({ text: "Помилка! Правильна: " + keyEl.textContent });
  }
});

document.addEventListener("keypress", (e) => e.preventDefault());
document.getElementById("new-game").onclick = () => {
  newKey();
  PNotify.info({ text: "Нова гра!" });
};


const data = {
  labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
  datasets: [
    {
      label: "Продажі",
      data: Array.from({ length: 30 }, (_, i) => 150 + i * 50),
      borderColor: "#2196f3",
      backgroundColor: "rgba(33,150,243,0.2)",
      fill: true,
      tension: 0.3,
    },
  ],
};

new Chart(document.getElementById("sales-chart"), {
  type: "line",
  data,
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
      x: {},
    },
  },
});