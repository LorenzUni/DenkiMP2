(function () {
  const PRICE = 4.99;
  const SHIPPING = 5.0;

  const app = document.getElementById("hcApp");
  if (!app) return;

  const stepProduct = app.querySelector('[data-step="product"]');
  const stepAddress = app.querySelector('[data-step="address"]');
  const stepCheckout = app.querySelector('[data-step="checkout"]');
  const stepDone = app.querySelector('[data-step="done"]');

  const btnAdd = document.getElementById("hcAddToCart");
  const btnToCheckout = document.getElementById("hcToCheckout");
  const btnBackToProduct = document.getElementById("hcBackToProduct");
  const btnBackToAddress = document.getElementById("hcBackToAddress");
  const btnPlaceOrder = document.getElementById("hcPlaceOrder");
  const btnReset = document.getElementById("hcReset");

  const addressInput = document.getElementById("hcAddress");
  const addressHint = document.getElementById("hcAddressHint");
  const hintEl = document.getElementById("hcHint");
  const totalEl = document.getElementById("hcTotal");

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
    show("product");
    if (addressInput) addressInput.value = "";
    if (addressHint) addressHint.textContent = "";
    if (hintEl) hintEl.textContent = "";
    if (totalEl) totalEl.textContent = euro(PRICE + SHIPPING);
  }

  btnAdd.addEventListener("click", () => {
    show("address");
  });

  btnBackToProduct.addEventListener("click", () => {
    show("product");
  });

  btnToCheckout.addEventListener("click", () => {
    const val = (addressInput?.value || "").trim();

    if (val.length < 6) {
      if (addressHint) addressHint.textContent = "Bitte gib eine (kurze) Adresse ein, um fortzufahren.";
      addressInput?.focus();
      return;
    }

    if (addressHint) addressHint.textContent = "";
    show("checkout");

    // Jetzt erfolgt der "Switch": Lieferkosten sind plötzlich da
    if (totalEl) totalEl.textContent = euro(PRICE + SHIPPING);
    if (hintEl) hintEl.textContent = "Lieferkosten wurden hinzugefügt.";
  });

  btnBackToAddress.addEventListener("click", () => {
    show("address");
    if (hintEl) hintEl.textContent = "";
  });

  btnPlaceOrder.addEventListener("click", () => {
    show("done");
  });

  btnReset.addEventListener("click", () => {
    reset();
  });

  reset();
})();
