const pElements = document.querySelectorAll('p');
const windowHeight = window.innerHeight;

function animateParagraphs() {
  pElements.forEach(p => {
    const position = p.getBoundingClientRect().top;
    if (position - windowHeight <= 0) {
      p.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateParagraphs);
