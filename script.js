document.addEventListener('DOMContentLoaded', () => {
  // Hide body until password check
  document.body.style.display = 'none';

  const correctPassword = '2825';
  const enteredPassword = prompt('Passwort eingeben:');

  if (enteredPassword === correctPassword) {
    document.body.style.display = 'block';
    // Continue with existing setup
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
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
  } else {
    // Show unauthorized message
    document.body.innerHTML = '<h1>Kein Zugriff</h1>';
    document.body.style.display = 'block';
  }
});
