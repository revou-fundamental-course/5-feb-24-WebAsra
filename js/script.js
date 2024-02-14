function konversi() {
    var celcius = parseFloat(document.getElementById("dalam_angka").value);
        if (isNaN(celcius)) {
            alert("Mohon masukkan suhu dalam bentuk angka.");
            return;
        }
        var fahrenheit = (celcius * 9/5) + 32;
        document.getElementById("keluar").value = fahrenheit.toFixed(2);
        document.getElementById("keluar_kalkulasi").value = "Suhu F = (Suhu C x 9/5) + 32 = (" + celcius + " x 9/5) + 32 = " + fahrenheit.toFixed(2);
    }
  
    function reset() {
        document.getElementById("dalam_angka").value = "";
        document.getElementById("keluar").value = "";
        document.getElementById("keluar_kalkulasi").value = "";
    }
  
    function togglekonversi() {
        var celciusInput = document.getElementById("dalam_angka");
        var fahrenheitInput = document.getElementById("keluar");
        var kalkulasiOutput = document.getElementById("keluar_kalkulasi");
  
        var tempVal = celciusInput.value;
        var tempUnit = "°C";
        if (fahrenheitInput.value !== "") {
            tempVal = fahrenheitInput.value;
            tempUnit = "°F";
        }
  
        var fahrenheit = 0;
        if (tempUnit === "°C") {
            fahrenheit = (parseFloat(tempVal) * 9/5) + 32;
        } else {
            fahrenheit = (parseFloat(tempVal) - 32) * 5/9;
        }
  
        celciusInput.value = fahrenheit.toFixed(2);
        fahrenheitInput.value = tempVal;
        kalkulasiOutput.value = "Suhu " + tempUnit + " = (Suhu " + (tempUnit === "°C" ? "F" : "C") + " x " + (tempUnit === "°C" ? "5/9" : "9/5") + ") + " + (tempUnit === "°C" ? "32" : "");
    };