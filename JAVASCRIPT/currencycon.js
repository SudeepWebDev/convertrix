const convertButton = document.querySelector('.convert-btn');
const currencyConverterPopupP = document.querySelector('.currency-converter-popup p');
const currencyConverterPopupCont = document.querySelector('.currency-converter-popup');

convertButton.addEventListener('click', async function convert() {
  const convertOption1 = document.querySelector('select#a1').value.toUpperCase();
  const convertOption2 = document.querySelector('select#a2').value.toUpperCase();
  const amount = document.getElementById('amount').value;

  currencyConverterPopupP.style.display = 'flex';
  currencyConverterPopupCont.style.display = 'flex';

  try {
    const response = await fetch('https://v6.exchangerate-api.com/v6/fb230eb436df708215fa43f1/latest/USD');
    const data = await response.json();

    if (data.result === 'success') {
      const exchangeRates = data.conversion_rates;
      const exchangeRate1 = exchangeRates[convertOption1];
      const exchangeRate2 = exchangeRates[convertOption2];

      let convertedAmount;

      if (convertOption1 === 'USD') {
        convertedAmount = Number(amount) * exchangeRate2;
      } else if (convertOption2 === 'USD') {
        convertedAmount = Number(amount) / exchangeRate1;
      } else {
        convertedAmount = (Number(amount) / exchangeRate1) * exchangeRate2;
      }

      currencyConverterPopupP.innerHTML = convertedAmount;
    } else {
      throw new Error('Failed to fetch exchange rates');
    }
  } catch (error) {
    console.log('An error occurred while fetching exchange rates:', error);
    performManualConversion(convertOption1.toLowerCase(), convertOption2.toLowerCase(), amount);
  }
});

let currencyConverterPopupBtn = document.querySelector('.currency-converter-popup button');
currencyConverterPopupBtn.addEventListener('click', function reConvert() {
  currencyConverterPopupCont.style.display = 'none';
});

function performManualConversion(convertOption1, convertOption2, amount) {
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
  };

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
}
