function convertToVnd() {
    callApi('USD');
    let conversion = 23262;
    let vndAmount = 50;
    let result = document.getElementById('result');
    result.innerHTML = vndAmount
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
    console.log(response['USD_VND']);
}