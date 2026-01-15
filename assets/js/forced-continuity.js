document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("fcStartBtn");
  const timerBox = document.getElementById("fcTimerBox");
  const timerEl = document.getElementById("fcTimer");
  const statusEl = document.getElementById("fcStatus");

  if (!startBtn) return;

  let interval = null;

  startBtn.addEventListener("click", function () {
    startBtn.disabled = true;
    startBtn.textContent = "Testphase läuft...";

    timerBox.style.display = "block";

    let remaining = 5;
    timerEl.textContent = remaining;

    interval = setInterval(() => {
      remaining--;
      timerEl.textContent = remaining;

      if (remaining <= 0) {
        clearInterval(interval);

        statusEl.textContent = "Testphase beendet – Abo aktiv.";
        statusEl.style.color = "#c0392b";

        startBtn.style.display = "none";
      }
    }, 1000);
  });
});
