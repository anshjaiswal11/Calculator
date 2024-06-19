
let currentOperation = 'add';

function setOperation(operation) {
    currentOperation = operation;
    document.getElementById('result').innerText = '';
}

function start() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers';
    } else {
        switch (currentOperation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Cannot divide by zero';
                }
                break;
            default:
                result = 'Unknown operation';
                break;
        }
    }

    document.getElementById('result').innerText = `The result is: ${result}`;
}
