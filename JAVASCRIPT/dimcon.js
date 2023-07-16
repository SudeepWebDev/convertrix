

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

  
