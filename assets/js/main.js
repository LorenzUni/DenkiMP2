document.addEventListener("DOMContentLoaded", function () {
  const declineButton = document.querySelector(".decline");

  if (declineButton) {
    declineButton.addEventListener("click", function () {
      alert("Oh schade! Dann entgeht dir unser tolles personalisiertes Erlebnis 😢");
    });
  }
});
