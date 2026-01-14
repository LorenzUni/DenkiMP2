document.addEventListener("DOMContentLoaded", function () {
  const declineButton = document.querySelector(".decline");
  const acceptButton = document.querySelector(".accept");


  if (declineButton) {
    declineButton.addEventListener("click", function () {
      alert("Oh schade! Dann entgeht dir unser tolles personalisiertes Erlebnis 😢");
    });
  }
  if (acceptButton) {
    acceptButton.addEventListener("click", function () {
      alert("Super! Du erhältst nun ein personalisiertes Erlebnis 🎉");
    });
  }
});
