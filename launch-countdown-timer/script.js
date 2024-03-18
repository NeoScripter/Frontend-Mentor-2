document.addEventListener('DOMContentLoaded', () => {
  let countdownNumber = 4; // Starting number for the countdown
  const countdownElement = document.querySelector('.display');

  // Function to start or continue the countdown
  function startCountdown() {
      const intervalId = setInterval(() => {
          countdownElement.classList.add('fold');

          setTimeout(() => {
              countdownNumber--;
              countdownElement.textContent = '';
              countdownNumber = countdownNumber > 9 ? countdownNumber : `0${countdownNumber}`;

              if (countdownNumber <= 0) {
                  clearInterval(intervalId);
                  countdownElement.textContent = "00";
              }
          }, 300); // Update at the midpoint of the animation for visibility during flip

          countdownElement.addEventListener('animationend', () => {
              countdownElement.classList.remove('fold');
              countdownElement.textContent = countdownNumber;
          }, { once: true });
      }, 1000); // Change the number every second
  }

  startCountdown();
});
