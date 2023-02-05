window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
  });
  
const targets = document.querySelectorAll('div');

let element;

function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            if (entry.target.classList[0] == 'talk-bubble')
                entry.target.classList.add('also-visible')
        } else if (entry.target.classList[5] != 'also-visible'){
            entry.target.classList.remove('visible')
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);

targets.forEach(target => observer.observe(target));

$(function () {
    $("#lnch_btn").on("click", function () {
      setTimeout(function () {
        $("#lnch").addClass("launching").text("SENDING");
        $("#lnch_btn").addClass("launching");
      }, 0);

      setTimeout(function () {
        $("#lnch").addClass("launching").text("3");
      }, 1000);

      setTimeout(function () {
        $("#lnch").addClass("launching").text("2");
      }, 2000);

      setTimeout(function () {
        $("#lnch").addClass("launching").text("1");
      }, 3000);

      setTimeout(function () {
        $("#lnch").addClass("launching").text("0");
      }, 4000);

      setTimeout(function () {
        $("#lnch").addClass("launched").text("Launch sequence start.");
        $("#lnch_btn").addClass("launched");
      }, 5000);

      setTimeout(function () {
        window.location.assign("html/boot.html");
      }, 5500);
    });
  });
  