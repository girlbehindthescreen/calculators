document.addEventListener("DOMContentLoaded", function() {
    const countdownDiv = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date();
        const christmas = new Date(now.getFullYear(), 11, 25); // December is 11 (0-based index)
        const timeDifference = christmas - now;

        const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
        const weeks = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("months").innerText = padNumber(months);
        document.getElementById("weeks").innerText = padNumber(weeks);
        document.getElementById("days").innerText = padNumber(days);
        document.getElementById("hours").innerText = padNumber(hours);
        document.getElementById("minutes").innerText = padNumber(minutes);
        document.getElementById("seconds").innerText = padNumber(seconds);
    }

    function padNumber(number) {
        return number.toString().padStart(2, "0");
    }

    // Initial update
    updateCountdown();

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});
