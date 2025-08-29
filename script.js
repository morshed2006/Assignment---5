// history data
const historyData = [];

// Heart Icons function
let counter = 0;
const hearts = document.querySelectorAll(".heart");
for (const heart of hearts) {
    heart.addEventListener("click", function handler() {
        if (heart.style.color === "red") return;

        heart.style.color = "red";
        counter++;
        document.getElementById("heart-number").innerText = counter;
    });
}