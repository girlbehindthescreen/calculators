document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate");
    const numberInput = document.getElementById("number");
    const resultParagraph = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const num = parseInt(numberInput.value);

        if (isNaN(num) || num < 0) {
            resultParagraph.textContent = "Please enter a non-negative number.";
        } else {
            const factorial = calculateFactorial(num);
            resultParagraph.textContent = `The factorial of ${num} is ${factorial}`;
        }
    });

    function calculateFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * calculateFactorial(n - 1);
        }
    }
});
