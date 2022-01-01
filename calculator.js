
const resultBox = document.querySelector(".result");

var number1 = "";
var number2 = "";
var operator = "";

const buttons = document.querySelectorAll("#btn");
buttons.forEach(element => {
    element.addEventListener("click", function(e) {
        var buttonValue = e.target.textContent;
        resultBox.textContent = resultBox.textContent + buttonValue;
        if(operator == "") {
            number1 = number1 + buttonValue;
        }
        else {
            number2 = number2 + buttonValue;
        }
    });
});

const operatorButtons = document.querySelectorAll("#btnOp");
operatorButtons.forEach(element => {
    element.addEventListener("click", function(e) {
        var operatorValue = e.target.textContent;
        if(operator == "") {
            resultBox.textContent = resultBox.textContent + operatorValue;
            operator = operatorValue;
        }
        else if(operator != "" && number2 != "") {
            getResult()
            operator = operatorValue;
            resultBox.textContent = resultBox.textContent + operator;
        }
    });
});

const acBtn = document.querySelector("#acBtn");
acBtn.addEventListener("click", () => {
    resultBox.textContent = "";
    number1 = "";
    number2 = "";
    operator = "";
});

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
    getResult();
    operator = "";
});

function getResult() {
    var result;
    switch(operator) {
        case "+":
            result = parseFloat(number1) + parseFloat(number2);
            resultBox.textContent = result;
            console.log(result);
            break;
        case "-":
            result = parseFloat(number1) - parseFloat(number2);
            resultBox.textContent = result;
            break;
        case "*":
            result = parseFloat(number1) * parseFloat(number2);
            resultBox.textContent = result;
            break;
        case "/":
            result = parseFloat(number1) / parseFloat(number2);
            resultBox.textContent = result;
            break;
    }
    number1 = result;
    number2 = "";
}