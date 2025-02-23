let h2 = document.getElementById("count_el")

function increment() {
    let currentValue = parseInt(h2.innerText);
    if (isNaN(currentValue)) {
        h2.innerText = 0; // default value
    } else {
        h2.innerText = currentValue + 1;
    }
}