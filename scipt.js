function calculate() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const age = document.getElementById("age").value;
    const activity = document.getElementById("activity").value;

    if (!height || !weight || !age) {
        alert("Fill all fields");
        return;
    }

    // BMI Formula
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Normal";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    // BMR (Mifflin-St Jeor)
    const bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    const calories = Math.round(bmr * activity);

    document.getElementById("result").innerHTML = `
        <h3>📊 Your Fitness Report</h3>
        <p><b>BMI:</b> ${bmi}</p>
        <p><b>Status:</b> ${status}</p>
        <p><b>Daily Calories:</b> ${calories} kcal</p>
    `;

    document.getElementById("result").classList.remove("hidden");
}
