
const clearBtn = document.getElementById('clear');
const setBtn  = document.getElementById('set');
const screen = document.getElementById('screen');
const selectedColor = document.getElementById('optionSelect');
const input = document.getElementById('input');

let color = 'black';

selectedColor.addEventListener('change', function() {
    color = `${this.value}`;
});

function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }

  function setupDrawing() {
    const container = document.querySelector('.subsreen');
    container.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('square')) {
            changeColor(event.target);
        }
    });

    container.addEventListener('touchmove', function(event) {
        event.preventDefault(); 
        const touch = event.touches[0]; 
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
        if (targetElement && targetElement.classList.contains('square')) {
            changeColor(targetElement); 
        }
    }, { passive: false });
}

function changeColor(element) {
    if (color === 'random') {
        element.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    } else {
        element.style.backgroundColor = color;
    }
}

setupDrawing();

let numberOfSquares = 4;

setBtn.addEventListener('click', processSetBtn);
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        processSetBtn();
    }
});

function processSetBtn() {
    const input = document.getElementById('input');
    let num = parseInt(input.value, 10);

    if (!isNaN(num)) {
        if (num < 2) {
            num = 2;
        } else if (num > 150) {
            num = 150;
        }

        const currentSquares = document.querySelectorAll('.square');

        for (let square of currentSquares) {
            screen.removeChild(square);
        }
        screen.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        num = num * num; 

        for (let i = 0; i < num; i++) {
            let newSquare = document.createElement('div');
            newSquare.setAttribute('class', 'square');
            screen.appendChild(newSquare);
        }

        input.value = '';
    }
}


clearBtn.addEventListener('click', function() {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'white';
    })
});
