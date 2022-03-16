$(function () {
  // MENU
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // AOS ANIMATION
  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });

  // SMOOTHSCROLL NAVBAR
  $(function () {
    $(".navbar a, .hero-text a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });
});

const getParams = (name) => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

if (getParams("ref")) localStorage.setItem("ref", getParams("ref"));

const getRandomInt = (min, max) => {
  return `${Math.floor(Math.random() * (max - min)) + min}0`;
};

function getCode() {
  return `${localStorage.getItem("ref") || "general"}-${getRandomInt(
    99,
    10000
  )}`;
}

const gotoWhatsapp = () => {
  document.location = `https://wa.me/573015025912?text=Saludos estoy interesado en la cortesía, mi codigo es ${getCode()}`;
};
