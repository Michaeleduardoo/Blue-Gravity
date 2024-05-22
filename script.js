$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
  },
});

const detailsButton = document.querySelector(".details");

detailsButton.addEventListener("click", function () {
  window.open("https://gravity.blue/games/", "_blank");
});
