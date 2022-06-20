let count = 0;
let countOutputElement = document.getElementById("count")

function increment() {
    count++;
    countOutputElement.innerText = count;
}