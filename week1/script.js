function convertToVnd() {
    let currencyType = document.querySelector('input[name="currency"]:checked').value;
    callApi(currencyType);
}
function callApi(currency) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://free.currencyconverterapi.com/api/v6/convert?q=' + currency + '_VND&compact=ultra&apiKey=1c898f56dbb0dcde1c3e');
    xhr.onload = function() {
        if (xhr.status === 200) {
            updateResults(JSON.parse(xhr.responseText));
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}
  
function updateResults(response) {
    // console.log();
    let currencyType = document.querySelector('input[name="currency"]:checked').value;
    let conversion = Object.values(response)[0];
    let amount = document.getElementById("amount").value;
    let vndAmount = amount*conversion;
    let result = document.getElementById('result');
    result.innerHTML = amount+" "+currencyType +" is "+ vndAmount + " VND"
}