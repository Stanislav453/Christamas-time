let countdownDisplay = document.getElementById('countdown-display');
let body = document.querySelector('body');
let christmasTimeValue = document.getElementById('christmas-time');

function renderCountdown() {
  let christmas = 24;
  let oneDay = Math.floor(1000 * 60 * 60);
  const createParagraph = document.createElement('p');
  createParagraph.style.color = 'red';
  createParagraph.innerText = 'DNESKA SÚ VIANOCE';
  countdownDisplay.innerText = christmas;

  const christmasTime = () => {
    const currentDay = new Date();
    const timeToChristmas = new Date('December 24, 2023');
    const timeDiference = timeToChristmas - currentDay;

    const midnight = new Date(
      currentDay.getFullYear(),
      currentDay.getMonth(),
      currentDay.getDate() + 1,
      0,
      0,
      0,
      0
    );
    const timeUntilMidnight = midnight - currentDay;

    const timeToChristmasHours = Math.floor(timeDiference / (1000 * 60 * 60));
    const timeToChristmasMinutes = Math.floor(
      (timeDiference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const timeToChristmasSecond = Math.floor(
      (timeDiference % (1000 * 60)) / 1000
    );

    christmasTimeValue.innerText = `Čas do vianoc ${timeToChristmasHours}: ${timeToChristmasMinutes}: ${timeToChristmasSecond} `;
  };

  const christmasTimeInterval = setInterval(christmasTime, 1000);

  const christmasInterval = setInterval(() => {
    countdownDisplay.innerText = christmas;
    if (christmas === 0) {
      clearInterval(christmasInterval);
      clearInterval(christmasTimeInterval);
      body.appendChild(createParagraph);
    } else {
      christmas--;
    }
  }, timeUntilMidnight);
}

renderCountdown();
