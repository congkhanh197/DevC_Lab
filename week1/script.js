function convertToVnd() {
    let conversion = 23262;
    let amount = document.getElementById("amount").value;
    let vndAmount = amount*conversion;
    document.write("50 USD is " + vndAmount + " VND");
}