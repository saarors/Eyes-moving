document.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const deltaX = e.clientX - eyeCenterX;
    const deltaY = e.clientY - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);

    const pupil = eye.querySelector('.pupil');
    pupil.style.transform = `translate(-50%, -50%) translate(${
      Math.cos(angle) * distance
    }px, ${Math.sin(angle) * distance}px)`;
  });
});
