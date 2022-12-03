// hambuger menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

$("#close").click(function () {
  //do something
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
// carousel
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      loop: true,
    },
    640: {
      items: 2,
      loop: true,
    },
    768: {
      items: 3,
      loop: true,
    },
    1024: {
      items: 3,
      loop: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
