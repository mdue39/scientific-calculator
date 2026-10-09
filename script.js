
const display = document.getElementById('display');

function addToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";

}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
    function calculateFunction(functionName) {
        try {
            let number =  Number(display.value);
            switch (functionName) {
                case "sin":
                    display.value = Math.sin(number * Math.PI / 180);
                    break;
                case "cos":
                    display.value = Math.cos(number * Math.PI / 180);   
                break;
                case "tan":
                    display.value = Math.tan(number * Math.PI / 180);   
                break;
                case "sqrt":
                    display.value = Math.sqrt(number);   
                break;
                case "square":
                    display.value = Math.pow(number, 2);   
                break;
                case "log":
                    display.value = Math.log10(number);   
                break;
                case "ln":
                    display.value = Math.log(number);   
                break;
                case "factorial":
                    display.value = factorial(number);
                    break;
            }
        } catch (error) {
            display.value = "Error";
        }
    }   
    function factorial(number) {
        if (number < 0) {
            return "Error";
        }
        if (number === 0 || number === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }   
        return result;
    }
