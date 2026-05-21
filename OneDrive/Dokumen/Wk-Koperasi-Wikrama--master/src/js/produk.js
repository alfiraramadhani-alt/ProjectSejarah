document.addEventListener("DOMContentLoaded", () => {

  let count = 0;

  const buttons = document.querySelectorAll(".add-cart");
  const cartCount = document.getElementById("cart-count");
  const popup = document.getElementById("popup");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      count++;
      cartCount.innerText = count;
      showPopup();
    });
  });

  // POPUP
  function showPopup(){
    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 2000);
  }

  // BUTTON HERO
  const shopBtn = document.getElementById("shop-btn");
  if (shopBtn) {
    shopBtn.addEventListener("click", () => {
      document.getElementById("produk")
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  // ANIMASI SCROLL
  const cards = document.querySelectorAll(".card");

  window.addEventListener("scroll", () => {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < window.innerHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });

  // STYLE AWAL ANIMASI
  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";
  });

});