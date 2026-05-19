let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const clearBtn = document.getElementById('clear');
const errorMessage = document.getElementById('errorMessage');

function updateDisplay() {
    countDisplay.textContent = count;
}

function updateButtons() {
    if (count === 0) {
        clearBtn.classList.add('hidden');
    } else {
        clearBtn.classList.remove('hidden');
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    // setTimeout(() => {
    //     errorMessage.textContent = '';
    // }, 2000);
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
    updateButtons();
    errorMessage.textContent = '';
});

decrementBtn.addEventListener('click', () => {
    if (count === 0) {
        showError('Error : Cannot go below 0');
    } else {
        count--;
        updateDisplay();
        updateButtons();
        errorMessage.textContent = '';
    }
});

clearBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
    updateButtons();
    errorMessage.textContent = '';
});

updateButtons();