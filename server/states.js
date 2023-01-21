﻿const states = [
  {
    id: 1,
    id_country: 3,
    name: "Azerbaijan",
  },
  {
    id: 2,
    id_country: 3,
    name: "Nargorni Karabakh",
  },
  {
    id: 3,
    id_country: 3,
    name: "Nakhichevanskaya Region",
  },
  {
    id: 4,
    id_country: 4,
    name: "Anguilla",
  },
  {
    id: 5,
    id_country: 7,
    name: "Brestskaya obl.",
  },
  {
    id: 6,
    id_country: 7,
    name: "Vitebskaya obl.",
  },
  {
    id: 7,
    id_country: 7,
    name: "Gomelskaya obl.",
  },
  {
    id: 8,
    id_country: 7,
    name: "Grodnenskaya obl.",
  },
  {
    id: 9,
    id_country: 7,
    name: "Minskaya obl.",
  },
  {
    id: 10,
    id_country: 7,
    name: "Mogilevskaya obl.",
  },
  {
    id: 11,
    id_country: 8,
    name: "Belize",
  },
  {
    id: 12,
    id_country: 10,
    name: "Hamilton",
  },
  {
    id: 13,
    id_country: 15,
    name: "Dong Bang Song Cuu Long",
  },
  {
    id: 14,
    id_country: 15,
    name: "Dong Bang Song Hong",
  },
  {
    id: 15,
    id_country: 15,
    name: "Dong Nam Bo",
  },
  {
    id: 16,
    id_country: 15,
    name: "Duyen Hai Mien Trung",
  },
  {
    id: 17,
    id_country: 15,
    name: "Khu Bon Cu",
  },
  {
    id: 18,
    id_country: 15,
    name: "Mien Nui Va Trung Du",
  },
  {
    id: 19,
    id_country: 15,
    name: "Thai Nguyen",
  },
  {
    id: 20,
    id_country: 16,
    name: "Artibonite",
  },
  {
    id: 21,
    id_country: 16,
    name: "GrandAnse",
  },
  {
    id: 22,
    id_country: 16,
    name: "North West",
  },
  {
    id: 23,
    id_country: 16,
    name: "West",
  },
  {
    id: 24,
    id_country: 16,
    name: "South",
  },
  {
    id: 25,
    id_country: 16,
    name: "South East",
  },
  {
    id: 26,
    id_country: 17,
    name: "Grande-Terre",
  },
  {
    id: 27,
    id_country: 17,
    name: "Basse-Terre",
  },
  {
    id: 28,
    id_country: 21,
    name: "Abkhazia",
  },
  {
    id: 29,
    id_country: 21,
    name: "Ajaria",
  },
  {
    id: 30,
    id_country: 21,
    name: "Georgia",
  },
  {
    id: 31,
    id_country: 21,
    name: "South Ossetia",
  },
  {
    id: 32,
    id_country: 23,
    name: "Al QÃ„Â�hira",
  },
  {
    id: 33,
    id_country: 23,
    name: "Aswan",
  },
  {
    id: 34,
    id_country: 23,
    name: "Asyut",
  },
  {
    id: 35,
    id_country: 23,
    name: "Beni Suef",
  },
  {
    id: 36,
    id_country: 23,
    name: "Gharbia",
  },
  {
    id: 37,
    id_country: 23,
    name: "Damietta",
  },
  {
    id: 38,
    id_country: 24,
    name: "Southern District",
  },
  {
    id: 39,
    id_country: 24,
    name: "Central District",
  },
  {
    id: 40,
    id_country: 24,
    name: "Northern District",
  },
  {
    id: 41,
    id_country: 24,
    name: "Haifa",
  },
  {
    id: 42,
    id_country: 24,
    name: "Tel Aviv",
  },
  {
    id: 43,
    id_country: 24,
    name: "Jerusalem",
  },
  {
    id: 44,
    id_country: 25,
    name: "Bangala",
  },
  {
    id: 45,
    id_country: 25,
    name: "Chhattisgarh",
  },
  {
    id: 46,
    id_country: 25,
    name: "Karnataka",
  },
  {
    id: 47,
    id_country: 25,
    name: "Uttaranchal",
  },
  {
    id: 48,
    id_country: 25,
    name: "Andhara Pradesh",
  },
  {
    id: 49,
    id_country: 25,
    name: "Assam",
  },
  {
    id: 50,
    id_country: 25,
    name: "Bihar",
  },
  {
    id: 51,
    id_country: 25,
    name: "Gujarat",
  },
  {
    id: 52,
    id_country: 25,
    name: "Jammu and Kashmir",
  },
  {
    id: 53,
    id_country: 25,
    name: "Kerala",
  },
  {
    id: 54,
    id_country: 25,
    name: "Madhya Pradesh",
  },
  {
    id: 55,
    id_country: 25,
    name: "Manipur",
  },
  {
    id: 56,
    id_country: 25,
    name: "Maharashtra",
  },
  {
    id: 57,
    id_country: 25,
    name: "Megahalaya",
  },
  {
    id: 58,
    id_country: 25,
    name: "Orissa",
  },
  {
    id: 59,
    id_country: 25,
    name: "Punjab",
  },
  {
    id: 60,
    id_country: 25,
    name: "Pondisheri",
  },
  {
    id: 61,
    id_country: 25,
    name: "Rajasthan",
  },
  {
    id: 62,
    id_country: 25,
    name: "Tamil Nadu",
  },
  {
    id: 63,
    id_country: 25,
    name: "Tripura",
  },
  {
    id: 64,
    id_country: 25,
    name: "Uttar Pradesh",
  },
  {
    id: 65,
    id_country: 25,
    name: "Haryana",
  },
  {
    id: 66,
    id_country: 25,
    name: "Chandigarh",
  },
  {
    id: 67,
    id_country: 26,
    name: "Azarbayjan-e Khavari",
  },
  {
    id: 68,
    id_country: 26,
    name: "Esfahan",
  },
  {
    id: 69,
    id_country: 26,
    name: "Hamadan",
  },
  {
    id: 70,
    id_country: 26,
    name: "Kordestan",
  },
  {
    id: 71,
    id_country: 26,
    name: "Markazi",
  },
  {
    id: 72,
    id_country: 26,
    name: "Sistan-e Baluches",
  },
  {
    id: 73,
    id_country: 26,
    name: "Yazd",
  },
  {
    id: 74,
    id_country: 26,
    name: "Kerman",
  },
  {
    id: 75,
    id_country: 26,
    name: "Kermanshakhan",
  },
  {
    id: 76,
    id_country: 26,
    name: "Mazenderan",
  },
  {
    id: 77,
    id_country: 26,
    name: "Tehran",
  },
  {
    id: 78,
    id_country: 26,
    name: "Fars",
  },
  {
    id: 79,
    id_country: 26,
    name: "Horasan",
  },
  {
    id: 80,
    id_country: 26,
    name: "Husistan",
  },
  {
    id: 81,
    id_country: 30,
    name: "Aktyubinskaya obl.",
  },
  {
    id: 82,
    id_country: 30,
    name: "Alma-Atinskaya obl.",
  },
  {
    id: 83,
    id_country: 30,
    name: "Vostochno-Kazahstanskaya obl.",
  },
  {
    id: 84,
    id_country: 30,
    name: "Gurevskaya obl.",
  },
  {
    id: 85,
    id_country: 30,
    name: "Zhambylskaya obl. (Dzhambulskaya obl.)",
  },
  {
    id: 86,
    id_country: 30,
    name: "Dzhezkazganskaya obl.",
  },
  {
    id: 87,
    id_country: 30,
    name: "Karagandinskaya obl.",
  },
  {
    id: 88,
    id_country: 30,
    name: "Kzyl-Ordinskaya obl.",
  },
  {
    id: 89,
    id_country: 30,
    name: "Kokchetavskaya obl.",
  },
  {
    id: 90,
    id_country: 30,
    name: "Kustanaiskaya obl.",
  },
  {
    id: 91,
    id_country: 30,
    name: "Mangystauskaya (Mangyshlakskaya obl.)",
  },
  {
    id: 92,
    id_country: 30,
    name: "Pavlodarskaya obl.",
  },
  {
    id: 93,
    id_country: 30,
    name: "Severo-Kazahstanskaya obl.",
  },
  {
    id: 94,
    id_country: 30,
    name: "Taldy-Kurganskaya obl.",
  },
  {
    id: 95,
    id_country: 30,
    name: "Turgaiskaya obl.",
  },
  {
    id: 96,
    id_country: 30,
    name: "Akmolinskaya obl. (Tselinogradskaya obl.)",
  },
  {
    id: 97,
    id_country: 30,
    name: "Chimkentskaya obl.",
  },
  {
    id: 98,
    id_country: 31,
    name: "Littoral",
  },
  {
    id: 99,
    id_country: 31,
    name: "Southwest Region",
  },
  {
    id: 100,
    id_country: 31,
    name: "North",
  },
  {
    id: 101,
    id_country: 31,
    name: "Central",
  },
  {
    id: 102,
    id_country: 33,
    name: "Government controlled area",
  },
  {
    id: 103,
    id_country: 33,
    name: "Turkish controlled area",
  },
  {
    id: 104,
    id_country: 34,
    name: "Issik Kulskaya Region",
  },
  {
    id: 105,
    id_country: 34,
    name: "Kyrgyzstan",
  },
  {
    id: 106,
    id_country: 34,
    name: "Narinskaya Region",
  },
  {
    id: 107,
    id_country: 34,
    name: "Oshskaya Region",
  },
  {
    id: 108,
    id_country: 34,
    name: "Tallaskaya Region",
  },
  {
    id: 109,
    id_country: 37,
    name: "al-Jahra",
  },
  {
    id: 110,
    id_country: 37,
    name: "al-Kuwait",
  },
  {
    id: 111,
    id_country: 38,
    name: "Latviya",
  },
  {
    id: 112,
    id_country: 39,
    name: "Tarabulus",
  },
  {
    id: 113,
    id_country: 39,
    name: "Bengasi",
  },
  {
    id: 114,
    id_country: 40,
    name: "Litva",
  },
  {
    id: 115,
    id_country: 43,
    name: "Moldova",
  },
  {
    id: 116,
    id_country: 45,
    name: "Auckland",
  },
  {
    id: 117,
    id_country: 45,
    name: "Bay of Plenty",
  },
  {
    id: 118,
    id_country: 45,
    name: "Canterbury",
  },
  {
    id: 119,
    id_country: 45,
    name: "Gisborne",
  },
  {
    id: 120,
    id_country: 45,
    name: "Hawkes Bay",
  },
  {
    id: 121,
    id_country: 45,
    name: "Manawatu-Wanganui",
  },
  {
    id: 122,
    id_country: 45,
    name: "Marlborough",
  },
  {
    id: 123,
    id_country: 45,
    name: "Nelson",
  },
  {
    id: 124,
    id_country: 45,
    name: "Northland",
  },
  {
    id: 125,
    id_country: 45,
    name: "Otago",
  },
  {
    id: 126,
    id_country: 45,
    name: "Southland",
  },
  {
    id: 127,
    id_country: 45,
    name: "Taranaki",
  },
  {
    id: 128,
    id_country: 45,
    name: "Tasman",
  },
  {
    id: 129,
    id_country: 45,
    name: "Waikato",
  },
  {
    id: 130,
    id_country: 45,
    name: "Wellington",
  },
  {
    id: 131,
    id_country: 45,
    name: "West Coast",
  },
  {
    id: 132,
    id_country: 49,
    name: "Saint-Denis",
  },
  {
    id: 133,
    id_country: 50,
    name: "Altaiskii krai",
  },
  {
    id: 134,
    id_country: 50,
    name: "Amurskaya obl.",
  },
  {
    id: 135,
    id_country: 50,
    name: "Arhangelskaya obl.",
  },
  {
    id: 136,
    id_country: 50,
    name: "Astrahanskaya obl.",
  },
  {
    id: 137,
    id_country: 50,
    name: "Bashkiriya obl.",
  },
  {
    id: 138,
    id_country: 50,
    name: "Belgorodskaya obl.",
  },
  {
    id: 139,
    id_country: 50,
    name: "Bryanskaya obl.",
  },
  {
    id: 140,
    id_country: 50,
    name: "Buryatiya",
  },
  {
    id: 141,
    id_country: 50,
    name: "Vladimirskaya obl.",
  },
  {
    id: 142,
    id_country: 50,
    name: "Volgogradskaya obl.",
  },
  {
    id: 143,
    id_country: 50,
    name: "Vologodskaya obl.",
  },
  {
    id: 144,
    id_country: 50,
    name: "Voronezhskaya obl.",
  },
  {
    id: 145,
    id_country: 50,
    name: "Nizhegorodskaya obl.",
  },
  {
    id: 146,
    id_country: 50,
    name: "Dagestan",
  },
  {
    id: 147,
    id_country: 50,
    name: "Evreiskaya obl.",
  },
  {
    id: 148,
    id_country: 50,
    name: "Ivanovskaya obl.",
  },
  {
    id: 149,
    id_country: 50,
    name: "Irkutskaya obl.",
  },
  {
    id: 150,
    id_country: 50,
    name: "Kabardino-Balkariya",
  },
  {
    id: 151,
    id_country: 50,
    name: "Kaliningradskaya obl.",
  },
  {
    id: 152,
    id_country: 50,
    name: "Tverskaya obl.",
  },
  {
    id: 153,
    id_country: 50,
    name: "Kalmykiya",
  },
  {
    id: 154,
    id_country: 50,
    name: "Kaluzhskaya obl.",
  },
  {
    id: 155,
    id_country: 50,
    name: "Kamchatskaya obl.",
  },
  {
    id: 156,
    id_country: 50,
    name: "Kareliya",
  },
  {
    id: 157,
    id_country: 50,
    name: "Kemerovskaya obl.",
  },
  {
    id: 158,
    id_country: 50,
    name: "Kirovskaya obl.",
  },
  {
    id: 159,
    id_country: 50,
    name: "Komi",
  },
  {
    id: 160,
    id_country: 50,
    name: "Kostromskaya obl.",
  },
  {
    id: 161,
    id_country: 50,
    name: "Krasnodarskii krai",
  },
  {
    id: 162,
    id_country: 50,
    name: "Krasnoyarskii krai",
  },
  {
    id: 163,
    id_country: 50,
    name: "Kurganskaya obl.",
  },
  {
    id: 164,
    id_country: 50,
    name: "Kurskaya obl.",
  },
  {
    id: 165,
    id_country: 50,
    name: "Lipetskaya obl.",
  },
  {
    id: 166,
    id_country: 50,
    name: "Magadanskaya obl.",
  },
  {
    id: 167,
    id_country: 50,
    name: "Marii El",
  },
  {
    id: 168,
    id_country: 50,
    name: "Mordoviya",
  },
  {
    id: 169,
    id_country: 50,
    name: "Moscow Y Moscow Region",
  },
  {
    id: 170,
    id_country: 50,
    name: "Murmanskaya obl.",
  },
  {
    id: 171,
    id_country: 50,
    name: "Novgorodskaya obl.",
  },
  {
    id: 172,
    id_country: 50,
    name: "Novosibirskaya obl.",
  },
  {
    id: 173,
    id_country: 50,
    name: "Omskaya obl.",
  },
  {
    id: 174,
    id_country: 50,
    name: "Orenburgskaya obl.",
  },
  {
    id: 175,
    id_country: 50,
    name: "Orlovskaya obl.",
  },
  {
    id: 176,
    id_country: 50,
    name: "Penzenskaya obl.",
  },
  {
    id: 177,
    id_country: 50,
    name: "Permskiy krai",
  },
  {
    id: 178,
    id_country: 50,
    name: "Primorskii krai",
  },
  {
    id: 179,
    id_country: 50,
    name: "Pskovskaya obl.",
  },
  {
    id: 180,
    id_country: 50,
    name: "Rostovskaya obl.",
  },
  {
    id: 181,
    id_country: 50,
    name: "Ryazanskaya obl.",
  },
  {
    id: 182,
    id_country: 50,
    name: "Samarskaya obl.",
  },
  {
    id: 183,
    id_country: 50,
    name: "Saint-Petersburg and Region",
  },
  {
    id: 184,
    id_country: 50,
    name: "Saratovskaya obl.",
  },
  {
    id: 185,
    id_country: 50,
    name: "Saha (Yakutiya)",
  },
  {
    id: 186,
    id_country: 50,
    name: "Sahalin",
  },
  {
    id: 187,
    id_country: 50,
    name: "Sverdlovskaya obl.",
  },
  {
    id: 188,
    id_country: 50,
    name: "Severnaya Osetiya",
  },
  {
    id: 189,
    id_country: 50,
    name: "Smolenskaya obl.",
  },
  {
    id: 190,
    id_country: 50,
    name: "Stavropolskii krai",
  },
  {
    id: 191,
    id_country: 50,
    name: "Tambovskaya obl.",
  },
  {
    id: 192,
    id_country: 50,
    name: "Tatarstan",
  },
  {
    id: 193,
    id_country: 50,
    name: "Tomskaya obl.",
  },
  {
    id: 195,
    id_country: 50,
    name: "Tulskaya obl.",
  },
  {
    id: 196,
    id_country: 50,
    name: "Tyumenskaya obl. i Hanty-Mansiiskii AO",
  },
  {
    id: 197,
    id_country: 50,
    name: "Udmurtiya",
  },
  {
    id: 198,
    id_country: 50,
    name: "Ulyanovskaya obl.",
  },
  {
    id: 199,
    id_country: 50,
    name: "Uralskaya obl.",
  },
  {
    id: 200,
    id_country: 50,
    name: "Habarovskii krai",
  },
  {
    id: 201,
    id_country: 50,
    name: "Chelyabinskaya obl.",
  },
  {
    id: 202,
    id_country: 50,
    name: "Checheno-Ingushetiya",
  },
  {
    id: 203,
    id_country: 50,
    name: "Chitinskaya obl.",
  },
  {
    id: 204,
    id_country: 50,
    name: "Chuvashiya",
  },
  {
    id: 205,
    id_country: 50,
    name: "Yaroslavskaya obl.",
  },
  {
    id: 206,
    id_country: 51,
    name: "Ahuachapán",
  },
  {
    id: 207,
    id_country: 51,
    name: "Cuscatlán",
  },
  {
    id: 208,
    id_country: 51,
    name: "La Libertad",
  },
  {
    id: 209,
    id_country: 51,
    name: "La Paz",
  },
  {
    id: 210,
    id_country: 51,
    name: "La Unión",
  },
  {
    id: 211,
    id_country: 51,
    name: "San Miguel",
  },
  {
    id: 212,
    id_country: 51,
    name: "San Salvador",
  },
  {
    id: 213,
    id_country: 51,
    name: "Santa Ana",
  },
  {
    id: 214,
    id_country: 51,
    name: "Sonsonate",
  },
  {
    id: 215,
    id_country: 54,
    name: "Paramaribo",
  },
  {
    id: 216,
    id_country: 56,
    name: "Gorno-Badakhshan Region",
  },
  {
    id: 217,
    id_country: 56,
    name: "Kuljabsk Region",
  },
  {
    id: 218,
    id_country: 56,
    name: "Kurgan-Tjube Region",
  },
  {
    id: 219,
    id_country: 56,
    name: "Sughd Region",
  },
  {
    id: 220,
    id_country: 56,
    name: "Tajikistan",
  },
  {
    id: 221,
    id_country: 57,
    name: "Ashgabat Region",
  },
  {
    id: 222,
    id_country: 57,
    name: "Krasnovodsk Region",
  },
  {
    id: 223,
    id_country: 57,
    name: "Mary Region",
  },
  {
    id: 224,
    id_country: 57,
    name: "Tashauz Region",
  },
  {
    id: 225,
    id_country: 57,
    name: "Chardzhou Region",
  },
  {
    id: 226,
    id_country: 58,
    name: "Grand Turk",
  },
  {
    id: 227,
    id_country: 59,
    name: "Bartin",
  },
  {
    id: 228,
    id_country: 59,
    name: "Bayburt",
  },
  {
    id: 229,
    id_country: 59,
    name: "Karabuk",
  },
  {
    id: 230,
    id_country: 59,
    name: "Adana",
  },
  {
    id: 231,
    id_country: 59,
    name: "Aydin",
  },
  {
    id: 232,
    id_country: 59,
    name: "Amasya",
  },
  {
    id: 233,
    id_country: 59,
    name: "Ankara",
  },
  {
    id: 234,
    id_country: 59,
    name: "Antalya",
  },
  {
    id: 235,
    id_country: 59,
    name: "Artvin",
  },
  {
    id: 236,
    id_country: 59,
    name: "Afion",
  },
  {
    id: 237,
    id_country: 59,
    name: "Balikesir",
  },
  {
    id: 238,
    id_country: 59,
    name: "Bilecik",
  },
  {
    id: 239,
    id_country: 59,
    name: "Bursa",
  },
  {
    id: 240,
    id_country: 59,
    name: "Gaziantep",
  },
  {
    id: 241,
    id_country: 59,
    name: "Denizli",
  },
  {
    id: 242,
    id_country: 59,
    name: "Izmir",
  },
  {
    id: 243,
    id_country: 59,
    name: "Isparta",
  },
  {
    id: 244,
    id_country: 59,
    name: "Icel",
  },
  {
    id: 245,
    id_country: 59,
    name: "Kayseri",
  },
  {
    id: 246,
    id_country: 59,
    name: "Kars",
  },
  {
    id: 247,
    id_country: 59,
    name: "Kodjaeli",
  },
  {
    id: 248,
    id_country: 59,
    name: "Konya",
  },
  {
    id: 249,
    id_country: 59,
    name: "Kirklareli",
  },
  {
    id: 250,
    id_country: 59,
    name: "Kutahya",
  },
  {
    id: 251,
    id_country: 59,
    name: "Malatya",
  },
  {
    id: 252,
    id_country: 59,
    name: "Manisa",
  },
  {
    id: 253,
    id_country: 59,
    name: "Sakarya",
  },
  {
    id: 254,
    id_country: 59,
    name: "Samsun",
  },
  {
    id: 255,
    id_country: 59,
    name: "Sivas",
  },
  {
    id: 256,
    id_country: 59,
    name: "Istanbul",
  },
  {
    id: 257,
    id_country: 59,
    name: "Trabzon",
  },
  {
    id: 258,
    id_country: 59,
    name: "Corum",
  },
  {
    id: 259,
    id_country: 59,
    name: "Edirne",
  },
  {
    id: 260,
    id_country: 59,
    name: "Elazig",
  },
  {
    id: 261,
    id_country: 59,
    name: "Erzincan",
  },
  {
    id: 262,
    id_country: 59,
    name: "Erzurum",
  },
  {
    id: 263,
    id_country: 59,
    name: "Eskisehir",
  },
  {
    id: 264,
    id_country: 60,
    name: "Jinja",
  },
  {
    id: 265,
    id_country: 60,
    name: "Kampala",
  },
  {
    id: 266,
    id_country: 61,
    name: "Andijon Region",
  },
  {
    id: 267,
    id_country: 61,
    name: "Buxoro Region",
  },
  {
    id: 268,
    id_country: 61,
    name: "Jizzac Region",
  },
  {
    id: 269,
    id_country: 61,
    name: "Qaraqalpaqstan",
  },
  {
    id: 270,
    id_country: 61,
    name: "Qashqadaryo Region",
  },
  {
    id: 271,
    id_country: 61,
    name: "Navoiy Region",
  },
  {
    id: 272,
    id_country: 61,
    name: "Namangan Region",
  },
  {
    id: 273,
    id_country: 61,
    name: "Samarqand Region",
  },
  {
    id: 274,
    id_country: 61,
    name: "Surxondaryo Region",
  },
  {
    id: 275,
    id_country: 61,
    name: "Sirdaryo Region",
  },
  {
    id: 276,
    id_country: 61,
    name: "Tashkent Region",
  },
  {
    id: 277,
    id_country: 61,
    name: "Fergana Region",
  },
  {
    id: 278,
    id_country: 61,
    name: "Xorazm Region",
  },
  {
    id: 279,
    id_country: 62,
    name: "Vinnitskaya obl.",
  },
  {
    id: 280,
    id_country: 62,
    name: "Volynskaya obl.",
  },
  {
    id: 281,
    id_country: 62,
    name: "Dnepropetrovskaya obl.",
  },
  {
    id: 282,
    id_country: 62,
    name: "Donetskaya obl.",
  },
  {
    id: 283,
    id_country: 62,
    name: "Zhitomirskaya obl.",
  },
  {
    id: 284,
    id_country: 62,
    name: "Zakarpatskaya obl.",
  },
  {
    id: 285,
    id_country: 62,
    name: "Zaporozhskaya obl.",
  },
  {
    id: 286,
    id_country: 62,
    name: "Ivano-Frankovskaya obl.",
  },
  {
    id: 287,
    id_country: 62,
    name: "Kievskaya obl.",
  },
  {
    id: 288,
    id_country: 62,
    name: "Kirovogradskaya obl.",
  },
  {
    id: 289,
    id_country: 62,
    name: "Krymskaya obl.",
  },
  {
    id: 290,
    id_country: 62,
    name: "Luganskaya obl.",
  },
  {
    id: 291,
    id_country: 62,
    name: "Lvovskaya obl.",
  },
  {
    id: 292,
    id_country: 62,
    name: "Nikolaevskaya obl.",
  },
  {
    id: 293,
    id_country: 62,
    name: "Odesskaya obl.",
  },
  {
    id: 294,
    id_country: 62,
    name: "Poltavskaya obl.",
  },
  {
    id: 295,
    id_country: 62,
    name: "Rovenskaya obl.",
  },
  {
    id: 296,
    id_country: 62,
    name: "Sumskaya obl.",
  },
  {
    id: 297,
    id_country: 62,
    name: "Ternopolskaya obl.",
  },
  {
    id: 298,
    id_country: 62,
    name: "Harkovskaya obl.",
  },
  {
    id: 299,
    id_country: 62,
    name: "Hersonskaya obl.",
  },
  {
    id: 300,
    id_country: 62,
    name: "Hmelnitskaya obl.",
  },
  {
    id: 301,
    id_country: 62,
    name: "Cherkasskaya obl.",
  },
  {
    id: 302,
    id_country: 62,
    name: "Chernigovskaya obl.",
  },
  {
    id: 303,
    id_country: 62,
    name: "Chernovitskaya obl.",
  },
  {
    id: 304,
    id_country: 68,
    name: "Estoniya",
  },
  {
    id: 305,
    id_country: 69,
    name: "Cheju",
  },
  {
    id: 306,
    id_country: 69,
    name: "Chollabuk",
  },
  {
    id: 307,
    id_country: 69,
    name: "Chollanam",
  },
  {
    id: 308,
    id_country: 69,
    name: "Chungcheongbuk",
  },
  {
    id: 309,
    id_country: 69,
    name: "Chungcheongnam",
  },
  {
    id: 310,
    id_country: 69,
    name: "Incheon",
  },
  {
    id: 311,
    id_country: 69,
    name: "Kangweon",
  },
  {
    id: 312,
    id_country: 69,
    name: "Kwangju",
  },
  {
    id: 313,
    id_country: 69,
    name: "Kyeonggi",
  },
  {
    id: 314,
    id_country: 69,
    name: "Kyeongsangbuk",
  },
  {
    id: 315,
    id_country: 69,
    name: "Kyeongsangnam",
  },
  {
    id: 316,
    id_country: 69,
    name: "Pusan",
  },
  {
    id: 317,
    id_country: 69,
    name: "Seoul",
  },
  {
    id: 318,
    id_country: 69,
    name: "Taegu",
  },
  {
    id: 319,
    id_country: 69,
    name: "Taejeon",
  },
  {
    id: 320,
    id_country: 69,
    name: "Ulsan",
  },
  {
    id: 321,
    id_country: 70,
    name: "Aichi",
  },
  {
    id: 322,
    id_country: 70,
    name: "Akita",
  },
  {
    id: 323,
    id_country: 70,
    name: "Aomori",
  },
  {
    id: 324,
    id_country: 70,
    name: "Wakayama",
  },
  {
    id: 325,
    id_country: 70,
    name: "Gifu",
  },
  {
    id: 326,
    id_country: 70,
    name: "Gunma",
  },
  {
    id: 327,
    id_country: 70,
    name: "Ibaraki",
  },
  {
    id: 328,
    id_country: 70,
    name: "Iwate",
  },
  {
    id: 329,
    id_country: 70,
    name: "Ishikawa",
  },
  {
    id: 330,
    id_country: 70,
    name: "Kagawa",
  },
  {
    id: 331,
    id_country: 70,
    name: "Kagoshima",
  },
  {
    id: 332,
    id_country: 70,
    name: "Kanagawa",
  },
  {
    id: 333,
    id_country: 70,
    name: "Kyoto",
  },
  {
    id: 334,
    id_country: 70,
    name: "Kochi",
  },
  {
    id: 335,
    id_country: 70,
    name: "Kumamoto",
  },
  {
    id: 336,
    id_country: 70,
    name: "Mie",
  },
  {
    id: 337,
    id_country: 70,
    name: "Miyagi",
  },
  {
    id: 338,
    id_country: 70,
    name: "Miyazaki",
  },
  {
    id: 339,
    id_country: 70,
    name: "Nagano",
  },
  {
    id: 340,
    id_country: 70,
    name: "Nagasaki",
  },
  {
    id: 341,
    id_country: 70,
    name: "Nara",
  },
  {
    id: 342,
    id_country: 70,
    name: "Niigata",
  },
  {
    id: 343,
    id_country: 70,
    name: "Okayama",
  },
  {
    id: 344,
    id_country: 70,
    name: "Okinawa",
  },
  {
    id: 345,
    id_country: 70,
    name: "Osaka",
  },
  {
    id: 346,
    id_country: 70,
    name: "Saga",
  },
  {
    id: 347,
    id_country: 70,
    name: "Saitama",
  },
  {
    id: 348,
    id_country: 70,
    name: "Shiga",
  },
  {
    id: 349,
    id_country: 70,
    name: "Shizuoka",
  },
  {
    id: 350,
    id_country: 70,
    name: "Shimane",
  },
  {
    id: 351,
    id_country: 70,
    name: "Tiba",
  },
  {
    id: 352,
    id_country: 70,
    name: "Tokyo",
  },
  {
    id: 353,
    id_country: 70,
    name: "Tokushima",
  },
  {
    id: 354,
    id_country: 70,
    name: "Tochigi",
  },
  {
    id: 355,
    id_country: 70,
    name: "Tottori",
  },
  {
    id: 356,
    id_country: 70,
    name: "Toyama",
  },
  {
    id: 357,
    id_country: 70,
    name: "Fukui",
  },
  {
    id: 358,
    id_country: 70,
    name: "Fukuoka",
  },
  {
    id: 359,
    id_country: 70,
    name: "Fukushima",
  },
  {
    id: 360,
    id_country: 70,
    name: "Hiroshima",
  },
  {
    id: 361,
    id_country: 70,
    name: "Hokkaido",
  },
  {
    id: 362,
    id_country: 70,
    name: "Hyogo",
  },
  {
    id: 363,
    id_country: 70,
    name: "Yoshimi",
  },
  {
    id: 364,
    id_country: 70,
    name: "Yamagata",
  },
  {
    id: 365,
    id_country: 70,
    name: "Yamaguchi",
  },
  {
    id: 366,
    id_country: 70,
    name: "Yamanashi",
  },
  {
    id: 368,
    id_country: 73,
    name: "Hong Kong",
  },
  {
    id: 369,
    id_country: 74,
    name: "Indonesia",
  },
  {
    id: 370,
    id_country: 75,
    name: "Jordan",
  },
  {
    id: 371,
    id_country: 76,
    name: "Malaysia",
  },
  {
    id: 372,
    id_country: 77,
    name: "Singapore",
  },
  {
    id: 373,
    id_country: 78,
    name: "Taiwan",
  },
  {
    id: 374,
    id_country: 30,
    name: "Kazahstan",
  },
  {
    id: 375,
    id_country: 62,
    name: "Ukraina",
  },
  {
    id: 376,
    id_country: 25,
    name: "India",
  },
  {
    id: 377,
    id_country: 23,
    name: "Egypt",
  },
  {
    id: 378,
    id_country: 106,
    name: "Damascus",
  },
  {
    id: 379,
    id_country: 131,
    name: "Isle of Man",
  },
  {
    id: 380,
    id_country: 30,
    name: "Zapadno-Kazahstanskaya obl.",
  },
  {
    id: 381,
    id_country: 50,
    name: "Adygeya",
  },
  {
    id: 382,
    id_country: 50,
    name: "Hakasiya",
  },
  {
    id: 383,
    id_country: 93,
    name: "Dubai",
  },
  {
    id: 384,
    id_country: 50,
    name: "Chukotskii AO",
  },
  {
    id: 385,
    id_country: 99,
    name: "Beirut",
  },
  {
    id: 386,
    id_country: 137,
    name: "Tegucigalpa",
  },
  {
    id: 387,
    id_country: 138,
    name: "Santo Domingo",
  },
  {
    id: 388,
    id_country: 139,
    name: "Ulan Bator",
  },
  {
    id: 389,
    id_country: 23,
    name: "Sinai",
  },
  {
    id: 390,
    id_country: 140,
    name: "Baghdad",
  },
  {
    id: 391,
    id_country: 140,
    name: "Basra",
  },
  {
    id: 392,
    id_country: 140,
    name: "Mosul",
  },
  {
    id: 393,
    id_country: 141,
    name: "Johannesburg",
  },
  {
    id: 394,
    id_country: 104,
    name: "Morocco",
  },
  {
    id: 395,
    id_country: 104,
    name: "Tangier",
  },
  {
    id: 396,
    id_country: 50,
    name: "Yamalo-Nenetskii AO",
  },
  {
    id: 397,
    id_country: 122,
    name: "Tunisia",
  },
  {
    id: 398,
    id_country: 92,
    name: "Thailand",
  },
  {
    id: 399,
    id_country: 117,
    name: "Mozambique",
  },
  {
    id: 400,
    id_country: 84,
    name: "Korea",
  },
  {
    id: 401,
    id_country: 87,
    name: "Pakistan",
  },
  {
    id: 402,
    id_country: 142,
    name: "Aruba",
  },
  {
    id: 403,
    id_country: 80,
    name: "Bahamas",
  },
  {
    id: 404,
    id_country: 69,
    name: "South Korea",
  },
  {
    id: 405,
    id_country: 132,
    name: "Jamaica",
  },
  {
    id: 406,
    id_country: 93,
    name: "Sharjah",
  },
  {
    id: 407,
    id_country: 93,
    name: "Abu Dhabi",
  },
  {
    id: 409,
    id_country: 24,
    name: "Ramat Hagolan",
  },
  {
    id: 410,
    id_country: 115,
    name: "Nigeria",
  },
  {
    id: 411,
    id_country: 64,
    name: "Ain",
  },
  {
    id: 412,
    id_country: 64,
    name: "Haute-Savoie",
  },
  {
    id: 413,
    id_country: 64,
    name: "Aisne",
  },
  {
    id: 414,
    id_country: 64,
    name: "Allier",
  },
  {
    id: 415,
    id_country: 64,
    name: "Alpes-de-Haute-Provence",
  },
  {
    id: 416,
    id_country: 64,
    name: "Hautes-Alpes",
  },
  {
    id: 417,
    id_country: 64,
    name: "Alpes-Maritimes",
  },
  {
    id: 418,
    id_country: 64,
    name: "Ardèche",
  },
  {
    id: 419,
    id_country: 64,
    name: "Ardennes",
  },
  {
    id: 420,
    id_country: 64,
    name: "Ariège",
  },
  {
    id: 421,
    id_country: 64,
    name: "Aube",
  },
  {
    id: 422,
    id_country: 64,
    name: "Aude",
  },
  {
    id: 423,
    id_country: 64,
    name: "Aveyron",
  },
  {
    id: 424,
    id_country: 64,
    name: "Bouches-du-Rhône",
  },
  {
    id: 425,
    id_country: 64,
    name: "Calvados",
  },
  {
    id: 426,
    id_country: 64,
    name: "Cantal",
  },
  {
    id: 427,
    id_country: 64,
    name: "Charente",
  },
  {
    id: 428,
    id_country: 64,
    name: "Charente Maritime",
  },
  {
    id: 429,
    id_country: 64,
    name: "Cher",
  },
  {
    id: 430,
    id_country: 64,
    name: "Corrèze",
  },
  {
    id: 431,
    id_country: 64,
    name: "Dordogne",
  },
  {
    id: 432,
    id_country: 64,
    name: "Corse",
  },
  {
    id: 433,
    id_country: 64,
    name: "Côte dOr",
  },
  {
    id: 434,
    id_country: 64,
    name: "Saône et Loire",
  },
  {
    id: 435,
    id_country: 64,
    name: "Côtes dArmor",
  },
  {
    id: 436,
    id_country: 64,
    name: "Creuse",
  },
  {
    id: 437,
    id_country: 64,
    name: "Doubs",
  },
  {
    id: 438,
    id_country: 64,
    name: "Drôme",
  },
  {
    id: 439,
    id_country: 64,
    name: "Eure",
  },
  {
    id: 440,
    id_country: 64,
    name: "Eure-et-Loire",
  },
  {
    id: 441,
    id_country: 64,
    name: "Finistère",
  },
  {
    id: 442,
    id_country: 64,
    name: "Gard",
  },
  {
    id: 443,
    id_country: 64,
    name: "Haute-Garonne",
  },
  {
    id: 444,
    id_country: 64,
    name: "Gers",
  },
  {
    id: 445,
    id_country: 64,
    name: "Gironde",
  },
  {
    id: 446,
    id_country: 64,
    name: "Hérault",
  },
  {
    id: 447,
    id_country: 64,
    name: "Ille et Vilaine",
  },
  {
    id: 448,
    id_country: 64,
    name: "Indre",
  },
  {
    id: 449,
    id_country: 64,
    name: "Indre-et-Loire",
  },
  {
    id: 450,
    id_country: 64,
    name: "Isère",
  },
  {
    id: 451,
    id_country: 64,
    name: "Jura",
  },
  {
    id: 452,
    id_country: 64,
    name: "Landes",
  },
  {
    id: 453,
    id_country: 64,
    name: "Loir-et-Cher",
  },
  {
    id: 454,
    id_country: 64,
    name: "Loire",
  },
  {
    id: 455,
    id_country: 64,
    name: "Rhône",
  },
  {
    id: 456,
    id_country: 64,
    name: "Haute-Loire",
  },
  {
    id: 457,
    id_country: 64,
    name: "Loire Atlantique",
  },
  {
    id: 458,
    id_country: 64,
    name: "Loiret",
  },
  {
    id: 459,
    id_country: 64,
    name: "Lot",
  },
  {
    id: 460,
    id_country: 64,
    name: "Lot-et-Garonne",
  },
  {
    id: 461,
    id_country: 64,
    name: "Lozère",
  },
  {
    id: 462,
    id_country: 64,
    name: "Maine et Loire",
  },
  {
    id: 463,
    id_country: 64,
    name: "Manche",
  },
  {
    id: 464,
    id_country: 64,
    name: "Marne",
  },
  {
    id: 465,
    id_country: 64,
    name: "Haute-Marne",
  },
  {
    id: 466,
    id_country: 64,
    name: "Mayenne",
  },
  {
    id: 467,
    id_country: 64,
    name: "Meurthe-et-Moselle",
  },
  {
    id: 468,
    id_country: 64,
    name: "Meuse",
  },
  {
    id: 469,
    id_country: 64,
    name: "Morbihan",
  },
  {
    id: 470,
    id_country: 64,
    name: "Moselle",
  },
  {
    id: 471,
    id_country: 64,
    name: "Nièvre",
  },
  {
    id: 472,
    id_country: 64,
    name: "Nord",
  },
  {
    id: 473,
    id_country: 64,
    name: "Oise",
  },
  {
    id: 474,
    id_country: 64,
    name: "Orne",
  },
  {
    id: 475,
    id_country: 64,
    name: "Pas-de-Calais",
  },
  {
    id: 476,
    id_country: 64,
    name: "Puy-de-Dôme",
  },
  {
    id: 477,
    id_country: 64,
    name: "Pyrénées-Atlantiques",
  },
  {
    id: 478,
    id_country: 64,
    name: "Hautes-Pyrénées",
  },
  {
    id: 479,
    id_country: 64,
    name: "Pyrénées-Orientales",
  },
  {
    id: 480,
    id_country: 64,
    name: "Bas Rhin",
  },
  {
    id: 481,
    id_country: 64,
    name: "Haut Rhin",
  },
  {
    id: 482,
    id_country: 64,
    name: "Haute-Saône",
  },
  {
    id: 483,
    id_country: 64,
    name: "Sarthe",
  },
  {
    id: 484,
    id_country: 64,
    name: "Savoie",
  },
  {
    id: 485,
    id_country: 64,
    name: "Paris",
  },
  {
    id: 486,
    id_country: 64,
    name: "Seine-Maritime",
  },
  {
    id: 487,
    id_country: 64,
    name: "Seine-et-Marne",
  },
  {
    id: 488,
    id_country: 64,
    name: "Yvelines",
  },
  {
    id: 489,
    id_country: 64,
    name: "Deux-Sèvres",
  },
  {
    id: 490,
    id_country: 64,
    name: "Somme",
  },
  {
    id: 491,
    id_country: 64,
    name: "Tarn",
  },
  {
    id: 492,
    id_country: 64,
    name: "Tarn-et-Garonne",
  },
  {
    id: 493,
    id_country: 64,
    name: "Var",
  },
  {
    id: 494,
    id_country: 64,
    name: "Vaucluse",
  },
  {
    id: 495,
    id_country: 64,
    name: "Vendée",
  },
  {
    id: 496,
    id_country: 64,
    name: "Vienne",
  },
  {
    id: 497,
    id_country: 64,
    name: "Haute-Vienne",
  },
  {
    id: 498,
    id_country: 64,
    name: "Vosges",
  },
  {
    id: 499,
    id_country: 64,
    name: "Yonne",
  },
  {
    id: 500,
    id_country: 64,
    name: "Territoire de Belfort",
  },
  {
    id: 501,
    id_country: 64,
    name: "Essonne",
  },
  {
    id: 502,
    id_country: 64,
    name: "Hauts-de-Seine",
  },
  {
    id: 503,
    id_country: 64,
    name: "Seine-Saint-Denis",
  },
  {
    id: 504,
    id_country: 64,
    name: "Val-de-Marne",
  },
  {
    id: 505,
    id_country: 64,
    name: "Val-dOise",
  },
  {
    id: 506,
    id_country: 29,
    name: "Piemonte - Torino",
  },
  {
    id: 507,
    id_country: 29,
    name: "Piemonte - Alessandria",
  },
  {
    id: 508,
    id_country: 29,
    name: "Piemonte - Asti",
  },
  {
    id: 509,
    id_country: 29,
    name: "Piemonte - Biella",
  },
  {
    id: 510,
    id_country: 29,
    name: "Piemonte - Cuneo",
  },
  {
    id: 511,
    id_country: 29,
    name: "Piemonte - Novara",
  },
  {
    id: 512,
    id_country: 29,
    name: "Piemonte - Verbania",
  },
  {
    id: 513,
    id_country: 29,
    name: "Piemonte - Vercelli",
  },
  {
    id: 514,
    id_country: 29,
    name: "Valle dAosta - Aosta",
  },
  {
    id: 515,
    id_country: 29,
    name: "Lombardia - Milano",
  },
  {
    id: 516,
    id_country: 29,
    name: "Lombardia - Bergamo",
  },
  {
    id: 517,
    id_country: 29,
    name: "Lombardia - Brescia",
  },
  {
    id: 518,
    id_country: 29,
    name: "Lombardia - Como",
  },
  {
    id: 519,
    id_country: 29,
    name: "Lombardia - Cremona",
  },
  {
    id: 520,
    id_country: 29,
    name: "Lombardia - Lecco",
  },
  {
    id: 521,
    id_country: 29,
    name: "Lombardia - Lodi",
  },
  {
    id: 522,
    id_country: 29,
    name: "Lombardia - Mantova",
  },
  {
    id: 523,
    id_country: 29,
    name: "Lombardia - Pavia",
  },
  {
    id: 524,
    id_country: 29,
    name: "Lombardia - Sondrio",
  },
  {
    id: 525,
    id_country: 29,
    name: "Lombardia - Varese",
  },
  {
    id: 526,
    id_country: 29,
    name: "Trentino Alto Adige - Trento",
  },
  {
    id: 527,
    id_country: 29,
    name: "Trentino Alto Adige - Bolzano",
  },
  {
    id: 528,
    id_country: 29,
    name: "Veneto - Venezia",
  },
  {
    id: 529,
    id_country: 29,
    name: "Veneto - Belluno",
  },
  {
    id: 530,
    id_country: 29,
    name: "Veneto - Padova",
  },
  {
    id: 531,
    id_country: 29,
    name: "Veneto - Rovigo",
  },
  {
    id: 532,
    id_country: 29,
    name: "Veneto - Treviso",
  },
  {
    id: 533,
    id_country: 29,
    name: "Veneto - Verona",
  },
  {
    id: 534,
    id_country: 29,
    name: "Veneto - Vicenza",
  },
  {
    id: 535,
    id_country: 29,
    name: "Friuli Venezia Giulia - Trieste",
  },
  {
    id: 536,
    id_country: 29,
    name: "Friuli Venezia Giulia - Gorizia",
  },
  {
    id: 537,
    id_country: 29,
    name: "Friuli Venezia Giulia - Pordenone",
  },
  {
    id: 538,
    id_country: 29,
    name: "Friuli Venezia Giulia - Udine",
  },
  {
    id: 539,
    id_country: 29,
    name: "Liguria - Genova",
  },
  {
    id: 540,
    id_country: 29,
    name: "Liguria - Imperia",
  },
  {
    id: 541,
    id_country: 29,
    name: "Liguria - La Spezia",
  },
  {
    id: 542,
    id_country: 29,
    name: "Liguria - Savona",
  },
  {
    id: 543,
    id_country: 29,
    name: "Emilia Romagna - Bologna",
  },
  {
    id: 544,
    id_country: 29,
    name: "Emilia Romagna - Ferrara",
  },
  {
    id: 545,
    id_country: 29,
    name: "Emilia Romagna - Forlì-Cesena",
  },
  {
    id: 546,
    id_country: 29,
    name: "Emilia Romagna - Modena",
  },
  {
    id: 547,
    id_country: 29,
    name: "Emilia Romagna - Parma",
  },
  {
    id: 548,
    id_country: 29,
    name: "Emilia Romagna - Piacenza",
  },
  {
    id: 549,
    id_country: 29,
    name: "Emilia Romagna - Ravenna",
  },
  {
    id: 550,
    id_country: 29,
    name: "Emilia Romagna - Reggio Emilia",
  },
  {
    id: 551,
    id_country: 29,
    name: "Emilia Romagna - Rimini",
  },
  {
    id: 552,
    id_country: 29,
    name: "Toscana - Firenze",
  },
  {
    id: 553,
    id_country: 29,
    name: "Toscana - Arezzo",
  },
  {
    id: 554,
    id_country: 29,
    name: "Toscana - Grosseto",
  },
  {
    id: 555,
    id_country: 29,
    name: "Toscana - Livorno",
  },
  {
    id: 556,
    id_country: 29,
    name: "Toscana - Lucca",
  },
  {
    id: 557,
    id_country: 29,
    name: "Toscana - Massa Carrara",
  },
  {
    id: 558,
    id_country: 29,
    name: "Toscana - Pisa",
  },
  {
    id: 559,
    id_country: 29,
    name: "Toscana - Pistoia",
  },
  {
    id: 560,
    id_country: 29,
    name: "Toscana - Prato",
  },
  {
    id: 561,
    id_country: 29,
    name: "Toscana - Siena",
  },
  {
    id: 562,
    id_country: 29,
    name: "Umbria - Perugia",
  },
  {
    id: 563,
    id_country: 29,
    name: "Umbria - Terni",
  },
  {
    id: 564,
    id_country: 29,
    name: "Marche - Ancona",
  },
  {
    id: 565,
    id_country: 29,
    name: "Marche - Ascoli Piceno",
  },
  {
    id: 566,
    id_country: 29,
    name: "Marche - Macerata",
  },
  {
    id: 567,
    id_country: 29,
    name: "Marche - Pesaro - Urbino",
  },
  {
    id: 568,
    id_country: 29,
    name: "Lazio - Roma",
  },
  {
    id: 569,
    id_country: 29,
    name: "Lazio - Frosinone",
  },
  {
    id: 570,
    id_country: 29,
    name: "Lazio - Latina",
  },
  {
    id: 571,
    id_country: 29,
    name: "Lazio - Rieti",
  },
  {
    id: 572,
    id_country: 29,
    name: "Lazio - Viterbo",
  },
  {
    id: 573,
    id_country: 29,
    name: "Abruzzo - LAquila",
  },
  {
    id: 574,
    id_country: 29,
    name: "Abruzzo - Chieti",
  },
  {
    id: 575,
    id_country: 29,
    name: "Abruzzo - Pescara",
  },
  {
    id: 576,
    id_country: 29,
    name: "Abruzzo - Teramo",
  },
  {
    id: 577,
    id_country: 29,
    name: "Molise - Campobasso",
  },
  {
    id: 578,
    id_country: 29,
    name: "Molise - Isernia",
  },
  {
    id: 579,
    id_country: 29,
    name: "Campania - Napoli",
  },
  {
    id: 580,
    id_country: 29,
    name: "Campania - Avellino",
  },
  {
    id: 581,
    id_country: 29,
    name: "Campania - Benevento",
  },
  {
    id: 582,
    id_country: 29,
    name: "Campania - Caserta",
  },
  {
    id: 583,
    id_country: 29,
    name: "Campania - Salerno",
  },
  {
    id: 584,
    id_country: 29,
    name: "Puglia - Bari",
  },
  {
    id: 585,
    id_country: 29,
    name: "Puglia - Brindisi",
  },
  {
    id: 586,
    id_country: 29,
    name: "Puglia - Foggia",
  },
  {
    id: 587,
    id_country: 29,
    name: "Puglia - Lecce",
  },
  {
    id: 588,
    id_country: 29,
    name: "Puglia - Taranto",
  },
  {
    id: 589,
    id_country: 29,
    name: "Basilicata - Potenza",
  },
  {
    id: 590,
    id_country: 29,
    name: "Basilicata - Matera",
  },
  {
    id: 591,
    id_country: 29,
    name: "Calabria - Catanzaro",
  },
  {
    id: 592,
    id_country: 29,
    name: "Calabria - Cosenza",
  },
  {
    id: 593,
    id_country: 29,
    name: "Calabria - Crotone",
  },
  {
    id: 594,
    id_country: 29,
    name: "Calabria - Reggio Calabria",
  },
  {
    id: 595,
    id_country: 29,
    name: "Calabria - Vibo Valentia",
  },
  {
    id: 596,
    id_country: 29,
    name: "Sicilia - Palermo",
  },
  {
    id: 597,
    id_country: 29,
    name: "Sicilia - Agrigento",
  },
  {
    id: 598,
    id_country: 29,
    name: "Sicilia - Caltanissetta",
  },
  {
    id: 599,
    id_country: 29,
    name: "Sicilia - Catania",
  },
  {
    id: 600,
    id_country: 29,
    name: "Sicilia - Enna",
  },
  {
    id: 601,
    id_country: 29,
    name: "Sicilia - Messina",
  },
  {
    id: 602,
    id_country: 29,
    name: "Sicilia - Ragusa",
  },
  {
    id: 603,
    id_country: 29,
    name: "Sicilia - Siracusa",
  },
  {
    id: 604,
    id_country: 29,
    name: "Sicilia - Trapani",
  },
  {
    id: 605,
    id_country: 29,
    name: "Sardegna - Cagliari",
  },
  {
    id: 606,
    id_country: 29,
    name: "Sardegna - Nuoro",
  },
  {
    id: 607,
    id_country: 29,
    name: "Sardegna - Oristano",
  },
  {
    id: 608,
    id_country: 29,
    name: "Sardegna - Sassari",
  },
  {
    id: 609,
    id_country: 28,
    name: "Las Palmas",
  },
  {
    id: 610,
    id_country: 28,
    name: "Soria",
  },
  {
    id: 611,
    id_country: 28,
    name: "Palencia",
  },
  {
    id: 612,
    id_country: 28,
    name: "Zamora",
  },
  {
    id: 613,
    id_country: 28,
    name: "Cádiz",
  },
  {
    id: 614,
    id_country: 28,
    name: "Navarra",
  },
  {
    id: 615,
    id_country: 28,
    name: "Ourense",
  },
  {
    id: 616,
    id_country: 28,
    name: "Segovia",
  },
  {
    id: 617,
    id_country: 28,
    name: "Guipúzcoa",
  },
  {
    id: 618,
    id_country: 28,
    name: "Ciudad Real",
  },
  {
    id: 619,
    id_country: 28,
    name: "Vizcaya",
  },
  {
    id: 620,
    id_country: 28,
    name: "Álava",
  },
  {
    id: 621,
    id_country: 28,
    name: "A Coruña",
  },
  {
    id: 622,
    id_country: 28,
    name: "Cantabria",
  },
  {
    id: 623,
    id_country: 28,
    name: "Almería",
  },
  {
    id: 624,
    id_country: 28,
    name: "Zaragoza",
  },
  {
    id: 625,
    id_country: 28,
    name: "Santa Cruz de Tenerife",
  },
  {
    id: 626,
    id_country: 28,
    name: "Cáceres",
  },
  {
    id: 627,
    id_country: 28,
    name: "Guadalajara",
  },
  {
    id: 628,
    id_country: 28,
    name: "Ávila",
  },
  {
    id: 629,
    id_country: 28,
    name: "Toledo",
  },
  {
    id: 630,
    id_country: 28,
    name: "Castellón",
  },
  {
    id: 631,
    id_country: 28,
    name: "Tarragona",
  },
  {
    id: 632,
    id_country: 28,
    name: "Lugo",
  },
  {
    id: 633,
    id_country: 28,
    name: "La Rioja",
  },
  {
    id: 634,
    id_country: 28,
    name: "Ceuta",
  },
  {
    id: 635,
    id_country: 28,
    name: "Murcia",
  },
  {
    id: 636,
    id_country: 28,
    name: "Salamanca",
  },
  {
    id: 637,
    id_country: 28,
    name: "Valladolid",
  },
  {
    id: 638,
    id_country: 28,
    name: "Jaén",
  },
  {
    id: 639,
    id_country: 28,
    name: "Girona",
  },
  {
    id: 640,
    id_country: 28,
    name: "Granada",
  },
  {
    id: 641,
    id_country: 28,
    name: "Alacant",
  },
  {
    id: 642,
    id_country: 28,
    name: "Córdoba",
  },
  {
    id: 643,
    id_country: 28,
    name: "Albacete",
  },
  {
    id: 644,
    id_country: 28,
    name: "Cuenca",
  },
  {
    id: 645,
    id_country: 28,
    name: "Pontevedra",
  },
  {
    id: 646,
    id_country: 28,
    name: "Teruel",
  },
  {
    id: 647,
    id_country: 28,
    name: "Melilla",
  },
  {
    id: 648,
    id_country: 28,
    name: "Barcelona",
  },
  {
    id: 649,
    id_country: 28,
    name: "Badajoz",
  },
  {
    id: 650,
    id_country: 28,
    name: "Madrid",
  },
  {
    id: 651,
    id_country: 28,
    name: "Sevilla",
  },
  {
    id: 652,
    id_country: 28,
    name: "València",
  },
  {
    id: 653,
    id_country: 28,
    name: "Huelva",
  },
  {
    id: 654,
    id_country: 28,
    name: "Lleida",
  },
  {
    id: 655,
    id_country: 28,
    name: "León",
  },
  {
    id: 656,
    id_country: 28,
    name: "Illes Balears",
  },
  {
    id: 657,
    id_country: 28,
    name: "Burgos",
  },
  {
    id: 658,
    id_country: 28,
    name: "Huesca",
  },
  {
    id: 659,
    id_country: 28,
    name: "Asturias",
  },
  {
    id: 660,
    id_country: 28,
    name: "Málaga",
  },
  {
    id: 661,
    id_country: 144,
    name: "Afghanistan",
  },
  {
    id: 662,
    id_country: 210,
    name: "Niger",
  },
  {
    id: 663,
    id_country: 133,
    name: "Mali",
  },
  {
    id: 664,
    id_country: 156,
    name: "Burkina Faso",
  },
  {
    id: 665,
    id_country: 136,
    name: "Togo",
  },
  {
    id: 666,
    id_country: 151,
    name: "Benin",
  },
  {
    id: 667,
    id_country: 119,
    name: "Angola",
  },
  {
    id: 668,
    id_country: 102,
    name: "Namibia",
  },
  {
    id: 669,
    id_country: 100,
    name: "Botswana",
  },
  {
    id: 670,
    id_country: 134,
    name: "Madagascar",
  },
  {
    id: 671,
    id_country: 202,
    name: "Mauritius",
  },
  {
    id: 672,
    id_country: 196,
    name: "Laos",
  },
  {
    id: 673,
    id_country: 158,
    name: "Cambodia",
  },
  {
    id: 674,
    id_country: 90,
    name: "Philippines",
  },
  {
    id: 675,
    id_country: 88,
    name: "Papua New Guinea",
  },
  {
    id: 676,
    id_country: 228,
    name: "Solomon Islands",
  },
  {
    id: 677,
    id_country: 240,
    name: "Vanuatu",
  },
  {
    id: 678,
    id_country: 176,
    name: "Fiji",
  },
  {
    id: 679,
    id_country: 223,
    name: "Samoa",
  },
  {
    id: 680,
    id_country: 206,
    name: "Nauru",
  },
  {
    id: 681,
    id_country: 168,
    name: "Cote DIvoire",
  },
  {
    id: 682,
    id_country: 198,
    name: "Liberia",
  },
  {
    id: 683,
    id_country: 187,
    name: "Guinea",
  },
  {
    id: 684,
    id_country: 189,
    name: "Guyana",
  },
  {
    id: 685,
    id_country: 98,
    name: "Algeria",
  },
  {
    id: 686,
    id_country: 147,
    name: "Antigua and Barbuda",
  },
  {
    id: 687,
    id_country: 127,
    name: "Bahrain",
  },
  {
    id: 688,
    id_country: 149,
    name: "Bangladesh",
  },
  {
    id: 689,
    id_country: 128,
    name: "Barbados",
  },
  {
    id: 690,
    id_country: 152,
    name: "Bhutan",
  },
  {
    id: 691,
    id_country: 155,
    name: "Brunei",
  },
  {
    id: 692,
    id_country: 157,
    name: "Burundi",
  },
  {
    id: 693,
    id_country: 159,
    name: "Cape Verde",
  },
  {
    id: 694,
    id_country: 130,
    name: "Chad",
  },
  {
    id: 695,
    id_country: 164,
    name: "Comoros",
  },
  {
    id: 696,
    id_country: 112,
    name: "Congo (Brazzaville)",
  },
  {
    id: 697,
    id_country: 169,
    name: "Djibouti",
  },
  {
    id: 698,
    id_country: 171,
    name: "East Timor",
  },
  {
    id: 699,
    id_country: 173,
    name: "Eritrea",
  },
  {
    id: 700,
    id_country: 121,
    name: "Ethiopia",
  },
  {
    id: 701,
    id_country: 180,
    name: "Gabon",
  },
  {
    id: 702,
    id_country: 181,
    name: "Gambia",
  },
  {
    id: 703,
    id_country: 105,
    name: "Ghana",
  },
  {
    id: 704,
    id_country: 197,
    name: "Lesotho",
  },
  {
    id: 705,
    id_country: 125,
    name: "Malawi",
  },
  {
    id: 706,
    id_country: 200,
    name: "Maldives",
  },
  {
    id: 707,
    id_country: 205,
    name: "Myanmar (Burma)",
  },
  {
    id: 708,
    id_country: 107,
    name: "Nepal",
  },
  {
    id: 709,
    id_country: 213,
    name: "Oman",
  },
  {
    id: 710,
    id_country: 217,
    name: "Rwanda",
  },
  {
    id: 711,
    id_country: 91,
    name: "Saudi Arabia",
  },
  {
    id: 712,
    id_country: 120,
    name: "Sri Lanka",
  },
  {
    id: 713,
    id_country: 232,
    name: "Sudan",
  },
  {
    id: 714,
    id_country: 234,
    name: "Swaziland",
  },
  {
    id: 715,
    id_country: 101,
    name: "Tanzania",
  },
  {
    id: 716,
    id_country: 236,
    name: "Tonga",
  },
  {
    id: 717,
    id_country: 239,
    name: "Tuvalu",
  },
  {
    id: 718,
    id_country: 242,
    name: "Western Sahara",
  },
  {
    id: 719,
    id_country: 243,
    name: "Yemen",
  },
  {
    id: 720,
    id_country: 116,
    name: "Zambia",
  },
  {
    id: 721,
    id_country: 96,
    name: "Zimbabwe",
  },
  {
    id: 722,
    id_country: 66,
    name: "Aargau",
  },
  {
    id: 723,
    id_country: 66,
    name: "Appenzell Innerrhoden",
  },
  {
    id: 724,
    id_country: 66,
    name: "Appenzell Ausserrhoden",
  },
  {
    id: 725,
    id_country: 66,
    name: "Bern",
  },
  {
    id: 726,
    id_country: 66,
    name: "Basel-Landschaft",
  },
  {
    id: 727,
    id_country: 66,
    name: "Basel-Stadt",
  },
  {
    id: 728,
    id_country: 66,
    name: "Fribourg",
  },
  {
    id: 729,
    id_country: 66,
    name: "Genève",
  },
  {
    id: 730,
    id_country: 66,
    name: "Glarus",
  },
  {
    id: 731,
    id_country: 66,
    name: "Graubünden",
  },
  {
    id: 732,
    id_country: 66,
    name: "Jura",
  },
  {
    id: 733,
    id_country: 66,
    name: "Luzern",
  },
  {
    id: 734,
    id_country: 66,
    name: "Neuchâtel",
  },
  {
    id: 735,
    id_country: 66,
    name: "Nidwalden",
  },
  {
    id: 736,
    id_country: 66,
    name: "Obwalden",
  },
  {
    id: 737,
    id_country: 66,
    name: "Sankt Gallen",
  },
  {
    id: 738,
    id_country: 66,
    name: "Schaffhausen",
  },
  {
    id: 739,
    id_country: 66,
    name: "Solothurn",
  },
  {
    id: 740,
    id_country: 66,
    name: "Schwyz",
  },
  {
    id: 741,
    id_country: 66,
    name: "Thurgau",
  },
  {
    id: 742,
    id_country: 66,
    name: "Ticino",
  },
  {
    id: 743,
    id_country: 66,
    name: "Uri",
  },
  {
    id: 744,
    id_country: 66,
    name: "Vaud",
  },
  {
    id: 745,
    id_country: 66,
    name: "Valais",
  },
  {
    id: 746,
    id_country: 66,
    name: "Zug",
  },
  {
    id: 747,
    id_country: 66,
    name: "Zürich",
  },
  {
    id: 749,
    id_country: 48,
    name: "Aveiro",
  },
  {
    id: 750,
    id_country: 48,
    name: "Beja",
  },
  {
    id: 751,
    id_country: 48,
    name: "Braga",
  },
  {
    id: 752,
    id_country: 48,
    name: "Braganca",
  },
  {
    id: 753,
    id_country: 48,
    name: "Castelo Branco",
  },
  {
    id: 754,
    id_country: 48,
    name: "Coimbra",
  },
  {
    id: 755,
    id_country: 48,
    name: "Evora",
  },
  {
    id: 756,
    id_country: 48,
    name: "Faro",
  },
  {
    id: 757,
    id_country: 48,
    name: "Madeira",
  },
  {
    id: 758,
    id_country: 48,
    name: "Guarda",
  },
  {
    id: 759,
    id_country: 48,
    name: "Leiria",
  },
  {
    id: 760,
    id_country: 48,
    name: "Lisboa",
  },
  {
    id: 761,
    id_country: 48,
    name: "Portalegre",
  },
  {
    id: 762,
    id_country: 48,
    name: "Porto",
  },
  {
    id: 763,
    id_country: 48,
    name: "Santarem",
  },
  {
    id: 764,
    id_country: 48,
    name: "Setubal",
  },
  {
    id: 765,
    id_country: 48,
    name: "Viana do Castelo",
  },
  {
    id: 766,
    id_country: 48,
    name: "Vila Real",
  },
  {
    id: 767,
    id_country: 48,
    name: "Viseu",
  },
  {
    id: 768,
    id_country: 48,
    name: "Azores",
  },
  {
    id: 769,
    id_country: 55,
    name: "Armed Forces Americas",
  },
  {
    id: 770,
    id_country: 55,
    name: "Armed Forces Europe",
  },
  {
    id: 771,
    id_country: 55,
    name: "Alaska",
  },
  {
    id: 772,
    id_country: 55,
    name: "Alabama",
  },
  {
    id: 773,
    id_country: 55,
    name: "Armed Forces Pacific",
  },
  {
    id: 774,
    id_country: 55,
    name: "Arkansas",
  },
  {
    id: 775,
    id_country: 55,
    name: "American Samoa",
  },
  {
    id: 776,
    id_country: 55,
    name: "Arizona",
  },
  {
    id: 777,
    id_country: 55,
    name: "California",
  },
  {
    id: 778,
    id_country: 55,
    name: "Colorado",
  },
  {
    id: 779,
    id_country: 55,
    name: "Connecticut",
  },
  {
    id: 780,
    id_country: 55,
    name: "District of Columbia",
  },
  {
    id: 781,
    id_country: 55,
    name: "Delaware",
  },
  {
    id: 782,
    id_country: 55,
    name: "Florida",
  },
  {
    id: 783,
    id_country: 55,
    name: "Federated States of Micronesia",
  },
  {
    id: 784,
    id_country: 55,
    name: "Georgia",
  },
  {
    id: 786,
    id_country: 55,
    name: "Hawaii",
  },
  {
    id: 787,
    id_country: 55,
    name: "Iowa",
  },
  {
    id: 788,
    id_country: 55,
    name: "Idaho",
  },
  {
    id: 789,
    id_country: 55,
    name: "Illinois",
  },
  {
    id: 790,
    id_country: 55,
    name: "Indiana",
  },
  {
    id: 791,
    id_country: 55,
    name: "Kansas",
  },
  {
    id: 792,
    id_country: 55,
    name: "Kentucky",
  },
  {
    id: 793,
    id_country: 55,
    name: "Louisiana",
  },
  {
    id: 794,
    id_country: 55,
    name: "Massachusetts",
  },
  {
    id: 795,
    id_country: 55,
    name: "Maryland",
  },
  {
    id: 796,
    id_country: 55,
    name: "Maine",
  },
  {
    id: 797,
    id_country: 55,
    name: "Marshall Islands",
  },
  {
    id: 798,
    id_country: 55,
    name: "Michigan",
  },
  {
    id: 799,
    id_country: 55,
    name: "Minnesota",
  },
  {
    id: 800,
    id_country: 55,
    name: "Missouri",
  },
  {
    id: 801,
    id_country: 55,
    name: "Northern Mariana Islands",
  },
  {
    id: 802,
    id_country: 55,
    name: "Mississippi",
  },
  {
    id: 803,
    id_country: 55,
    name: "Montana",
  },
  {
    id: 804,
    id_country: 55,
    name: "North Carolina",
  },
  {
    id: 805,
    id_country: 55,
    name: "North Dakota",
  },
  {
    id: 806,
    id_country: 55,
    name: "Nebraska",
  },
  {
    id: 807,
    id_country: 55,
    name: "New Hampshire",
  },
  {
    id: 808,
    id_country: 55,
    name: "New Jersey",
  },
  {
    id: 809,
    id_country: 55,
    name: "New Mexico",
  },
  {
    id: 810,
    id_country: 55,
    name: "Nevada",
  },
  {
    id: 811,
    id_country: 55,
    name: "New York",
  },
  {
    id: 812,
    id_country: 55,
    name: "Ohio",
  },
  {
    id: 813,
    id_country: 55,
    name: "Oklahoma",
  },
  {
    id: 814,
    id_country: 55,
    name: "Oregon",
  },
  {
    id: 815,
    id_country: 55,
    name: "Pennsylvania",
  },
  {
    id: 816,
    id_country: 246,
    name: "Puerto Rico",
  },
  {
    id: 817,
    id_country: 55,
    name: "Palau",
  },
  {
    id: 818,
    id_country: 55,
    name: "Rhode Island",
  },
  {
    id: 819,
    id_country: 55,
    name: "South Carolina",
  },
  {
    id: 820,
    id_country: 55,
    name: "South Dakota",
  },
  {
    id: 821,
    id_country: 55,
    name: "Tennessee",
  },
  {
    id: 822,
    id_country: 55,
    name: "Texas",
  },
  {
    id: 823,
    id_country: 55,
    name: "Utah",
  },
  {
    id: 824,
    id_country: 55,
    name: "Virginia",
  },
  {
    id: 825,
    id_country: 55,
    name: "Virgin Islands",
  },
  {
    id: 826,
    id_country: 55,
    name: "Vermont",
  },
  {
    id: 827,
    id_country: 55,
    name: "Washington",
  },
  {
    id: 828,
    id_country: 55,
    name: "West Virginia",
  },
  {
    id: 829,
    id_country: 55,
    name: "Wisconsin",
  },
  {
    id: 830,
    id_country: 55,
    name: "Wyoming",
  },
  {
    id: 831,
    id_country: 94,
    name: "Greenland",
  },
  {
    id: 832,
    id_country: 18,
    name: "Brandenburg",
  },
  {
    id: 833,
    id_country: 18,
    name: "Baden-Württemberg",
  },
  {
    id: 834,
    id_country: 18,
    name: "Bayern",
  },
  {
    id: 835,
    id_country: 18,
    name: "Hessen",
  },
  {
    id: 836,
    id_country: 18,
    name: "Hamburg",
  },
  {
    id: 837,
    id_country: 18,
    name: "Mecklenburg-Vorpommern",
  },
  {
    id: 838,
    id_country: 18,
    name: "Niedersachsen",
  },
  {
    id: 839,
    id_country: 18,
    name: "Nordrhein-Westfalen",
  },
  {
    id: 840,
    id_country: 18,
    name: "Rheinland-Pfalz",
  },
  {
    id: 841,
    id_country: 18,
    name: "Schleswig-Holstein",
  },
  {
    id: 842,
    id_country: 18,
    name: "Sachsen",
  },
  {
    id: 843,
    id_country: 18,
    name: "Sachsen-Anhalt",
  },
  {
    id: 844,
    id_country: 18,
    name: "Thüringen",
  },
  {
    id: 845,
    id_country: 18,
    name: "Berlin",
  },
  {
    id: 846,
    id_country: 18,
    name: "Bremen",
  },
  {
    id: 847,
    id_country: 18,
    name: "Saarland",
  },
  {
    id: 848,
    id_country: 13,
    name: "Scotland North",
  },
  {
    id: 849,
    id_country: 13,
    name: "England - East",
  },
  {
    id: 850,
    id_country: 13,
    name: "England - West Midlands",
  },
  {
    id: 851,
    id_country: 13,
    name: "England - South West",
  },
  {
    id: 852,
    id_country: 13,
    name: "England - North West",
  },
  {
    id: 853,
    id_country: 13,
    name: "England - Yorks Y Humber",
  },
  {
    id: 854,
    id_country: 13,
    name: "England - South East",
  },
  {
    id: 855,
    id_country: 13,
    name: "England - London",
  },
  {
    id: 856,
    id_country: 13,
    name: "Northern Ireland",
  },
  {
    id: 857,
    id_country: 13,
    name: "England - North East",
  },
  {
    id: 858,
    id_country: 13,
    name: "Wales South",
  },
  {
    id: 859,
    id_country: 13,
    name: "Wales North",
  },
  {
    id: 860,
    id_country: 13,
    name: "England - East Midlands",
  },
  {
    id: 861,
    id_country: 13,
    name: "Scotland Central",
  },
  {
    id: 862,
    id_country: 13,
    name: "Scotland South",
  },
  {
    id: 863,
    id_country: 13,
    name: "Channel Islands",
  },
  {
    id: 864,
    id_country: 13,
    name: "Isle of Man",
  },
  {
    id: 865,
    id_country: 2,
    name: "Burgenland",
  },
  {
    id: 866,
    id_country: 2,
    name: "Kärnten",
  },
  {
    id: 867,
    id_country: 2,
    name: "Niederösterreich",
  },
  {
    id: 868,
    id_country: 2,
    name: "Oberösterreich",
  },
  {
    id: 869,
    id_country: 2,
    name: "Salzburg",
  },
  {
    id: 870,
    id_country: 2,
    name: "Steiermark",
  },
  {
    id: 871,
    id_country: 2,
    name: "Tirol",
  },
  {
    id: 872,
    id_country: 2,
    name: "Vorarlberg",
  },
  {
    id: 873,
    id_country: 2,
    name: "Wien",
  },
  {
    id: 874,
    id_country: 9,
    name: "Bruxelles",
  },
  {
    id: 875,
    id_country: 9,
    name: "West-Vlaanderen",
  },
  {
    id: 876,
    id_country: 9,
    name: "Oost-Vlaanderen",
  },
  {
    id: 877,
    id_country: 9,
    name: "Limburg",
  },
  {
    id: 878,
    id_country: 9,
    name: "Vlaams Brabant",
  },
  {
    id: 879,
    id_country: 9,
    name: "Antwerpen",
  },
  {
    id: 880,
    id_country: 9,
    name: "LiÃ„Â�ge",
  },
  {
    id: 881,
    id_country: 9,
    name: "Namur",
  },
  {
    id: 882,
    id_country: 9,
    name: "Hainaut",
  },
  {
    id: 883,
    id_country: 9,
    name: "Luxembourg",
  },
  {
    id: 884,
    id_country: 9,
    name: "Brabant Wallon",
  },
  {
    id: 887,
    id_country: 67,
    name: "Blekinge Lan",
  },
  {
    id: 888,
    id_country: 67,
    name: "Gavleborgs Lan",
  },
  {
    id: 890,
    id_country: 67,
    name: "Gotlands Lan",
  },
  {
    id: 891,
    id_country: 67,
    name: "Hallands Lan",
  },
  {
    id: 892,
    id_country: 67,
    name: "Jamtlands Lan",
  },
  {
    id: 893,
    id_country: 67,
    name: "Jonkopings Lan",
  },
  {
    id: 894,
    id_country: 67,
    name: "Kalmar Lan",
  },
  {
    id: 895,
    id_country: 67,
    name: "Dalarnas Lan",
  },
  {
    id: 897,
    id_country: 67,
    name: "Kronobergs Lan",
  },
  {
    id: 899,
    id_country: 67,
    name: "Norrbottens Lan",
  },
  {
    id: 900,
    id_country: 67,
    name: "Orebro Lan",
  },
  {
    id: 901,
    id_country: 67,
    name: "Ostergotlands Lan",
  },
  {
    id: 903,
    id_country: 67,
    name: "Sodermanlands Lan",
  },
  {
    id: 904,
    id_country: 67,
    name: "Uppsala Lan",
  },
  {
    id: 905,
    id_country: 67,
    name: "Varmlands Lan",
  },
  {
    id: 906,
    id_country: 67,
    name: "Vasterbottens Lan",
  },
  {
    id: 907,
    id_country: 67,
    name: "Vasternorrlands Lan",
  },
  {
    id: 908,
    id_country: 67,
    name: "Vastmanlands Lan",
  },
  {
    id: 909,
    id_country: 67,
    name: "Stockholms Lan",
  },
  {
    id: 910,
    id_country: 67,
    name: "Skane Lan",
  },
  {
    id: 911,
    id_country: 67,
    name: "Vastra Gotaland",
  },
  {
    id: 913,
    id_country: 46,
    name: "Akershus",
  },
  {
    id: 914,
    id_country: 46,
    name: "Aust-Agder",
  },
  {
    id: 915,
    id_country: 46,
    name: "Buskerud",
  },
  {
    id: 916,
    id_country: 46,
    name: "Finnmark",
  },
  {
    id: 917,
    id_country: 46,
    name: "Hedmark",
  },
  {
    id: 918,
    id_country: 46,
    name: "Hordaland",
  },
  {
    id: 919,
    id_country: 46,
    name: "More og Romsdal",
  },
  {
    id: 920,
    id_country: 46,
    name: "Nordland",
  },
  {
    id: 921,
    id_country: 46,
    name: "Nord-Trondelag",
  },
  {
    id: 922,
    id_country: 46,
    name: "Oppland",
  },
  {
    id: 923,
    id_country: 46,
    name: "Oslo",
  },
  {
    id: 924,
    id_country: 46,
    name: "Ostfold",
  },
  {
    id: 925,
    id_country: 46,
    name: "Rogaland",
  },
  {
    id: 926,
    id_country: 46,
    name: "Sogn og Fjordane",
  },
  {
    id: 927,
    id_country: 46,
    name: "Sor-Trondelag",
  },
  {
    id: 928,
    id_country: 46,
    name: "Telemark",
  },
  {
    id: 929,
    id_country: 46,
    name: "Troms",
  },
  {
    id: 930,
    id_country: 46,
    name: "Vest-Agder",
  },
  {
    id: 931,
    id_country: 46,
    name: "Vestfold",
  },
  {
    id: 933,
    id_country: 63,
    name: "Ð•land",
  },
  {
    id: 934,
    id_country: 63,
    name: "Lapland",
  },
  {
    id: 935,
    id_country: 63,
    name: "Oulu",
  },
  {
    id: 936,
    id_country: 63,
    name: "Southern Finland",
  },
  {
    id: 937,
    id_country: 63,
    name: "Eastern Finland",
  },
  {
    id: 938,
    id_country: 63,
    name: "Western Finland",
  },
  {
    id: 940,
    id_country: 22,
    name: "Arhus",
  },
  {
    id: 941,
    id_country: 22,
    name: "Bornholm",
  },
  {
    id: 942,
    id_country: 22,
    name: "Frederiksborg",
  },
  {
    id: 943,
    id_country: 22,
    name: "Fyn",
  },
  {
    id: 944,
    id_country: 22,
    name: "Kobenhavn",
  },
  {
    id: 945,
    id_country: 22,
    name: "Staden Kobenhavn",
  },
  {
    id: 946,
    id_country: 22,
    name: "Nordjylland",
  },
  {
    id: 947,
    id_country: 22,
    name: "Ribe",
  },
  {
    id: 948,
    id_country: 22,
    name: "Ringkobing",
  },
  {
    id: 949,
    id_country: 22,
    name: "Roskilde",
  },
  {
    id: 950,
    id_country: 22,
    name: "Sonderjylland",
  },
  {
    id: 951,
    id_country: 22,
    name: "Storstrom",
  },
  {
    id: 952,
    id_country: 22,
    name: "Vejle",
  },
  {
    id: 953,
    id_country: 22,
    name: "Vestsjalland",
  },
  {
    id: 954,
    id_country: 22,
    name: "Viborg",
  },
  {
    id: 956,
    id_country: 65,
    name: "Hlavni Mesto Praha",
  },
  {
    id: 957,
    id_country: 65,
    name: "Jihomoravsky Kraj",
  },
  {
    id: 958,
    id_country: 65,
    name: "Jihocesky Kraj",
  },
  {
    id: 959,
    id_country: 65,
    name: "Vysocina",
  },
  {
    id: 960,
    id_country: 65,
    name: "Karlovarsky Kraj",
  },
  {
    id: 961,
    id_country: 65,
    name: "Kralovehradecky Kraj",
  },
  {
    id: 962,
    id_country: 65,
    name: "Liberecky Kraj",
  },
  {
    id: 963,
    id_country: 65,
    name: "Olomoucky Kraj",
  },
  {
    id: 964,
    id_country: 65,
    name: "Moravskoslezsky Kraj",
  },
  {
    id: 965,
    id_country: 65,
    name: "Pardubicky Kraj",
  },
  {
    id: 966,
    id_country: 65,
    name: "Plzensky Kraj",
  },
  {
    id: 967,
    id_country: 65,
    name: "Stredocesky Kraj",
  },
  {
    id: 968,
    id_country: 65,
    name: "Ustecky Kraj",
  },
  {
    id: 969,
    id_country: 65,
    name: "Zlinsky Kraj",
  },
  {
    id: 971,
    id_country: 114,
    name: "Berat",
  },
  {
    id: 972,
    id_country: 114,
    name: "Diber",
  },
  {
    id: 973,
    id_country: 114,
    name: "Durres",
  },
  {
    id: 974,
    id_country: 114,
    name: "Elbasan",
  },
  {
    id: 975,
    id_country: 114,
    name: "Fier",
  },
  {
    id: 976,
    id_country: 114,
    name: "Gjirokaster",
  },
  {
    id: 977,
    id_country: 114,
    name: "Korce",
  },
  {
    id: 978,
    id_country: 114,
    name: "Kukes",
  },
  {
    id: 979,
    id_country: 114,
    name: "Lezhe",
  },
  {
    id: 980,
    id_country: 114,
    name: "Shkoder",
  },
  {
    id: 981,
    id_country: 114,
    name: "Tirane",
  },
  {
    id: 982,
    id_country: 114,
    name: "Vlore",
  },
  {
    id: 984,
    id_country: 145,
    name: "Canillo",
  },
  {
    id: 985,
    id_country: 145,
    name: "Encamp",
  },
  {
    id: 986,
    id_country: 145,
    name: "La Massana",
  },
  {
    id: 987,
    id_country: 145,
    name: "Ordino",
  },
  {
    id: 988,
    id_country: 145,
    name: "Sant Julia de Loria",
  },
  {
    id: 989,
    id_country: 145,
    name: "Andorra la Vella",
  },
  {
    id: 990,
    id_country: 145,
    name: "Escaldes-Engordany",
  },
  {
    id: 992,
    id_country: 6,
    name: "Aragatsotn",
  },
  {
    id: 993,
    id_country: 6,
    name: "Ararat",
  },
  {
    id: 994,
    id_country: 6,
    name: "Armavir",
  },
  {
    id: 995,
    id_country: 6,
    name: "Gegharkunik",
  },
  {
    id: 996,
    id_country: 6,
    name: "Kotayk",
  },
  {
    id: 997,
    id_country: 6,
    name: "Lorri",
  },
  {
    id: 998,
    id_country: 6,
    name: "Shirak",
  },
  {
    id: 999,
    id_country: 6,
    name: "Syunik",
  },
  {
    id: 1000,
    id_country: 6,
    name: "Tavush",
  },
  {
    id: 1001,
    id_country: 6,
    name: "Vayots Dzor",
  },
  {
    id: 1002,
    id_country: 6,
    name: "Yerevan",
  },
  {
    id: 1004,
    id_country: 79,
    name: "Federation of Bosnia and Herzegovina",
  },
  {
    id: 1005,
    id_country: 79,
    name: "Republika Srpska",
  },
  {
    id: 1007,
    id_country: 11,
    name: "Mikhaylovgrad",
  },
  {
    id: 1008,
    id_country: 11,
    name: "Blagoevgrad",
  },
  {
    id: 1009,
    id_country: 11,
    name: "Burgas",
  },
  {
    id: 1010,
    id_country: 11,
    name: "Dobrich",
  },
  {
    id: 1011,
    id_country: 11,
    name: "Gabrovo",
  },
  {
    id: 1012,
    id_country: 11,
    name: "Grad Sofiya",
  },
  {
    id: 1013,
    id_country: 11,
    name: "Khaskovo",
  },
  {
    id: 1014,
    id_country: 11,
    name: "Kurdzhali",
  },
  {
    id: 1015,
    id_country: 11,
    name: "Kyustendil",
  },
  {
    id: 1016,
    id_country: 11,
    name: "Lovech",
  },
  {
    id: 1017,
    id_country: 11,
    name: "Montana",
  },
  {
    id: 1018,
    id_country: 11,
    name: "Pazardzhik",
  },
  {
    id: 1019,
    id_country: 11,
    name: "Pernik",
  },
  {
    id: 1020,
    id_country: 11,
    name: "Pleven",
  },
  {
    id: 1021,
    id_country: 11,
    name: "Plovdiv",
  },
  {
    id: 1022,
    id_country: 11,
    name: "Razgrad",
  },
  {
    id: 1023,
    id_country: 11,
    name: "Ruse",
  },
  {
    id: 1024,
    id_country: 11,
    name: "Shumen",
  },
  {
    id: 1025,
    id_country: 11,
    name: "Silistra",
  },
  {
    id: 1026,
    id_country: 11,
    name: "Sliven",
  },
  {
    id: 1027,
    id_country: 11,
    name: "Smolyan",
  },
  {
    id: 1028,
    id_country: 11,
    name: "Sofiya",
  },
  {
    id: 1029,
    id_country: 11,
    name: "Stara Zagora",
  },
  {
    id: 1030,
    id_country: 11,
    name: "Turgovishte",
  },
  {
    id: 1031,
    id_country: 11,
    name: "Varna",
  },
  {
    id: 1032,
    id_country: 11,
    name: "Veliko Turnovo",
  },
  {
    id: 1033,
    id_country: 11,
    name: "Vidin",
  },
  {
    id: 1034,
    id_country: 11,
    name: "Vratsa",
  },
  {
    id: 1035,
    id_country: 11,
    name: "Yambol",
  },
  {
    id: 1037,
    id_country: 71,
    name: "Bjelovarsko-Bilogorska",
  },
  {
    id: 1038,
    id_country: 71,
    name: "Brodsko-Posavska",
  },
  {
    id: 1039,
    id_country: 71,
    name: "Dubrovacko-Neretvanska",
  },
  {
    id: 1040,
    id_country: 71,
    name: "Istarska",
  },
  {
    id: 1041,
    id_country: 71,
    name: "Karlovacka",
  },
  {
    id: 1042,
    id_country: 71,
    name: "Koprivnicko-Krizevacka",
  },
  {
    id: 1043,
    id_country: 71,
    name: "Krapinsko-Zagorska",
  },
  {
    id: 1044,
    id_country: 71,
    name: "Licko-Senjska",
  },
  {
    id: 1045,
    id_country: 71,
    name: "Medimurska",
  },
  {
    id: 1046,
    id_country: 71,
    name: "Osjecko-Baranjska",
  },
  {
    id: 1047,
    id_country: 71,
    name: "Pozesko-Slavonska",
  },
  {
    id: 1048,
    id_country: 71,
    name: "Primorsko-Goranska",
  },
  {
    id: 1049,
    id_country: 71,
    name: "Sibensko-Kninska",
  },
  {
    id: 1050,
    id_country: 71,
    name: "Sisacko-Moslavacka",
  },
  {
    id: 1051,
    id_country: 71,
    name: "Splitsko-Dalmatinska",
  },
  {
    id: 1052,
    id_country: 71,
    name: "Varazdinska",
  },
  {
    id: 1053,
    id_country: 71,
    name: "Viroviticko-Podravska",
  },
  {
    id: 1054,
    id_country: 71,
    name: "Vukovarsko-Srijemska",
  },
  {
    id: 1055,
    id_country: 71,
    name: "Zadarska",
  },
  {
    id: 1056,
    id_country: 71,
    name: "Zagrebacka",
  },
  {
    id: 1057,
    id_country: 71,
    name: "Grad Zagreb",
  },
  {
    id: 1059,
    id_country: 143,
    name: "Gibraltar",
  },
  {
    id: 1060,
    id_country: 20,
    name: "Evros",
  },
  {
    id: 1061,
    id_country: 20,
    name: "Rodhopi",
  },
  {
    id: 1062,
    id_country: 20,
    name: "Xanthi",
  },
  {
    id: 1063,
    id_country: 20,
    name: "Drama",
  },
  {
    id: 1064,
    id_country: 20,
    name: "Serrai",
  },
  {
    id: 1065,
    id_country: 20,
    name: "Kilkis",
  },
  {
    id: 1066,
    id_country: 20,
    name: "Pella",
  },
  {
    id: 1067,
    id_country: 20,
    name: "Florina",
  },
  {
    id: 1068,
    id_country: 20,
    name: "Kastoria",
  },
  {
    id: 1069,
    id_country: 20,
    name: "Grevena",
  },
  {
    id: 1070,
    id_country: 20,
    name: "Kozani",
  },
  {
    id: 1071,
    id_country: 20,
    name: "Imathia",
  },
  {
    id: 1072,
    id_country: 20,
    name: "Thessaloniki",
  },
  {
    id: 1073,
    id_country: 20,
    name: "Kavala",
  },
  {
    id: 1074,
    id_country: 20,
    name: "Khalkidhiki",
  },
  {
    id: 1075,
    id_country: 20,
    name: "Pieria",
  },
  {
    id: 1076,
    id_country: 20,
    name: "Ioannina",
  },
  {
    id: 1077,
    id_country: 20,
    name: "Thesprotia",
  },
  {
    id: 1078,
    id_country: 20,
    name: "Preveza",
  },
  {
    id: 1079,
    id_country: 20,
    name: "Arta",
  },
  {
    id: 1080,
    id_country: 20,
    name: "Larisa",
  },
  {
    id: 1081,
    id_country: 20,
    name: "Trikala",
  },
  {
    id: 1082,
    id_country: 20,
    name: "Kardhitsa",
  },
  {
    id: 1083,
    id_country: 20,
    name: "Magnisia",
  },
  {
    id: 1084,
    id_country: 20,
    name: "Kerkira",
  },
  {
    id: 1085,
    id_country: 20,
    name: "Levkas",
  },
  {
    id: 1086,
    id_country: 20,
    name: "Kefallinia",
  },
  {
    id: 1087,
    id_country: 20,
    name: "Zakinthos",
  },
  {
    id: 1088,
    id_country: 20,
    name: "Fthiotis",
  },
  {
    id: 1089,
    id_country: 20,
    name: "Evritania",
  },
  {
    id: 1090,
    id_country: 20,
    name: "Aitolia kai Akarnania",
  },
  {
    id: 1091,
    id_country: 20,
    name: "Fokis",
  },
  {
    id: 1092,
    id_country: 20,
    name: "Voiotia",
  },
  {
    id: 1093,
    id_country: 20,
    name: "Evvoia",
  },
  {
    id: 1094,
    id_country: 20,
    name: "Attiki",
  },
  {
    id: 1095,
    id_country: 20,
    name: "Argolis",
  },
  {
    id: 1096,
    id_country: 20,
    name: "Korinthia",
  },
  {
    id: 1097,
    id_country: 20,
    name: "Akhaia",
  },
  {
    id: 1098,
    id_country: 20,
    name: "Ilia",
  },
  {
    id: 1099,
    id_country: 20,
    name: "Messinia",
  },
  {
    id: 1100,
    id_country: 20,
    name: "Arkadhia",
  },
  {
    id: 1101,
    id_country: 20,
    name: "Lakonia",
  },
  {
    id: 1102,
    id_country: 20,
    name: "Khania",
  },
  {
    id: 1103,
    id_country: 20,
    name: "Rethimni",
  },
  {
    id: 1104,
    id_country: 20,
    name: "Iraklion",
  },
  {
    id: 1105,
    id_country: 20,
    name: "Lasithi",
  },
  {
    id: 1106,
    id_country: 20,
    name: "Dhodhekanisos",
  },
  {
    id: 1107,
    id_country: 20,
    name: "Samos",
  },
  {
    id: 1108,
    id_country: 20,
    name: "Kikladhes",
  },
  {
    id: 1109,
    id_country: 20,
    name: "Khios",
  },
  {
    id: 1110,
    id_country: 20,
    name: "Lesvos",
  },
  {
    id: 1112,
    id_country: 14,
    name: "Bacs-Kiskun",
  },
  {
    id: 1113,
    id_country: 14,
    name: "Baranya",
  },
  {
    id: 1114,
    id_country: 14,
    name: "Bekes",
  },
  {
    id: 1115,
    id_country: 14,
    name: "Borsod-Abauj-Zemplen",
  },
  {
    id: 1116,
    id_country: 14,
    name: "Budapest",
  },
  {
    id: 1117,
    id_country: 14,
    name: "Csongrad",
  },
  {
    id: 1118,
    id_country: 14,
    name: "Debrecen",
  },
  {
    id: 1119,
    id_country: 14,
    name: "Fejer",
  },
  {
    id: 1120,
    id_country: 14,
    name: "Gyor-Moson-Sopron",
  },
  {
    id: 1121,
    id_country: 14,
    name: "Hajdu-Bihar",
  },
  {
    id: 1122,
    id_country: 14,
    name: "Heves",
  },
  {
    id: 1123,
    id_country: 14,
    name: "Komarom-Esztergom",
  },
  {
    id: 1124,
    id_country: 14,
    name: "Miskolc",
  },
  {
    id: 1125,
    id_country: 14,
    name: "Nograd",
  },
  {
    id: 1126,
    id_country: 14,
    name: "Pecs",
  },
  {
    id: 1127,
    id_country: 14,
    name: "Pest",
  },
  {
    id: 1128,
    id_country: 14,
    name: "Somogy",
  },
  {
    id: 1129,
    id_country: 14,
    name: "Szabolcs-Szatmar-Bereg",
  },
  {
    id: 1130,
    id_country: 14,
    name: "Szeged",
  },
  {
    id: 1131,
    id_country: 14,
    name: "Jasz-Nagykun-Szolnok",
  },
  {
    id: 1132,
    id_country: 14,
    name: "Tolna",
  },
  {
    id: 1133,
    id_country: 14,
    name: "Vas",
  },
  {
    id: 1134,
    id_country: 14,
    name: "Veszprem",
  },
  {
    id: 1135,
    id_country: 14,
    name: "Zala",
  },
  {
    id: 1136,
    id_country: 14,
    name: "Gyor",
  },
  {
    id: 1150,
    id_country: 14,
    name: "Veszprem",
  },
  {
    id: 1152,
    id_country: 126,
    name: "Balzers",
  },
  {
    id: 1153,
    id_country: 126,
    name: "Eschen",
  },
  {
    id: 1154,
    id_country: 126,
    name: "Gamprin",
  },
  {
    id: 1155,
    id_country: 126,
    name: "Mauren",
  },
  {
    id: 1156,
    id_country: 126,
    name: "Planken",
  },
  {
    id: 1157,
    id_country: 126,
    name: "Ruggell",
  },
  {
    id: 1158,
    id_country: 126,
    name: "Schaan",
  },
  {
    id: 1159,
    id_country: 126,
    name: "Schellenberg",
  },
  {
    id: 1160,
    id_country: 126,
    name: "Triesen",
  },
  {
    id: 1161,
    id_country: 126,
    name: "Triesenberg",
  },
  {
    id: 1162,
    id_country: 126,
    name: "Vaduz",
  },
  {
    id: 1163,
    id_country: 41,
    name: "Diekirch",
  },
  {
    id: 1164,
    id_country: 41,
    name: "Grevenmacher",
  },
  {
    id: 1165,
    id_country: 41,
    name: "Luxembourg",
  },
  {
    id: 1167,
    id_country: 85,
    name: "Aracinovo",
  },
  {
    id: 1168,
    id_country: 85,
    name: "Bac",
  },
  {
    id: 1169,
    id_country: 85,
    name: "Belcista",
  },
  {
    id: 1170,
    id_country: 85,
    name: "Berovo",
  },
  {
    id: 1171,
    id_country: 85,
    name: "Bistrica",
  },
  {
    id: 1172,
    id_country: 85,
    name: "Bitola",
  },
  {
    id: 1173,
    id_country: 85,
    name: "Blatec",
  },
  {
    id: 1174,
    id_country: 85,
    name: "Bogdanci",
  },
  {
    id: 1175,
    id_country: 85,
    name: "Bogomila",
  },
  {
    id: 1176,
    id_country: 85,
    name: "Bogovinje",
  },
  {
    id: 1177,
    id_country: 85,
    name: "Bosilovo",
  },
  {
    id: 1179,
    id_country: 85,
    name: "Cair",
  },
  {
    id: 1180,
    id_country: 85,
    name: "Capari",
  },
  {
    id: 1181,
    id_country: 85,
    name: "Caska",
  },
  {
    id: 1182,
    id_country: 85,
    name: "Cegrane",
  },
  {
    id: 1184,
    id_country: 85,
    name: "Centar Zupa",
  },
  {
    id: 1187,
    id_country: 85,
    name: "Debar",
  },
  {
    id: 1188,
    id_country: 85,
    name: "Delcevo",
  },
  {
    id: 1190,
    id_country: 85,
    name: "Demir Hisar",
  },
  {
    id: 1191,
    id_country: 85,
    name: "Demir Kapija",
  },
  {
    id: 1195,
    id_country: 85,
    name: "Dorce Petrov",
  },
  {
    id: 1198,
    id_country: 85,
    name: "Gazi Baba",
  },
  {
    id: 1199,
    id_country: 85,
    name: "Gevgelija",
  },
  {
    id: 1200,
    id_country: 85,
    name: "Gostivar",
  },
  {
    id: 1201,
    id_country: 85,
    name: "Gradsko",
  },
  {
    id: 1204,
    id_country: 85,
    name: "Jegunovce",
  },
  {
    id: 1205,
    id_country: 85,
    name: "Kamenjane",
  },
  {
    id: 1207,
    id_country: 85,
    name: "Karpos",
  },
  {
    id: 1208,
    id_country: 85,
    name: "Kavadarci",
  },
  {
    id: 1209,
    id_country: 85,
    name: "Kicevo",
  },
  {
    id: 1210,
    id_country: 85,
    name: "Kisela Voda",
  },
  {
    id: 1211,
    id_country: 85,
    name: "Klecevce",
  },
  {
    id: 1212,
    id_country: 85,
    name: "Kocani",
  },
  {
    id: 1214,
    id_country: 85,
    name: "Kondovo",
  },
  {
    id: 1217,
    id_country: 85,
    name: "Kratovo",
  },
  {
    id: 1219,
    id_country: 85,
    name: "Krivogastani",
  },
  {
    id: 1220,
    id_country: 85,
    name: "Krusevo",
  },
  {
    id: 1223,
    id_country: 85,
    name: "Kumanovo",
  },
  {
    id: 1224,
    id_country: 85,
    name: "Labunista",
  },
  {
    id: 1225,
    id_country: 85,
    name: "Lipkovo",
  },
  {
    id: 1228,
    id_country: 85,
    name: "Makedonska Kamenica",
  },
  {
    id: 1229,
    id_country: 85,
    name: "Makedonski Brod",
  },
  {
    id: 1234,
    id_country: 85,
    name: "Murtino",
  },
  {
    id: 1235,
    id_country: 85,
    name: "Negotino",
  },
  {
    id: 1238,
    id_country: 85,
    name: "Novo Selo",
  },
  {
    id: 1240,
    id_country: 85,
    name: "Ohrid",
  },
  {
    id: 1242,
    id_country: 85,
    name: "Orizari",
  },
  {
    id: 1245,
    id_country: 85,
    name: "Petrovec",
  },
  {
    id: 1248,
    id_country: 85,
    name: "Prilep",
  },
  {
    id: 1249,
    id_country: 85,
    name: "Probistip",
  },
  {
    id: 1250,
    id_country: 85,
    name: "Radovis",
  },
  {
    id: 1252,
    id_country: 85,
    name: "Resen",
  },
  {
    id: 1253,
    id_country: 85,
    name: "Rosoman",
  },
  {
    id: 1256,
    id_country: 85,
    name: "Saraj",
  },
  {
    id: 1260,
    id_country: 85,
    name: "Srbinovo",
  },
  {
    id: 1262,
    id_country: 85,
    name: "Star Dojran",
  },
  {
    id: 1264,
    id_country: 85,
    name: "Stip",
  },
  {
    id: 1265,
    id_country: 85,
    name: "Struga",
  },
  {
    id: 1266,
    id_country: 85,
    name: "Strumica",
  },
  {
    id: 1267,
    id_country: 85,
    name: "Studenicani",
  },
  {
    id: 1268,
    id_country: 85,
    name: "Suto Orizari",
  },
  {
    id: 1269,
    id_country: 85,
    name: "Sveti Nikole",
  },
  {
    id: 1270,
    id_country: 85,
    name: "Tearce",
  },
  {
    id: 1271,
    id_country: 85,
    name: "Tetovo",
  },
  {
    id: 1273,
    id_country: 85,
    name: "Valandovo",
  },
  {
    id: 1275,
    id_country: 85,
    name: "Veles",
  },
  {
    id: 1277,
    id_country: 85,
    name: "Vevcani",
  },
  {
    id: 1278,
    id_country: 85,
    name: "Vinica",
  },
  {
    id: 1281,
    id_country: 85,
    name: "Vrapciste",
  },
  {
    id: 1286,
    id_country: 85,
    name: "Zelino",
  },
  {
    id: 1289,
    id_country: 85,
    name: "Zrnovci",
  },
  {
    id: 1291,
    id_country: 86,
    name: "Malta",
  },
  {
    id: 1292,
    id_country: 44,
    name: "La Condamine",
  },
  {
    id: 1293,
    id_country: 44,
    name: "Monaco",
  },
  {
    id: 1294,
    id_country: 44,
    name: "Monte-Carlo",
  },
  {
    id: 1295,
    id_country: 47,
    name: "Biala Podlaska",
  },
  {
    id: 1296,
    id_country: 47,
    name: "Bialystok",
  },
  {
    id: 1297,
    id_country: 47,
    name: "Bielsko",
  },
  {
    id: 1298,
    id_country: 47,
    name: "Bydgoszcz",
  },
  {
    id: 1299,
    id_country: 47,
    name: "Chelm",
  },
  {
    id: 1300,
    id_country: 47,
    name: "Ciechanow",
  },
  {
    id: 1301,
    id_country: 47,
    name: "Czestochowa",
  },
  {
    id: 1302,
    id_country: 47,
    name: "Elblag",
  },
  {
    id: 1303,
    id_country: 47,
    name: "Gdansk",
  },
  {
    id: 1304,
    id_country: 47,
    name: "Gorzow",
  },
  {
    id: 1305,
    id_country: 47,
    name: "Jelenia Gora",
  },
  {
    id: 1306,
    id_country: 47,
    name: "Kalisz",
  },
  {
    id: 1307,
    id_country: 47,
    name: "Katowice",
  },
  {
    id: 1308,
    id_country: 47,
    name: "Kielce",
  },
  {
    id: 1309,
    id_country: 47,
    name: "Konin",
  },
  {
    id: 1310,
    id_country: 47,
    name: "Koszalin",
  },
  {
    id: 1311,
    id_country: 47,
    name: "Krakow",
  },
  {
    id: 1312,
    id_country: 47,
    name: "Krosno",
  },
  {
    id: 1313,
    id_country: 47,
    name: "Legnica",
  },
  {
    id: 1314,
    id_country: 47,
    name: "Leszno",
  },
  {
    id: 1315,
    id_country: 47,
    name: "Lodz",
  },
  {
    id: 1316,
    id_country: 47,
    name: "Lomza",
  },
  {
    id: 1317,
    id_country: 47,
    name: "Lublin",
  },
  {
    id: 1318,
    id_country: 47,
    name: "Nowy Sacz",
  },
  {
    id: 1319,
    id_country: 47,
    name: "Olsztyn",
  },
  {
    id: 1320,
    id_country: 47,
    name: "Opole",
  },
  {
    id: 1321,
    id_country: 47,
    name: "Ostroleka",
  },
  {
    id: 1322,
    id_country: 47,
    name: "Pila",
  },
  {
    id: 1323,
    id_country: 47,
    name: "Piotrkow",
  },
  {
    id: 1324,
    id_country: 47,
    name: "Plock",
  },
  {
    id: 1325,
    id_country: 47,
    name: "Poznan",
  },
  {
    id: 1326,
    id_country: 47,
    name: "Przemysl",
  },
  {
    id: 1327,
    id_country: 47,
    name: "Radom",
  },
  {
    id: 1328,
    id_country: 47,
    name: "Rzeszow",
  },
  {
    id: 1329,
    id_country: 47,
    name: "Siedlce",
  },
  {
    id: 1330,
    id_country: 47,
    name: "Sieradz",
  },
  {
    id: 1331,
    id_country: 47,
    name: "Skierniewice",
  },
  {
    id: 1332,
    id_country: 47,
    name: "Slupsk",
  },
  {
    id: 1333,
    id_country: 47,
    name: "Suwalki",
  },
  {
    id: 1335,
    id_country: 47,
    name: "Tarnobrzeg",
  },
  {
    id: 1336,
    id_country: 47,
    name: "Tarnow",
  },
  {
    id: 1337,
    id_country: 47,
    name: "Torun",
  },
  {
    id: 1338,
    id_country: 47,
    name: "Walbrzych",
  },
  {
    id: 1339,
    id_country: 47,
    name: "Warszawa",
  },
  {
    id: 1340,
    id_country: 47,
    name: "Wloclawek",
  },
  {
    id: 1341,
    id_country: 47,
    name: "Wroclaw",
  },
  {
    id: 1342,
    id_country: 47,
    name: "Zamosc",
  },
  {
    id: 1343,
    id_country: 47,
    name: "Zielona Gora",
  },
  {
    id: 1344,
    id_country: 47,
    name: "Dolnoslaskie",
  },
  {
    id: 1345,
    id_country: 47,
    name: "Kujawsko-Pomorskie",
  },
  {
    id: 1346,
    id_country: 47,
    name: "Lodzkie",
  },
  {
    id: 1347,
    id_country: 47,
    name: "Lubelskie",
  },
  {
    id: 1348,
    id_country: 47,
    name: "Lubuskie",
  },
  {
    id: 1349,
    id_country: 47,
    name: "Malopolskie",
  },
  {
    id: 1350,
    id_country: 47,
    name: "Mazowieckie",
  },
  {
    id: 1351,
    id_country: 47,
    name: "Opolskie",
  },
  {
    id: 1352,
    id_country: 47,
    name: "Podkarpackie",
  },
  {
    id: 1353,
    id_country: 47,
    name: "Podlaskie",
  },
  {
    id: 1354,
    id_country: 47,
    name: "Pomorskie",
  },
  {
    id: 1355,
    id_country: 47,
    name: "Slaskie",
  },
  {
    id: 1356,
    id_country: 47,
    name: "Swietokrzyskie",
  },
  {
    id: 1357,
    id_country: 47,
    name: "Warminsko-Mazurskie",
  },
  {
    id: 1358,
    id_country: 47,
    name: "Wielkopolskie",
  },
  {
    id: 1359,
    id_country: 47,
    name: "Zachodniopomorskie",
  },
  {
    id: 1361,
    id_country: 72,
    name: "Alba",
  },
  {
    id: 1362,
    id_country: 72,
    name: "Arad",
  },
  {
    id: 1363,
    id_country: 72,
    name: "Arges",
  },
  {
    id: 1364,
    id_country: 72,
    name: "Bacau",
  },
  {
    id: 1365,
    id_country: 72,
    name: "Bihor",
  },
  {
    id: 1366,
    id_country: 72,
    name: "Bistrita-Nasaud",
  },
  {
    id: 1367,
    id_country: 72,
    name: "Botosani",
  },
  {
    id: 1368,
    id_country: 72,
    name: "Braila",
  },
  {
    id: 1369,
    id_country: 72,
    name: "Brasov",
  },
  {
    id: 1370,
    id_country: 72,
    name: "Bucuresti",
  },
  {
    id: 1371,
    id_country: 72,
    name: "Buzau",
  },
  {
    id: 1372,
    id_country: 72,
    name: "Caras-Severin",
  },
  {
    id: 1373,
    id_country: 72,
    name: "Cluj",
  },
  {
    id: 1374,
    id_country: 72,
    name: "Constanta",
  },
  {
    id: 1375,
    id_country: 72,
    name: "Covasna",
  },
  {
    id: 1376,
    id_country: 72,
    name: "Dambovita",
  },
  {
    id: 1377,
    id_country: 72,
    name: "Dolj",
  },
  {
    id: 1378,
    id_country: 72,
    name: "Galati",
  },
  {
    id: 1379,
    id_country: 72,
    name: "Gorj",
  },
  {
    id: 1380,
    id_country: 72,
    name: "Harghita",
  },
  {
    id: 1381,
    id_country: 72,
    name: "Hunedoara",
  },
  {
    id: 1382,
    id_country: 72,
    name: "Ialomita",
  },
  {
    id: 1383,
    id_country: 72,
    name: "Iasi",
  },
  {
    id: 1384,
    id_country: 72,
    name: "Maramures",
  },
  {
    id: 1385,
    id_country: 72,
    name: "Mehedinti",
  },
  {
    id: 1386,
    id_country: 72,
    name: "Mures",
  },
  {
    id: 1387,
    id_country: 72,
    name: "Neamt",
  },
  {
    id: 1388,
    id_country: 72,
    name: "Olt",
  },
  {
    id: 1389,
    id_country: 72,
    name: "Prahova",
  },
  {
    id: 1390,
    id_country: 72,
    name: "Salaj",
  },
  {
    id: 1391,
    id_country: 72,
    name: "Satu Mare",
  },
  {
    id: 1392,
    id_country: 72,
    name: "Sibiu",
  },
  {
    id: 1393,
    id_country: 72,
    name: "Suceava",
  },
  {
    id: 1394,
    id_country: 72,
    name: "Teleorman",
  },
  {
    id: 1395,
    id_country: 72,
    name: "Timis",
  },
  {
    id: 1396,
    id_country: 72,
    name: "Tulcea",
  },
  {
    id: 1397,
    id_country: 72,
    name: "Vaslui",
  },
  {
    id: 1398,
    id_country: 72,
    name: "Valcea",
  },
  {
    id: 1399,
    id_country: 72,
    name: "Vrancea",
  },
  {
    id: 1400,
    id_country: 72,
    name: "Calarasi",
  },
  {
    id: 1401,
    id_country: 72,
    name: "Giurgiu",
  },
  {
    id: 1404,
    id_country: 224,
    name: "Acquaviva",
  },
  {
    id: 1405,
    id_country: 224,
    name: "Chiesanuova",
  },
  {
    id: 1406,
    id_country: 224,
    name: "Domagnano",
  },
  {
    id: 1407,
    id_country: 224,
    name: "Faetano",
  },
  {
    id: 1408,
    id_country: 224,
    name: "Fiorentino",
  },
  {
    id: 1409,
    id_country: 224,
    name: "Borgo Maggiore",
  },
  {
    id: 1410,
    id_country: 224,
    name: "San Marino",
  },
  {
    id: 1411,
    id_country: 224,
    name: "Monte Giardino",
  },
  {
    id: 1412,
    id_country: 224,
    name: "Serravalle",
  },
  {
    id: 1413,
    id_country: 52,
    name: "Banska Bystrica",
  },
  {
    id: 1414,
    id_country: 52,
    name: "Bratislava",
  },
  {
    id: 1415,
    id_country: 52,
    name: "Kosice",
  },
  {
    id: 1416,
    id_country: 52,
    name: "Nitra",
  },
  {
    id: 1417,
    id_country: 52,
    name: "Presov",
  },
  {
    id: 1418,
    id_country: 52,
    name: "Trencin",
  },
  {
    id: 1419,
    id_country: 52,
    name: "Trnava",
  },
  {
    id: 1420,
    id_country: 52,
    name: "Zilina",
  },
  {
    id: 1423,
    id_country: 53,
    name: "Beltinci",
  },
  {
    id: 1425,
    id_country: 53,
    name: "Bohinj",
  },
  {
    id: 1426,
    id_country: 53,
    name: "Borovnica",
  },
  {
    id: 1427,
    id_country: 53,
    name: "Bovec",
  },
  {
    id: 1428,
    id_country: 53,
    name: "Brda",
  },
  {
    id: 1429,
    id_country: 53,
    name: "Brezice",
  },
  {
    id: 1430,
    id_country: 53,
    name: "Brezovica",
  },
  {
    id: 1432,
    id_country: 53,
    name: "Cerklje na Gorenjskem",
  },
  {
    id: 1434,
    id_country: 53,
    name: "Cerkno",
  },
  {
    id: 1436,
    id_country: 53,
    name: "Crna na Koroskem",
  },
  {
    id: 1437,
    id_country: 53,
    name: "Crnomelj",
  },
  {
    id: 1438,
    id_country: 53,
    name: "Divaca",
  },
  {
    id: 1439,
    id_country: 53,
    name: "Dobrepolje",
  },
  {
    id: 1440,
    id_country: 53,
    name: "Dol pri Ljubljani",
  },
  {
    id: 1443,
    id_country: 53,
    name: "Duplek",
  },
  {
    id: 1447,
    id_country: 53,
    name: "Gornji Grad",
  },
  {
    id: 1450,
    id_country: 53,
    name: "Hrastnik",
  },
  {
    id: 1451,
    id_country: 53,
    name: "Hrpelje-Kozina",
  },
  {
    id: 1452,
    id_country: 53,
    name: "Idrija",
  },
  {
    id: 1453,
    id_country: 53,
    name: "Ig",
  },
  {
    id: 1454,
    id_country: 53,
    name: "Ilirska Bistrica",
  },
  {
    id: 1455,
    id_country: 53,
    name: "Ivancna Gorica",
  },
  {
    id: 1462,
    id_country: 53,
    name: "Komen",
  },
  {
    id: 1463,
    id_country: 53,
    name: "Koper-Capodistria",
  },
  {
    id: 1464,
    id_country: 53,
    name: "Kozje",
  },
  {
    id: 1465,
    id_country: 53,
    name: "Kranj",
  },
  {
    id: 1466,
    id_country: 53,
    name: "Kranjska Gora",
  },
  {
    id: 1467,
    id_country: 53,
    name: "Krsko",
  },
  {
    id: 1469,
    id_country: 53,
    name: "Lasko",
  },
  {
    id: 1470,
    id_country: 53,
    name: "Ljubljana",
  },
  {
    id: 1471,
    id_country: 53,
    name: "Ljubno",
  },
  {
    id: 1472,
    id_country: 53,
    name: "Logatec",
  },
  {
    id: 1475,
    id_country: 53,
    name: "Medvode",
  },
  {
    id: 1476,
    id_country: 53,
    name: "Menges",
  },
  {
    id: 1478,
    id_country: 53,
    name: "Mezica",
  },
  {
    id: 1480,
    id_country: 53,
    name: "Moravce",
  },
  {
    id: 1482,
    id_country: 53,
    name: "Mozirje",
  },
  {
    id: 1483,
    id_country: 53,
    name: "Murska Sobota",
  },
  {
    id: 1487,
    id_country: 53,
    name: "Nova Gorica",
  },
  {
    id: 1489,
    id_country: 53,
    name: "Ormoz",
  },
  {
    id: 1491,
    id_country: 53,
    name: "Pesnica",
  },
  {
    id: 1494,
    id_country: 53,
    name: "Postojna",
  },
  {
    id: 1497,
    id_country: 53,
    name: "Radece",
  },
  {
    id: 1498,
    id_country: 53,
    name: "Radenci",
  },
  {
    id: 1500,
    id_country: 53,
    name: "Radovljica",
  },
  {
    id: 1502,
    id_country: 53,
    name: "Rogaska Slatina",
  },
  {
    id: 1505,
    id_country: 53,
    name: "Sencur",
  },
  {
    id: 1506,
    id_country: 53,
    name: "Sentilj",
  },
  {
    id: 1508,
    id_country: 53,
    name: "Sevnica",
  },
  {
    id: 1509,
    id_country: 53,
    name: "Sezana",
  },
  {
    id: 1511,
    id_country: 53,
    name: "Skofja Loka",
  },
  {
    id: 1513,
    id_country: 53,
    name: "Slovenj Gradec",
  },
  {
    id: 1514,
    id_country: 53,
    name: "Slovenske Konjice",
  },
  {
    id: 1515,
    id_country: 53,
    name: "Smarje pri Jelsah",
  },
  {
    id: 1521,
    id_country: 53,
    name: "Tolmin",
  },
  {
    id: 1522,
    id_country: 53,
    name: "Trbovlje",
  },
  {
    id: 1524,
    id_country: 53,
    name: "Trzic",
  },
  {
    id: 1526,
    id_country: 53,
    name: "Velenje",
  },
  {
    id: 1528,
    id_country: 53,
    name: "Vipava",
  },
  {
    id: 1531,
    id_country: 53,
    name: "Vrhnika",
  },
  {
    id: 1532,
    id_country: 53,
    name: "Vuzenica",
  },
  {
    id: 1533,
    id_country: 53,
    name: "Zagorje ob Savi",
  },
  {
    id: 1535,
    id_country: 53,
    name: "Zelezniki",
  },
  {
    id: 1536,
    id_country: 53,
    name: "Ziri",
  },
  {
    id: 1537,
    id_country: 53,
    name: "Zrece",
  },
  {
    id: 1539,
    id_country: 53,
    name: "Domzale",
  },
  {
    id: 1540,
    id_country: 53,
    name: "Jesenice",
  },
  {
    id: 1541,
    id_country: 53,
    name: "Kamnik",
  },
  {
    id: 1542,
    id_country: 53,
    name: "Kocevje",
  },
  {
    id: 1544,
    id_country: 53,
    name: "Lenart",
  },
  {
    id: 1545,
    id_country: 53,
    name: "Litija",
  },
  {
    id: 1546,
    id_country: 53,
    name: "Ljutomer",
  },
  {
    id: 1550,
    id_country: 53,
    name: "Maribor",
  },
  {
    id: 1552,
    id_country: 53,
    name: "Novo Mesto",
  },
  {
    id: 1553,
    id_country: 53,
    name: "Piran",
  },
  {
    id: 1554,
    id_country: 53,
    name: "Preddvor",
  },
  {
    id: 1555,
    id_country: 53,
    name: "Ptuj",
  },
  {
    id: 1556,
    id_country: 53,
    name: "Ribnica",
  },
  {
    id: 1558,
    id_country: 53,
    name: "Sentjur pri Celju",
  },
  {
    id: 1559,
    id_country: 53,
    name: "Slovenska Bistrica",
  },
  {
    id: 1560,
    id_country: 53,
    name: "Videm",
  },
  {
    id: 1562,
    id_country: 53,
    name: "Zalec",
  },
  {
    id: 1564,
    id_country: 109,
    name: "Seychelles",
  },
  {
    id: 1565,
    id_country: 108,
    name: "Mauritania",
  },
  {
    id: 1566,
    id_country: 135,
    name: "Senegal",
  },
  {
    id: 1567,
    id_country: 154,
    name: "Road Town",
  },
  {
    id: 1568,
    id_country: 165,
    name: "Congo",
  },
  {
    id: 1569,
    id_country: 166,
    name: "Avarua",
  },
  {
    id: 1570,
    id_country: 172,
    name: "Malabo",
  },
  {
    id: 1571,
    id_country: 175,
    name: "Torshavn",
  },
  {
    id: 1572,
    id_country: 178,
    name: "Papeete",
  },
  {
    id: 1573,
    id_country: 184,
    name: "St Georges",
  },
  {
    id: 1574,
    id_country: 186,
    name: "St Peter Port",
  },
  {
    id: 1575,
    id_country: 188,
    name: "Bissau",
  },
  {
    id: 1576,
    id_country: 193,
    name: "Saint Helier",
  },
  {
    id: 1577,
    id_country: 201,
    name: "Fort-de-France",
  },
  {
    id: 1578,
    id_country: 207,
    name: "Willemstad",
  },
  {
    id: 1579,
    id_country: 208,
    name: "Noumea",
  },
  {
    id: 1580,
    id_country: 212,
    name: "Kingston",
  },
  {
    id: 1581,
    id_country: 215,
    name: "Adamstown",
  },
  {
    id: 1582,
    id_country: 216,
    name: "Doha",
  },
  {
    id: 1583,
    id_country: 218,
    name: "Jamestown",
  },
  {
    id: 1584,
    id_country: 219,
    name: "Basseterre",
  },
  {
    id: 1585,
    id_country: 220,
    name: "Castries",
  },
  {
    id: 1586,
    id_country: 221,
    name: "Saint Pierre",
  },
  {
    id: 1587,
    id_country: 222,
    name: "Kingstown",
  },
  {
    id: 1588,
    id_country: 225,
    name: "San Tome",
  },
  {
    id: 1589,
    id_country: 226,
    name: "Belgrade",
  },
  {
    id: 1590,
    id_country: 227,
    name: "Freetown",
  },
  {
    id: 1591,
    id_country: 229,
    name: "Mogadishu",
  },
  {
    id: 1592,
    id_country: 235,
    name: "Fakaofo",
  },
  {
    id: 1593,
    id_country: 237,
    name: "Port of Spain",
  },
  {
    id: 1594,
    id_country: 241,
    name: "Mata-Utu",
  },
  {
    id: 1596,
    id_country: 89,
    name: "Amazonas",
  },
  {
    id: 1597,
    id_country: 89,
    name: "Ancash",
  },
  {
    id: 1598,
    id_country: 89,
    name: "Apurímac",
  },
  {
    id: 1599,
    id_country: 89,
    name: "Arequipa",
  },
  {
    id: 1600,
    id_country: 89,
    name: "Ayacucho",
  },
  {
    id: 1601,
    id_country: 89,
    name: "Cajamarca",
  },
  {
    id: 1602,
    id_country: 89,
    name: "Callao",
  },
  {
    id: 1603,
    id_country: 89,
    name: "Cusco",
  },
  {
    id: 1604,
    id_country: 89,
    name: "Huancavelica",
  },
  {
    id: 1605,
    id_country: 89,
    name: "Huánuco",
  },
  {
    id: 1606,
    id_country: 89,
    name: "Ica",
  },
  {
    id: 1607,
    id_country: 89,
    name: "Junín",
  },
  {
    id: 1608,
    id_country: 89,
    name: "La Libertad",
  },
  {
    id: 1609,
    id_country: 89,
    name: "Lambayeque",
  },
  {
    id: 1610,
    id_country: 89,
    name: "Lima",
  },
  {
    id: 1611,
    id_country: 89,
    name: "Loreto",
  },
  {
    id: 1612,
    id_country: 89,
    name: "Madre de Dios",
  },
  {
    id: 1613,
    id_country: 89,
    name: "Moquegua",
  },
  {
    id: 1614,
    id_country: 89,
    name: "Pasco",
  },
  {
    id: 1615,
    id_country: 89,
    name: "Piura",
  },
  {
    id: 1616,
    id_country: 89,
    name: "Puno",
  },
  {
    id: 1617,
    id_country: 89,
    name: "San Martín",
  },
  {
    id: 1618,
    id_country: 89,
    name: "Tacna",
  },
  {
    id: 1619,
    id_country: 89,
    name: "Tumbes",
  },
  {
    id: 1620,
    id_country: 89,
    name: "Ucayali",
  },
  {
    id: 1622,
    id_country: 110,
    name: "Alto Paraná",
  },
  {
    id: 1623,
    id_country: 110,
    name: "Amambay",
  },
  {
    id: 1624,
    id_country: 110,
    name: "Boquerón",
  },
  {
    id: 1625,
    id_country: 110,
    name: "Caaguazú",
  },
  {
    id: 1626,
    id_country: 110,
    name: "Caazapá",
  },
  {
    id: 1627,
    id_country: 110,
    name: "Central",
  },
  {
    id: 1628,
    id_country: 110,
    name: "Concepción",
  },
  {
    id: 1629,
    id_country: 110,
    name: "Cordillera",
  },
  {
    id: 1630,
    id_country: 110,
    name: "Guairá",
  },
  {
    id: 1631,
    id_country: 110,
    name: "Itapúa",
  },
  {
    id: 1632,
    id_country: 110,
    name: "Misiones",
  },
  {
    id: 1633,
    id_country: 110,
    name: "Neembucú",
  },
  {
    id: 1634,
    id_country: 110,
    name: "Paraguarí",
  },
  {
    id: 1635,
    id_country: 110,
    name: "Presidente Hayes",
  },
  {
    id: 1636,
    id_country: 110,
    name: "San Pedro",
  },
  {
    id: 1637,
    id_country: 110,
    name: "Alto Paraguay",
  },
  {
    id: 1638,
    id_country: 110,
    name: "Canindeyú",
  },
  {
    id: 1639,
    id_country: 110,
    name: "Chaco",
  },
  {
    id: 1642,
    id_country: 111,
    name: "Artigas",
  },
  {
    id: 1643,
    id_country: 111,
    name: "Canelones",
  },
  {
    id: 1644,
    id_country: 111,
    name: "Cerro Largo",
  },
  {
    id: 1645,
    id_country: 111,
    name: "Colonia",
  },
  {
    id: 1646,
    id_country: 111,
    name: "Durazno",
  },
  {
    id: 1647,
    id_country: 111,
    name: "Flores",
  },
  {
    id: 1648,
    id_country: 111,
    name: "Florida",
  },
  {
    id: 1649,
    id_country: 111,
    name: "Lavalleja",
  },
  {
    id: 1650,
    id_country: 111,
    name: "Maldonado",
  },
  {
    id: 1651,
    id_country: 111,
    name: "Montevideo",
  },
  {
    id: 1652,
    id_country: 111,
    name: "Paysandú",
  },
  {
    id: 1653,
    id_country: 111,
    name: "Río Negro",
  },
  {
    id: 1654,
    id_country: 111,
    name: "Rivera",
  },
  {
    id: 1655,
    id_country: 111,
    name: "Rocha",
  },
  {
    id: 1656,
    id_country: 111,
    name: "Salto",
  },
  {
    id: 1657,
    id_country: 111,
    name: "San José",
  },
  {
    id: 1658,
    id_country: 111,
    name: "Soriano",
  },
  {
    id: 1659,
    id_country: 111,
    name: "Tacuarembó",
  },
  {
    id: 1660,
    id_country: 111,
    name: "Treinta y Tres",
  },
  {
    id: 1662,
    id_country: 81,
    name: "Valparaíso",
  },
  {
    id: 1663,
    id_country: 81,
    name: "Aisén del General Carlos Ibánez del Campo",
  },
  {
    id: 1664,
    id_country: 81,
    name: "Antofagasta",
  },
  {
    id: 1665,
    id_country: 81,
    name: "Araucanía",
  },
  {
    id: 1666,
    id_country: 81,
    name: "Atacama",
  },
  {
    id: 1667,
    id_country: 81,
    name: "Bío-Bío",
  },
  {
    id: 1668,
    id_country: 81,
    name: "Coquimbo",
  },
  {
    id: 1669,
    id_country: 81,
    name: "Libertador General Bernardo OHiggins",
  },
  {
    id: 1670,
    id_country: 81,
    name: "Los Lagos",
  },
  {
    id: 1671,
    id_country: 81,
    name: "Magallanes y de la Antártica Chilena",
  },
  {
    id: 1672,
    id_country: 81,
    name: "Maule",
  },
  {
    id: 1673,
    id_country: 81,
    name: "Region Metropolitana",
  },
  {
    id: 1674,
    id_country: 81,
    name: "Tarapacá",
  },
  {
    id: 1676,
    id_country: 185,
    name: "Alta Verapaz",
  },
  {
    id: 1677,
    id_country: 185,
    name: "Baja Verapaz",
  },
  {
    id: 1678,
    id_country: 185,
    name: "Chimaltenango",
  },
  {
    id: 1679,
    id_country: 185,
    name: "Chiquimula",
  },
  {
    id: 1680,
    id_country: 185,
    name: "El Progreso",
  },
  {
    id: 1681,
    id_country: 185,
    name: "Escuintla",
  },
  {
    id: 1682,
    id_country: 185,
    name: "Guatemala",
  },
  {
    id: 1683,
    id_country: 185,
    name: "Huehuetenango",
  },
  {
    id: 1684,
    id_country: 185,
    name: "Izabal",
  },
  {
    id: 1685,
    id_country: 185,
    name: "Jalapa",
  },
  {
    id: 1686,
    id_country: 185,
    name: "Jutiapa",
  },
  {
    id: 1687,
    id_country: 185,
    name: "Petén",
  },
  {
    id: 1688,
    id_country: 185,
    name: "Quetzaltenango",
  },
  {
    id: 1689,
    id_country: 185,
    name: "Quiché",
  },
  {
    id: 1690,
    id_country: 185,
    name: "Retalhuleu",
  },
  {
    id: 1691,
    id_country: 185,
    name: "Sacatepéquez",
  },
  {
    id: 1692,
    id_country: 185,
    name: "San Marcos",
  },
  {
    id: 1693,
    id_country: 185,
    name: "Santa Rosa",
  },
  {
    id: 1694,
    id_country: 185,
    name: "Sololá",
  },
  {
    id: 1695,
    id_country: 185,
    name: "Suchitepequez",
  },
  {
    id: 1696,
    id_country: 185,
    name: "Totonicapán",
  },
  {
    id: 1697,
    id_country: 185,
    name: "Zacapa",
  },
  {
    id: 1699,
    id_country: 82,
    name: "Amazonas",
  },
  {
    id: 1700,
    id_country: 82,
    name: "Antioquia",
  },
  {
    id: 1701,
    id_country: 82,
    name: "Arauca",
  },
  {
    id: 1702,
    id_country: 82,
    name: "Atlántico",
  },
  {
    id: 1703,
    id_country: 82,
    name: "Caquetá",
  },
  {
    id: 1704,
    id_country: 82,
    name: "Cauca",
  },
  {
    id: 1705,
    id_country: 82,
    name: "César",
  },
  {
    id: 1706,
    id_country: 82,
    name: "Chocó",
  },
  {
    id: 1707,
    id_country: 82,
    name: "Córdoba",
  },
  {
    id: 1708,
    id_country: 82,
    name: "Guaviare",
  },
  {
    id: 1709,
    id_country: 82,
    name: "Guainía",
  },
  {
    id: 1710,
    id_country: 82,
    name: "Huila",
  },
  {
    id: 1711,
    id_country: 82,
    name: "La Guajira",
  },
  {
    id: 1712,
    id_country: 82,
    name: "Meta",
  },
  {
    id: 1713,
    id_country: 82,
    name: "Narino",
  },
  {
    id: 1714,
    id_country: 82,
    name: "Norte de Santander",
  },
  {
    id: 1715,
    id_country: 82,
    name: "Putumayo",
  },
  {
    id: 1716,
    id_country: 82,
    name: "Quindío",
  },
  {
    id: 1717,
    id_country: 82,
    name: "Risaralda",
  },
  {
    id: 1718,
    id_country: 82,
    name: "San Andrés y Providencia",
  },
  {
    id: 1719,
    id_country: 82,
    name: "Santander",
  },
  {
    id: 1720,
    id_country: 82,
    name: "Sucre",
  },
  {
    id: 1721,
    id_country: 82,
    name: "Tolima",
  },
  {
    id: 1722,
    id_country: 82,
    name: "Valle del Cauca",
  },
  {
    id: 1723,
    id_country: 82,
    name: "Vaupés",
  },
  {
    id: 1724,
    id_country: 82,
    name: "Vichada",
  },
  {
    id: 1725,
    id_country: 82,
    name: "Casanare",
  },
  {
    id: 1726,
    id_country: 82,
    name: "Cundinamarca",
  },
  {
    id: 1727,
    id_country: 82,
    name: "Distrito Capital",
  },
  {
    id: 1730,
    id_country: 82,
    name: "Caldas",
  },
  {
    id: 1731,
    id_country: 82,
    name: "Magdalena",
  },
  {
    id: 1733,
    id_country: 42,
    name: "Aguascalientes",
  },
  {
    id: 1734,
    id_country: 42,
    name: "Baja California",
  },
  {
    id: 1735,
    id_country: 42,
    name: "Baja California Sur",
  },
  {
    id: 1736,
    id_country: 42,
    name: "Campeche",
  },
  {
    id: 1737,
    id_country: 42,
    name: "Chiapas",
  },
  {
    id: 1738,
    id_country: 42,
    name: "Chihuahua",
  },
  {
    id: 1739,
    id_country: 42,
    name: "Coahuila de Zaragoza",
  },
  {
    id: 1740,
    id_country: 42,
    name: "Colima",
  },
  {
    id: 1741,
    id_country: 42,
    name: "Distrito Federal",
  },
  {
    id: 1742,
    id_country: 42,
    name: "Durango",
  },
  {
    id: 1743,
    id_country: 42,
    name: "Guanajuato",
  },
  {
    id: 1744,
    id_country: 42,
    name: "Guerrero",
  },
  {
    id: 1745,
    id_country: 42,
    name: "Hidalgo",
  },
  {
    id: 1746,
    id_country: 42,
    name: "Jalisco",
  },
  {
    id: 1747,
    id_country: 42,
    name: "México",
  },
  {
    id: 1748,
    id_country: 42,
    name: "Michoacán de Ocampo",
  },
  {
    id: 1749,
    id_country: 42,
    name: "Morelos",
  },
  {
    id: 1750,
    id_country: 42,
    name: "Nayarit",
  },
  {
    id: 1751,
    id_country: 42,
    name: "Nuevo León",
  },
  {
    id: 1752,
    id_country: 42,
    name: "Oaxaca",
  },
  {
    id: 1753,
    id_country: 42,
    name: "Puebla",
  },
  {
    id: 1754,
    id_country: 42,
    name: "Querétaro de Arteaga",
  },
  {
    id: 1755,
    id_country: 42,
    name: "Quintana Roo",
  },
  {
    id: 1756,
    id_country: 42,
    name: "San Luis Potosí",
  },
  {
    id: 1757,
    id_country: 42,
    name: "Sinaloa",
  },
  {
    id: 1758,
    id_country: 42,
    name: "Sonora",
  },
  {
    id: 1759,
    id_country: 42,
    name: "Tabasco",
  },
  {
    id: 1760,
    id_country: 42,
    name: "Tamaulipas",
  },
  {
    id: 1761,
    id_country: 42,
    name: "Tlaxcala",
  },
  {
    id: 1762,
    id_country: 42,
    name: "Veracruz-Llave",
  },
  {
    id: 1763,
    id_country: 42,
    name: "Yucatán",
  },
  {
    id: 1764,
    id_country: 42,
    name: "Zacatecas",
  },
  {
    id: 1766,
    id_country: 124,
    name: "Bocas del Toro",
  },
  {
    id: 1767,
    id_country: 124,
    name: "Chiriquí",
  },
  {
    id: 1768,
    id_country: 124,
    name: "Coclé",
  },
  {
    id: 1769,
    id_country: 124,
    name: "Colón",
  },
  {
    id: 1770,
    id_country: 124,
    name: "Darién",
  },
  {
    id: 1771,
    id_country: 124,
    name: "Herrera",
  },
  {
    id: 1772,
    id_country: 124,
    name: "Los Santos",
  },
  {
    id: 1773,
    id_country: 124,
    name: "Panamá",
  },
  {
    id: 1774,
    id_country: 124,
    name: "San Blas",
  },
  {
    id: 1775,
    id_country: 124,
    name: "Veraguas",
  },
  {
    id: 1777,
    id_country: 123,
    name: "Chuquisaca",
  },
  {
    id: 1778,
    id_country: 123,
    name: "Cochabamba",
  },
  {
    id: 1779,
    id_country: 123,
    name: "El Beni",
  },
  {
    id: 1780,
    id_country: 123,
    name: "La Paz",
  },
  {
    id: 1781,
    id_country: 123,
    name: "Oruro",
  },
  {
    id: 1782,
    id_country: 123,
    name: "Pando",
  },
  {
    id: 1783,
    id_country: 123,
    name: "Potosí",
  },
  {
    id: 1784,
    id_country: 123,
    name: "Santa Cruz",
  },
  {
    id: 1785,
    id_country: 123,
    name: "Tarija",
  },
  {
    id: 1787,
    id_country: 36,
    name: "Alajuela",
  },
  {
    id: 1788,
    id_country: 36,
    name: "Cartago",
  },
  {
    id: 1789,
    id_country: 36,
    name: "Guanacaste",
  },
  {
    id: 1790,
    id_country: 36,
    name: "Heredia",
  },
  {
    id: 1791,
    id_country: 36,
    name: "Limón",
  },
  {
    id: 1792,
    id_country: 36,
    name: "Puntarenas",
  },
  {
    id: 1793,
    id_country: 36,
    name: "San José",
  },
  {
    id: 1795,
    id_country: 103,
    name: "Galápagos",
  },
  {
    id: 1796,
    id_country: 103,
    name: "Azuay",
  },
  {
    id: 1797,
    id_country: 103,
    name: "Bolívar",
  },
  {
    id: 1798,
    id_country: 103,
    name: "Canar",
  },
  {
    id: 1799,
    id_country: 103,
    name: "Carchi",
  },
  {
    id: 1800,
    id_country: 103,
    name: "Chimborazo",
  },
  {
    id: 1801,
    id_country: 103,
    name: "Cotopaxi",
  },
  {
    id: 1802,
    id_country: 103,
    name: "El Oro",
  },
  {
    id: 1803,
    id_country: 103,
    name: "Esmeraldas",
  },
  {
    id: 1804,
    id_country: 103,
    name: "Guayas",
  },
  {
    id: 1805,
    id_country: 103,
    name: "Imbabura",
  },
  {
    id: 1806,
    id_country: 103,
    name: "Loja",
  },
  {
    id: 1807,
    id_country: 103,
    name: "Los Ríos",
  },
  {
    id: 1808,
    id_country: 103,
    name: "Manabí",
  },
  {
    id: 1809,
    id_country: 103,
    name: "Morona-Santiago",
  },
  {
    id: 1810,
    id_country: 103,
    name: "Pastaza",
  },
  {
    id: 1811,
    id_country: 103,
    name: "Pichincha",
  },
  {
    id: 1812,
    id_country: 103,
    name: "Tungurahua",
  },
  {
    id: 1813,
    id_country: 103,
    name: "Zamora-Chinchipe",
  },
  {
    id: 1814,
    id_country: 103,
    name: "Sucumbíos",
  },
  {
    id: 1815,
    id_country: 103,
    name: "Napo",
  },
  {
    id: 1816,
    id_country: 103,
    name: "Orellana",
  },
  {
    id: 1818,
    id_country: 5,
    name: "Buenos Aires",
  },
  {
    id: 1819,
    id_country: 5,
    name: "Catamarca",
  },
  {
    id: 1820,
    id_country: 5,
    name: "Chaco",
  },
  {
    id: 1821,
    id_country: 5,
    name: "Chubut",
  },
  {
    id: 1822,
    id_country: 5,
    name: "Córdoba",
  },
  {
    id: 1823,
    id_country: 5,
    name: "Corrientes",
  },
  {
    id: 1824,
    id_country: 5,
    name: "Distrito Federal",
  },
  {
    id: 1825,
    id_country: 5,
    name: "Entre Ríos",
  },
  {
    id: 1826,
    id_country: 5,
    name: "Formosa",
  },
  {
    id: 1827,
    id_country: 5,
    name: "Jujuy",
  },
  {
    id: 1828,
    id_country: 5,
    name: "La Pampa",
  },
  {
    id: 1829,
    id_country: 5,
    name: "La Rioja",
  },
  {
    id: 1830,
    id_country: 5,
    name: "Mendoza",
  },
  {
    id: 1831,
    id_country: 5,
    name: "Misiones",
  },
  {
    id: 1832,
    id_country: 5,
    name: "Neuquén",
  },
  {
    id: 1833,
    id_country: 5,
    name: "Río Negro",
  },
  {
    id: 1834,
    id_country: 5,
    name: "Salta",
  },
  {
    id: 1835,
    id_country: 5,
    name: "San Juan",
  },
  {
    id: 1836,
    id_country: 5,
    name: "San Luis",
  },
  {
    id: 1837,
    id_country: 5,
    name: "Santa Cruz",
  },
  {
    id: 1838,
    id_country: 5,
    name: "Santa Fe",
  },
  {
    id: 1839,
    id_country: 5,
    name: "Santiago del Estero",
  },
  {
    id: 1840,
    id_country: 5,
    name: "Tierra del Fuego",
  },
  {
    id: 1841,
    id_country: 5,
    name: "Tucumán",
  },
  {
    id: 1843,
    id_country: 95,
    name: "Amazonas",
  },
  {
    id: 1844,
    id_country: 95,
    name: "Anzoategui",
  },
  {
    id: 1845,
    id_country: 95,
    name: "Apure",
  },
  {
    id: 1846,
    id_country: 95,
    name: "Aragua",
  },
  {
    id: 1847,
    id_country: 95,
    name: "Barinas",
  },
  {
    id: 1848,
    id_country: 95,
    name: "Bolívar",
  },
  {
    id: 1849,
    id_country: 95,
    name: "Carabobo",
  },
  {
    id: 1850,
    id_country: 95,
    name: "Cojedes",
  },
  {
    id: 1851,
    id_country: 95,
    name: "Delta Amacuro",
  },
  {
    id: 1852,
    id_country: 95,
    name: "Falcón",
  },
  {
    id: 1853,
    id_country: 95,
    name: "Guárico",
  },
  {
    id: 1854,
    id_country: 95,
    name: "Lara",
  },
  {
    id: 1855,
    id_country: 95,
    name: "Mérida",
  },
  {
    id: 1856,
    id_country: 95,
    name: "Miranda",
  },
  {
    id: 1857,
    id_country: 95,
    name: "Monagas",
  },
  {
    id: 1858,
    id_country: 95,
    name: "Nueva Esparta",
  },
  {
    id: 1859,
    id_country: 95,
    name: "Portuguesa",
  },
  {
    id: 1860,
    id_country: 95,
    name: "Sucre",
  },
  {
    id: 1861,
    id_country: 95,
    name: "Táchira",
  },
  {
    id: 1862,
    id_country: 95,
    name: "Trujillo",
  },
  {
    id: 1863,
    id_country: 95,
    name: "Yaracuy",
  },
  {
    id: 1864,
    id_country: 95,
    name: "Zulia",
  },
  {
    id: 1865,
    id_country: 95,
    name: "Dependencias Federales",
  },
  {
    id: 1866,
    id_country: 95,
    name: "Distrito Federal",
  },
  {
    id: 1867,
    id_country: 95,
    name: "Vargas",
  },
  {
    id: 1869,
    id_country: 209,
    name: "Boaco",
  },
  {
    id: 1870,
    id_country: 209,
    name: "Carazo",
  },
  {
    id: 1871,
    id_country: 209,
    name: "Chinandega",
  },
  {
    id: 1872,
    id_country: 209,
    name: "Chontales",
  },
  {
    id: 1873,
    id_country: 209,
    name: "Estelí",
  },
  {
    id: 1874,
    id_country: 209,
    name: "Granada",
  },
  {
    id: 1875,
    id_country: 209,
    name: "Jinotega",
  },
  {
    id: 1876,
    id_country: 209,
    name: "León",
  },
  {
    id: 1877,
    id_country: 209,
    name: "Madriz",
  },
  {
    id: 1878,
    id_country: 209,
    name: "Managua",
  },
  {
    id: 1879,
    id_country: 209,
    name: "Masaya",
  },
  {
    id: 1880,
    id_country: 209,
    name: "Matagalpa",
  },
  {
    id: 1881,
    id_country: 209,
    name: "Nueva Segovia",
  },
  {
    id: 1882,
    id_country: 209,
    name: "Rio San Juan",
  },
  {
    id: 1883,
    id_country: 209,
    name: "Rivas",
  },
  {
    id: 1884,
    id_country: 209,
    name: "Zelaya",
  },
  {
    id: 1886,
    id_country: 113,
    name: "Pinar del Rio",
  },
  {
    id: 1887,
    id_country: 113,
    name: "Ciudad de la Habana",
  },
  {
    id: 1888,
    id_country: 113,
    name: "Matanzas",
  },
  {
    id: 1889,
    id_country: 113,
    name: "Isla de la Juventud",
  },
  {
    id: 1890,
    id_country: 113,
    name: "Camaguey",
  },
  {
    id: 1891,
    id_country: 113,
    name: "Ciego de Avila",
  },
  {
    id: 1892,
    id_country: 113,
    name: "Cienfuegos",
  },
  {
    id: 1893,
    id_country: 113,
    name: "Granma",
  },
  {
    id: 1894,
    id_country: 113,
    name: "Guantanamo",
  },
  {
    id: 1895,
    id_country: 113,
    name: "La Habana",
  },
  {
    id: 1896,
    id_country: 113,
    name: "Holguin",
  },
  {
    id: 1897,
    id_country: 113,
    name: "Las Tunas",
  },
  {
    id: 1898,
    id_country: 113,
    name: "Sancti Spiritus",
  },
  {
    id: 1899,
    id_country: 113,
    name: "Santiago de Cuba",
  },
  {
    id: 1900,
    id_country: 113,
    name: "Villa Clara",
  },
  {
    id: 1901,
    id_country: 12,
    name: "Acre",
  },
  {
    id: 1902,
    id_country: 12,
    name: "Alagoas",
  },
  {
    id: 1903,
    id_country: 12,
    name: "Amapa",
  },
  {
    id: 1904,
    id_country: 12,
    name: "Amazonas",
  },
  {
    id: 1905,
    id_country: 12,
    name: "Bahia",
  },
  {
    id: 1906,
    id_country: 12,
    name: "Ceara",
  },
  {
    id: 1907,
    id_country: 12,
    name: "Distrito Federal",
  },
  {
    id: 1908,
    id_country: 12,
    name: "Espirito Santo",
  },
  {
    id: 1909,
    id_country: 12,
    name: "Mato Grosso do Sul",
  },
  {
    id: 1910,
    id_country: 12,
    name: "Maranhao",
  },
  {
    id: 1911,
    id_country: 12,
    name: "Mato Grosso",
  },
  {
    id: 1912,
    id_country: 12,
    name: "Minas Gerais",
  },
  {
    id: 1913,
    id_country: 12,
    name: "Para",
  },
  {
    id: 1914,
    id_country: 12,
    name: "Paraiba",
  },
  {
    id: 1915,
    id_country: 12,
    name: "Parana",
  },
  {
    id: 1916,
    id_country: 12,
    name: "Piaui",
  },
  {
    id: 1917,
    id_country: 12,
    name: "Rio de Janeiro",
  },
  {
    id: 1918,
    id_country: 12,
    name: "Rio Grande do Norte",
  },
  {
    id: 1919,
    id_country: 12,
    name: "Rio Grande do Sul",
  },
  {
    id: 1920,
    id_country: 12,
    name: "Rondonia",
  },
  {
    id: 1921,
    id_country: 12,
    name: "Roraima",
  },
  {
    id: 1922,
    id_country: 12,
    name: "Santa Catarina",
  },
  {
    id: 1923,
    id_country: 12,
    name: "Sao Paulo",
  },
  {
    id: 1924,
    id_country: 12,
    name: "Sergipe",
  },
  {
    id: 1925,
    id_country: 12,
    name: "Goias",
  },
  {
    id: 1926,
    id_country: 12,
    name: "Pernambuco",
  },
  {
    id: 1927,
    id_country: 12,
    name: "Tocantins",
  },
  {
    id: 1930,
    id_country: 83,
    name: "Akureyri",
  },
  {
    id: 1931,
    id_country: 83,
    name: "Arnessysla",
  },
  {
    id: 1932,
    id_country: 83,
    name: "Austur-Bardastrandarsysla",
  },
  {
    id: 1933,
    id_country: 83,
    name: "Austur-Hunavatnssysla",
  },
  {
    id: 1934,
    id_country: 83,
    name: "Austur-Skaftafellssysla",
  },
  {
    id: 1935,
    id_country: 83,
    name: "Borgarfjardarsysla",
  },
  {
    id: 1936,
    id_country: 83,
    name: "Dalasysla",
  },
  {
    id: 1937,
    id_country: 83,
    name: "Eyjafjardarsysla",
  },
  {
    id: 1938,
    id_country: 83,
    name: "Gullbringusysla",
  },
  {
    id: 1939,
    id_country: 83,
    name: "Hafnarfjordur",
  },
  {
    id: 1943,
    id_country: 83,
    name: "Kjosarsysla",
  },
  {
    id: 1944,
    id_country: 83,
    name: "Kopavogur",
  },
  {
    id: 1945,
    id_country: 83,
    name: "Myrasysla",
  },
  {
    id: 1946,
    id_country: 83,
    name: "Neskaupstadur",
  },
  {
    id: 1947,
    id_country: 83,
    name: "Nordur-Isafjardarsysla",
  },
  {
    id: 1948,
    id_country: 83,
    name: "Nordur-Mulasysla",
  },
  {
    id: 1949,
    id_country: 83,
    name: "Nordur-Tingeyjarsysla",
  },
  {
    id: 1950,
    id_country: 83,
    name: "Olafsfjordur",
  },
  {
    id: 1951,
    id_country: 83,
    name: "Rangarvallasysla",
  },
  {
    id: 1952,
    id_country: 83,
    name: "Reykjavik",
  },
  {
    id: 1953,
    id_country: 83,
    name: "Saudarkrokur",
  },
  {
    id: 1954,
    id_country: 83,
    name: "Seydisfjordur",
  },
  {
    id: 1956,
    id_country: 83,
    name: "Skagafjardarsysla",
  },
  {
    id: 1957,
    id_country: 83,
    name: "Snafellsnes- og Hnappadalssysla",
  },
  {
    id: 1958,
    id_country: 83,
    name: "Strandasysla",
  },
  {
    id: 1959,
    id_country: 83,
    name: "Sudur-Mulasysla",
  },
  {
    id: 1960,
    id_country: 83,
    name: "Sudur-Tingeyjarsysla",
  },
  {
    id: 1961,
    id_country: 83,
    name: "Vestmannaeyjar",
  },
  {
    id: 1962,
    id_country: 83,
    name: "Vestur-Bardastrandarsysla",
  },
  {
    id: 1964,
    id_country: 83,
    name: "Vestur-Isafjardarsysla",
  },
  {
    id: 1965,
    id_country: 83,
    name: "Vestur-Skaftafellssysla",
  },
  {
    id: 1966,
    id_country: 35,
    name: "Anhui",
  },
  {
    id: 1967,
    id_country: 35,
    name: "Zhejiang",
  },
  {
    id: 1968,
    id_country: 35,
    name: "Jiangxi",
  },
  {
    id: 1969,
    id_country: 35,
    name: "Jiangsu",
  },
  {
    id: 1970,
    id_country: 35,
    name: "Jilin",
  },
  {
    id: 1971,
    id_country: 35,
    name: "Qinghai",
  },
  {
    id: 1972,
    id_country: 35,
    name: "Fujian",
  },
  {
    id: 1973,
    id_country: 35,
    name: "Heilongjiang",
  },
  {
    id: 1974,
    id_country: 35,
    name: "Henan",
  },
  {
    id: 1975,
    id_country: 35,
    name: "Hebei",
  },
  {
    id: 1976,
    id_country: 35,
    name: "Hunan",
  },
  {
    id: 1977,
    id_country: 35,
    name: "Hubei",
  },
  {
    id: 1978,
    id_country: 35,
    name: "Xinjiang",
  },
  {
    id: 1979,
    id_country: 35,
    name: "Xizang",
  },
  {
    id: 1980,
    id_country: 35,
    name: "Gansu",
  },
  {
    id: 1981,
    id_country: 35,
    name: "Guangxi",
  },
  {
    id: 1982,
    id_country: 35,
    name: "Guizhou",
  },
  {
    id: 1983,
    id_country: 35,
    name: "Liaoning",
  },
  {
    id: 1984,
    id_country: 35,
    name: "Nei Mongol",
  },
  {
    id: 1985,
    id_country: 35,
    name: "Ningxia",
  },
  {
    id: 1986,
    id_country: 35,
    name: "Beijing",
  },
  {
    id: 1987,
    id_country: 35,
    name: "Shanghai",
  },
  {
    id: 1988,
    id_country: 35,
    name: "Shanxi",
  },
  {
    id: 1989,
    id_country: 35,
    name: "Shandong",
  },
  {
    id: 1990,
    id_country: 35,
    name: "Shaanxi",
  },
  {
    id: 1991,
    id_country: 35,
    name: "Sichuan",
  },
  {
    id: 1992,
    id_country: 35,
    name: "Tianjin",
  },
  {
    id: 1993,
    id_country: 35,
    name: "Yunnan",
  },
  {
    id: 1994,
    id_country: 35,
    name: "Guangdong",
  },
  {
    id: 1995,
    id_country: 35,
    name: "Hainan",
  },
  {
    id: 1996,
    id_country: 35,
    name: "Chongqing",
  },
  {
    id: 1997,
    id_country: 97,
    name: "Central",
  },
  {
    id: 1998,
    id_country: 97,
    name: "Coast",
  },
  {
    id: 1999,
    id_country: 97,
    name: "Eastern",
  },
  {
    id: 2000,
    id_country: 97,
    name: "Nairobi Area",
  },
  {
    id: 2001,
    id_country: 97,
    name: "North-Eastern",
  },
  {
    id: 2002,
    id_country: 97,
    name: "Nyanza",
  },
  {
    id: 2003,
    id_country: 97,
    name: "Rift Valley",
  },
  {
    id: 2004,
    id_country: 97,
    name: "Western",
  },
  {
    id: 2006,
    id_country: 195,
    name: "Gilbert Islands",
  },
  {
    id: 2007,
    id_country: 195,
    name: "Line Islands",
  },
  {
    id: 2008,
    id_country: 195,
    name: "Phoenix Islands",
  },
  {
    id: 2010,
    id_country: 1,
    name: "Australian Capital Territory",
  },
  {
    id: 2011,
    id_country: 1,
    name: "New South Wales",
  },
  {
    id: 2012,
    id_country: 1,
    name: "Northern Territory",
  },
  {
    id: 2013,
    id_country: 1,
    name: "Queensland",
  },
  {
    id: 2014,
    id_country: 1,
    name: "South Australia",
  },
  {
    id: 2015,
    id_country: 1,
    name: "Tasmania",
  },
  {
    id: 2016,
    id_country: 1,
    name: "Victoria",
  },
  {
    id: 2017,
    id_country: 1,
    name: "Western Australia",
  },
  {
    id: 2018,
    id_country: 27,
    name: "Dublin",
  },
  {
    id: 2019,
    id_country: 27,
    name: "Galway",
  },
  {
    id: 2020,
    id_country: 27,
    name: "Kildare",
  },
  {
    id: 2021,
    id_country: 27,
    name: "Leitrim",
  },
  {
    id: 2022,
    id_country: 27,
    name: "Limerick",
  },
  {
    id: 2023,
    id_country: 27,
    name: "Mayo",
  },
  {
    id: 2024,
    id_country: 27,
    name: "Meath",
  },
  {
    id: 2025,
    id_country: 27,
    name: "Carlow",
  },
  {
    id: 2026,
    id_country: 27,
    name: "Kilkenny",
  },
  {
    id: 2027,
    id_country: 27,
    name: "Laois",
  },
  {
    id: 2028,
    id_country: 27,
    name: "Longford",
  },
  {
    id: 2029,
    id_country: 27,
    name: "Louth",
  },
  {
    id: 2030,
    id_country: 27,
    name: "Offaly",
  },
  {
    id: 2031,
    id_country: 27,
    name: "Westmeath",
  },
  {
    id: 2032,
    id_country: 27,
    name: "Wexford",
  },
  {
    id: 2033,
    id_country: 27,
    name: "Wicklow",
  },
  {
    id: 2034,
    id_country: 27,
    name: "Roscommon",
  },
  {
    id: 2035,
    id_country: 27,
    name: "Sligo",
  },
  {
    id: 2036,
    id_country: 27,
    name: "Clare",
  },
  {
    id: 2037,
    id_country: 27,
    name: "Cork",
  },
  {
    id: 2038,
    id_country: 27,
    name: "Kerry",
  },
  {
    id: 2039,
    id_country: 27,
    name: "Tipperary",
  },
  {
    id: 2040,
    id_country: 27,
    name: "Waterford",
  },
  {
    id: 2041,
    id_country: 27,
    name: "Cavan",
  },
  {
    id: 2042,
    id_country: 27,
    name: "Donegal",
  },
  {
    id: 2043,
    id_country: 27,
    name: "Monaghan",
  },
  {
    id: 2044,
    id_country: 50,
    name: "Karachaeva-Cherkesskaya Respublica",
  },
  {
    id: 2045,
    id_country: 50,
    name: "Raimirskii (Dolgano-Nenetskii) AO",
  },
  {
    id: 2046,
    id_country: 50,
    name: "Respublica Tiva",
  },
  {
    id: 2047,
    id_country: 32,
    name: "Newfoundland",
  },
  {
    id: 2048,
    id_country: 32,
    name: "Nova Scotia",
  },
  {
    id: 2049,
    id_country: 32,
    name: "Prince Edward Island",
  },
  {
    id: 2050,
    id_country: 32,
    name: "New Brunswick",
  },
  {
    id: 2051,
    id_country: 32,
    name: "Quebec",
  },
  {
    id: 2052,
    id_country: 32,
    name: "Ontario",
  },
  {
    id: 2053,
    id_country: 32,
    name: "Manitoba",
  },
  {
    id: 2054,
    id_country: 32,
    name: "Saskatchewan",
  },
  {
    id: 2055,
    id_country: 32,
    name: "Alberta",
  },
  {
    id: 2056,
    id_country: 32,
    name: "British Columbia",
  },
  {
    id: 2057,
    id_country: 32,
    name: "Nunavut",
  },
  {
    id: 2058,
    id_country: 32,
    name: "Northwest Territories",
  },
  {
    id: 2059,
    id_country: 32,
    name: "Yukon Territory",
  },
  {
    id: 2060,
    id_country: 19,
    name: "Drenthe",
  },
  {
    id: 2061,
    id_country: 19,
    name: "Friesland",
  },
  {
    id: 2062,
    id_country: 19,
    name: "Gelderland",
  },
  {
    id: 2063,
    id_country: 19,
    name: "Groningen",
  },
  {
    id: 2064,
    id_country: 19,
    name: "Limburg",
  },
  {
    id: 2065,
    id_country: 19,
    name: "Noord-Brabant",
  },
  {
    id: 2066,
    id_country: 19,
    name: "Noord-Holland",
  },
  {
    id: 2067,
    id_country: 19,
    name: "Utrecht",
  },
  {
    id: 2068,
    id_country: 19,
    name: "Zeeland",
  },
  {
    id: 2069,
    id_country: 19,
    name: "Zuid-Holland",
  },
  {
    id: 2071,
    id_country: 19,
    name: "Overijssel",
  },
  {
    id: 2072,
    id_country: 19,
    name: "Flevoland",
  },
  {
    id: 2073,
    id_country: 138,
    name: "Duarte",
  },
  {
    id: 2074,
    id_country: 138,
    name: "Puerto Plata",
  },
  {
    id: 2075,
    id_country: 138,
    name: "Valverde",
  },
  {
    id: 2076,
    id_country: 138,
    name: "María Trinidad Sánchez",
  },
  {
    id: 2077,
    id_country: 138,
    name: "Azua",
  },
  {
    id: 2078,
    id_country: 138,
    name: "Santiago",
  },
  {
    id: 2079,
    id_country: 138,
    name: "San Cristóbal",
  },
  {
    id: 2080,
    id_country: 138,
    name: "Peravia",
  },
  {
    id: 2081,
    id_country: 138,
    name: "Elías Piña",
  },
  {
    id: 2082,
    id_country: 138,
    name: "Barahona",
  },
  {
    id: 2083,
    id_country: 138,
    name: "Monte Plata",
  },
  {
    id: 2084,
    id_country: 138,
    name: "Salcedo",
  },
  {
    id: 2085,
    id_country: 138,
    name: "La Altagracia",
  },
  {
    id: 2086,
    id_country: 138,
    name: "San Juan",
  },
  {
    id: 2087,
    id_country: 138,
    name: "Monseñor Nouel",
  },
  {
    id: 2088,
    id_country: 138,
    name: "Monte Cristi",
  },
  {
    id: 2089,
    id_country: 138,
    name: "Espaillat",
  },
  {
    id: 2090,
    id_country: 138,
    name: "Sánchez Ramírez",
  },
  {
    id: 2091,
    id_country: 138,
    name: "La Vega",
  },
  {
    id: 2092,
    id_country: 138,
    name: "San Pedro de Macorís",
  },
  {
    id: 2093,
    id_country: 138,
    name: "Independencia",
  },
  {
    id: 2094,
    id_country: 138,
    name: "Dajabón",
  },
  {
    id: 2095,
    id_country: 138,
    name: "Baoruco",
  },
  {
    id: 2096,
    id_country: 138,
    name: "El Seibo",
  },
  {
    id: 2097,
    id_country: 138,
    name: "Hato Mayor",
  },
  {
    id: 2098,
    id_country: 138,
    name: "La Romana",
  },
  {
    id: 2099,
    id_country: 138,
    name: "Pedernales",
  },
  {
    id: 2100,
    id_country: 138,
    name: "Samaná",
  },
  {
    id: 2101,
    id_country: 138,
    name: "Santiago Rodríguez",
  },
  {
    id: 2102,
    id_country: 138,
    name: "San José de Ocoa",
  },
  {
    id: 2103,
    id_country: 70,
    name: "Chiba",
  },
  {
    id: 2104,
    id_country: 70,
    name: "Ehime",
  },
  {
    id: 2105,
    id_country: 70,
    name: "Oita",
  },
  {
    id: 2106,
    id_country: 85,
    name: "Skopje",
  },
  {
    id: 2108,
    id_country: 35,
    name: "Schanghai",
  },
  {
    id: 2109,
    id_country: 35,
    name: "Hongkong",
  },
  {
    id: 2110,
    id_country: 35,
    name: "Neimenggu",
  },
  {
    id: 2111,
    id_country: 35,
    name: "Aomen",
  },
  {
    id: 2112,
    id_country: 92,
    name: "Amnat Charoen",
  },
  {
    id: 2113,
    id_country: 92,
    name: "Ang Thong",
  },
  {
    id: 2114,
    id_country: 92,
    name: "Bangkok",
  },
  {
    id: 2115,
    id_country: 92,
    name: "Buri Ram",
  },
  {
    id: 2116,
    id_country: 92,
    name: "Chachoengsao",
  },
  {
    id: 2117,
    id_country: 92,
    name: "Chai Nat",
  },
  {
    id: 2118,
    id_country: 92,
    name: "Chaiyaphum",
  },
  {
    id: 2119,
    id_country: 92,
    name: "Chanthaburi",
  },
  {
    id: 2120,
    id_country: 92,
    name: "Chiang Mai",
  },
  {
    id: 2121,
    id_country: 92,
    name: "Chiang Rai",
  },
  {
    id: 2122,
    id_country: 92,
    name: "Chon Buri",
  },
  {
    id: 2124,
    id_country: 92,
    name: "Kalasin",
  },
  {
    id: 2126,
    id_country: 92,
    name: "Kanchanaburi",
  },
  {
    id: 2127,
    id_country: 92,
    name: "Khon Kaen",
  },
  {
    id: 2128,
    id_country: 92,
    name: "Krabi",
  },
  {
    id: 2129,
    id_country: 92,
    name: "Lampang",
  },
  {
    id: 2131,
    id_country: 92,
    name: "Loei",
  },
  {
    id: 2132,
    id_country: 92,
    name: "Lop Buri",
  },
  {
    id: 2133,
    id_country: 92,
    name: "Mae Hong Son",
  },
  {
    id: 2134,
    id_country: 92,
    name: "Maha Sarakham",
  },
  {
    id: 2137,
    id_country: 92,
    name: "Nakhon Pathom",
  },
  {
    id: 2139,
    id_country: 92,
    name: "Nakhon Ratchasima",
  },
  {
    id: 2140,
    id_country: 92,
    name: "Nakhon Sawan",
  },
  {
    id: 2141,
    id_country: 92,
    name: "Nakhon Si Thammarat",
  },
  {
    id: 2143,
    id_country: 92,
    name: "Narathiwat",
  },
  {
    id: 2144,
    id_country: 92,
    name: "Nong Bua Lam Phu",
  },
  {
    id: 2145,
    id_country: 92,
    name: "Nong Khai",
  },
  {
    id: 2146,
    id_country: 92,
    name: "Nonthaburi",
  },
  {
    id: 2147,
    id_country: 92,
    name: "Pathum Thani",
  },
  {
    id: 2148,
    id_country: 92,
    name: "Pattani",
  },
  {
    id: 2149,
    id_country: 92,
    name: "Phangnga",
  },
  {
    id: 2150,
    id_country: 92,
    name: "Phatthalung",
  },
  {
    id: 2154,
    id_country: 92,
    name: "Phichit",
  },
  {
    id: 2155,
    id_country: 92,
    name: "Phitsanulok",
  },
  {
    id: 2156,
    id_country: 92,
    name: "Phra Nakhon Si Ayutthaya",
  },
  {
    id: 2157,
    id_country: 92,
    name: "Phrae",
  },
  {
    id: 2158,
    id_country: 92,
    name: "Phuket",
  },
  {
    id: 2159,
    id_country: 92,
    name: "Prachin Buri",
  },
  {
    id: 2160,
    id_country: 92,
    name: "Prachuap Khiri Khan",
  },
  {
    id: 2162,
    id_country: 92,
    name: "Ratchaburi",
  },
  {
    id: 2163,
    id_country: 92,
    name: "Rayong",
  },
  {
    id: 2164,
    id_country: 92,
    name: "Roi Et",
  },
  {
    id: 2165,
    id_country: 92,
    name: "Sa Kaeo",
  },
  {
    id: 2166,
    id_country: 92,
    name: "Sakon Nakhon",
  },
  {
    id: 2167,
    id_country: 92,
    name: "Samut Prakan",
  },
  {
    id: 2168,
    id_country: 92,
    name: "Samut Sakhon",
  },
  {
    id: 2169,
    id_country: 92,
    name: "Samut Songkhran",
  },
  {
    id: 2170,
    id_country: 92,
    name: "Saraburi",
  },
  {
    id: 2172,
    id_country: 92,
    name: "Si Sa Ket",
  },
  {
    id: 2173,
    id_country: 92,
    name: "Sing Buri",
  },
  {
    id: 2174,
    id_country: 92,
    name: "Songkhla",
  },
  {
    id: 2175,
    id_country: 92,
    name: "Sukhothai",
  },
  {
    id: 2176,
    id_country: 92,
    name: "Suphan Buri",
  },
  {
    id: 2177,
    id_country: 92,
    name: "Surat Thani",
  },
  {
    id: 2178,
    id_country: 92,
    name: "Surin",
  },
  {
    id: 2180,
    id_country: 92,
    name: "Trang",
  },
  {
    id: 2182,
    id_country: 92,
    name: "Ubon Ratchathani",
  },
  {
    id: 2183,
    id_country: 92,
    name: "Udon Thani",
  },
  {
    id: 2184,
    id_country: 92,
    name: "Uthai Thani",
  },
  {
    id: 2185,
    id_country: 92,
    name: "Uttaradit",
  },
  {
    id: 2186,
    id_country: 92,
    name: "Yala",
  },
  {
    id: 2187,
    id_country: 92,
    name: "Yasothon",
  },
  {
    id: 2188,
    id_country: 69,
    name: "Busan",
  },
  {
    id: 2189,
    id_country: 69,
    name: "Daegu",
  },
  {
    id: 2191,
    id_country: 69,
    name: "Gangwon",
  },
  {
    id: 2192,
    id_country: 69,
    name: "Gwangju",
  },
  {
    id: 2193,
    id_country: 69,
    name: "Gyeonggi",
  },
  {
    id: 2194,
    id_country: 69,
    name: "Gyeongsangbuk",
  },
  {
    id: 2195,
    id_country: 69,
    name: "Gyeongsangnam",
  },
  {
    id: 2196,
    id_country: 69,
    name: "Jeju",
  },
  {
    id: 2201,
    id_country: 25,
    name: "Delhi",
  },
  {
    id: 2202,
    id_country: 82,
    name: "Bolivar",
  },
  {
    id: 2203,
    id_country: 82,
    name: "Boyacá",
  },
];
