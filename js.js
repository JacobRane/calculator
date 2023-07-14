let displayResult = document.querySelector('.result');
let displayCurrent = document.querySelector('.current');

function add(a, b) {
    return parseInt(a) + parseInt(b);
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let number = 0;
let operator;
let number2 = 0;
let state = 0;

function operate(num1, operator, num2) {
    if (operator === '+') return add(num1, num2);
    else if (operator === '-') return subtract(num1, num2);
    else if (operator === '*') return multiply(num1, num2);
    else if (operator === '/') return divide(num1, num2)
};

let btn0 = document.querySelector('.btn0')
btn0.addEventListener("click", event => {
    displayCurrent.textContent += '0'
    if (state === 0) number += '0'
    if (state === 1) number2 += '0'
})

let btn1 = document.querySelector('.btn1')
btn1.addEventListener("click", event => {
    displayCurrent.textContent += '1';
    if (state === 0) number += '1'
    if (state === 1) number2 += '1'
}) 
let btn2 = document.querySelector('.btn2')
btn2.addEventListener("click", event => {
    displayCurrent.textContent += '2';
    if (state === 0) number += '2'
    if (state === 1) number2 += '2'
}) 
let btn3 = document.querySelector('.btn3')
btn3.addEventListener("click", event => {
    displayCurrent.textContent += '3'
    if (state === 0) number += '3'
    if (state === 1) number2 += '3'
}) 
let btn4 = document.querySelector('.btn4')
btn4.addEventListener("click", event => {
    displayCurrent.textContent += '4'
    if (state === 0) number += '4'
    if (state === 1) number2 += '4'
}) 
let btn5 = document.querySelector('.btn5')
btn5.addEventListener("click", event => {
    displayCurrent.textContent += '5'
    if (state === 0) number += '5'
    if (state === 1) number2 += '5'
}) 
let btn6 = document.querySelector('.btn6')
btn6.addEventListener("click", event => {
    displayCurrent.textContent += '6'
    if (state === 0) number += '6'
    if (state === 1) number2 += '6'
}) 
let btn7 = document.querySelector('.btn7')
btn7.addEventListener("click", event => {
    displayCurrent.textContent += '7'
    if (state === 0) number += '7'
    if (state === 1) number2 += '7'
}) 
let btn8 = document.querySelector('.btn8')
btn8.addEventListener("click", event => {
    displayCurrent.textContent += '8'
    if (state === 0) number += '8'
    if (state === 1) number2 += '8'
}) 
let btn9 = document.querySelector('.btn9')
btn9.addEventListener("click", event => {
    displayCurrent.textContent += '9'
    if (state === 0) number += '9'
    if (state === 1) number2 += '9'
}) 
let btnDivide = document.querySelector('.btnDivide')
btnDivide.addEventListener("click", event => {
    displayCurrent.textContent += ' / ';
    if (number2 === 0) {
        state = 1;;
        delete number2;
    }
    else {
        state = 0;
        operate(number, '/', number2);
        number2 === 0;
    }
    operator = '/';
}) 
let btnMultiply = document.querySelector('.btnMultiply')
btnMultiply.addEventListener("click", event => {
    displayCurrent.textContent += ' * '
    if (number2 === 0) {
        state = 1;;
        delete number2;
    }
    else {
        state = 0;
        operate(number, '*', number2);
        number2 === 0;
    }
    operator = '*';
}) 
let btnMinus = document.querySelector('.btnMinus')
btnMinus.addEventListener("click", event => {
    displayCurrent.textContent += ' - '
    if (number2 === 0) {
        state = 1;;
        delete number2;
    }
    else {
        state = 0;
        operate(number, '-', number2);
        number2 === 0;
    }
    operator = '-';
}) 
let btnAdd = document.querySelector('.btnAdd')
btnAdd.addEventListener("click", event => {
    displayCurrent.textContent += ' + ';
    if (number2 === 0) {
        state = 1;;
        delete number2;
    }
    else {
        state = 0;
        operate(number, '+', number2);
        number2 === 0;
    }
    operator = '+';
});

let btnEquals = document.querySelector('.btnEquals');
btnEquals.addEventListener("click", event => {
    let finalResult = operate(number, operator, number2)
    displayResult.textContent = Number(finalResult).toFixed(2);
    displayCurrent.textContent = '';
    number = 0;
    number2 = 0;
    state = 0;
})

let btnClear = document.querySelector('.clear');
btnClear.addEventListener("click", event => {
    displayResult.textContent = '';
    displayCurrent.textContent = '';
    number = 0;
    number2 = 0;
    state = 0;
})
let btnBackspace = document.querySelector('.backspace');
btnBackspace.addEventListener("click", event => {
    displayCurrent.textContent = displayCurrent.textContent.slice(0, -1)
    if (state === 0) number = number.slice(0, -1)
    else if (state === 1) number2 = number2.slice(0, -1)
})