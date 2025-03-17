function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        expression = expression.replace(/%/g, '/100'); 
        document.getElementById("display").value = eval(expression);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
