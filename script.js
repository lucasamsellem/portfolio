// HISTORICAL EVENTS PROJECT
const infoProjectBtn = document.querySelector('.info-project-icon');
const historicalEventsProjectInfo = document.querySelector(
  '.historical-events-project-info'
);

infoProjectBtn.addEventListener('click', () => {
  historicalEventsProjectInfo.classList.toggle('hidden');

  infoProjectBtn.style.opacity =
    infoProjectBtn.style.opacity === '0.8' ? '0.2' : '0.8';
});
