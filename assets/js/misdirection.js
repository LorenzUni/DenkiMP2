(function () {
  const accept = document.getElementById("mdAccept");
  const decline = document.getElementById("mdDecline");
  const hint = document.getElementById("mdHint");

  if (!accept || !decline) return;

  accept.addEventListener("click", () => {
    hint.textContent = "You accepted all cookies.";
    hint.style.color = "#27ae60";
  });

  decline.addEventListener("click", (e) => {
    e.preventDefault();
    hint.textContent = "You declined optional cookies.";
    hint.style.color = "#7f8c8d";
  });
})();
