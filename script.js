'use strict';

// TODO: Minuszahlen, ESC = reset

let display = '';
let operator = '';
let firstNumber = 0;
let secondNumber = 0;

document.querySelector('.num1').addEventListener('click', function () {
  display += 1;
  document.querySelector('.display').textContent = display;
});
document.querySelector('.num2').addEventListener('click', function () {
  display += 2;
  document.querySelector('.display').textContent = display;
});
document.querySelector('.num3').addEventListener('click', function () {
  display += 3;
  document.querySelector('.display').textContent = display;
});
document.querySelector('.num4').addEventListener('click', function () {
  display += 4;
  document.querySelector('.display').textContent = display;
});
document.querySelector('.num5').addEventListener('click', function () {
  display += 5;
  document.querySelector('.display').textContent = display;
});
document.querySelector('.num6').addEventListener('click', function () {
  display += 6;
  document.querySelector('.display').textContent = display;
});
document.querySelector('.num7').addEventListener('click', function () {
  display += 7;
  document.querySelector('.display').textContent = display;
});
document.querySelector('.num8').addEventListener('click', function () {
  display += 8;
  document.querySelector('.display').textContent = display;
});
document.querySelector('.num9').addEventListener('click', function () {
  display += 9;
  document.querySelector('.display').textContent = display;
});
document.querySelector('.num0').addEventListener('click', function () {
  if (display) {
    display += 0;
    document.querySelector('.display').textContent = display;
  }
});

document.querySelector('.plus').addEventListener('click', function () {
  operator = 'plus';
  firstNumber = Number(display);
  display = '';
});
document.querySelector('.minus').addEventListener('click', function () {
  operator = 'minus';
  firstNumber = Number(display);
  display = '';
});
document.querySelector('.multiply').addEventListener('click', function () {
  operator = 'multiply';
  firstNumber = Number(display);
  display = '';
});
document.querySelector('.divide').addEventListener('click', function () {
  operator = 'divide';
  firstNumber = Number(display);
  display = '';
});

document.querySelector('.comma').addEventListener('click', function () {
  if (!display.includes('.') && display) {
    display += '.';
    document.querySelector('.display').textContent = display;
  }
});

document.querySelector('.equals').addEventListener('click', function () {
  secondNumber = Number(display);

  if (operator === 'plus')
    document.querySelector('.display').textContent = firstNumber + secondNumber;
  else if (operator === 'minus')
    document.querySelector('.display').textContent = firstNumber - secondNumber;
  else if (operator === 'multiply')
    document.querySelector('.display').textContent = firstNumber * secondNumber;
  else if (operator === 'divide')
    document.querySelector('.display').textContent = firstNumber / secondNumber;

  display = '';
});
