function convertTemp() {

    let temp = document.getElementById("temp").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;

    let result = document.getElementById("result");
    let error = document.getElementById("error");

    result.innerHTML = "";
    error.innerHTML = "";

    if (temp === "") {
        error.innerHTML = "Please enter a temperature.";
        return;
    }

    temp = parseFloat(temp);

    let celsius;

    // Convert to Celsius first
    if (from === "C") {
        celsius = temp;
    }
    else if (from === "F") {
        celsius = (temp - 32) * 5 / 9;
    }
    else if (from === "K") {
        celsius = temp - 273.15;
    }

    let finalTemp;

    // Convert Celsius to selected unit
    if (to === "C") {
        finalTemp = celsius;
    }
    else if (to === "F") {
        finalTemp = (celsius * 9 / 5) + 32;
    }
    else if (to === "K") {
        finalTemp = celsius + 273.15;
    }

    result.innerHTML =
        `${temp}° ${from} = ${finalTemp.toFixed(2)}° ${to}`;
}