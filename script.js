function Clear() {
    document.getElementById('res').value = '';
}

function Solve(val) {
    document.getElementById('res').value += val;
}

function Back() {
    var value = document.getElementById('res').value;
    document.getElementById('res').value = value.substr(0, value.length - 1);
}

function Result() {
    var input = document.getElementById('res').value;
    try {
        var output = eval(input);
        document.getElementById('res').value = output;
    } catch (e) {
        alert('Invalid Expression');
    }
}

function showMessage() {
    document.getElementById('res').value = 'Created by Harika';
}

const buttons = document.querySelectorAll('.btn input[type="button"]');
const colors = ['#3498db', '#9b59b6', '#e74c3c', '#2ecc71'];
let colorIndex = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
});
