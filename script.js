const infoSchoolBtn = document.querySelector('.info-icon-school');
const infoProjectBtn = document.querySelector('.info-icon-project');
const schoolInfo = document.querySelector('.school-info');
const historicalEventsProjectInfo = document.querySelector(
  '.historical-events-project-info'
);

// HELPER FUNCTIONS
function togglePopupInfo(container, btn) {
  container.classList.toggle('hidden');
  btn.style.opacity = btn.style.opacity === '0.8' ? '0.2' : '0.8';
}

// Toggle popups visibility
infoProjectBtn.addEventListener('click', () =>
  togglePopupInfo(historicalEventsProjectInfo, infoProjectBtn)
);

infoSchoolBtn.addEventListener('click', () =>
  togglePopupInfo(schoolInfo, infoSchoolBtn)
);
