let countdownNumber = 14; // Starting number for the countdown
const countdownElement = document.querySelector('.display');

// Function to start the countdown
function startCountdown() {
  const intervalId = setInterval(() => {
    // Apply the fold effect
    countdownElement.classList.add('fold');

    // Wait for the half of the transition to change the number
    setTimeout(() => {
      countdownNumber--;
      countdownElement.innerText = countdownNumber;
      
      // Remove the fold class to "unfold" the new number
      countdownElement.classList.remove('fold');

      if (countdownNumber <= 0) {
        clearInterval(intervalId); // Stop the countdown
        countdownElement.innerText = "00";
      }
    }, 300); // Half of the transition time

  }, 1000); // Change the number every second
}

// Start the countdown
startCountdown();
