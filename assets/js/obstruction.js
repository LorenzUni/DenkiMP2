document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("obStart");
  const cancelBtn = document.getElementById("obCancel");

  const challenge = document.getElementById("obChallenge");
  const answer = document.getElementById("obAnswer");
  const hint = document.getElementById("obHint");

  const submit = document.getElementById("obSubmit");
  const back = document.getElementById("obBack");

  if (!startBtn || !cancelBtn || !challenge) return;

    // 7(x + 2) = 28  => x + 2 = 4 => x = 2
    const correctX = 2;
    const EPS = 1e-6;


  function parseNumber(s) {
    // erlaubt 0.06 oder 0,06
    const normalized = (s || "").trim().replace(",", ".");
    const v = Number(normalized);
    return Number.isFinite(v) ? v : null;
  }

  startBtn.addEventListener("click", function () {
    alert("Hat funktioniert");
  });

  cancelBtn.addEventListener("click", function () {
    challenge.style.display = "block";
    if (hint) hint.textContent = "";
    if (answer) {
      answer.value = "";
      answer.focus();
    }
  });

  back.addEventListener("click", function () {
    challenge.style.display = "none";
    if (hint) hint.textContent = "";
  });

  submit.addEventListener("click", function () {
    const v = parseNumber(answer.value);

    if (v === null) {
      hint.textContent = "Bitte gib eine Zahl ein.";
      return;
    }

    if (Math.abs(v - correctX) > EPS) {
      hint.textContent = "Leider falsch. Bitte erneut versuchen.";
      return;
    }

    // zweite "sind sie sich sicher?"-Barriere
    const sure = confirm("Sind Sie sich wirklich sicher?");
    if (!sure) {
      hint.textContent = "Kündigung abgebrochen.";
      return;
    }

    alert("Kündigung eingereicht. Bearbeitungsdauer: 7–14 Werktage.");
    challenge.style.display = "none";
  });
});
