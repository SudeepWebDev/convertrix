



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


const chatHead = document.getElementById('chat-head');

let touchStartY = 0;
let touchEndY = 0;

chatHead.addEventListener('touchstart', handleTouchStart, false);
chatHead.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event) {
  touchStartY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  touchEndY = event.changedTouches[0].clientY;

  const touchDiffY = touchEndY - touchStartY;

  if (touchDiffY > 0) {
    showChat();
  }
  else if (touchDiffY < 0) {
    hideChat();
  }
}

function showChat() {
  chatToggleIcon.classList.remove('fa-arrow-up');
  chatToggleIcon.classList.add('fa-arrow-down');
  chatSection.classList.remove('hide-chat');
}

function hideChat() {
  chatToggleIcon.classList.remove('fa-arrow-down');
  chatToggleIcon.classList.add('fa-arrow-up');
  chatSection.classList.add('hide-chat');
}
