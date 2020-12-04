// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-button');
const addOutput = document.getElementById('add-results');

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const addNumber1 = Number(addInput1.value);
    const addNumber2 = Number(addInput2.value);
    const addResult = addNumber1 + addNumber2;
    alert ('CALCULATING');
    addOutput.textContent = addResult;
});

const subInput1 = document.getElementById('sub-input1');
const subInput2 = document.getElementById('sub-input2');
const subButton = document.getElementById('sub-button');
const subOutput = document.getElementById('sub-results');

subButton.addEventListener('click', () => {
    const subNumber1 = Number(subInput1.value);
    const subNumber2 = Number(subInput2.value);
    const subResult = subNumber1 - subNumber2;
    alert ('CALCULATING');
    subOutput.textContent = subResult;
});

const multiInput1 = document.getElementById('multi-input1');
const multiInput2 = document.getElementById('multi-input2');
const multiButton = document.getElementById('multi-button');
const multiOutput = document.getElementById('multi-results');

multiButton.addEventListener('click', () => {
    const multiNumber1 = Number(multiInput1.value);
    const multiNumber2 = Number(multiInput2.value);
    const multiResult = multiNumber1 * multiNumber2;
    alert ('CALCULATING');
    multiOutput.textContent = multiResult;
});

const divInput1 = document.getElementById('div-input1');
const divInput2 = document.getElementById('div-input2');
const divButton = document.getElementById('div-button');
const divOutput = document.getElementById('div-results');

divButton.addEventListener('click', () => {
    const divNumber1 = Number(divInput1.value);
    const divNumber2 = Number(divInput2.value);
    const divResult = divNumber1 / divNumber2;
    alert ('CALCULATING');
    divOutput.textContent = divResult;
});