

const lengthValueM = {
    'm': 1,
    'mm': 1000,
    'cm': 100,
    'km': 0.001,
    'in': 39.3701,
    'ft': 3.28084,
    'yd': 1.09361,
    'mi': 0.000621

}


const convertButton = document.querySelector('.convert-btn');

convertButton.addEventListener('click', function convert() {
    const convertOption1 = document.querySelector('select#a1').value;
    const convertOption2 = document.querySelector('select#a2').value;
    const amount = document.getElementById('amount').value;
    let lengthConverterPopupP = document.querySelector('.currency-converter-popup p');
    let lengthConverterPopupCont = document.querySelector('.currency-converter-popup');

    
    lengthConverterPopupP.style.display = 'flex';
    lengthConverterPopupCont.style.display = 'flex';

    let convertedAmount;
    let convertedAmountM;

    for (keys in lengthValueM) {
        if (keys == convertOption2) {
            if (convertOption1 == 'm') {
                convertedAmount = Number(amount) * lengthValueM[keys];
                lengthConverterPopupP.innerHTML = convertedAmount;
                break;
            } else {

                for (keys2 in lengthValueM) {
                    if (keys2 == convertOption1) {
                        convertedAmountM = Number(amount) / lengthValueM[keys2];
                        convertedAmount = convertedAmountM * lengthValueM[convertOption2];
                        lengthConverterPopupP.innerHTML = convertedAmount;
                        break;
                    }
                }
            }
        }
    }
});


let lengthConverterPopupBtn = document.querySelector('.currency-converter-popup button');
lengthConverterPopupBtn.addEventListener('click', function reConvert() {
    let lengthConverterPopupCont = document.querySelector('.currency-converter-popup');

    lengthConverterPopupCont.style.display = "none";    
})

  
