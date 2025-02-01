document.addEventListener('DOMContentLoaded', () => {
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  });

let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  const header = document.querySelector('header');
  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('hide');
  } else {
    header.classList.add('hide');
  }
  prevScrollPos = currentScrollPos;
});
