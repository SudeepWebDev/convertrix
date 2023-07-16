



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
let decimalEntered = false;
let operators = ['+', '-', '*', '/', '%']; 

function appendValue(value) {
  if (hasError) {
    clearResult();
  }

  if (value === '.' && decimalEntered) {
    return; 
  }

  if (value === '.') {
    decimalEntered = true;
  }
  if (['*', '/', '%'].includes(value)) {
    const lastChar = result.value.slice(-1);
    if (['+', '-'].includes(lastChar)) {
      result.value += value;
      return;
    }
    if (result.value === '' || ['*', '/', '%'].includes(lastChar)) {
      return;
    }
  } else if (operators.includes(value)) {
    const lastChar = result.value.slice(-1);
    if (operators.includes(lastChar)) {
      return;
    }
  }

  result.value += value;
}

let lastCalculation = '';

function calculate() {
  try {
    if (/[*\/]$/.test(result.value)) {
      throw new Error('Please enter another number or perform a valid calculation');
    }

    let expression = result.value;
    let calculatedResult;

    while (expression.includes('%')) {
      expression = expression.replace(/([0-9.]+)%/, (_, num) => {
        return String(Number(num) * 0.01);
      });
    }

    calculatedResult = eval(expression);

    if (isNaN(calculatedResult)) {
      throw new Error('Invalid calculation');
    }
    calculatedResult = Number(calculatedResult.toFixed(15));
    result.value = calculatedResult;
    hasError = false;
    lastCalculation = result.value;

  } catch (error) {
    result.value = error.message;
    hasError = true;
  }
}

function clearResult() {
  result.value = '';
  hasError = false;
  decimalEntered = false; 
}

function removeLastEntered() {
  if (hasError) {
    clearResult();
  } else {
    const lastChar = result.value.slice(-1);
    if (lastChar === '.') {
      decimalEntered = false; 
    }
    result.value = result.value.slice(0, -1);
  }
}
