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
let display = screen.textContent;
let operand = null;



let one = document.querySelector("button.one");


one.addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 1;  
        
    }
    else if (screen.textContent == "+") {
        console.log("Plus indeed");
        screen.textContent = null;
        screen.textContent = 1;  
    }
    else if (screen.textContent == "-") {
        console.log("minus indeed");
        screen.textContent = null;
        screen.textContent = 1;

    }
    else if (screen.textContent == "×") {
        console.log("× indeed");
        screen.textContent = null;
        screen.textContent = 1;

    }
    else if (screen.textContent == "/") {
        console.log("/ indeed");
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
        //firstOperator = screen.textContent;
        
    }
    else if (screen.textContent == "+") {
        console.log("Plus indeed");
        screen.textContent = null;
        screen.textContent = 2;  
    }
    else if (screen.textContent == "-") {
        console.log("minus indeed");
        screen.textContent = null;
        screen.textContent = 2;

    }
    //×
    else if (screen.textContent == "×") {
        console.log("× indeed");
        screen.textContent = null;
        screen.textContent = 2;

    }
    else if (screen.textContent == "/") {
        console.log("/ indeed");
        screen.textContent = null;
        screen.textContent = 2;

    }
    else {
        screen.textContent += two.textContent;
        //firstOperator = screen.textContent;
        //console.log("first op is: " + firstOperator)
        
    }
})


let three = document.querySelector("button.three");

three .addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 3;  
        
    }
    else if (screen.textContent == "+") {
        console.log("Plus indeed");
        screen.textContent = null;
        screen.textContent = 3;  
    }
    else if (screen.textContent == "-") {
        console.log("minus indeed");
        screen.textContent = null;
        screen.textContent = 3;

    }
    else if (screen.textContent == "×") {
        console.log("× indeed");
        screen.textContent = null;
        screen.textContent = 3;

    }
    else if (screen.textContent == "/") {
        console.log("/ indeed");
        screen.textContent = null;
        screen.textContent = 3;

    }
    else {
        screen.textContent += three.textContent;
        
    }
})


let four = document.querySelector("button.four");

four .addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 4;  
    }
    else if (screen.textContent == "+") {
        console.log("Plus indeed");
        screen.textContent = null;
        screen.textContent = 4;  
    }
    else if (screen.textContent == "-") {
        console.log("minus indeed");
        screen.textContent = null;
        screen.textContent = 4;

    }
    else if (screen.textContent == "×") {
        console.log("× indeed");
        screen.textContent = null;
        screen.textContent = 4;

    }
    else if (screen.textContent == "/") {
        console.log("/ indeed");
        screen.textContent = null;
        screen.textContent = 4;

    }
    else {
        screen.textContent += four.textContent;
    }
})


let five = document.querySelector("button.five");

five.addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 5;  
    }
    else if (screen.textContent == "+") {
        console.log("Plus indeed");
        screen.textContent = null;
        screen.textContent = 5;  
    }
    else if (screen.textContent == "-") {
        console.log("minus indeed");
        screen.textContent = null;
        screen.textContent = 5;

    }
    else if (screen.textContent == "×") {
        console.log("× indeed");
        screen.textContent = null;
        screen.textContent = 5;

    }
    else if (screen.textContent == "/") {
        console.log("/ indeed");
        screen.textContent = null;
        screen.textContent = 5;

    }
    else {
        screen.textContent += five.textContent;
    }
})


let six = document.querySelector("button.six");

six.addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 6;  
    }
    else if (screen.textContent == "+") {
        console.log("Plus indeed");
        screen.textContent = null;
        screen.textContent = 6;  
    }
    else if (screen.textContent == "-") {
        console.log("minus indeed");
        screen.textContent = null;
        screen.textContent = 6;

    }
    else if (screen.textContent == "×") {
        console.log("× indeed");
        screen.textContent = null;
        screen.textContent = 6;

    }
    else if (screen.textContent == "/") {
        console.log("/ indeed");
        screen.textContent = null;
        screen.textContent = 6;

    }
    else {
        screen.textContent += six.textContent;
    }
})


let seven = document.querySelector("button.seven");

