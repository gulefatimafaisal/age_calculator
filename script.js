let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    if (!birthDate.getTime()) {
        result.innerHTML = "Please enter a valid date.";
        return;
    }

    let today = new Date();

    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    if (days < 0) {
        months--;
        days += getDaysInMonth(currentYear, currentMonth - 1);
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
