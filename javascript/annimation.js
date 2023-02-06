window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
  });

function lunch() {
  setTimeout(function () {
    $("#lnch").addClass("launching").text("Initialization");
    $("#lnch_btn").addClass("launching");
  }, 0);

  setTimeout(function () {
    $("#lnch").addClass("launching").text("3");
  }, 600);

  setTimeout(function () {
    $("#lnch").addClass("launching").text("2");
  }, 1200);

  setTimeout(function () {
    $("#lnch").addClass("launching").text("1");
  }, 1800);

  setTimeout(function () {
    $("#lnch").addClass("launched").text("Launch sequence start.");
    $("#lnch_btn").addClass("launched");
  }, 2200);

  setTimeout(function () {
    window.location.assign("html/boot.html");
  }, 2600);
}

$(function () {
    $("#lnch").on("click", function () {
      lunch();
    });
    $("#lnch_btn").on("click", function () {
      lunch();
    });
  });
  