function convertToVnd() {
    let conversion = 23262;
    let amount = document.getElementById("amount").value;
    let vndAmount = amount*conversion;
    let result = document.getElementById('result');
    result.innerHTML = "50 USD is " + vndAmount + " VND"

    let currencyType = document.querySelector('input[name="currency"]:checked').value;

}