const degree = document.querySelector(".degree");
const tempType = document.querySelector(".temp-type");
const convertBtn =  document.querySelector(".convert");
const celsiusField = document.querySelector("#celsius")

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
    convertBtn.setAttribute("disabled", ""); // Initially disable the button

    degree.addEventListener("input", () => {
        if (degree.value.trim() === "") {
            convertBtn.setAttribute("disabled", "");
        } else {
            convertBtn.removeAttribute("disabled");
        }
    });
});


convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
    }, 1000);
});

function convertToCelsius() {
    let inputValue = parseFloat(degree.value);
    setTimeout(() => {
        if (tempType.value === "Fahrenheit") {
            const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
        } else if (tempType.value === "Kelvin") {
            const KelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;C`;
        }
    }, 1200);
}