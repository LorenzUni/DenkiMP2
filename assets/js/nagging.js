document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("ngBanner");
  const accept = document.getElementById("ngAccept");
  const decline = document.getElementById("ngDecline");

  const box = document.getElementById("ngMessageBox");
  const text = document.getElementById("ngMessageText");

  if (!banner || !accept || !decline || !box || !text) return;

  let timeout = null;
  let declineCount = 0;

  function showMessage(msg, type) {
    text.textContent = msg;
    box.style.display = "block";

    if (type === "good") {
      box.style.background = "#eafaf1";
      box.style.border = "1px solid #27ae60";
      box.style.color = "#1e8449";
    } else {
      box.style.background = "#f2f2f2";
      box.style.border = "1px solid #bbb";
      box.style.color = "#555";
    }
  }

  accept.addEventListener("click", function () {
    showMessage("Super, danke für dein Vertrauen!", "good");
    banner.style.display = "none";
  });

  decline.addEventListener("click", function () {
    banner.style.display = "none";

    declineCount++;

    // Wird jedes Mal passiv-aggressiver
    let msg = "Schade. Wäre echt toll gewesen, wenn du zugestimmt hättest.";
    if (declineCount === 2) msg = "Schade, dann entgehen dir wirklich wichtige Vorteile.";
    if (declineCount >= 3) msg = "Schade. Ohne Tracking wird dein Erlebnis deutlich schlechter sein.";

    showMessage(msg, "bad");

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      banner.style.display = "block";
    }, 2000);
  });
});
