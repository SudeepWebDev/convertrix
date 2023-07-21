
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
    if (['+', '-'].includes(lastChar) || result.value === '') {
      return;
    }
    if (['*', '/', '%'].includes(lastChar)) {
      return;
    }
  } else if (['+', '-'].includes(value)) {
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
    const lastChar1 = result1.value.slice(-1);
    if (operators1.includes(lastChar1)) {
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
    const lastChar1 = result1.value.slice(-1);
    if (lastChar1 === '.') {
      decimalEntered1 = false;
    }
    result1.value = result1.value.slice(0, -1);
  }
}

var tracks = [
  '-webkit-slider-runnable-track',
];
const principalAmountElement = document.getElementById('principalAmount');
const interestAmountElement = document.getElementById('interestAmount');
const totalAmountElement = document.getElementById('totalAmount');

const pieChartConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [0, 0], // Initial data, will be updated in calculateInterest function
        backgroundColor: ['#5367ff', 'lightblue'], // Customize colors as desired
      },
    ],
    labels: ['Principal Amount', 'Total Interest'],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12, // Reduce the font size
          },
        },
      },
    },
  },
};

const ctx = document.getElementById('pieChart').getContext('2d');
const myPieChart = new Chart(ctx, pieChartConfig);

function updatePrincipalValue() {
  const principalValue = parseInt(document.getElementById('principal').value);
  principalAmountElement.innerText = principalValue;
  calculateInterest();
}

function updateRateValue() {
  const rateValue = document.getElementById('rate').value;
  document.getElementById('rateValue').innerText = rateValue;
  calculateInterest();
}

function updateTimeValue() {
  const timeValue = document.getElementById('time').value;
  document.getElementById('timeValue').innerText = timeValue;
  calculateInterest();
}

function calculateInterest() {
  const principal = parseInt(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseInt(document.getElementById('time').value);

  const interestAmount = (principal * rate * time) / 100;
  const totalAmount = interestAmount + principal;

  interestAmountElement.innerText = interestAmount.toFixed(2);
  totalAmountElement.innerText = totalAmount.toFixed(2);

  // Update pie chart data
  myPieChart.data.datasets[0].data = [principal, interestAmount];
  myPieChart.update();
}

document.getElementById('principal').addEventListener('input', function () {
  updatePrincipalValue();
});

document.getElementById('rate').addEventListener('input', function () {
  updateRateValue();
});

document.getElementById('time').addEventListener('input', function () {
  updateTimeValue();
});

calculateInterest();

window.onload = function () {
  sliders();
}

function sliders() {

  var tracks = [
    '-webkit-slider-runnable-track',
  ];

  initSliders();

  function initSliders() {
    var sliders = document.querySelectorAll('input[type=range]');
    var testAndWK = window.getComputedStyle(sliders[0], '::-webkit-slider-thumb').background;
    for (var i = 0; i < sliders.length; i += 1) {
      if (!testAndWK) {
        sliders[i].style.WebkitAppearance = 'slider-horizontal';
      }

      var st = document.createElement('style');
      st.id = 's' + sliders[i].id;
      document.head.appendChild(st);


      sliders[i].addEventListener('input', function () { handleSlider(this) }, false);
      sliders[i].addEventListener('change', function () { handleSlider(this) }, false);

      sliders[i].output = sliders[i].parentNode.querySelector('output');


      if (sliders[i].value * 1) {
        handleSlider(sliders[i]);
      }
    }
  }

  function handleSlider(slider) {
    var gradValue = Math.round((slider.value / slider.getAttribute('max') * 1) * 100);
    var grad = 'linear-gradient(90deg,#5082e0 ' + gradValue + '%,#cccccc ' + (gradValue + 1) + '%)';
    var rangeSelector = 'input[id=' + slider.id + ']::';
    var styleString = '';
    var printedValue = (slider.values) ? slider.values[slider.value] : slider.value;
    slider.output.innerHTML = printedValue;
    for (var j = 0; j < tracks.length; j += 1) {
      styleString += rangeSelector + tracks[j] + '{background: ' + grad + ';} ';
    }
    document.getElementById('s' + slider.id).textContent = styleString;
  }

} const principalAmountElementCI = document.getElementById('principalAmountCI');
const interestAmountElementCI = document.getElementById('interestAmountCI');
const totalAmountElementCI = document.getElementById('totalAmountCI');

const pieChartConfigCI = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [0, 0], // Initial data, will be updated in calculateInterestCI function
        backgroundColor: ['#5367ff', 'lightblue'], // Customize colors as desired
      },
    ],
    labels: ['Principal Amount', 'Compound Interest'],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12, // Reduce the font size
          },
        },
      },
    },
  },
};

