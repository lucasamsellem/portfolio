const havePopups = document.querySelectorAll('.has-popup');

function togglePopupInfo(container, btn) {
  const isHidden = container.classList.toggle('hidden');
  btn.style.opacity = isHidden ? '0.2' : '0.8';
}

havePopups.forEach((project) => {
  const infoBtn = project.querySelector('.info-icon');
  const projectInfo = project.querySelector('.popup');

  infoBtn.addEventListener('click', () =>
    togglePopupInfo(projectInfo, infoBtn)
  );
});