seven.addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 7;  
    }
    else if (screen.textContent == "+") {
        console.log("Plus indeed");
        screen.textContent = null;
        screen.textContent = 7;  
    }
    else if (screen.textContent == "-") {
        console.log("minus indeed");
        screen.textContent = null;
        screen.textContent = 7;

    }
    else if (screen.textContent == "×") {
        console.log("× indeed");
        screen.textContent = null;
        screen.textContent = 7;

    }
    else if (screen.textContent == "/") {
        console.log("/ indeed");
        screen.textContent = null;
        screen.textContent = 7;

    }
    else {
        screen.textContent += seven.textContent;
    }
})


let eight = document.querySelector("button.eight");

eight.addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 8;  
    }
    else if (screen.textContent == "+") {
        console.log("Plus indeed");
        screen.textContent = null;
        screen.textContent = 8;  
    }
    else if (screen.textContent == "-") {
        console.log("minus indeed");
        screen.textContent = null;
        screen.textContent = 8;

    }
    else if (screen.textContent == "×") {
        console.log("× indeed");
        screen.textContent = null;
        screen.textContent = 8;

    }
    else if (screen.textContent == "/") {
        console.log("/ indeed");
        screen.textContent = null;
        screen.textContent = 8;

    }
    else {
        screen.textContent += eight.textContent;
    }
})


let nine = document.querySelector("button.nine");

nine.addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 9;  
    }
    else if (screen.textContent == "+") {
        console.log("Plus indeed");
        screen.textContent = null;
        screen.textContent = 9;  
    }
    else if (screen.textContent == "-") {
        console.log("minus indeed");
        screen.textContent = null;
        screen.textContent = 9;

    }
    else if (screen.textContent == "×") {
        console.log("× indeed");
        screen.textContent = null;
        screen.textContent = 9;

    }
    else if (screen.textContent == "/") {
        console.log("/ indeed");
        screen.textContent = null;
        screen.textContent = 9;

    }
    else {
        screen.textContent += nine.textContent;
    }
})


let zero = document.querySelector("button.zero");

zero.addEventListener("click", (event) => {
    if (screen.textContent == 0) {
        screen.textContent = null;
        screen.textContent = 0;  
    }
    else if (screen.textContent == "+") {
        console.log("Plus indeed");
        screen.textContent = null;
        screen.textContent = 0;  
    }
    else if (screen.textContent == "-") {
        console.log("minus indeed");
        screen.textContent = null;
        screen.textContent = 0;

    }
    else if (screen.textContent == "×") {
        console.log("× indeed");
        screen.textContent = null;
        screen.textContent = 0;

    }
    else if (screen.textContent == "/") {
        console.log("/ indeed");
        screen.textContent = null;
        screen.textContent = 0;

    }
    else {
        screen.textContent += zero.textContent;
    }
})

let clear = document.querySelector("button.clear");

clear.addEventListener("click", (event) => {
    screen.textContent = 0;
})

let plus = document.querySelector("button.plus");

plus.addEventListener("click", (event) => {
    firstOperator = screen.textContent;
    console.log(firstOperator);
    screen.textContent = "+";
    operand = "+";
})

let minus = document.querySelector("button.minus");

minus.addEventListener("click", (event) => {
    firstOperator = screen.textContent;
    console.log(firstOperator);
    screen.textContent = "-";
    operand = "-";
})

let multiplyBtn = document.querySelector("button.multiply");

multiplyBtn.addEventListener("click", (event) => {
    firstOperator = screen.textContent;
    console.log(firstOperator);
    screen.textContent = "×";
    operand = "×";
})

let divideBtn = document.querySelector("button.divide");

divideBtn.addEventListener("click", (event) => {
    firstOperator = screen.textContent;
    console.log(firstOperator);
    screen.textContent = "/";
    operand = "/";
})

let equal = document.querySelector("button.equal");

equal.addEventListener("click", (equal) => {
    secondOperator = screen.textContent;
    if (operand == "+") screen.textContent = (Number(firstOperator) + Number(secondOperator));
    else if (operand == "-") screen.textContent = (Number(firstOperator) - Number(secondOperator));
    else if (operand == "/") screen.textContent = (Number(firstOperator) / Number(secondOperator));
    else if (operand == "×") screen.textContent = (Number(firstOperator) * Number(secondOperator));
    console.log(operand);
})
