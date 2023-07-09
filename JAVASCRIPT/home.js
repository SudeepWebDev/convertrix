
const features = document.querySelectorAll('.feature');

const gradients = [
  'linear-gradient(45deg, #f9ca24, #f0932b)', // Currency Converter gradient
  'linear-gradient(45deg, #2c3e50, #bdc3c7)', // Length Converter gradient
  'linear-gradient(45deg, #3498db, #9b59b6)', // Temperature Converter gradient
  'linear-gradient(45deg, #ff9f43, #ff6b6b)'

];

const converterSrc = [
    '/convertrix/HTML/currencyConverter.html',
    '/convertrix/HTML/lengthConverter.html',
    '/convertrix/HTML/temperatureConverter.html',
    '/convertrix/HTML/areaConverter.html',

  ];
  
  features.forEach((feature, index) => {
    feature.style.background = gradients[index % gradients.length];
    feature.addEventListener('click',function () {
        window.location.href = converterSrc[index];
    })
  });
  




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





