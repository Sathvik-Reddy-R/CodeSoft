let display = document.getElementById("display");
let currentOperation = null;
let firstOperand = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = number;
        shouldResetDisplay = false;
    } else {
        display.value = display.value === "0" ? number : display.value + number;
    }
}

function setOperation(operation) {
    if (currentOperation !== null) calculate();
    firstOperand = parseFloat(display.value);
    currentOperation = operation;
    shouldResetDisplay = true;
}

function calculate() {
    if (currentOperation === null || shouldResetDisplay) return;
    let secondOperand = parseFloat(display.value);
    switch (currentOperation) {
        case "+":
            display.value = firstOperand + secondOperand;
            break;
        case "-":
            display.value = firstOperand - secondOperand;
            break;
        case "*":
            display.value = firstOperand * secondOperand;
            break;
        case "/":
            display.value = secondOperand !== 0 ? firstOperand / secondOperand : "Error";
            break;
    }
    currentOperation = null;
    firstOperand = null;
    shouldResetDisplay = true;
}

function appendDecimal() {
    if (shouldResetDisplay) resetDisplay();
    if (!display.value.includes(".")) {
        display.value += ".";
    }
}

function clearDisplay() {
    display.value = "0";
    firstOperand = null;
    currentOperation = null;
    shouldResetDisplay = false;
}
