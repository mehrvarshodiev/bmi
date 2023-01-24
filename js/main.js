const container = document.querySelector(".container");
const headingText = document.createElement("h2");
const form = document.createElement("form");
const labelForHeight = document.createElement("label");
const heightInput = document.createElement("input");
const labelForWeight = document.createElement("label");
const weightInput = document.createElement("input");
const btnBlock = document.createElement("div");
const calculateBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const resultText = document.createElement("p");

headingText.innerHTML = "Calculation Of Body Mass Index (BMI)";
headingText.classList.add("headingText");
form.classList.add("form");
labelForHeight.innerHTML = "Height (cm): ";
labelForHeight.classList.add("label");
labelForWeight.classList.add("label");
labelForWeight.innerHTML = "Weight (kg): ";
heightInput.type = "text";
heightInput.classList.add("input");
weightInput.type = "text";
weightInput.classList.add("input");
btnBlock.classList.add("btn-block");
calculateBtn.innerHTML = "Calculate";
calculateBtn.type = "button";
resetBtn.innerHTML = "Reset";
calculateBtn.classList.add("calculate-btn");
resetBtn.classList.add("reset-btn");
resultText.classList.add("result-text");

calculateBtn.addEventListener("click", function(param) {
    let countBMI =
        Number(weightInput.value) / Number(Math.pow(heightInput.value / 100, 2));
    resultText.innerHTML = countBMI;
    if (heightInput.value > 0 && weightInput.value > 0) {
        if (countBMI > 0 && countBMI < 18.5) {
            resultText.innerHTML = "UnderWeight";
            resultText.style.borderBottom = "2px solid red";
        } else if (countBMI > 18.5 && countBMI < 24.9) {
            resultText.innerHTML = "NormalWeight";
            resultText.style.borderBottom = "2px solid green";
        } else if (countBMI > 24.9 && countBMI < 29.9) {
            resultText.innerHTML = "OverWeight";
            resultText.style.borderBottom = "2px solid red";
        } else {
            resultText.innerHTML = "Obese";
            resultText.style.borderBottom = "2px solid red";
        }
    } else if (
        (heightInput.value == "" || weightInput.value == "") ||
        (isNaN(heightInput.value) && isNaN(weightInput.value))
    ) {
        resultText.innerHTML = "Please fill fields with positive numbers!";
        resultText.style.borderBottom = "2px solid red";
    } else {
        resultText.innerHTML = "Value of fields can't be 0 and less than it";
        resultText.style.borderBottom = "2px solid red";
    }
});
container.appendChild(headingText);

container.appendChild(form);
labelForHeight.appendChild(heightInput);
labelForWeight.appendChild(weightInput);
form.appendChild(labelForHeight);
form.appendChild(labelForWeight);
form.appendChild(btnBlock);
btnBlock.appendChild(calculateBtn);
btnBlock.appendChild(resetBtn);
form.appendChild(resultText);
