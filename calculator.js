function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
}


//algorithm
//assign the first operand
//show the first operand on the display while typing
//take operator from the user
//assign second operand
//show second operand on the display while typing
//manipulate the operators according to the operator when = is clicked



let firstOperator = 0;
let secondOperator = 0;
let screen = document.querySelector("span");
screen.textContent = 0;
let screenText = screen.textContent;



let one = document.querySelector("button.one");


one.addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 1;  
    }
    else {
        screen.textContent += one.textContent;
    }
})

let two = document.querySelector("button.two");

two.addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 2;  
    }
    else {
        screen.textContent += two.textContent;
    }
})