let display = document.getElementById("display");
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    if (display.value === "0" || display.value === "") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function setOperation(operation) {
    firstOperand = parseFloat(display.value);
    currentOperation = operation;
    display.value = "";
}

function calculate() {
    let secondOperand = parseFloat(display.value);
    if (currentOperation && firstOperand !== null) {
        switch (currentOperation) {
            case "+":
                display.value = firstOperand + secondOperand;
                break;
            case "-":
                display.value = firstOperand - secondOperand;
                break;
        }
        firstOperand = null;
        currentOperation = null;
    }
}
