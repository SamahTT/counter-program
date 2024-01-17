let current_value = Number(document.getElementById('result').textContent);

document.getElementById('increase-btn').onclick = function increase() {
    current_value ++; 
    document.getElementById('result').textContent = current_value;
}

document.getElementById('decrease-btn').onclick = function decrease() {
    current_value --; 
    document.getElementById('result').textContent = current_value;
}

document.getElementById('reset-btn').onclick = function reset() {
    current_value = 0; 
    document.getElementById('result').textContent = current_value;
}


