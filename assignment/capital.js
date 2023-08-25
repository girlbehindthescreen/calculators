document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate");
    const initialAmountInput = document.getElementById("initialAmount");
    const dailyRateInput = document.getElementById("dailyRate");
    const numberOfDaysInput = document.getElementById("numberOfDays");
    const resultsDiv = document.getElementById("results");

    calculateButton.addEventListener("click", function() {
        const initialAmount = parseFloat(initialAmountInput.value);
        const dailyRate = parseFloat(dailyRateInput.value) / 100;
        const numberOfDays = parseInt(numberOfDaysInput.value);

        if (isNaN(initialAmount) || isNaN(dailyRate) || isNaN(numberOfDays) || initialAmount < 0 || dailyRate < 0 || numberOfDays < 1) {
            resultsDiv.innerHTML = "<p>Please enter valid values.</p>";
        } else {
            resultsDiv.innerHTML = generateResults(initialAmount, dailyRate, numberOfDays);
        }
    });

    function generateResults(initialAmount, dailyRate, numberOfDays) {
        let results = "<h2>Investment Growth:</h2>";
        let currentAmount = initialAmount;

        for (let day = 1; day <= numberOfDays; day++) {
            results += `<p>Day ${day}: $${currentAmount.toFixed(2)}</p>`;
            currentAmount *= (1 + dailyRate);
        }

        return results;
    }
});
