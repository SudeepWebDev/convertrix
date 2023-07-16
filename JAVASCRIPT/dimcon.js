

const lengthValueM = {
    // Metric Units
    'm': 1,
    'mm': 1000,
    'cm': 100,
    'km': 0.001,
    'µm': 1e+6,        // Micrometer (µm)
    'nm': 1e+9,        // Nanometer (nm)
    'zm': 1e+21,       // Zeptometer (zm)
    'am': 1e+18,       // Attometer (am)
    'fm': 1e+15,       // Femtometer (fm)
    'pm': 1e+12,       // Picometer (pm)
    'dm': 10,        // Decimeter (dm)
    'dam': 0.1,         // Decameter (dam)
    'hm': 1e-2,         // Hectometer (hm)
    'Mm': 1e-6,         // Megameter (Mm)
    'Gm': 1e-9,         // Gigameter (Gm)
    'Tm': 1e-12,        // Terameter (Tm)
    'Pm': 1e-15,        // Petameter (Pm)
    'Em': 1e-18,        // Exameter (Em)
    'Zm': 1e-21,        // Zettameter (Zm)
    'Ym': 1e-24,        // Yottameter (Ym)
  
    // Imperial Units
    'in': 39.3700787,      // Inch (in)
    'ft': 3.2808399,      // Feet (ft)
    'yd': 1.0936133,      // Yard (yd)
    'mi': 0.00062137,     // Mile (mi)
    'nmi': 0.00053996,       // Nautical Mile (nmi)
    'furlong': 0.00497097, // Furlong (furlong)
    'fathom': 0.54680665,  // Fathom (fathom)
  
    // Astronomical Units
    'AU': 6.6846E-12, // Astronomical Unit (AU)
    'ly': 1.057E-16,    // Light Year (ly)
    'pc': 3.2408E-17,    // Parsec (pc)
  
    // Lunar Distances
    'LD': 2.6014432807322E-9 ,   // Lunar Distance (LD)
  
  };
  
  const lengthsym = {
    // Metric Units
    'm': 'Meter',
    'mm': 'Millimeter',
    'cm': 'Centimeter',
    'km': 'Kilometer',
    'µm': 'Micrometer (Micron)',
    'nm': 'Nanometer',
    'zm': 'Zeptometer',
    'am': 'Attometer',
    'fm': 'Femtometer',
    'pm': 'Picometer',
    'dm': 'Decimeter',
    'dam': 'Decameter',
    'hm': 'Hectometer',
    'Mm': 'Megameter',
    'Gm': 'Gigameter',
    'Tm': 'Terameter',
    'Pm': 'Petameter',
    'Em': 'Exameter',
    'Zm': 'Zettameter',
    'Ym': 'Yottameter',
  
    // Imperial Units
    'in': 'Inch',
    'ft': 'Feet',
    'yd': 'Yard',
    'mi': 'Mile',
    'nmi': 'Nautical Mile',
    'furlong': 'Furlong',
    'fathom': 'Fathom',
  
    // Astronomical Units
    'AU': 'Astronomical Unit',
    'ly': 'Light Year',
    'pc': 'Parsec',
  
    // Lunar Distances
    'LD': 'Lunar Distance (Earth-Moon distance)',
  };
  
  


const convertButton = document.querySelector('.convert-btn');

convertButton.addEventListener('click', function convert() {
    const convertOption1 = document.querySelector('select#a1').value;
    const convertOption2 = document.querySelector('select#a2').value;
    const amount = document.getElementById('amount').value;
    let lengthConverterPopupP = document.querySelector('.currency-converter-popup p');
    let lengthConverterPopupCont = document.querySelector('.currency-converter-popup');

    
    lengthConverterPopupP.style.display = 'flex';
    lengthConverterPopupCont.style.display = 'flex';

    let convertedAmount;
    let convertedAmountM;

    for (keys in lengthValueM) {
        if (keys == convertOption2) {
            if (convertOption1 == 'm') {
                convertedAmount = Number(amount) * lengthValueM[keys];
                lengthConverterPopupP.innerHTML = Number(amount)  + ' ' + lengthsym[convertOption1] + ' = ' + convertedAmount + ' ' + lengthsym[convertOption2];
                break;
            } else {

                for (keys2 in lengthValueM) {
                    if (keys2 == convertOption1) {
                        convertedAmountM = Number(amount) / lengthValueM[keys2];
                        convertedAmount = convertedAmountM * lengthValueM[convertOption2];
                        lengthConverterPopupP.innerHTML = Number(amount)  + ' ' + lengthsym[convertOption1] + ' = ' + convertedAmount + ' ' + lengthsym[convertOption2];
                        break;
                    }
                }
            }
        }
    }
});


let lengthConverterPopupBtn = document.querySelector('.currency-converter-popup button');
lengthConverterPopupBtn.addEventListener('click', function reConvert() {
    let lengthConverterPopupCont = document.querySelector('.currency-converter-popup');

    lengthConverterPopupCont.style.display = "none";    
})

  
