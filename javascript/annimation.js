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