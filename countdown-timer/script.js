
  let days = parseInt(document.getElementById('days').textContent, 10);
  let hours = parseInt(document.getElementById('hours').textContent, 10);
  let minutes = parseInt(document.getElementById('minutes').textContent, 10);
  let seconds = parseInt(document.getElementById('seconds').textContent, 10);

  function countdownTick() {
      seconds--;
      if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
              minutes = 59;
              hours--;
              if (hours < 0) {
                  hours = 23;
                  days--;
              }
          }
      }

      updateDisplay('seconds', seconds);
      if (seconds === 59) {
          updateDisplay('minutes', minutes);
          if (minutes === 59) {
              updateDisplay('hours', hours);
              if (hours === 23) {
                  updateDisplay('days', days);
              }
          }
      }

      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
      }
  }

  function updateDisplay(unit, value) {
      const display = document.getElementById(unit);
      display.textContent = `${value < 10 ? '0' : ''}${value}`;
      display.classList.add('fold');
      setTimeout(() => display.classList.remove('fold'), 600);
  }

  const intervalId = setInterval(countdownTick, 1000);
