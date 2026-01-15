document.addEventListener("DOMContentLoaded", function () {
  const PRICE = 4.99;
  const SHIPPING = 5.0;

  const app = document.getElementById("sibApp");
  if (!app) return;

  const stepProduct = app.querySelector('[data-step="product"]');
  const stepAddress = app.querySelector('[data-step="address"]');
  const stepCheckout = app.querySelector('[data-step="checkout"]');
  const stepDone = app.querySelector('[data-step="done"]');

  const btnAdd = document.getElementById("sibAddToCart");
  const btnToCheckout = document.getElementById("sibToCheckout");
  const btnBackToProduct = document.getElementById("sibBackToProduct");
  const btnBackToAddress = document.getElementById("sibBackToAddress");
  const btnPlaceOrder = document.getElementById("sibPlaceOrder");
  const btnReset = document.getElementById("sibReset");

  const addressInput = document.getElementById("sibAddress");
  const addressHint = document.getElementById("sibAddressHint");
  const hintEl = document.getElementById("sibHint");

  const extraRow = document.getElementById("sibExtraRow");
  const totalEl = document.getElementById("sibTotal");

  let extraAdded = false;

  function euro(x) {
    return "€ " + x.toFixed(2).replace(".", ",");
  }

  function show(step) {
    stepProduct.hidden = step !== "product";
    stepAddress.hidden = step !== "address";
    stepCheckout.hidden = step !== "checkout";
    stepDone.hidden = step !== "done";
  }

  function reset() {
    extraAdded = false;
    show("product");
    if (addressInput) addressInput.value = "";
    if (addressHint) addressHint.textContent = "";
    if (hintEl) hintEl.textContent = "";
    if (extraRow) extraRow.style.display = "none";
    if (totalEl) totalEl.textContent = euro(PRICE + SHIPPING);
  }

  btnAdd.addEventListener("click", function () {
    show("address");
  });

  btnBackToProduct.addEventListener("click", function () {
    show("product");
  });

  btnToCheckout.addEventListener("click", function () {
    const val = (addressInput?.value || "").trim();

    if (val.length < 6) {
      if (addressHint) addressHint.textContent = "Bitte gib eine (kurze) Adresse ein, um fortzufahren.";
      addressInput?.focus();
      return;
    }

    if (addressHint) addressHint.textContent = "";
    show("checkout");

    // Sneak: Extra wird im Checkout hinzugefügt (erst jetzt sichtbar)
    extraAdded = true;
    if (extraRow) extraRow.style.display = "block";

    const total = PRICE + SHIPPING + (extraAdded ? PRICE : 0);
    if (totalEl) totalEl.textContent = euro(total);

    if (hintEl) hintEl.textContent = "Hinweis: Dein Warenkorb wurde „automatisch ergänzt“.";
  });

  btnBackToAddress.addEventListener("click", function () {
    show("address");
    if (hintEl) hintEl.textContent = "";
  });

  btnPlaceOrder.addEventListener("click", function () {
    show("done");
  });

  btnReset.addEventListener("click", function () {
    reset();
  });

  reset();
});
