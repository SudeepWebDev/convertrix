const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', handleUserInput);

async function handleUserInput() {
    const question1 = (userInput.value);
    const question = (userInput.value);
    if (question) {
        const response = await getResponse(question.toLowerCase());
        displayResponse(question.toLowerCase(), response);
        userInput.value = '';
    }
}
async function getResponse(question) {

    const greetingsRegex = /^(hi|hello|hey|greetings|namaste)\b/i;
    const thankYouRegex = /\b(thank\s*you|thanks|thank)\b/i;
    if (question.includes('currency supported') || question.includes('currency list')) {

        const currencyList = {
            "inr": { name: "Indian Rupee" },
            "aed": { name: "United Arab Emirates Dirham" },
            "afn": { name: "Afghan Afghani" },
            "all": { name: "Albanian Lek" },
            "amd": { name: "Armenian Dram" },
            "ang": { name: "Netherlands Antillean Guilder" },
            "aoa": { name: "Angolan Kwanza" },
            "ars": { name: "Argentine Peso" },
            "aud": { name: "Australian Dollar" },
            "awg": { name: "Aruban Florin" },
            "azn": { name: "Azerbaijani Manat" },
            "bam": { name: "Bosnia-Herzegovina Convertible Mark" },
            "bbd": { name: "Barbadian Dollar" },
            "bdt": { name: "Bangladeshi Taka" },
            "bgn": { name: "Bulgarian Lev" },
            "bhd": { name: "Bahraini Dinar" },
            "bif": { name: "Burundian Franc" },
            "bmd": { name: "Bermudan Dollar" },
            "bnd": { name: "Brunei Dollar" },
            "bob": { name: "Bolivian Boliviano" },
            "brl": { name: "Brazilian Real" },
            "bsd": { name: "Bahamian Dollar" },
            "btn": { name: "Bhutanese Ngultrum" },
            "bwp": { name: "Botswanan Pula" },
            "byn": { name: "Belarusian Ruble" },
            "bzd": { name: "Belize Dollar" },
            "cad": { name: "Canadian Dollar" },
            "cdf": { name: "Congolese Franc" },
            "chf": { name: "Swiss Franc" },
            "clp": { name: "Chilean Peso" },
            "cny": { name: "Chinese Yuan" },
            "cop": { name: "Colombian Peso" },
            "crc": { name: "Costa Rican Colón" },
            "cup": { name: "Cuban Peso" },
            "cve": { name: "Cape Verdean Escudo" },
            "czk": { name: "Czech Koruna" },
            "djf": { name: "Djiboutian Franc" },
            "dkk": { name: "Danish Krone" },
            "dop": { name: "Dominican Peso" },
            "dzd": { name: "Algerian Dinar" },
            "egp": { name: "Egyptian Pound" },
            "ern": { name: "Eritrean Nakfa" },
            "etb": { name: "Ethiopian Birr" },
            "eur": { name: "Euro" },
            "fjd": { name: "Fijian Dollar" },
            "fkp": { name: "Falkland Islands Pound" },
            "fok": { name: "Faroese Króna" },
            "gbp": { name: "British Pound Sterling" },
            "gel": { name: "Georgian Lari" },
            "ggp": { name: "Guernsey Pound" },
            "ghs": { name: "Ghanaian Cedi" },
            "gip": { name: "Gibraltar Pound" },
            "gmd": { name: "Gambian Dalasi" },
            "gnf": { name: "Guinean Franc" },
            "gtq": { name: "Guatemalan Quetzal" },
            "gyd": { name: "Guyanaese Dollar" },
            "hkd": { name: "Hong Kong Dollar" },
            "hnl": { name: "Honduran Lempira" },
            "hrk": { name: "Croatian Kuna" },
            "htg": { name: "Haitian Gourde" },
            "huf": { name: "Hungarian Forint" },
            "idr": { name: "Indonesian Rupiah" },
            "ils": { name: "Israeli New Shekel" },
            "imp": { name: "Manx pound" },
            "iqd": { name: "Iraqi Dinar" },
            "irr": { name: "Iranian Rial" },
            "isk": { name: "Icelandic Króna" },
            "jep": { name: "Jersey Pound" },
            "jmd": { name: "Jamaican Dollar" },
            "jod": { name: "Jordanian Dinar" },
            "jpy": { name: "Japanese Yen" },
            "kes": { name: "Kenyan Shilling" },
            "kgs": { name: "Kyrgystani Som" },
            "khr": { name: "Cambodian Riel" },
            "kid": { name: "Kiribati Dollar" },
            "kmf": { name: "Comorian Franc" },
            "krw": { name: "South Korean Won" },
            "kwd": { name: "Kuwaiti Dinar" },
            "kyd": { name: "Cayman Islands Dollar" },
            "kzt": { name: "Kazakhstani Tenge" },
            "lak": { name: "Laotian Kip" },
            "lbp": { name: "Lebanese Pound" },
            "lkr": { name: "Sri Lankan Rupee" },
            "lrd": { name: "Liberian Dollar" },
            "lsl": { name: "Lesotho Loti" },
            "lyd": { name: "Libyan Dinar" },
            "mad": { name: "Moroccan Dirham" },
            "mdl": { name: "Moldovan Leu" },
            "mga": { name: "Malagasy Ariary" },
            "mkd": { name: "Macedonian Denar" },
            "mmk": { name: "Myanmar Kyat" },
            "mnt": { name: "Mongolian Tugrik" },
            "mop": { name: "Macanese Pataca" },
            "mru": { name: "Mauritanian Ouguiya" },
            "mur": { name: "Mauritian Rupee" },
            "mvr": { name: "Maldivian Rufiyaa" },
            "mwk": { name: "Malawian Kwacha" },
            "mxn": { name: "Mexican Peso" },
            "myr": { name: "Malaysian Ringgit" },
            "mzn": { name: "Mozambican Metical" },
            "nad": { name: "Namibian Dollar" },
            "ngn": { name: "Nigerian Naira" },
            "nio": { name: "Nicaraguan Córdoba" },
            "nok": { name: "Norwegian Krone" },
            "npr": { name: "Nepalese Rupee" },
            "nzd": { name: "New Zealand Dollar" },
            "omr": { name: "Omani Rial" },
            "pab": { name: "Panamanian Balboa" },
            "pen": { name: "Peruvian Sol" },
            "pgk": { name: "Papua New Guinean Kina" },
            "php": { name: "Philippine Peso" },
            "pkr": { name: "Pakistani Rupee" },
            "pln": { name: "Polish Złoty" },
            "pyg": { name: "Paraguayan Guarani" },
            "qar": { name: "Qatari Rial" },
            "ron": { name: "Romanian Leu" },
            "rsd": { name: "Serbian Dinar" },
            "rub": { name: "Russian Ruble" },
            "rwf": { name: "Rwandan Franc" },
            "sar": { name: "Saudi Riyal" },
            "sbd": { name: "Solomon Islands Dollar" },
            "scr": { name: "Seychellois Rupee" },
            "sdg": { name: "Sudanese Pound" },
            "sek": { name: "Swedish Krona" },
            "sgd": { name: "Singapore Dollar" },
            "shp": { name: "Saint Helena Pound" },
            "sle": { name: "Sierra Leonean Leone" },
            "sll": { name: "Sierra Leonean Leone" },
            "sos": { name: "Somali Shilling" },
            "srd": { name: "Surinamese Dollar" },
            "ssp": { name: "South Sudanese Pound" },
            "stn": { name: "São Tomé and Príncipe Dobra" },
            "syp": { name: "Syrian Pound" },
            "szl": { name: "Swazi Lilangeni" },
            "thb": { name: "Thai Baht" },
            "tjs": { name: "Tajikistani Somoni" },
            "tmt": { name: "Turkmenistani Manat" },
            "tnd": { name: "Tunisian Dinar" },
            "top": { name: "Tongan Pa'anga" },
            "try": { name: "Turkish Lira" },
            "ttd": { name: "Trinidad and Tobago Dollar" },
            "tvd": { name: "Tuvaluan Dollar" },
            "twd": { name: "New Taiwan Dollar" },
            "tzs": { name: "Tanzanian Shilling" },
            "uah": { name: "Ukrainian Hryvnia" },
            "ugx": { name: "Ugandan Shilling" },
            "usd": { name: "United States Dollar" },
            "uyu": { name: "Uruguayan Peso" },
            "uzs": { name: "Uzbekistani Som" },
            "ves": { name: "Venezuelan Bolívar Soberano" },
            "vnd": { name: "Vietnamese Đồng" },
            "vuv": { name: "Vanuatu Vatu" },
            "wst": { name: "Samoan Tala" },
            "xaf": { name: "Central African CFA Franc" },
            "xcd": { name: "East Caribbean Dollar" },
            "xdr": { name: "Special Drawing Rights" },
            "xof": { name: "West African CFA franc" },
            "xpf": { name: "CFP Franc" },
            "yer": { name: "Yemeni Rial" },
            "zar": { name: "South African Rand" },
            "zmw": { name: "Zambian Kwacha" },
            "zwl": { name: "Zimbabwean Dollar" },
        };
        // Function to retrieve the supported currencies
        function getSupportedCurrencies() {
            const currencies = Object.keys(currencyList);
            const currencyList1 = currencies.map(currency => `${currency} - ${currencyList[currency].name}`);
            return currencyList1.join("<br>");
        }

        return "<b>Supported currencies:</b><br><br>" + getSupportedCurrencies()

    }
    else if (question.includes('currency')) {
        const currencies = question.match(/(?:^|\s)([A-Za-z]{3})(?=\s|$)/g).map(currency => currency.trim());
        const amount = question.match(/\d+/);
        const filteredCurrencies = currencies.filter(currency => !["cur", "ren"].includes(currency.toLowerCase()));
        if (currencies && amount) {
            const fromCurrency = currencies[0].toUpperCase();
            const toCurrency = currencies[1].toUpperCase();
            const convertedAmount = await convertCurrency(fromCurrency, toCurrency, amount);
            return `The converted amount from ${fromCurrency} to ${toCurrency} is ${convertedAmount}`;
        } else {
            return "I'm sorry, I couldn't understand the currency conversion request.";
        }

    } else if (question.includes('symbol')) {
        return "1. For Currency Symbol:<br>Three letters unique symbol is used.<br>Example: usd, inr, aud etc.<br><br>2. For Length Symbol:<br>one/two letter(s) unique symbol is used.<br>Example: m, cm, km, ha, mm, in etc.<br><br>3. For Area Symbol:<br>Two/Three/Four letters unique symbol is used.<br> Example: sqkm, sqm, ha etc.";

    } else if (question.includes('syntax')) {
        return "<b>Documentation Syntax:</b><br><br>" +
            "<b>1. Conversion Prompts:</b><br><br>" +
            "   - <b>For currency conversion,</b> use the format: 'Convert [amount] [from currency symbol] to [to currency symbol]'<br>" +
            "     Example: Convert 100 USD to INR<br><br>" +
            "   - <b>For length conversion,</b> use the format: 'Convert [amount] [from unit symbol] to [to unit symbol]'<br>" +
            "     Example: Convert 100 m to cm<br><br>" +
            "   - <b>For area conversion,</b> use the format: 'Convert [amount] [from unit symbol] to [to unit symbol]'<br>" +
            "     Example: Convert 100 sqkm to ha<br><br>" +
            "<b>2. Commands Available:</b><br><br>" +
            "   - <b>'help' or 'commands'</b> to see the available commands<br><br>" +
            "   - <b>'examples' or 'usage'</b> to get examples of conversion requests<br><br>" +
            "   - <b>'syntax'</b> to see the documentation syntax<br><br>" +
            "   - <b>'currency supported' or 'currency list'</b> to see the supported currencies<br><br>" +
            "   - <b>'length supported' or 'length list'</b> to see the supported length units<br><br>" +
            "   - <b>'area supported' or 'area list':</b> See the supported area units<br><br>" +
            "Please make sure to include the appropriate conversion keywords (Currency, Length, Area) in your request to indicate the type of conversion you want.<br>";
    }

    else if (question.includes('help') || question.includes('commands')) {
        return "<b>Available Commands:</b><br><br>" +
            "- 'help' or 'commands': See the available commands<br><br>" +
            "- 'examples' or 'usage': Get examples of conversion requests<br><br>" +
            "- 'syntax': See the documentation syntax<br><br>" +
            "- 'currency supported' or 'currency list': See the supported currencies<br><br>" +
            "- 'length supported' or 'length list': See the supported length units<br><br>" +
            "- 'area supported' or 'area list': See the supported area units";
    }
    else if (question.includes('examples') || question.includes('usage')) {
        return "<b>Conversion Examples:</b><br><br>" +
            "- <b>Currency Conversion:</b><br>" +
            "   Example: Convert 100 USD to INR<br>" +
            "   Example: Convert 50 EUR to USD<br><br>" +
            "- <b>Length Conversion:</b><br>" +
            "   Example: Convert 100 m to cm<br>" +
            "   Example: Convert 5 ft to m<br><br>" +
            "- <b>Area Conversion:</b><br>" +
            "   Example: Convert 100 sqkm to ha<br>" +
            "   Example: Convert 50 acres to sqm";
    }
    else if (question.includes('length supported') || question.includes('length list')) {
        const lengthList = {
            'm': { name: 'meter' },
            'mm': { name: 'millimeter' },
            'cm': { name: 'centimeter' },
            'km': { name: 'kilometer' },
            'in': { name: 'inch' },
            'ft': { name: 'foot' },
            'yd': { name: 'yard' },
            'mi': { name: 'mile' }
        };


        function getSupportedLength() {
            const Length = Object.keys(lengthList);
            const lengthList1 = Length.map(length => `${length} - ${lengthList[length].name}`);
            return lengthList1.join("<br>");
        }

        return "<b>Supported Length:</b><br><br>" + getSupportedLength()
    }
    else if (question.includes('area supported') || question.includes('area list')) {
        const areaList = {
            'sqkm': { name: 'square kilometer' },
            'sqm': { name: 'square meter' },
            'ha': { name: 'hectare' },
            'acre': { name: 'acre' },
            'sqmi': { name: 'square mile' },
            'sqyd': { name: 'square yard' },
            'sqft': { name: 'square foot' },
            'sqin': { name: 'square inch' }
        }; function getSupportedArea() {
            const areas = Object.keys(areaList);
            const supportedAreas = areas.map(area => `${area} - ${areaList[area].name}`);
            return supportedAreas.join("<br>");
        }
        return "<b>Supported Area:</b><br><br>" + getSupportedArea()
    }
    else if (question.includes('area')) {
        const areas = question.match(/(?:^|\s)([A-Za-z]{2,4})(?=\s|$)/g).map(area => area.trim());
        const amount2 = parseFloat(question.match(/\d+/));
        const filteredAreas = areas.filter(area => !["area"].includes(area.toLowerCase()));

        if (filteredAreas.length >= 2 && !isNaN(amount2)) {
            const fromArea = filteredAreas[0];
            const toArea = filteredAreas[2];

            if (fromArea !== toArea) {
                const convertedAmount = convertArea(fromArea, toArea, amount2);
                return `The converted area from ${fromArea} to ${toArea} is ${convertedAmount}`;
            } else {
                return "The 'from' and 'to' area units are the same. No conversion needed.";
            }
        } else {
            return "I'm sorry, I couldn't understand the area conversion request.";
        }
    } else if (question.includes('length')) {
        const lengths = question.match(/(?:^|\s)([A-Za-z]{1,2})(?=\s|$)/g).map(length => length.trim());
        const amount1 = parseFloat(question.match(/\d+/));
        const filteredLengths = lengths.filter(length => !["len", "gth"].includes(length.toLowerCase()));

        if (filteredLengths.length >= 2 && !isNaN(amount1)) {
            const fromLength = filteredLengths[0];
            const toLength = filteredLengths[2];

            if (fromLength !== toLength) {
                const convertedAmount = convertLength(fromLength, toLength, amount1);
                return `The converted length from ${fromLength} to ${toLength} is ${convertedAmount}`;
            } else {
                return "The 'from' and 'to' length units are the same. No conversion needed.";
            }
        } else {
            return "I'm sorry, I couldn't understand the length conversion request.";
        }
    }
    else if (greetingsRegex.test(question)) {
        return "Hi there! How can I assist you today?";
    } else if (thankYouRegex.test(question)) {
        const randomResponses = [
            "You're welcome! If you have any more conversions, feel free to ask.",
            "No problem! If there's anything else you need to convert, just let me know.",
            "You're welcome! I'm here to help with any conversions you need.",
            "You're welcome! Don't hesitate to ask if you have more conversions you'd like to make.",
            "My pleasure! If there's anything else you'd like to convert, feel free to ask."
        ];
        const randomIndex = Math.floor(Math.random() * randomResponses.length);
        return randomResponses[randomIndex];
    }
    // Default response
    return "I'm sorry, I cannot answer that question.";
}
async function convertCurrency(fromCurrency, toCurrency, amount) {
    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/fb230eb436df708215fa43f1/latest/USD');
        const data = await response.json();

        if (data.result === 'success') {
            const exchangeRates = data.conversion_rates;
            const exchangeRate1 = exchangeRates[fromCurrency];
            const exchangeRate2 = exchangeRates[toCurrency];

            let convertedAmount;

            if (fromCurrency === 'USD') {
                convertedAmount = Number(amount) * exchangeRate2;
            } else if (toCurrency === 'USD') {
                convertedAmount = Number(amount) / exchangeRate1;
            } else {
                convertedAmount = (Number(amount) / exchangeRate1) * exchangeRate2;
            }

            return convertedAmount.toFixed(2);
        } else {
            throw new Error('Failed to fetch exchange rates');
        }
    } catch (error) {
        console.log('An error occurred while fetching exchange rates:', error);
        convertedAmount = performManualConversion(fromCurrency.toLowerCase(), toCurrency.toLowerCase(), amount);
        return convertedAmount;
    }
}
function performManualConversion(convertOption1, convertOption2, amount) {
    const currencyValueINR = {
        "inr": 1,
        "aed": 0.04441,
        "afn": 1.0468,
        "all": 1.1693,
        "amd": 4.6737,
        "ang": 0.02165,
        "aoa": 10.1277,
        "ars": 3.1450,
        "aud": 0.01817,
        "awg": 0.02165,
        "azn": 0.02057,
        "bam": 0.02171,
        "bbd": 0.02419,
        "bdt": 1.3136,
        "bgn": 0.02171,
        "bhd": 0.004547,
        "bif": 34.1927,
        "bmd": 0.01209,
        "bnd": 0.01633,
        "bob": 0.08386,
        "brl": 0.05929,
        "bsd": 0.01209,
        "btn": 1.0000,
        "bwp": 0.1639,
        "byn": 0.03356,
        "bzd": 0.02419,
        "cad": 0.01614,
        "cdf": 29.8160,
        "chf": 0.01082,
        "clp": 9.6997,
        "cny": 0.08749,
        "cop": 50.2341,
        "crc": 6.5796,
        "cup": 0.2902,
        "cve": 1.2238,
        "czk": 0.2657,
        "djf": 2.1493,
        "dkk": 0.08280,
        "dop": 0.6747,
        "dzd": 1.6473,
        "egp": 0.3743,
        "ern": 0.1814,
        "etb": 0.6672,
        "eur": 0.01110,
        "fjd": 0.02681,
        "fkp": 0.009478,
        "fok": 0.08280,
        "gbp": 0.009478,
        "gel": 0.03133,
        "ggp": 0.009478,
        "ghs": 0.1411,
        "gip": 0.009478,
        "gmd": 0.7598,
        "gnf": 103.5278,
        "gtq": 0.09504,
        "gyd": 2.5650,
        "hkd": 0.09470,
        "hnl": 0.2986,
        "hrk": 0.08362,
        "htg": 1.6736,
        "huf": 4.2976,
        "idr": 183.2056,
        "ils": 0.04483,
        "imp": 0.009478,
        "iqd": 15.8596,
        "irr": 511.5714,
        "isk": 1.6305,
        "jep": 0.009478,
        "jmd": 1.8700,
        "jod": 0.008574,
        "jpy": 1.7291,
        "kes": 1.7059,
        "kgs": 1.0591,
        "khr": 50.3649,
        "kid": 0.01815,
        "kmf": 5.4601,
        "krw": 15.7449,
        "kwd": 0.003716,
        "kyd": 0.01008,
        "kzt": 5.3918,
        "lak": 232.9176,
        "lbp": 181.4020,
        "lkr": 3.7439,
        "lrd": 2.2092,
        "lsl": 0.2307,
        "lyd": 0.05842,
        "mad": 0.1184,
        "mdl": 0.2217,
        "mga": 54.8088,
        "mkd": 0.6831,
        "mmk": 29.2598,
        "mnt": 41.8764,
        "mop": 0.09754,
        "mru": 0.4242,
        "mur": 0.5545,
        "mvr": 0.1871,
        "mwk": 12.8325,
        "mxn": 0.2076,
        "myr": 0.05644,
        "mzn": 0.7751,
        "nad": 0.2307,
        "ngn": 10.2318,
        "nio": 0.4435,
        "nok": 0.1300,
        "npr": 1.6000,
        "nzd": 0.01953,
        "omr": 0.004650,
        "pab": 0.01209,
        "pen": 0.04405,
        "pgk": 0.04331,
        "php": 0.6720,
        "pkr": 3.3484,
        "pln": 0.04980,
        "pyg": 88.4323,
        "qar": 0.04402,
        "ron": 0.05502,
        "rsd": 1.3038,
        "rub": 1.1080,
        "rwf": 14.9102,
        "sar": 0.04535,
        "sbd": 0.1024,
        "scr": 0.1636,
        "sdg": 5.4250,
        "sek": 0.1321,
        "sgd": 0.01633,
        "shp": 0.009478,
        "sle": 0.2413,
        "sll": 241.3083,
        "sos": 6.9019,
        "srd": 0.4584,
        "ssp": 12.0517,
        "stn": 0.2719,
        "syp": 30.4992,
        "szl": 0.2307,
        "thb": 0.4254,
        "tjs": 0.1318,
        "tmt": 0.04230,
        "tnd": 0.03747,
        "top": 0.02825,
        "try": 0.3155,
        "ttd": 0.08201,
        "tvd": 0.01815,
        "twd": 0.3783,
        "tzs": 29.6126,
        "uah": 0.4464,
        "ugx": 44.7972,
        "usd": 0.01209,
        "uyu": 0.4545,
        "uzs": 140.1207,
        "ves": 0.3423,
        "vnd": 288.0301,
        "vuv": 1.4382,
        "wst": 0.03289,
        "xaf": 7.2801,
        "xcd": 0.03265,
        "xdr": 0.009076,
        "xof": 7.2801,
        "xpf": 1.3244,
        "yer": 3.0324,
        "zar": 0.2307,
        "zmw": 0.2189,
        "zwl": 63.9831
    };

    let convertedAmount;
    let convertedAmountINR;

    for (keys in currencyValueINR) {
        if (keys == convertOption2) {
            if (convertOption1 == 'inr') {
                convertedAmount = Number(amount) * currencyValueINR[keys];
                return convertedAmount;
                //   break;
            } else {
                for (keys2 in currencyValueINR) {
                    if (keys2 == convertOption1) {
                        convertedAmountINR = Number(amount) / currencyValueINR[keys2];
                        convertedAmount = convertedAmountINR * currencyValueINR[convertOption2];
                        // currencyConverterPopupP.innerHTML = convertedAmount;
                        return convertedAmount;
                        //    break;
                    }
                }
            }
        }
    }
}
function convertArea(convertOption1, convertOption2, amount) {
    const areaValueSQKM = {
        "sqkm": 1,
        "sqm": 1000000,
        "ha": 100,
        "acre": 247.105,
        "sqmi": 0.386102,
        "sqyd": 1196000,
        "sqft": 10760000,
        "sqin": 1550000000
    };

    let convertedAmount;
    let convertedAreaSQKM;

    for (keys in areaValueSQKM) {
        if (keys == convertOption2) {
            if (convertOption1 == 'sqkm') {
                convertedAmount = Number(amount) * areaValueSQKM[keys];
                return convertedAmount;
                //   break;
            } else {
                for (keys2 in areaValueSQKM) {
                    if (keys2 == convertOption1) {
                        convertedAreaSQKM = Number(amount) / areaValueSQKM[keys2];
                        convertedAmount = convertedAreaSQKM * areaValueSQKM[convertOption2];
                        return convertedAmount;
                        //    break;
                    }
                }
            }
        }
    }
}
function convertLength(convertOption1, convertOption2, amount) {
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
        'AU': 6.68458712E-12, // Astronomical Unit (AU)
        'ly': 1.05700083E-16,    // Light Year (ly)
        'pc': 3.24078E-17,    // Parsec (pc)
        
        // Lunar Distances
        'LD': 2.604166E-9 ,   // Lunar Distance (LD)
      };

    let convertedAmount;
    let convertedLengthM;

    for (keys in lengthValueM) {
        if (keys == convertOption2) {
            if (convertOption1 == 'm') {
                convertedAmount = Number(amount) * lengthValueM[keys.toLowerCase()];
                return convertedAmount;
                //   break;
            } else {
                for (keys2 in lengthValueM) {
                    if (keys2 == convertOption1) {
                        convertedLengthM = Number(amount) / lengthValueM[keys2.toLowerCase()];
                        convertedAmount = convertedLengthM * lengthValueM[convertOption2];
                        return convertedAmount;
                        //    break;
                    }
                }
            }
        }
    }
}
function displayResponse(question, response) {
    const chatBubble = document.createElement('div');
    const userBubble = document.createElement('div');
    chatBubble.classList.add('chat-bubble');
    chatBubble.innerHTML = `<span class="question">${question}</span>`;
    userBubble.classList.add('user-bubble');
    userBubble.innerHTML = `<span class="question">${response}</span>`;
    chatContainer.appendChild(chatBubble);
    chatContainer.appendChild(userBubble);
}
