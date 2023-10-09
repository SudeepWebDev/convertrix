
const features = document.querySelectorAll('.feature');

const gradients = [
  'linear-gradient(45deg, #f9ca24, #f0932b)', // Currency Converter gradient
  'linear-gradient(45deg, #27ae60, #2ecc71)',
  'linear-gradient(45deg, #2c3e50, #bdc3c7)', // Length Converter gradient
  'linear-gradient(45deg, #3498db, #9b59b6)', // Temperature Converter gradient
  'linear-gradient(45deg, #ff9f43, #ff6b6b)', // Area Converter gradient
  'linear-gradient(45deg, #27ae60, #2ecc71)', // Calculator gradient,
  'linear-gradient(135deg, #1abc9c, #3498db)',//SIC gradient
];


const converterSrc = [
    '/convertrix/HTML/currencyConverter.html',
    '/convertrix/HTML/c-footprint.html',
    '/convertrix/HTML/lengthConverter.html',
    '/convertrix/HTML/temperatureConverter.html',
    '/convertrix/HTML/areaConverter.html',
    '/convertrix/index.html#calculator',
    '/convertrix/index.html#sic',

];

features.forEach((feature, index) => {
    feature.style.background = gradients[index % gradients.length];
    feature.addEventListener('click', function () {
        window.location.href = converterSrc[index];
    })
});
// menu
const menuBar = document.getElementById('menu_bar');
const menu = document.getElementById('menu');

menuBar.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

