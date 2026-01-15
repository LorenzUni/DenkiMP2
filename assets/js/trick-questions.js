(function () {
  const sw = document.getElementById("tqSwitch");
  const hint = document.getElementById("tqHint");
  if (!sw) return;

  function update() {
    // UX-Logik: Checkbox an = "Do not disable tracking" gewählt
    // Das bedeutet inhaltlich: Tracking ist aktiv (weil man es NICHT deaktiviert).
    if (sw.checked) {
      hint.textContent = "You have enabled tracking.";
    } else {
      hint.textContent = "Tracking is disabled.";
    }
  }

  sw.addEventListener("change", update);

  // Startzustand (absichtlich missverständlich, aber didaktisch)
  sw.checked = false;
  update();
})();
