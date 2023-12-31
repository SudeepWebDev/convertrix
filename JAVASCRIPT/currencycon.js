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

      // currencyConverterPopupP.innerHTML = convertedAmount;
      currencyConverterPopupP.innerHTML = Number(amount)  + ' ' + convertOption1 + ' = ' + convertedAmount + ' ' + convertOption2;
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
    "inr": 1,
    "aed": 0.04441,
    "afn": 1.0468,
    "all": 1.1693,
    "amd": 4.6737,
    "ang": 0.02165,
    "aoa": 10.1277,
    "ars": 3.1450,
    "aud": 0.01817,
    "awg": 0.02165,
    "azn": 0.02057,
    "bam": 0.02171,
    "bbd": 0.02419,
    "bdt": 1.3136,
    "bgn": 0.02171,
    "bhd": 0.004547,
    "bif": 34.1927,
    "bmd": 0.01209,
    "bnd": 0.01633,
    "bob": 0.08386,
    "brl": 0.05929,
    "bsd": 0.01209,
    "btn": 1.0000,
    "bwp": 0.1639,
    "byn": 0.03356,
    "bzd": 0.02419,
    "cad": 0.01614,
    "cdf": 29.8160,
    "chf": 0.01082,
    "clp": 9.6997,
    "cny": 0.08749,
    "cop": 50.2341,
    "crc": 6.5796,
    "cup": 0.2902,
    "cve": 1.2238,
    "czk": 0.2657,
    "djf": 2.1493,
    "dkk": 0.08280,
    "dop": 0.6747,
    "dzd": 1.6473,
    "egp": 0.3743,
    "ern": 0.1814,
    "etb": 0.6672,
    "eur": 0.01110,
    "fjd": 0.02681,
    "fkp": 0.009478,
    "fok": 0.08280,
    "gbp": 0.009478,
    "gel": 0.03133,
    "ggp": 0.009478,
    "ghs": 0.1411,
    "gip": 0.009478,
    "gmd": 0.7598,
    "gnf": 103.5278,
    "gtq": 0.09504,
    "gyd": 2.5650,
    "hkd": 0.09470,
    "hnl": 0.2986,
    "hrk": 0.08362,
    "htg": 1.6736,
    "huf": 4.2976,
    "idr": 183.2056,
    "ils": 0.04483,
    "imp": 0.009478,
    "iqd": 15.8596,
    "irr": 511.5714,
    "isk": 1.6305,
    "jep": 0.009478,
    "jmd": 1.8700,
    "jod": 0.008574,
    "jpy": 1.7291,
    "kes": 1.7059,
    "kgs": 1.0591,
    "khr": 50.3649,
    "kid": 0.01815,
    "kmf": 5.4601,
    "krw": 15.7449,
    "kwd": 0.003716,
    "kyd": 0.01008,
    "kzt": 5.3918,
    "lak": 232.9176,
    "lbp": 181.4020,
    "lkr": 3.7439,
    "lrd": 2.2092,
    "lsl": 0.2307,
    "lyd": 0.05842,
    "mad": 0.1184,
    "mdl": 0.2217,
    "mga": 54.8088,
    "mkd": 0.6831,
    "mmk": 29.2598,
    "mnt": 41.8764,
    "mop": 0.09754,
    "mru": 0.4242,
    "mur": 0.5545,
    "mvr": 0.1871,
    "mwk": 12.8325,
    "mxn": 0.2076,
    "myr": 0.05644,
    "mzn": 0.7751,
    "nad": 0.2307,
    "ngn": 10.2318,
    "nio": 0.4435,
    "nok": 0.1300,
    "npr": 1.6000,
    "nzd": 0.01953,
    "omr": 0.004650,
    "pab": 0.01209,
    "pen": 0.04405,
    "pgk": 0.04331,
    "php": 0.6720,
    "pkr": 3.3484,
    "pln": 0.04980,
    "pyg": 88.4323,
    "qar": 0.04402,
    "ron": 0.05502,
    "rsd": 1.3038,
    "rub": 1.1080,
    "rwf": 14.9102,
    "sar": 0.04535,
    "sbd": 0.1024,
    "scr": 0.1636,
    "sdg": 5.4250,
    "sek": 0.1321,
    "sgd": 0.01633,
    "shp": 0.009478,
    "sle": 0.2413,
    "sll": 241.3083,
    "sos": 6.9019,
    "srd": 0.4584,
    "ssp": 12.0517,
    "stn": 0.2719,
    "syp": 30.4992,
    "szl": 0.2307,
    "thb": 0.4254,
    "tjs": 0.1318,
    "tmt": 0.04230,
    "tnd": 0.03747,
    "top": 0.02825,
    "try": 0.3155,
    "ttd": 0.08201,
    "tvd": 0.01815,
    "twd": 0.3783,
    "tzs": 29.6126,
    "uah": 0.4464,
    "ugx": 44.7972,
    "usd": 0.01209,
    "uyu": 0.4545,
    "uzs": 140.1207,
    "ves": 0.3423,
    "vnd": 288.0301,
    "vuv": 1.4382,
    "wst": 0.03289,
    "xaf": 7.2801,
    "xcd": 0.03265,
    "xdr": 0.009076,
    "xof": 7.2801,
    "xpf": 1.3244,
    "yer": 3.0324,
    "zar": 0.2307,
    "zmw": 0.2189,
    "zwl": 63.9831
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
            // currencyConverterPopupP.innerHTML = convertedAmount;
            currencyConverterPopupP.innerHTML = Number(amount)  + ' ' + convertOption1 + ' = ' + convertedAmount + ' ' + convertOption2;
            break;
          }
        }
      }
    }
  }
}
