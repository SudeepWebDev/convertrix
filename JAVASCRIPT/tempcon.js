const convertButton = document.querySelector('.convert-btn');

function convertk2c(amount) {
  const converted = Number(amount) - 273.15;
  return converted;
}

function convertk2f(amount) {
  const converted = 1.8 * (Number(amount) - 273.15) + 32;
  return converted;
}

function convertk2r(amount) {
  const converted = 1.8 * Number(amount);
  return converted;
}

function convertk2re(amount) {
  const converted = (Number(amount) - 273.15) * 0.8;
  return converted;
}

function convertc2k(amount) {
  const converted = Number(amount) +273.15;
  return converted;
}

function convertf2k(amount) {
  const converted = (Number(amount) - 32) * (5 / 9) + 273.15;
  return converted;
}

function convertr2k(amount) {
  const converted = Number(amount) / 1.8;
  return converted;
}

function convertre2k(amount) {
  const converted = (Number(amount) / 0.8) + 273.15;
  return converted;
}

function convertTemperature(amount, fromUnit, toUnit) {
  let converted;

  if (fromUnit === toUnit) {
    converted = amount;
  } else if (fromUnit === 'k' && toUnit === 'c') {
    converted = convertk2c(amount);
  } else if (fromUnit === 'k' && toUnit === 'f') {
    converted = convertk2f(amount);
  } else if (fromUnit === 'k' && toUnit === 'r') {
    converted = convertk2r(amount);
  } else if (fromUnit === 'k' && toUnit === 're') {
    converted = convertk2re(amount);
  } else if (fromUnit === 'c' && toUnit === 'k') {
    converted = convertc2k(amount);
  } else if (fromUnit === 'c' && toUnit === 'f') {
    converted = convertk2f(convertc2k(amount));
  } else if (fromUnit === 'c' && toUnit === 'r') {
    converted = convertr2k(convertc2k(amount));
  } else if (fromUnit === 'c' && toUnit === 're') {
    converted = convertk2re(convertc2k(amount));
  } else if (fromUnit === 'f' && toUnit === 'k') {
    converted = convertf2k(amount);
  } else if (fromUnit === 'f' && toUnit === 'c') {
    converted = convertk2c(convertf2k(amount));
  } else if (fromUnit === 'f' && toUnit === 'r') {
    converted = convertr2k(convertf2k(amount));
  } else if (fromUnit === 'f' && toUnit === 're') {
    converted = convertk2re(convertf2k(amount));
  } else if (fromUnit === 'r' && toUnit === 'k') {
    converted = convertr2k(amount);
  } else if (fromUnit === 'r' && toUnit === 'c') {
    converted = convertk2c(convertr2k(amount));
  } else if (fromUnit === 'r' && toUnit === 'f') {
    converted = convertk2f(convertr2k(amount));
  } else if (fromUnit === 'r' && toUnit === 're') {
    converted = convertk2re(convertr2k(amount));
  } else if (fromUnit === 're' && toUnit === 'k') {
    converted = convertre2k(amount);
  } else if (fromUnit === 're' && toUnit === 'c') {
    converted = convertk2c(convertre2k(amount));
  } else if (fromUnit === 're' && toUnit === 'f') {
    converted = convertk2f(convertre2k(amount));
  } else if (fromUnit === 're' && toUnit === 'r') {
    converted = convertr2k(convertre2k(amount));
  } else {
    console.log('Invalid conversion options.');
    return null;
  }

  return converted;
}

convertButton.addEventListener('click', function convert() {
  const convertOption1 = document.querySelector('select#a1').value;
  const convertOption2 = document.querySelector('select#a2').value;
  const amount = document.getElementById('amount').value;

  const result = convertTemperature(amount, convertOption1, convertOption2);

  const tempConverterPopupP = document.querySelector('.currency-converter-popup p');
  const tempConverterPopupCont = document.querySelector('.currency-converter-popup');

  tempConverterPopupP.style.display = 'flex';
  tempConverterPopupCont.style.display = 'flex';

  tempConverterPopupP.innerHTML = result;
});

const tempConverterPopupBtn = document.querySelector('.currency-converter-popup button');
tempConverterPopupBtn.addEventListener('click', function reConvert() {
  const tempConverterPopupCont = document.querySelector('.currency-converter-popup');

  tempConverterPopupCont.style.display = 'none';
});
