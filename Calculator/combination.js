document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate");
    const nInput = document.getElementById("n");
    const rInput = document.getElementById("r");
    const resultParagraph = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const n = parseInt(nInput.value);
        const r = parseInt(rInput.value);

        if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
            resultParagraph.textContent = "Please enter valid values for n and r.";
        } else {
            const combination = calculateCombination(n, r);
            resultParagraph.textContent = `Combination C(${n},${r}) = ${combination}`;
        }
    });

    function calculateCombination(n, r) {
        const factorial = (num) => {
            if (num === 0 || num === 1) {
                return 1;
            } else {
                return num * factorial(num - 1);
            }
        };

        return factorial(n) / (factorial(r) * factorial(n - r));
    }
});
