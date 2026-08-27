const display = document.querySelector("#input");
const buttons = document.querySelectorAll("button");

let num1;
let operator;
const operators = ["-", "+", "*", "/"];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            const parts = display.textContent.split(operator);
            const num2 = parts[1];

            fetch(`/calculate?num1=${num1}&operator=${encodeURIComponent(operator)}&num2=${num2}`)
            .then(response => response.text())
            .then(result => {
                display.textContent = result;
            });
            
        } else if (button.textContent === "C") {
            display.textContent = "";
        } else {
            if (operators.includes(button.textContent)) {
                num1 = display.textContent;
                operator = button.textContent;
                display.textContent += button.textContent;
            } else {
                display.textContent += button.textContent;
            }
        }
    });
});