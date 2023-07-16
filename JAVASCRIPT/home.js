



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
  if (['+', '-'].includes(value)) {
    const lastChar = result.value.slice(-1);
    if (['*', '/', '%'].includes(lastChar)) {
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
let result1 = document.getElementById('result1');
let hasError1 = false;
let decimalEntered1 = false;
let operators1 = ['+', '-', '*', '/', '%'];

function appendValue1(value) {
  if (hasError1) {
    clearResult1();
  }

  if (value === '.' && decimalEntered1) {
    return;
  }

  if (value === '.') {
    decimalEntered1 = true;
  }
  if (['+', '-'].includes(value)) {
    const lastChar = result1.value.slice(-1);
    if (['*', '/', '%'].includes(lastChar)) {
      result1.value += value;
      return;
    }
    if (result1.value === '' || ['*', '/', '%'].includes(lastChar)) {
      return;
    }
  } else if (operators1.includes(value)) {
    const lastChar = result1.value.slice(-1);
    if (operators1.includes(lastChar)) {
      return;
    }
  }

  result1.value += value;
}

let lastCalculation1 = '';

function calculate1() {
  try {
    if (/[*\/]$/.test(result1.value)) {
      throw new Error('Please enter another number or perform a valid calculation');
    }

    let expression1 = result1.value;
    let calculatedResult1;

    while (expression1.includes('%')) {
      expression1 = expression1.replace(/([0-9.]+)%/, (_, num) => {
        return String(Number(num) * 0.01);
      });
    }

    calculatedResult1 = eval(expression1);

    if (isNaN(calculatedResult1)) {
      throw new Error('Invalid calculation');
    }
    calculatedResult1 = Number(calculatedResult1.toFixed(15));
    result1.value = calculatedResult1;
    hasError1 = false;
    lastCalculation1 = result1.value;

  } catch (error) {
    result1.value = error.message;
    hasError1 = true;
  }
}

function clearResult1() {
  result1.value = '';
  hasError1 = false;
  decimalEntered1 = false;
}

function removeLastEntered1() {
  if (hasError1) {
    clearResult1();
  } else {
    const lastChar = result1.value.slice(-1);
    if (lastChar === '.') {
      decimalEntered1 = false;
    }
    result1.value = result1.value.slice(0, -1);
  }
}