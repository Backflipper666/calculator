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

//add eventListener so that when a number is pressed, it'll be shown on the screen
//do the previous step to operators too

let screen = document.querySelector("span");
screen.textContent = 0;



let one = document.querySelector("button.one");
console.log(one);

one.addEventListener("click", (event) => {
    let display = Number(screen.textContent);
    Number(screen.textContent = 1);
    console.log(typeof(screen.textContent));
})

//console.log(zero);

