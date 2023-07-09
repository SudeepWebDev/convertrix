



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





