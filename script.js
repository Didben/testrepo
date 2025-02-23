let h2 = document.getElementById("count_el");

function increment() {
    let currentValue = parseInt(h2.innerText);
    if (isNaN(currentValue)) {
        h2.innerText = 0;
    } else {
        h2.innerText = currentValue + 1;
    }
}

function reset() {
    h2.innerText = 0;
}

function save() {
    localStorage.setItem('count', h2.innerText); // Save the current h2 value
}

function restaure() {
    let storedCount = localStorage.getItem('count');
    if (storedCount !== null) {
        h2.innerText = storedCount;
    } else {
        h2.innerText = 0; // default value if nothing is stored.
    }
}