// Array of questions and answers
const questions = [
    {
        question: "What is the currency of Japan 🇯🇵 ?",
        answers: // Array of correct and wrong answers
         [
            { text: "Yen", correct: true},
            { text: "Won", correct: false},
            { text: "Dollar", correct: false},
            { text: "Peso", correct: false},
        ]
    },
    {
        question: "What is the currency of Egypt 🇪🇬 ?",
        answers: [
            { text: "Dirham", correct: false},
            { text: "Pound", correct: true},
            { text: "Dinar", correct: false},
            { text: "Riyal", correct: false},
        ]
    },
    {
        question: "What is the currency of Mexico 🇲🇽 ?",
        answers: [
            { text: "Peso", correct: true},
            { text: "Real", correct: false},
            { text: "Lira", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Brazil 🇧🇷 ?",
        answers: [
            { text: "Peso", correct: false},
            { text: "Real", correct: true},
            { text: "Cruziero", correct: false},
            { text: "Doll", correct: false},
        ]
    },
    {
        question: "What is the currency of India 🇮🇳 ?",
        answers: [
            { text: "Rubee", correct: true},
            { text: "Taka", correct: false},
            { text: "Ringgit", correct: false},
            { text: "Baht", correct: false},
        ]
    },
    {
        question: "What is the currency of South Africa? 🇿🇦 ",
        answers: [
            { text: "Shilling", correct: false},
            { text: "Rand", correct: true},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of United Kingdom? 🇬🇧 ",
        answers: [
            { text: "Euro", correct: false},
            { text: "Pound Sterling", correct: true},
            { text: "Crown", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Canada? 🇨🇦 ",
        answers: [
            { text: "Peso", correct: false},
            { text: "Dollar", correct: true},
            { text: "Loonie", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Turkey? 🇹🇷 ",
        answers: [
            { text: "Lira", correct: true},
            { text: "Dinar", correct: false},
            { text: "Pound", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Russia? 🇷🇺 ",
        answers: [
            { text: "Ruble", correct: true},
            { text: "Tenge", correct: false},
            { text: "Som", correct: false},
            { text: "Krona", correct: false},
        ]
    },
    {
        question: "What is the currency of Saudi Arabia? 🇸🇦 ",
        answers: [
            { text: "Pound", correct: false},
            { text: "Dirham", correct: false},
            { text: "Dinar", correct: false},
            { text: "Riyal", correct: true},
        ]
    },
    {
        question: "What is the currency of China? 🇨🇳 ",
        answers: [
            { text: "Won", correct: false},
            { text: "Yen", correct: false},
            { text: "Yuan", correct: true},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Switzerland? 🇨🇭 ",
        answers: [
            { text: "Lira", correct: false},
            { text: "Euro", correct: false},
            { text: "Krone", correct: false},
            { text: "Franc", correct: true},
        ]
    },
    {
        question: "What is the currency of Nigeria? 🇳🇬 ",
        answers: [
            { text: "Pound", correct: false},
            { text: "Shilling", correct: false},
            { text: "Naira", correct: true},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Austealia? 🇦🇺 ",
        answers: [
            { text: "Peso", correct: false},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: true},
            { text: "Rand", correct: false},
        ]
    },
    {
        question: "What is the currency of Argentina? 🇦🇷 ",
        answers: [
            { text: "Peso", correct: true},
            { text: "Austral", correct: false},
            { text: "Sol", correct: false},
            { text: "Cruzado", correct: false},
        ]
    },
    {
        question: "What is the currency of South Korea? 🇰🇷 ",
        answers: [
            { text: "Yen", correct: false},
            { text: "Yuan", correct: false},
            { text: "Won", correct: true},
            { text: "Ringgit", correct: false},
        ]
    },
    {
        question: "What is the currency of Kenya? 🇰🇪 ",
        answers: [
            { text: "Shilling", correct: true},
            { text: "Naira", correct: false},
            { text: "Rand", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Germany? 🇩🇪 ",
        answers: [
            { text: "Franc", correct: false},
            { text: "Euro", correct: true},
            { text: "Mark", correct: false},
            { text: "Krone", correct: false},
        ]
    },
    {
        question: "What is the currency of France? 🇫🇷 ",
        answers: [
            { text: "Franc", correct: false},
            { text: "Euro", correct: true},
            { text: "Pound", correct: false},
            { text: "Dinar", correct: false},
        ]
    },
    {
        question: "What is the currency of Italy? 🇮🇹 ",
        answers: [
            { text: "Euro", correct: true},
            { text: "Lira", correct: false},
            { text: "Frank", correct: false},
            { text: "Mark", correct: false},
        ]
    },
    {
        question: "What is the currency of Spain? 🇪🇸 ",
        answers: [
            { text: "Euro", correct: true},
            { text: "Lira", correct: false},
            { text: "Franc", correct: false},
            { text: "Mark", correct: false},
        ]
    },
    {
        question: "What is the currency of Sweden? 🇸🇪 ",
        answers: [
            { text: "Krona", correct: true},
            { text: "Euro", correct: false},
            { text: "Franc", correct: false},
            { text: "Mark", correct: false},
        ]
    },
    {
        question: "What is the currency of Norway? 🇳🇴 ",
        answers: [
            { text: "Krone", correct: true},
            { text: "Krona", correct: false},
            { text: "Euro", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Denmark? 🇩🇰 ",
        answers: [
            { text: "Krone", correct: true},
            { text: "Krona", correct: false},
            { text: "Euro", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Iceland? 🇮🇸 ",
        answers: [
            { text: "Krone", correct: false},
            { text: "Krona", correct: true},
            { text: "Euro", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Finland? 🇫🇮 ",
        answers: [
            { text: "Euro", correct: true},
            { text: "Markka", correct: false},
            { text: "Krona", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Poland 🇵🇱 ?",
        answers: [
            { text: "Zloty", correct: true},
            { text: "Euro", correct: false},
            { text: "Ruble", correct: false},
            { text: "Krona", correct: false},
        ]
    },
    {
        question: "What is the currency of Hungary 🇭🇺 ?",
        answers: [
            { text: "Forint", correct: true},
            { text: "Euro", correct: false},
            { text: "Krona", correct: false},
            { text: "Ruble", correct: false},
        ]
    },
    {
        question: "What is the currency of Czech Republic 🇨🇿 ?",
        answers: [
            { text: "Koruna", correct: true},
            { text: "Euro", correct: false},
            { text: "Zloty", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Greece 🇬🇷 ?",
        answers: [
            { text: "Drachma", correct: false},
            { text: "Euro", correct: true},
            { text: "Franc", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Portugal 🇵🇹 ?",
        answers: [
            { text: "Escudo", correct: false},
            { text: "Euro", correct: true},
            { text: "Franc", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Thailand? 🇹🇭 ",
        answers: [
            { text: "Baht", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Rpiah", correct: false},
            { text: "Dong", correct: false},
        ]
    },
    {
        question: "What is the currency of Vietnam 🇻🇳 ?",
        answers: [
            { text: "Dong", correct: true},
            { text: "Baht", correct: false},
            { text: "Yuan", correct: false},
            { text: "Rupiah", correct: false},
        ]
    },
    {
        question: "What is the currency of Indonesia 🇮🇩 ?",
        answers: [
            { text: "Rupiah", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Rupee", correct: false},
            { text: "Dong", correct: false},
        ]
    },
    {
        question: "What is the currency of Malaysia 🇲🇾 ?",
        answers: [
            { text: "Ringgit", correct: true},
            { text: "Rupiah", correct: false},
            { text: "Dollar", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Singapore 🇸🇬 ?",
        answers: [
            { text: "Dollar", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Yuan", correct: false},
            { text: "Rupiah", correct: false},
        ]
    },
    {
        question: "What is the currency of Unites Arab Emirates (UAE) 🇦🇪 ?",
        answers: [
            { text: "Dirham", correct: true},
            { text: "Pound", correct: false},
            { text: "Dinar", correct: false},
            { text: "Riyal", correct: false},
        ]
    },
    {
        question: "What is the currency of Iraq 🇮🇶 ?",
        answers: [
            { text: "Dinar", correct: true},
            { text: "Riyal", correct: false},
            { text: "Pound", correct: false},
            { text: "Rirham", correct: false},
        ]
    },
    {
        question: "What is the currency of Iran 🇮🇷 ?",
        answers: [
            { text: "Rial", correct: true},
            { text: "Toman", correct: false},
            { text: "Dirham", correct: false},
            { text: "Dinar", correct: false},
        ]
    },
    {
        question: "What is the currency of Pakistan 🇵🇰 ?",
        answers: [
            { text: "Rupee", correct: true},
            { text: "Taka", correct: false},
            { text: "Dinar", correct: false},
            { text: "Ringgit", correct: false},
        ]
    },
    {
        question: "What is the currency of Bangladesh 🇧🇩 ?",
        answers: [
            { text: "Rupee", correct: false},
            { text: "Taka", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Baht", correct: false},
        ]
    },
    {
        question: "What is the currency of Sri Lanka 🇱🇰 ?",
        answers: [
            { text: "Taka", correct: false},
            { text: "Rupee", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Peso", correct: false},
        ]
    },
    {
        question: "What is the currency of Nepal 🇳🇵 ?",
        answers: [
            { text: "Taka", correct: false},
            { text: "Rupee", correct: true},
            { text: "Dollar", correct: false},
            { text: "Yen", correct: false},
        ]
    },
    {
        question: "What is the currency of Ethiopia 🇪🇹 ?",
        answers: [
            { text: "Naira", correct: false},
            { text: "Birr", correct: true},
            { text: "Shilling", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Ghana 🇬🇭 ?",
        answers: [
            { text: "Cedi", correct: true},
            { text: "Naira", correct: false},
            { text: "Shilling", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Moroco 🇲🇦 ?",
        answers: [
            { text: "Dirham", correct: true},
            { text: "Dinar", correct: false},
            { text: "Pound", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Algeria 🇩🇿 ?",
        answers: [
            { text: "Dirham", correct: false},
            { text: "Dinar", correct: true},
            { text: "Pound", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Tunisia 🇹🇳 ?",
        answers: [
            { text: "Dinar", correct: true},
            { text: "Pound", correct: false},
            { text: "Franc", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of United States? 🇺🇸",
        answers: [
            { text: "Dollar", correct: true},
            { text: "Euro", correct: false},
            { text: "Pound", correct: false},
            { text: "Peso", correct: false},
        ]
    },
    {
        question: "What is the currency of Chile? 🇨🇱",
        answers: [
            { text: "Peso", correct: true},
            { text: "Real", correct: false},
            { text: "Soles", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Colombia? 🇨🇴",
        answers: [
            { text: "Peso", correct: true},
            { text: "Bolivar", correct: false},
            { text: "Sol", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Peru? 🇵🇪",
        answers: [
            { text: "Sol", correct: true},
            { text: "Peso", correct: false},
            { text: "Real", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Venezuela? 🇻🇪",
        answers: [
            { text: "Bolivar", correct: true},
            { text: "Peso", correct: false},
            { text: "Sol", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Bolivia? 🇧🇴",
        answers: [
            { text: "Boliviano", correct: true},
            { text: "Peso", correct: false},
            { text: "Real", correct: false},
            { text: "Sol", correct: false},
        ]
    },
    {
        question: "What is the currency of Paraguay? 🇵🇾",
        answers: [
            { text: "Guaraní", correct: true},
            { text: "Peso", correct: false},
            { text: "Sol", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Uruguay? 🇺🇾",
        answers: [
            { text: "Peso", correct: true},
            { text: "Real", correct: false},
            { text: "Sol", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Cuba? 🇨🇺",
        answers: [
            { text: "Peso", correct: true},
            { text: "Dollar", correct: false},
            { text: "Real", correct: false},
            { text: "Colon", correct: false},
        ]
    },
    {
        question: "What is the currency of Dominican Republic? 🇩🇴",
        answers: [
            { text: "Peso", correct: true},
            { text: "Dollar", correct: false},
            { text: "Sol", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Costa Rica? 🇨🇷",
        answers: [
            { text: "Colón", correct: true},
            { text: "Peso", correct: false},
            { text: "Dollar", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Panama? 🇵🇦",
        answers: [
            { text: "Balboa", correct: true},
            { text: "Peso", correct: false},
            { text: "Dollar", correct: false},
            { text: "Sol", correct: false},
        ]
    },
    {
        question: "What is the currency of Honduras? 🇭🇳",
        answers: [
            { text: "Lempira", correct: true},
            { text: "Peso", correct: false},
            { text: "Colon", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of El Salvador? 🇸🇻",
        answers: [
            { text: "Dollar", correct: true},
            { text: "Colon", correct: false},
            { text: "Peso", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Guatemala? 🇬🇹",
        answers: [
            { text: "Quetzal", correct: true},
            { text: "Peso", correct: false},
            { text: "Colon", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Nicaragua? 🇳🇮",
        answers: [
            { text: "Córdoba", correct: true},
            { text: "Peso", correct: false},
            { text: "Colon", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Jamaica? 🇯🇲",
        answers: [
            { text: "Dollar", correct: true},
            { text: "Peso", correct: false},
            { text: "Colon", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Haiti? 🇭🇹",
        answers: [
            { text: "Gourde", correct: true},
            { text: "Peso", correct: false},
            { text: "Dollar", correct: false},
            { text: "Real", correct: false},
        ]
    },
    {
        question: "What is the currency of Belarus? 🇧🇾",
        answers: [
            { text: "Ruble", correct: true},
            { text: "Zloty", correct: false},
            { text: "Euro", correct: false},
            { text: "Tenge", correct: false},
        ]
    },
    {
        question: "What is the currency of Ukraine? 🇺🇦",
        answers: [
            { text: "Hryvnia", correct: true},
            { text: "Ruble", correct: false},
            { text: "Euro", correct: false},
            { text: "Zloty", correct: false},
        ]
    },
    {
        question: "What is the currency of Kazakhstan? 🇰🇿",
        answers: [
            { text: "Tenge", correct: true},
            { text: "Ruble", correct: false},
            { text: "Manat", correct: false},
            { text: "Som", correct: false},
        ]
    },
    {
        question: "What is the currency of Azerbaijan? 🇦🇿",
        answers: [
            { text: "Manat", correct: true},
            { text: "Ruble", correct: false},
            { text: "Lira", correct: false},
            { text: "Tenge", correct: false},
        ]
    },
    {
        question: "What is the currency of Georgia? 🇬🇪",
        answers: [
            { text: "Lari", correct: true},
            { text: "Manat", correct: false},
            { text: "Ruble", correct: false},
            { text: "Euro", correct: false},
        ]
    },
    {
        question: "What is the currency of Armenia? 🇦🇲",
        answers: [
            { text: "Dram", correct: true},
            { text: "Lira", correct: false},
            { text: "Manat", correct: false},
            { text: "Ruble", correct: false},
        ]
    },
    {
        question: "What is the currency of Mongolia? 🇲🇳",
        answers: [
            { text: "Tögrög", correct: true},
            { text: "Yuan", correct: false},
            { text: "Ruble", correct: false},
            { text: "Won", correct: false},
        ]
    },
    {
        question: "What is the currency of Afghanistan? 🇦🇫",
        answers: [
            { text: "Afghani", correct: true},
            { text: "Rupee", correct: false},
            { text: "Taka", correct: false},
            { text: "Toman", correct: false},
        ]
    },
    {
        question: "What is the currency of Jordan? 🇯🇴",
        answers: [
            { text: "Dinar", correct: true},
            { text: "Riyal", correct: false},
            { text: "Dirham", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Lebanon? 🇱🇧",
        answers: [
            { text: "Pound", correct: true},
            { text: "Riyal", correct: false},
            { text: "Dinar", correct: false},
            { text: "Dirham", correct: false},
        ]
    },
    {
        question: "What is the currency of Syria? 🇸🇾",
        answers: [
            { text: "Pound", correct: true},
            { text: "Riyal", correct: false},
            { text: "Dinar", correct: false},
            { text: "Dirham", correct: false},
        ]
    },
    {
        question: "What is the currency of Kuwait? 🇰🇼",
        answers: [
            { text: "Dinar", correct: true},
            { text: "Riyal", correct: false},
            { text: "Dirham", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Qatar? 🇶🇦",
        answers: [
            { text: "Riyal", correct: true},
            { text: "Dinar", correct: false},
            { text: "Dirham", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Oman? 🇴🇲",
        answers: [
            { text: "Rial", correct: true},
            { text: "Dinar", correct: false},
            { text: "Dirham", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Yemen? 🇾🇪",
        answers: [
            { text: "Rial", correct: true},
            { text: "Dinar", correct: false},
            { text: "Dirham", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Sudan? 🇸🇩",
        answers: [
            { text: "Pound", correct: true},
            { text: "Shilling", correct: false},
            { text: "Dinar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Tanzania? 🇹🇿",
        answers: [
            { text: "Shilling", correct: true},
            { text: "Rand", correct: false},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Uganda? 🇺🇬",
        answers: [
            { text: "Shilling", correct: true},
            { text: "Rand", correct: false},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Somalia? 🇸🇴",
        answers: [
            { text: "Shilling", correct: true},
            { text: "Rand", correct: false},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Democratic Republic of Congo? 🇨🇩",
        answers: [
            { text: "Franc", correct: true},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
            { text: "Shilling", correct: false},
        ]
    },
    {
        question: "What is the currency of Zambia? 🇿🇲",
        answers: [
            { text: "Kwacha", correct: true},
            { text: "Shilling", correct: false},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Malawi? 🇲🇼",
        answers: [
            { text: "Kwacha", correct: true},
            { text: "Shilling", correct: false},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Zimbabwe? 🇿🇼",
        answers: [
            { text: "Dollar", correct: true},
            { text: "Rand", correct: false},
            { text: "Pound", correct: false},
            { text: "Shilling", correct: false},
        ]
    },
    {
        question: "What is the currency of Angola? 🇦🇴",
        answers: [
            { text: "Kwanza", correct: true},
            { text: "Rand", correct: false},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Mozambique? 🇲🇿",
        answers: [
            { text: "Metical", correct: true},
            { text: "Rand", correct: false},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Seychelles? 🇸🇨",
        answers: [
            { text: "Rupee", correct: true},
            { text: "Shilling", correct: false},
            { text: "Dollar", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Mauritius? 🇲🇺",
        answers: [
            { text: "Rupee", correct: true},
            { text: "Shilling", correct: false},
            { text: "Dollar", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Madagascar? 🇲🇬",
        answers: [
            { text: "Ariary", correct: true},
            { text: "Shilling", correct: false},
            { text: "Dollar", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Botswana? 🇧🇼",
        answers: [
            { text: "Pula", correct: true},
            { text: "Rand", correct: false},
            { text: "Shilling", correct: false},
            { text: "Dollar", correct: false},
        ]
    }
    ,
    {
        question: "What is the currency of Netherlands? 🇳🇱",
        answers: [
            { text: "Euro", correct: true},
            { text: "Guilder", correct: false},
            { text: "Florin", correct: false},
            { text: "Crown", correct: false},
        ]
    },
    {
        question: "What is the currency of Belgium? 🇧🇪",
        answers: [
            { text: "Euro", correct: true},
            { text: "Franc", correct: false},
            { text: "Guilder", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Luxembourg? 🇱🇺",
        answers: [
            { text: "Euro", correct: true},
            { text: "Franc", correct: false},
            { text: "Pound", correct: false},
            { text: "Mark", correct: false},
        ]
    },
    {
        question: "What is the currency of Ireland? 🇮🇪",
        answers: [
            { text: "Euro", correct: true},
            { text: "Pound", correct: false},
            { text: "Dollar", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Austria? 🇦🇹",
        answers: [
            { text: "Euro", correct: true},
            { text: "Schilling", correct: false},
            { text: "Mark", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Malta? 🇲🇹",
        answers: [
            { text: "Euro", correct: true},
            { text: "Lira", correct: false},
            { text: "Pound", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Cyprus? 🇨🇾",
        answers: [
            { text: "Euro", correct: true},
            { text: "Pound", correct: false},
            { text: "Lira", correct: false},
            { text: "Drachma", correct: false},
        ]
    },
    {
        question: "What is the currency of Croatia? 🇭🇷",
        answers: [
            { text: "Euro", correct: true},
            { text: "Kuna", correct: false},
            { text: "Dinar", correct: false},
            { text: "Lira", correct: false},
        ]
    },
    {
        question: "What is the currency of Slovenia? 🇸🇮",
        answers: [
            { text: "Euro", correct: true},
            { text: "Tolar", correct: false},
            { text: "Dinar", correct: false},
            { text: "Koruna", correct: false},
        ]
    },
    {
        question: "What is the currency of Slovakia? 🇸🇰",
        answers: [
            { text: "Euro", correct: true},
            { text: "Koruna", correct: false},
            { text: "Forint", correct: false},
            { text: "Zloty", correct: false},
        ]
    },
    {
        question: "What is the currency of Bulgaria? 🇧🇬",
        answers: [
            { text: "Lev", correct: true},
            { text: "Euro", correct: false},
            { text: "Leu", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Romania? 🇷🇴",
        answers: [
            { text: "Leu", correct: true},
            { text: "Euro", correct: false},
            { text: "Leu (old)", correct: false},
            { text: "Forint", correct: false},
        ]
    },
    {
        question: "What is the currency of Serbia? 🇷🇸",
        answers: [
            { text: "Dinar", correct: true},
            { text: "Euro", correct: false},
            { text: "Kuna", correct: false},
            { text: "Leu", correct: false},
        ]
    },
    {
        question: "What is the currency of Bosnia and Herzegovina? 🇧🇦",
        answers: [
            { text: "Convertible Mark", correct: true},
            { text: "Dinar", correct: false},
            { text: "Euro", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Montenegro? 🇲🇪",
        answers: [
            { text: "Euro", correct: true},
            { text: "Dinar", correct: false},
            { text: "Euro (pegged)", correct: false},
            { text: "Mark", correct: false},
        ]
    },
    {
        question: "What is the currency of North Macedonia? 🇲🇰",
        answers: [
            { text: "Denar", correct: true},
            { text: "Dinar", correct: false},
            { text: "Euro", correct: false},
            { text: "Leu", correct: false},
        ]
    },
    {
        question: "What is the currency of Albania? 🇦🇱",
        answers: [
            { text: "Lek", correct: true},
            { text: "Dinar", correct: false},
            { text: "Euro", correct: false},
            { text: "Mark", correct: false},
        ]
    },
    {
        question: "What is the currency of Latvia? 🇱🇻",
        answers: [
            { text: "Euro", correct: true},
            { text: "Lats", correct: false},
            { text: "Ruble", correct: false},
            { text: "Koruna", correct: false},
        ]
    },
    {
        question: "What is the currency of Lithuania? 🇱🇹",
        answers: [
            { text: "Euro", correct: true},
            { text: "Litas", correct: false},
            { text: "Zloty", correct: false},
            { text: "Koruna", correct: false},
        ]
    },
    {
        question: "What is the currency of Estonia? 🇪🇪",
        answers: [
            { text: "Euro", correct: true},
            { text: "Kroon", correct: false},
            { text: "Koruna", correct: false},
            { text: "Forint", correct: false},
        ]
    },
    {
        question: "What is the currency of Israel? 🇮🇱",
        answers: [
            { text: "Shekel", correct: true},
            { text: "Lira", correct: false},
            { text: "Dinar", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Libya? 🇱🇾",
        answers: [
            { text: "Dinar", correct: true},
            { text: "Rial", correct: false},
            { text: "Pound", correct: false},
            { text: "Franc", correct: false},
        ]
    },
    {
        question: "What is the currency of Eritrea? 🇪🇷",
        answers: [
            { text: "Nakfa", correct: true},
            { text: "Shilling", correct: false},
            { text: "Franc", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Djibouti? 🇩🇯",
        answers: [
            { text: "Franc", correct: true},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
            { text: "Dinar", correct: false},
        ]
    },
    {
        question: "What is the currency of Cameroon? 🇨🇲",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Shilling", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Senegal? 🇸🇳",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Euro", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Côte d'Ivoire? 🇨🇮",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Naira", correct: false},
            { text: "Franc", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Mali? 🇲🇱",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Dinar", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Burkina Faso? 🇧🇫",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Dollar", correct: false},
            { text: "Naira", correct: false},
        ]
    },
    {
        question: "What is the currency of Niger? 🇳🇪",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Naira", correct: false},
            { text: "Dinar", correct: false},
        ]
    },
    {
        question: "What is the currency of Chad? 🇹🇩",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Dinar", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Central African Republic? 🇨🇫",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Dollar", correct: false},
            { text: "Shilling", correct: false},
        ]
    },
    {
        question: "What is the currency of Gabon? 🇬🇦",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Dollar", correct: false},
            { text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the currency of Republic of the Congo? 🇨🇬",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Dollar", correct: false},
            { text: "Shilling", correct: false},
        ]
    },
    {
        question: "What is the currency of Guinea? 🇬🇳",
        answers: [
            { text: "Guinean Franc", correct: true},
            { text: "CFA Franc", correct: false},
            { text: "Franc", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Sierra Leone? 🇸🇱",
        answers: [
            { text: "Leone", correct: true},
            { text: "Dollar", correct: false},
            { text: "Franc", correct: false},
            { text: "Cedi", correct: false},
        ]
    },
    {
        question: "What is the currency of Liberia? 🇱🇷",
        answers: [
            { text: "Liberian Dollar", correct: true},
            { text: "Dollar", correct: false},
            { text: "Franc", correct: false},
            { text: "Leone", correct: false},
        ]
    },
    {
        question: "What is the currency of Benin? 🇧🇯",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Dollar", correct: false},
            { text: "Naira", correct: false},
        ]
    },
    {
        question: "What is the currency of Togo? 🇹🇬",
        answers: [
            { text: "CFA Franc", correct: true},
            { text: "Franc", correct: false},
            { text: "Dollar", correct: false},
            { text: "Cedi", correct: false},
        ]
    },
    {
        question: "What is the currency of Rwanda? 🇷🇼",
        answers: [
            { text: "Rwandan Franc", correct: true},
            { text: "CFA Franc", correct: false},
            { text: "Franc", correct: false},
            { text: "Shilling", correct: false},
        ]
    },
    {
        question: "What is the currency of Burundi? 🇧🇮",
        answers: [
            { text: "Burundian Franc", correct: true},
            { text: "Rwandan Franc", correct: false},
            { text: "Franc", correct: false},
            { text: "Shilling", correct: false},
        ]
    },
    {
        question: "What is the currency of South Sudan? 🇸🇸",
        answers: [
            { text: "South Sudanese Pound", correct: true},
            { text: "Pound", correct: false},
            { text: "Shilling", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Papua New Guinea? 🇵🇬",
        answers: [
            { text: "Kina", correct: true},
            { text: "Dollar", correct: false},
            { text: "Rupee", correct: false},
            { text: "Vatu", correct: false},
        ]
    },
    {
        question: "What is the currency of Fiji? 🇫🇯",
        answers: [
            { text: "Dollar", correct: true},
            { text: "Fijian Pound", correct: false},
            { text: "Rupee", correct: false},
            { text: "Vatu", correct: false},
        ]
    },
    {
        question: "What is the currency of Solomon Islands? 🇸🇧",
        answers: [
            { text: "Dollar", correct: true},
            { text: "Kina", correct: false},
            { text: "Rupee", correct: false},
            { text: "Vatu", correct: false},
        ]
    },
    {
        question: "What is the currency of Vanuatu? 🇻🇺",
        answers: [
            { text: "Vatu", correct: true},
            { text: "Dollar", correct: false},
            { text: "Kina", correct: false},
            { text: "Tala", correct: false},
        ]
    },
    {
        question: "What is the currency of Samoa? 🇼🇸",
        answers: [
            { text: "Tala", correct: true},
            { text: "Dollar", correct: false},
            { text: "Paʻanga", correct: false},
            { text: "Vatu", correct: false},
        ]
    },
    {
        question: "What is the currency of Tonga? 🇹🇴",
        answers: [
            { text: "Paʻanga", correct: true},
            { text: "Tala", correct: false},
            { text: "Dollar", correct: false},
            { text: "Vatu", correct: false},
        ]
    },
    {
        question: "What is the currency of Brunei? 🇧🇳",
        answers: [
            { text: "Brunei Dollar", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Cambodia? 🇰🇭",
        answers: [
            { text: "Riel", correct: true},
            { text: "Baht", correct: false},
            { text: "Dong", correct: false},
            { text: "Dollar", correct: false},
        ]
    },
    {
        question: "What is the currency of Botswana? 🇧🇼 ",
        answers: [
            { text: "Pula", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Laos? 🇱🇦",
        answers: [
            { text: "Kip", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Georgia? 🇬🇪",
        answers: [
            { text: "Lari", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Namibia? 🇳🇦",
        answers: [
            { text: "Namibian Dollar", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Mauritius? 🇲🇺",
        answers: [
            { text: "Mauritian Rupee", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Mongolia? 🇲🇳",
        answers: [
            { text: "Tögrög", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Kazakhstan? 🇰🇿",
        answers: [
            { text: "Tenge", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Guyana? 🇬🇾",
        answers: [
            { text: "Guyanese Dollar", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of North Macedonia? 🇲🇰",
        answers: [
            { text: "Denar", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    },
    {
        question: "What is the currency of Eswatini? 🇸🇿",
        answers: [
            { text: "Lilangeni", correct: true},
            { text: "Ringgit", correct: false},
            { text: "Dollar", correct: false},
            { text: "Rial", correct: false},
        ]
    }
]

// get all required elements
const questionElement = document.getElementById("question");
const answerbutton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");
const scoreDiv = document.querySelector('.score');

// update the score display (if present)
function updateScoreDiv(){
    const total = selectedQuestions.length || 0;
    if(!scoreDiv) return;
    // preserve any existing SVG by updating the leading text node if present
    const text = `score: ${score}`;
    if(scoreDiv.firstChild && scoreDiv.firstChild.nodeType === Node.TEXT_NODE){
        scoreDiv.firstChild.nodeValue = text;
    }else{
        // fallback: replace content but keep a space for an icon if later added
        scoreDiv.textContent = text;
    }
}

// quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

// Fisher-Yates shuffle (in-place) — returns the same array reference for convenience
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// function to start the quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    // pick 10 random questions (or fewer if there aren't 10 available)
    const count = Math.min(10, questions.length);
    selectedQuestions = shuffle([...questions]).slice(0, count);
    updateScoreDiv();
    showQuestion();
}

// function to show a question
function showQuestion(){
    resetState();
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // replace any flag emoji in the question string with an <img> fallback from FlagCDN
    function flagEmojiToISO(flagEmoji){
        // flagEmoji consists of two regional indicator symbols, convert to ISO (e.g. 🇺🇸 -> 'us')
        let iso = '';
        for(const ch of flagEmoji){
            const code = ch.codePointAt(0) - 0x1F1E6; // 0..25
            iso += String.fromCharCode(65 + code);
        }
        return iso.toLowerCase();
    }

    // regex to match flag emojis (pairs of regional indicator symbols)
    const flagRegex = /[\u{1F1E6}-\u{1F1FF}]{2}/gu;
    const renderedQuestion = (questionNo + ". " + currentQuestion.question).replace(flagRegex, (m) => {
        try{
            const iso = flagEmojiToISO(m);
            return `<img class="flag" src="https://flagcdn.com/24x18/${iso}.png" alt="${m}" />`;
        }catch(e){
            return m; // fallback to original emoji if anything goes wrong
        }
    });

    questionElement.innerHTML = renderedQuestion;

    // shuffle the answers for this question so choices appear in random order
    const answers = shuffle([...currentQuestion.answers]);
    answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

// function to reset the state for next question
function resetState(){
    nextbutton.style.display = "none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

// function to select an answer
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextbutton.style.display = "block";
    updateScoreDiv();
}

//function to show the final score
function showScore(){
    resetState();
    questionElement.innerHTML = `You collected ${score} coins 💰 from ${selectedQuestions.length} coins 🤑!`;
    updateScoreDiv();
    nextbutton.innerHTML = "play Again";
    nextbutton.style.display = "block";
}

// function to handle the next button click
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < selectedQuestions.length){
        showQuestion();
    }else{
        showScore();
    }
}

// event listener for the next button
nextbutton.addEventListener("click", () => {
    if(currentQuestionIndex < selectedQuestions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


// start the quiz when the page loads
startQuiz();