const ctxCI = document.getElementById('pieChartCI').getContext('2d');
const myPieChartCI = new Chart(ctxCI, pieChartConfigCI);

function updatePrincipalValueCI() {
  const principalValueCI = parseInt(document.getElementById('principalCI').value);
  principalAmountElementCI.innerText = principalValueCI;
  calculateInterestCI();
}

function updateRateValueCI() {
  const rateValueCI = document.getElementById('rateCI').value;
  document.getElementById('rateValueCI').innerText = rateValueCI;
  calculateInterestCI();
}

function updateTimeValueCI() {
  const timeValueCI = document.getElementById('timeCI').value;
  document.getElementById('timeValueCI').innerText = timeValueCI;
  calculateInterestCI();
}

function getInterestFrequencyFactor(frequency) {
  switch (frequency) {
    case 'monthly':
      return 12;
    case 'yearly':
      return 1;
    case 'half-yearly':
      return 2;
    case 'quarterly':
      return 4;
    case 'bi-annually':
      return 2;
    default:
      return 1;
  }
}

function calculateInterestCI() {
  const principalCI = parseInt(document.getElementById('principalCI').value);
  const rateCI = parseFloat(document.getElementById('rateCI').value);
  const timeCI = parseInt(document.getElementById('timeCI').value);
  const interestFrequency = document.getElementById('interestFrequency').value;

  const interestFrequencyFactor = getInterestFrequencyFactor(interestFrequency);

  const compoundInterestCI = principalCI * (Math.pow(1 + rateCI / (100 * interestFrequencyFactor), timeCI * interestFrequencyFactor) - 1);

  interestAmountElementCI.innerText = compoundInterestCI.toFixed(2);
  const totalAmountCI = principalCI + compoundInterestCI;
  totalAmountElementCI.innerText = totalAmountCI.toFixed(2);

  // Update pie chart data
  myPieChartCI.data.datasets[0].data = [principalCI, compoundInterestCI];
  myPieChartCI.update();
}

document.getElementById('principalCI').addEventListener('input', function () {
  updatePrincipalValueCI();
});

document.getElementById('rateCI').addEventListener('input', function () {
  updateRateValueCI();
});

document.getElementById('timeCI').addEventListener('input', function () {
  updateTimeValueCI();
});

document.getElementById('interestFrequency').addEventListener('change', function () {
  calculateInterestCI();
});

calculateInterestCI();





// All in unit converter class



class UnitConverter {
  constructor() {
    this.conversionTypeSelect = document.getElementById('conversionType');
    this.fromSelect = document.getElementById('from');
    this.toSelect = document.getElementById('to');
    this.amountInput = document.getElementById('amount');
    this.resultOutput = document.querySelector('.unit-converter-popup p');
    this.convertButton = document.querySelector('.convert-btn');

    this.convertButton.addEventListener('click', () => {
      this.convert();
    });

    this.conversionTypeSelect.addEventListener('change', () => {
      this.updateOptions();
    });
    this.updateOptions();

  }

  updateOptions() {
    const conversionType = this.conversionTypeSelect.value;
    let units;

    if (conversionType === 'length') {
      units = ['mm', 'cm', 'm', 'km', 'in', 'ft', 'yd', 'mi'];
    } else {
      units = ['sqkm', 'sqm', 'ha', 'acre', 'sqmi', 'sqyd', 'sqft', 'sqin'];
    }

    this.fromSelect.innerHTML = '';
    this.toSelect.innerHTML = '';

    units.forEach(unit => {
      const option1 = document.createElement('option');
      option1.value = unit;
      option1.textContent = unit;
      this.fromSelect.appendChild(option1);

      const option2 = document.createElement('option');
      option2.value = unit;
      option2.textContent = unit;
      this.toSelect.appendChild(option2);
    });

  }

