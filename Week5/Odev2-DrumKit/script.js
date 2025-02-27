document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
      const sound = button.getAttribute('data-sound');
      playSound(sound);
    });
  });
  
  document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    if (key === 'k') playSound('kick');
    if (key === 's') playSound('snare');
    if (key === 'h') playSound('hihat');
  });
  
  function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.wav`);
    audio.play();
  }
  