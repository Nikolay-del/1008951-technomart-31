const cartBut = document.querySelectorAll(".button-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");
const cartContinue = cartPopup.querySelector(".button-continue-shop");

for (let i = 0; i < cartBut.length; i++) {
  cartBut[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show-block");
  })
}

// cartBut.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   cartPopup.classList.add("modal-show-block");
// });

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show-block");
});

cartContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show-block");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show-block")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show-block");
    }
  }
});
