const screen = document.getElementById('inputField');
let operation = '';
let periodIsPresent = false;

document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', function() {
        if (screen.textContent === '' && this.value === '0') {
            screen.textContent += '0.';
            periodIsPresent = true;
        } else {
            screen.textContent += this.value;
        }
    })
});

document.querySelector('.period').addEventListener('click', function() {
    if (!periodIsPresent) {
        screen.textContent += this.value;
        periodIsPresent = true;
    }
});

document.querySelector('.reset').addEventListener('click', function() {
    screen.textContent = '';
    operation = '';
});

document.querySelector('.delete').addEventListener('click', function() {
    const input = screen.textContent;
    if (['-', '+', '/', '*'].some(op => input.endsWith(op))) {
        operation = '';
    }
    screen.textContent = screen.textContent.slice(0, -1);
});

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', function() {
        if (operation === '') {
            operation = this.value;
            screen.textContent += this.value;
            periodIsPresent = false;
        }
    })
});

document.querySelector('.equal').addEventListener('click', function() {
    if (operation !== '') {
        const operands = screen.textContent.split(operation);
        let result;

        const numOperand1 = parseFloat(operands[0]);
        const numOperand2 = parseFloat(operands[1]);
        
        if (numOperand2 !== 0) {
            switch (operation) {
                case '+': result = numOperand1 + numOperand2; break;
                case '-': result = numOperand1 - numOperand2; break;
                case '*': result = numOperand1 * numOperand2; break;
                case '/': result = numOperand1 / numOperand2; break;
            }
            const rounded = Math.ceil(result * 10) / 10;
            screen.textContent = rounded.toString();
            operation = '';
        }
    }
});

document.querySelectorAll('.toggle_switch input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        document.body.setAttribute('data-theme', this.value);
      }
    });
  });
  