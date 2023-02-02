const targets = document.querySelectorAll('div');

function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);

targets.forEach(target => observer.observe(target));