  convert() {
    const conversionType = this.conversionTypeSelect.value;
    const fromUnit = this.fromSelect.value;
    const toUnit = this.toSelect.value;
    const amount = parseFloat(this.amountInput.value);

    let result;

    if (conversionType === 'length') {
      result = this.convertLength(amount, fromUnit, toUnit);
    } else {
      result = this.convertArea(amount, fromUnit, toUnit);
    }

    if (isNaN(result)) {
      this.resultOutput.textContent = 'Invalid input. Please check your values.';
    } else {
      this.resultOutput.textContent = `Converted result: ${amount} ${fromUnit} = ${result} ${toUnit}`;
    }

    // Update the popup display
    let unitConverterPopupP = document.querySelector('.unit-converter-popup p');
    let unitConverterPopupCont = document.querySelector('.unit-converter-popup');

    unitConverterPopupP.style.display = 'flex';
    unitConverterPopupCont.style.display = 'flex';
  }

  convertLength(value, fromUnit, toUnit) {
    const lengthValueM = {
      // Metric Units
      'm': 1,
      'mm': 0.001,
      'cm': 0.01,
      'km': 1000,
      'µm': 1e-6,        // Micrometer (µm)
      'nm': 1e-9,        // Nanometer (nm)
      'zm': 1e-21,       // Zeptometer (zm)
      'am': 1e-18,       // Attometer (am)
      'fm': 1e-15,       // Femtometer (fm)
      'pm': 1e-12,       // Picometer (pm)
      'dm': 1e-1,        // Decimeter (dm)
      'dam': 10,         // Decameter (dam)
      'hm': 1e2,         // Hectometer (hm)
      'Mm': 1e6,         // Megameter (Mm)
      'Gm': 1e9,         // Gigameter (Gm)
      'Tm': 1e12,        // Terameter (Tm)
      'Pm': 1e15,        // Petameter (Pm)
      'Em': 1e18,        // Exameter (Em)
      'Zm': 1e21,        // Zettameter (Zm)
      'Ym': 1e24,        // Yottameter (Ym)

      // Imperial Units
      'in': 0.0254,      // Inch (in)
      'ft': 0.3048,      // Feet (ft)
      'yd': 0.9144,      // Yard (yd)
      'mi': 1609.34,     // Mile (mi)
      'nmi': 1852,       // Nautical Mile (nmi)
      'furlong': 201.168, // Furlong (furlong)
      'fathom': 1.8288,  // Fathom (fathom)

      // Astronomical Units
      'AU': 149597870.7, // Astronomical Unit (AU)
      'ly': 9.461e15,    // Light Year (ly)
      'pc': 3.086e16,    // Parsec (pc)

      // Lunar Distances
      'LD': 384400000,   // Lunar Distance (LD)

    };

    const convertedValue = value * (lengthValueM[fromUnit] / lengthValueM[toUnit]);
    return convertedValue.toFixed(6); // Rounding to 6 decimal places
  }

  convertArea(value, fromUnit, toUnit) {
    const areaValuekilo = {
      "sqkm": 1,
      "sqm": 1000000,
      "ha": 100,
      "acre": 247.105,
      "sqmi": 0.386102,
      "sqyd": 1196000,
      "sqft": 10760000,
      "sqin": 1550000000
    };
  
    const convertedValue = value * ( areaValuekilo[toUnit]/areaValuekilo[fromUnit] );
    return convertedValue.toFixed(6); // Rounding to 6 decimal places
  }
  
  
  

}

// Create an instance of the UnitConverter class
const converter = new UnitConverter();

// Add event listener for the "Convert Again" button
let unitConverterPopupBtn = document.querySelector('.unit-converter-popup button');
unitConverterPopupBtn.addEventListener('click', function reConvert() {
  let unitConverterPopupCont = document.querySelector('.unit-converter-popup');

  unitConverterPopupCont.style.display = "none";
});
