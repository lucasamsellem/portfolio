const havePopups = document.querySelectorAll('.has-popup');

havePopups.forEach((project) => {
  const infoBtn = project.querySelector('.info-icon');
  const projectInfo = project.querySelector('.popup');

  infoBtn.addEventListener('click', (e) => {
    const isHidden = projectInfo.classList.toggle('hidden');
    infoBtn.style.opacity = isHidden ? '0.2' : '0.8';
    e.stopPropagation();
  });

  // Close popup when clicking outside of it
  window.addEventListener('click', (e) => {
    if (!projectInfo.contains(e.target)) {
      projectInfo.classList.add('hidden');
      infoBtn.style.opacity = '0.2';
    }
  });

  // Prevent clicks inside the popup from closing it
  projectInfo.addEventListener('click', (e) => e.stopPropagation());
});
