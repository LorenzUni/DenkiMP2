(function () {
  const btn = document.getElementById("baitPlayBtn");
  const hint = document.getElementById("baitHint");

  if (!btn) return;

  btn.addEventListener("click", () => {

    // 🔹 VISUELLE TÄUSCHUNG: tut so, als würde etwas starten
    btn.textContent = "Starting...";
    setTimeout(() => (btn.textContent = "▶ PLAY"), 800);

    // Inhalt der harmlosen Datei
    const content =
      "das könnte ein gefährlicher Virus sein! Ist aber diesmal komplett harmlos\n";

    // Datei im Browser erzeugen
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    // Download triggern
    const a = document.createElement("a");
    a.href = url;
    a.download = "virus.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();

    // Cleanup
    URL.revokeObjectURL(url);

    // Kleine Rückmeldung
    if (hint) {
      hint.textContent = "Download gestartet (bait-and-switch).";
    }
  });
})();
