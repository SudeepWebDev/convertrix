



// dynamic css
const dynamic_text = ['Currency', 'Length', 'Temperature', 'Area'];
const dynamic_textH3 = document.getElementById('dynamic_textH3');
let currentIndex = 0;

const showConverterName = () => {
  const converterName = dynamic_text[currentIndex];
  dynamic_textH3.textContent = '';

  let currentIndex2 = 0;
  const typeCharacter = () => {
    if (currentIndex2 < converterName.length) {
      dynamic_textH3.textContent += converterName[currentIndex2];
      currentIndex2++;
      setTimeout(typeCharacter, 100); 
    } else {
      setTimeout(() => {
        backspaceCharacter(); 
      }, 1000); 
    }
  };

  const backspaceCharacter = () => {
    let text = dynamic_textH3.textContent;
    if (text.length > 0) {
      dynamic_textH3.textContent = text.slice(0, -1); 
      setTimeout(backspaceCharacter, 50);
    } else {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % dynamic_text.length;
        showConverterName(); 
      }, 1000); 
    }
  };

  typeCharacter(); 
};

showConverterName();

const chatSection = document.getElementById('chat-section');
const chatToggle = document.getElementById('chat-toggle');
const chatToggleIcon = document.querySelector('#chat-toggle i');
chatToggle.addEventListener('click', function () {
  chatToggleIcon.classList.toggle('fa-minus');
  chatSection.classList.toggle('hide-chat');
});



// calculator


let result = document.getElementById('result');
let hasError = false;

function appendValue(value) {
  if (hasError) {
    clearResult();
  }
  result.value += value;
}
function calculate() {
  try {
    if (/[*\/]$/.test(result.value)) {
      throw new Error('Please enter another number or perform a valid calculation');
    }
    let calculatedResult = eval(result.value);
    if (isNaN(calculatedResult)) {
      throw new Error('Invalid calculation');
    }

    let significantFigures = getSignificantFigures(calculatedResult);

    result.value = formatNumber(calculatedResult, significantFigures);
    hasError = false;
  } catch (error) {
    result.value = error.message;
    hasError = true;
  }
}

function getSignificantFigures(number) {
  let numberString = number.toString();

  if (numberString.startsWith('-')) {
    numberString = numberString.substring(1);
  }

  numberString = numberString.replace(/e[+-]\d+$/i, '');

  if (Number.isInteger(number)) {
    numberString = numberString.replace('.', '');
  }

  numberString = numberString.replace(/^0+/, '');

  let significantFigures = numberString.replace(/[^\d]/g, '').length;

  return significantFigures;
}

function formatNumber(number, significantFigures) {
  if (Number.isInteger(number)) {
    return number.toString();
  } else {
    return number.toPrecision(significantFigures);
  }
}
function clearResult() {
  result.value = '';
  hasError = false;
}
