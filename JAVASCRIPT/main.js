

const currencyValueINR = {
    'inr': 1,
    'usd': 0.0122,
    'eur': 0.0112,
    'gbp': 0.0096,
    'jpy': 1.7654,
    'aud': 0.0183,
    'cad': 0.0162,
    'chf': 0.0109,
    'cny': 0.0883,
    'hkd': 0.0956,

}


const convertButton = document.querySelector('.convert-btn');

convertButton.addEventListener('click', function convert() {
    const convertOption1 = document.querySelector('select#a1').value;
    const convertOption2 = document.querySelector('select#a2').value;
    const amount = document.getElementById('amount').value;
    let currencyConverterPopupP = document.querySelector('.currency-converter-popup p');
    let currencyConverterPopupCont = document.querySelector('.currency-converter-popup');

    
    currencyConverterPopupP.style.display = 'flex';
    currencyConverterPopupCont.style.display = 'flex';

    let convertedAmount;
    let convertedAmountINR;

    for (keys in currencyValueINR) {
        if (keys == convertOption2) {
            if (convertOption1 == 'inr') {
                convertedAmount = Number(amount) * currencyValueINR[keys];
                currencyConverterPopupP.innerHTML = convertedAmount;
                break;
            } else {

                for (keys2 in currencyValueINR) {
                    if (keys2 == convertOption1) {
                        convertedAmountINR = Number(amount) / currencyValueINR[keys2];
                        convertedAmount = convertedAmountINR * currencyValueINR[convertOption2];
                        currencyConverterPopupP.innerHTML = convertedAmount;
                        break;
                    }
                }
            }
        }
    }
});


let currencyConverterPopupBtn = document.querySelector('.currency-converter-popup button');
currencyConverterPopupBtn.addEventListener('click', function reConvert() {
    let currencyConverterPopupCont = document.querySelector('.currency-converter-popup');

    currencyConverterPopupCont.style.display = "none";    
})

  
