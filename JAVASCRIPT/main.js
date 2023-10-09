
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



// const promoContainer = document.querySelector('.promo-container');

// fetch("https://raw.githubusercontent.com/SudeepWebDev/Rewards-Assistant/main/promo.json")
//   .then(response => response.json())
//   .then(data => {
//     const promoKeys = Object.keys(data);
//     const randomKey = promoKeys[Math.floor(Math.random() * promoKeys.length)];
//     const promoData = data[randomKey];
//     document.getElementById('ads_section').style.display = 'block';

//     const { url, imageDivId, title, platform, description, ctaUrl, ctaText } = promoData;

//     const promoImage = promoContainer.querySelector('.promo-image');
//     promoImage.src = url;
//     promoImage.id = imageDivId;

//     const promoTitle = promoContainer.querySelector('.promo-title');
//     promoTitle.textContent = title;

//     // const promoClose= promoContainer.querySelector('.promo-close');
//     // promoClose.textContent = `✖`;

//     const promoPlatform = promoContainer.querySelector('.promo-title-last');
//     promoPlatform.textContent = platform;

//     const promoDescription = promoContainer.querySelector('.promo-description');
//     promoDescription.textContent = description;

//     const promoCta = promoContainer.querySelector('.promo-cta');
//     promoCta.href = ctaUrl;
//     promoCta.textContent = ctaText;
//   })
//   .catch(error => {
//     console.error('Error fetching promo data:', error);
//     document.getElementById('ads_section').style.display = 'none';

//   });




// fetch("https://raw.githubusercontent.com/SudeepWebDev/Rewards-Assistant/main/adsvideo.json")
//   .then(response => response.json())
//   .then(data => {
//     const promoKeys = Object.keys(data);
//     const randomKey = promoKeys[Math.floor(Math.random() * promoKeys.length)];
//     const promoData = data[randomKey];

//     const { url } = promoData;
//     onYouTubeIframeAPIReady(url);
//     function onYouTubeIframeAPIReady(url) {
//       player = new YT.Player('video-container', {
//         width: 560,
//         height: 315,
//         videoId: url, // Use the stored videoId
//         playerVars: {
//           controls: 0,
//           disablekb: 1,
//           rel: 0,
//           autoplay: 1,
//           mute: 1,

//         },
//         events: {
//           'onStateChange': onPlayerStateChange
//         }
//       });
//     }

//   })
//   .catch(error => {
//     console.error('Error fetching promo data:', error);
//     document.getElementById('ads_section').style.display = 'none';

//   });

// function onPlayerStateChange(event) {
//   if (event.data === YT.PlayerState.ENDED) {
//   } else if (event.data === YT.PlayerState.PLAYING) {
//     if (player.isMuted()) {
//       showUnmuteButton();
//     } else {
//       showMuteButton();

//     }
//   }
// }

// function toggleMute() {
//   if (player.isMuted()) {
//     player.unMute();
//   } else {
//     player.mute();
//   }
//   updateButtonState();
// }
// const muteButton = document.querySelector('#mute-button');

// muteButton.addEventListener('click', function textchange() {
//   const muteButton = document.querySelector('#mute-button');

//   if (muteButton.innerText == 'Mute') {
//     muteButton.innerText = 'Unmute'; // Change unmute button text here
//   } else {
//     muteButton.innerText = 'Mute'; // Change mute button text here
//   }
// })


// function showMuteButton() {
//   const muteButton = document.querySelector('#mute-button');
//   muteButton.innerText = 'Mute'; // Change mute button text here
//   muteButton.style.display = 'block';
// }

// function showUnmuteButton() {
//   const unmuteButton = document.querySelector('#mute-button');
//   unmuteButton.innerText = 'Unmute'; // Change unmute button text here
//   unmuteButton.style.display = 'block';
// }

// document.querySelector('#mute-button').addEventListener('click', toggleMute);
// document.querySelector('#mute-button').addEventListener('click', toggleMute);
