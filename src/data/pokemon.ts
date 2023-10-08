export function getPokemonImg(name: string, num: number): string {
    const updatedName = name.toLocaleLowerCase().replace(`'`, '').split(' ').join('-');
    // const genName = num >= 906 ? 'scarlet-violet' : 'sword-shield';

    return `/sprites/${updatedName}.png`;
}

export interface Pokemon {
    name: string;
    type: string;
    evolveTo?: string;
    starter?: boolean;
    basic?: boolean;
    forms?: {
        name?: string;
        type?: string;
        evolveTo?: string;
    }
}

export interface PokemonData {
    [key: string| number]: Pokemon;
}
export const pokemonData = {
    "1": {
        "name": "Bulbasaur",
        "type": "grass poison",
        "evolveTo": "2",
        "starter": true,
        "basic": true
    },
    "2": {
        "name": "Ivysaur",
        "type": "grass poison",
        "evolveTo": "3",
        "starter": true
    },
    "3": {
        "name": "Venusaur",
        "type": "grass poison",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "grass poison"
            },
            {
                "name": "Mega",
                "type": "grass poison"
            },
            {
                "name": "Gigantamax",
                "type": "grass poison"
            }
        ]
    },
    "4": {
        "name": "Charmander",
        "type": "fire",
        "evolveTo": "5",
        "starter": true,
        "basic": true
    },
    "5": {
        "name": "Charmeleon",
        "type": "fire",
        "evolveTo": "6",
        "starter": true
    },
    "6": {
        "name": "Charizard",
        "type": "fire flying",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "fire flying"
            },
            {
                "name": "Mega-X",
                "type": "fire dragon"
            },
            {
                "name": "Mega-Y",
                "type": "fire flying"
            },
            {
                "name": "Gigantamax",
                "type": "fire flying"
            }
        ]
    },
    "7": {
        "name": "Squirtle",
        "type": "water",
        "evolveTo": "8",
        "starter": true,
        "basic": true
    },
    "8": {
        "name": "Wartortle",
        "type": "water",
        "evolveTo": "9",
        "starter": true
    },
    "9": {
        "name": "Blastoise",
        "type": "water",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "water"
            },
            {
                "name": "Mega",
                "type": "water"
            },
            {
                "name": "Gigantamax",
                "type": "water"
            }
        ]
    },
    "10": {
        "name": "Caterpie",
        "type": "bug",
        "evolveTo": "11",
        "basic": true
    },
    "11": {
        "name": "Metapod",
        "type": "bug",
        "evolveTo": "12"
    },
    "12": {
        "name": "Butterfree",
        "type": "bug flying",
        "forms": [
            {
                "name": "default",
                "type": "bug flying"
            },
            {
                "name": "Gigantamax",
                "type": "bug flying"
            }
        ]
    },
    "13": {
        "name": "Weedle",
        "type": "bug poison",
        "evolveTo": "14",
        "basic": true
    },
    "14": {
        "name": "Kakuna",
        "type": "bug poison",
        "evolveTo": "15"
    },
    "15": {
        "name": "Beedrill",
        "type": "bug poison",
        "forms": [
            {
                "name": "default",
                "type": "bug poison"
            },
            {
                "name": "Mega",
                "type": "bug poison"
            }
        ]
    },
    "16": {
        "name": "Pidgey",
        "type": "normal flying",
        "evolveTo": "17",
        "basic": true
    },
    "17": {
        "name": "Pidgeotto",
        "type": "normal flying",
        "evolveTo": "18"
    },
    "18": {
        "name": "Pidgeot",
        "type": "normal flying",
        "forms": [
            {
                "name": "default",
                "type": "normal flying"
            },
            {
                "name": "Mega",
                "type": "normal flying"
            }
        ]
    },
    "19": {
        "name": "Rattata",
        "type": "normal",
        "evolveTo": "20",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal",
                "evolveTo": "20"
            },
            {
                "name": "Alolan",
                "type": "dark normal",
                "evolveTo": "20-Alolan"
            }
        ]
    },
    "20": {
        "name": "Raticate",
        "type": "normal",
        "forms": [
            {
                "name": "default",
                "type": "normal"
            },
            {
                "name": "Alolan",
                "type": "dark normal"
            }
        ]
    },
    "21": {
        "name": "Spearow",
        "type": "normal flying",
        "evolveTo": "22",
        "basic": true
    },
    "22": {
        "name": "Fearow",
        "type": "normal flying"
    },
    "23": {
        "name": "Ekans",
        "type": "poison",
        "evolveTo": "24",
        "basic": true
    },
    "24": {
        "name": "Arbok",
        "type": "poison"
    },
    "25": {
        "name": "Pikachu",
        "type": "electric",
        "evolveTo": "26 26-Alolan",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "electric",
                "evolveTo": "26 26-Alolan"
            },
            {
                "name": "Gigantamax",
                "type": "electric"
            }
        ]
    },
    "26": {
        "name": "Raichu",
        "type": "electric",
        "forms": [
            {
                "name": "default",
                "type": "electric"
            },
            {
                "name": "Alolan",
                "type": "electric psychic"
            }
        ]
    },
    "27": {
        "name": "Sandshrew",
        "type": "ground",
        "evolveTo": "28",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "ground",
                "evolveTo": "28"
            },
            {
                "name": "Alolan",
                "type": "ice steel",
                "evolveTo": "28-Alolan"
            }
        ]
    },
    "28": {
        "name": "Sandslash",
        "type": "ground",
        "forms": [
            {
                "name": "default",
                "type": "ground"
            },
            {
                "name": "Alolan",
                "type": "ice steel"
            }
        ]
    },
    "29": {
        "name": "Nidoran♀",
        "type": "poison",
        "evolveTo": "30",
        "basic": true
    },
    "30": {
        "name": "Nidorina",
        "type": "poison",
        "evolveTo": "31"
    },
    "31": {
        "name": "Nidoqueen",
        "type": "poison ground"
    },
    "32": {
        "name": "Nidoran♂",
        "type": "poison",
        "evolveTo": "33",
        "basic": true
    },
    "33": {
        "name": "Nidorino",
        "type": "poison",
        "evolveTo": "34"
    },
    "34": {
        "name": "Nidoking",
        "type": "poison ground"
    },
    "35": {
        "name": "Clefairy",
        "type": "fairy",
        "evolveTo": "36",
        "basic": true
    },
    "36": {
        "name": "Clefable",
        "type": "fairy"
    },
    "37": {
        "name": "Vulpix",
        "type": "fire",
        "evolveTo": "38",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "fire",
                "evolveTo": "38"
            },
            {
                "name": "Alolan",
                "type": "ice",
                "evolveTo": "38-Alolan"
            }
        ]
    },
    "38": {
        "name": "Ninetales",
        "type": "fire",
        "forms": [
            {
                "name": "default",
                "type": "fire"
            },
            {
                "name": "Alolan",
                "type": "ice fairy"
            }
        ]
    },
    "39": {
        "name": "Jigglypuff",
        "type": "normal fairy",
        "evolveTo": "40",
        "basic": true
    },
    "40": {
        "name": "Wigglytuff",
        "type": "normal fairy"
    },
    "41": {
        "name": "Zubat",
        "type": "poison flying",
        "evolveTo": "42",
        "basic": true
    },
    "42": {
        "name": "Golbat",
        "type": "poison flying",
        "evolveTo": "169"
    },
    "43": {
        "name": "Oddish",
        "type": "grass poison",
        "evolveTo": "44",
        "basic": true
    },
    "44": {
        "name": "Gloom",
        "type": "grass poison",
        "evolveTo": "45 182"
    },
    "45": {
        "name": "Vileplume",
        "type": "grass poison"
    },
    "46": {
        "name": "Paras",
        "type": "bug grass",
        "evolveTo": "47",
        "basic": true
    },
    "47": {
        "name": "Parasect",
        "type": "bug grass"
    },
    "48": {
        "name": "Venonat",
        "type": "bug poison",
        "evolveTo": "49",
        "basic": true
    },
    "49": {
        "name": "Venomoth",
        "type": "bug poison"
    },
    "50": {
        "name": "Diglett",
        "type": "ground",
        "evolveTo": "51",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "ground",
                "evolveTo": "51"
            },
            {
                "name": "Alolan",
                "type": "ground steel",
                "evolveTo": "51-Alolan"
            }
        ]
    },
    "51": {
        "name": "Dugtrio",
        "type": "ground",
        "forms": [
            {
                "name": "default",
                "type": "ground"
            },
            {
                "name": "Alolan",
                "type": "ground steel"
            }
        ]
    },
    "52": {
        "name": "Meowth",
        "type": "normal",
        "evolveTo": "53",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal",
                "evolveTo": "53"
            },
            {
                "name": "Alolan",
                "type": "dark",
                "evolveTo": "53-Alolan"
            },
            {
                "name": "Galarian",
                "type": "steel",
                "evolveTo": "863"
            },
            {
                "name": "Gigantamax",
                "type": "normal"
            }
        ]
    },
    "53": {
        "name": "Persian",
        "type": "normal",
        "forms": [
            {
                "name": "default",
                "type": "normal"
            },
            {
                "name": "Alolan",
                "type": "dark"
            }
        ]
    },
    "54": {
        "name": "Psyduck",
        "type": "water",
        "evolveTo": "55",
        "basic": true
    },
    "55": {
        "name": "Golduck",
        "type": "water"
    },
    "56": {
        "name": "Mankey",
        "type": "fighting",
        "evolveTo": "57",
        "basic": true
    },
    "57": {
        "name": "Primeape",
        "type": "fighting",
        "evolveTo": "979"
    },
    "58": {
        "name": "Growlithe",
        "type": "fire",
        "evolveTo": "59",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "fire",
                "evolveTo": "59"
            },
            {
                "name": "Hisuian",
                "type": "fire rock",
                "evolveTo": "59-Hisuian"
            }
        ]
    },
    "59": {
        "name": "Arcanine",
        "type": "fire",
        "forms": [
            {
                "name": "default",
                "type": "fire"
            },
            {
                "name": "Hisuian",
                "type": "fire rock"
            }
        ]
    },
    "60": {
        "name": "Poliwag",
        "type": "water",
        "evolveTo": "61",
        "basic": true
    },
    "61": {
        "name": "Poliwhirl",
        "type": "water",
        "evolveTo": "62 186"
    },
    "62": {
        "name": "Poliwrath",
        "type": "water fighting"
    },
    "63": {
        "name": "Abra",
        "type": "psychic",
        "evolveTo": "64",
        "basic": true
    },
    "64": {
        "name": "Kadabra",
        "type": "psychic",
        "evolveTo": "65"
    },
    "65": {
        "name": "Alakazam",
        "type": "psychic",
        "forms": [
            {
                "name": "default",
                "type": "psychic"
            },
            {
                "name": "Mega",
                "type": "psychic"
            }
        ]
    },
    "66": {
        "name": "Machop",
        "type": "fighting",
        "evolveTo": "67",
        "basic": true
    },
    "67": {
        "name": "Machoke",
        "type": "fighting",
        "evolveTo": "68"
    },
    "68": {
        "name": "Machamp",
        "type": "fighting",
        "forms": [
            {
                "name": "default",
                "type": "fighting"
            },
            {
                "name": "Gigantamax",
                "type": "fighting"
            }
        ]
    },
    "69": {
        "name": "Bellsprout",
        "type": "grass poison",
        "evolveTo": "70",
        "basic": true
    },
    "70": {
        "name": "Weepinbell",
        "type": "grass poison",
        "evolveTo": "71"
    },
    "71": {
        "name": "Victreebel",
        "type": "grass poison"
    },
    "72": {
        "name": "Tentacool",
        "type": "water poison",
        "evolveTo": "73",
        "basic": true
    },
    "73": {
        "name": "Tentacruel",
        "type": "water poison"
    },
    "74": {
        "name": "Geodude",
        "type": "rock ground",
        "evolveTo": "75",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "rock ground",
                "evolveTo": "75"
            },
            {
                "name": "Alolan",
                "type": "rock electric",
                "evolveTo": "75-Alolan"
            }
        ]
    },
    "75": {
        "name": "Graveler",
        "type": "rock ground",
        "evolveTo": "76",
        "forms": [
            {
                "name": "default",
                "type": "rock ground",
                "evolveTo": "76"
            },
            {
                "name": "Alolan",
                "type": "rock electric",
                "evolveTo": "76-Alolan"
            }
        ]
    },
    "76": {
        "name": "Golem",
        "type": "rock ground",
        "forms": [
            {
                "name": "default",
                "type": "rock ground"
            },
            {
                "name": "Alolan",
                "type": "rock electric"
            }
        ]
    },
    "77": {
        "name": "Ponyta",
        "type": "fire",
        "evolveTo": "78",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "fire",
                "evolveTo": "78"
            },
            {
                "name": "Galarian",
                "type": "psychic",
                "evolveTo": "78-Galarian"
            }
        ]
    },
    "78": {
        "name": "Rapidash",
        "type": "fire",
        "forms": [
            {
                "name": "default",
                "type": "fire"
            },
            {
                "name": "Galarian",
                "type": "psychic fairy"
            }
        ]
    },
    "79": {
        "name": "Slowpoke",
        "type": "water psychic",
        "evolveTo": "80 199",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "water psychic",
                "evolveTo": "80 199"
            },
            {
                "name": "Galarian",
                "type": "psychic",
                "evolveTo": "80-Galarian 199-Galarian"
            }
        ]
    },
    "80": {
        "name": "Slowbro",
        "type": "water psychic",
        "forms": [
            {
                "name": "default",
                "type": "water psychic"
            },
            {
                "name": "Mega",
                "type": "water psychic"
            },
            {
                "name": "Galarian",
                "type": "poison psychic"
            }
        ]
    },
    "81": {
        "name": "Magnemite",
        "type": "electric steel",
        "evolveTo": "82",
        "basic": true
    },
    "82": {
        "name": "Magneton",
        "type": "electric steel",
        "evolveTo": "462"
    },
    "83": {
        "name": "Farfetch'd",
        "type": "normal flying",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal flying"
            },
            {
                "name": "Galarian",
                "type": "fighting",
                "evolveTo": "865"
            }
        ]
    },
    "84": {
        "name": "Doduo",
        "type": "normal flying",
        "evolveTo": "85",
        "basic": true
    },
    "85": {
        "name": "Dodrio",
        "type": "normal flying"
    },
    "86": {
        "name": "Seel",
        "type": "water",
        "evolveTo": "87",
        "basic": true
    },
    "87": {
        "name": "Dewgong",
        "type": "water ice"
    },
    "88": {
        "name": "Grimer",
        "type": "poison",
        "evolveTo": "89",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "poison",
                "evolveTo": "89"
            },
            {
                "name": "Alolan",
                "type": "poison dark",
                "evolveTo": "89-Alolan"
            }
        ]
    },
    "89": {
        "name": "Muk",
        "type": "poison",
        "forms": [
            {
                "name": "default",
                "type": "poison"
            },
            {
                "name": "Alolan",
                "type": "poison dark"
            }
        ]
    },
    "90": {
        "name": "Shellder",
        "type": "water",
        "evolveTo": "91",
        "basic": true
    },
    "91": {
        "name": "Cloyster",
        "type": "water ice"
    },
    "92": {
        "name": "Gastly",
        "type": "ghost poison",
        "evolveTo": "93",
        "basic": true
    },
    "93": {
        "name": "Haunter",
        "type": "ghost poison",
        "evolveTo": "94"
    },
    "94": {
        "name": "Gengar",
        "type": "ghost poison",
        "forms": [
            {
                "name": "default",
                "type": "ghost poison"
            },
            {
                "name": "Mega",
                "type": "ghost poison"
            },
            {
                "name": "Gigantamax",
                "type": "ghost poison"
            }
        ]
    },
    "95": {
        "name": "Onix",
        "type": "rock ground",
        "evolveTo": "208",
        "basic": true
    },
    "96": {
        "name": "Drowzee",
        "type": "psychic",
        "evolveTo": "97",
        "basic": true
    },
    "97": {
        "name": "Hypno",
        "type": "psychic"
    },
    "98": {
        "name": "Krabby",
        "type": "water",
        "evolveTo": "99",
        "basic": true
    },
    "99": {
        "name": "Kingler",
        "type": "water",
        "forms": [
            {
                "name": "default",
                "type": "water"
            },
            {
                "name": "Gigantamax",
                "type": "water"
            }
        ]
    },
    "100": {
        "name": "Voltorb",
        "type": "electric",
        "evolveTo": "101",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "electric",
                "evolveTo": "101"
            },
            {
                "name": "Hisuian",
                "type": "electric grass",
                "evolveTo": "101-Hisuian"
            }
        ]
    },
    "101": {
        "name": "Electrode",
        "type": "electric",
        "forms": [
            {
                "name": "default",
                "type": "electric"
            },
            {
                "name": "Hisuian",
                "type": "electric grass"
            }
        ]
    },
    "102": {
        "name": "Exeggcute",
        "type": "grass psychic",
        "evolveTo": "103 103-Alolan",
        "basic": true
    },
    "103": {
        "name": "Exeggutor",
        "type": "grass psychic",
        "forms": [
            {
                "name": "default",
                "type": "grass psychic"
            },
            {
                "name": "Alolan",
                "type": "grass dragon"
            }
        ]
    },
    "104": {
        "name": "Cubone",
        "type": "ground",
        "evolveTo": "105 105-Alolan",
        "basic": true
    },
    "105": {
        "name": "Marowak",
        "type": "ground",
        "forms": [
            {
                "name": "default",
                "type": "ground"
            },
            {
                "name": "Alolan",
                "type": "fire ghost"
            }
        ]
    },
    "106": {
        "name": "Hitmonlee",
        "type": "fighting",
        "basic": true
    },
    "107": {
        "name": "Hitmonchan",
        "type": "fighting",
        "basic": true
    },
    "108": {
        "name": "Lickitung",
        "type": "normal",
        "evolveTo": "463",
        "basic": true
    },
    "109": {
        "name": "Koffing",
        "type": "poison",
        "evolveTo": "110 110-Galarian",
        "basic": true
    },
    "110": {
        "name": "Weezing",
        "type": "poison",
        "forms": [
            {
                "name": "default",
                "type": "poison"
            },
            {
                "name": "Galarian",
                "type": "poison fairy"
            }
        ]
    },
    "111": {
        "name": "Rhyhorn",
        "type": "ground rock",
        "evolveTo": "112",
        "basic": true
    },
    "112": {
        "name": "Rhydon",
        "type": "ground rock",
        "evolveTo": "464"
    },
    "113": {
        "name": "Chansey",
        "type": "normal",
        "evolveTo": "242",
        "basic": true
    },
    "114": {
        "name": "Tangela",
        "type": "grass",
        "evolveTo": "465",
        "basic": true
    },
    "115": {
        "name": "Kangaskhan",
        "type": "normal",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal"
            },
            {
                "name": "Mega",
                "type": "normal"
            }
        ]
    },
    "116": {
        "name": "Horsea",
        "type": "water",
        "evolveTo": "117",
        "basic": true
    },
    "117": {
        "name": "Seadra",
        "type": "water",
        "evolveTo": "230"
    },
    "118": {
        "name": "Goldeen",
        "type": "water",
        "evolveTo": "119",
        "basic": true
    },
    "119": {
        "name": "Seaking",
        "type": "water"
    },
    "120": {
        "name": "Staryu",
        "type": "water",
        "evolveTo": "121",
        "basic": true
    },
    "121": {
        "name": "Starmie",
        "type": "water psychic"
    },
    "122": {
        "name": "Mr. Mime",
        "type": "psychic fairy",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "psychic fairy"
            },
            {
                "name": "Galarian",
                "type": "ice psychic",
                "evolveTo": "866"
            }
        ]
    },
    "123": {
        "name": "Scyther",
        "type": "bug flying",
        "evolveTo": "212 900",
        "basic": true
    },
    "124": {
        "name": "Jynx",
        "type": "ice psychic",
        "basic": true
    },
    "125": {
        "name": "Electabuzz",
        "type": "electric",
        "evolveTo": "466",
        "basic": true
    },
    "126": {
        "name": "Magmar",
        "type": "fire",
        "evolveTo": "467",
        "basic": true
    },
    "127": {
        "name": "Pinsir",
        "type": "bug",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "bug"
            },
            {
                "name": "Mega",
                "type": "bug flying"
            }
        ]
    },
    "128": {
        "name": "Tauros",
        "type": "normal",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal"
            },
            {
                "name": "Combat",
                "type": "fighting"
            },
            {
                "name": "Blaze",
                "type": "fighting fire"
            },
            {
                "name": "Aqua",
                "type": "fighting water"
            }
        ]
    },
    "129": {
        "name": "Magikarp",
        "type": "water",
        "evolveTo": "130",
        "basic": true
    },
    "130": {
        "name": "Gyarados",
        "type": "water flying",
        "forms": [
            {
                "name": "default",
                "type": "water flying"
            },
            {
                "name": "Mega",
                "type": "water dark"
            }
        ]
    },
    "131": {
        "name": "Lapras",
        "type": "water ice",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "water ice"
            },
            {
                "name": "Gigantamax",
                "type": "water ice"
            }
        ]
    },
    "132": {
        "name": "Ditto",
        "type": "normal",
        "basic": true
    },
    "133": {
        "name": "Eevee",
        "type": "normal",
        "evolveTo": "134 135 136 196 197 470 471 700",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal",
                "evolveTo": "134 135 136 196 197 470 471 700"
            },
            {
                "name": "Gigantamax",
                "type": "normal"
            }
        ]
    },
    "134": {
        "name": "Vaporeon",
        "type": "water"
    },
    "135": {
        "name": "Jolteon",
        "type": "electric"
    },
    "136": {
        "name": "Flareon",
        "type": "fire"
    },
    "137": {
        "name": "Porygon",
        "type": "normal",
        "evolveTo": "233",
        "basic": true
    },
    "138": {
        "name": "Omanyte",
        "type": "rock water",
        "evolveTo": "139",
        "basic": true
    },
    "139": {
        "name": "Omastar",
        "type": "rock water"
    },
    "140": {
        "name": "Kabuto",
        "type": "rock water",
        "evolveTo": "141",
        "basic": true
    },
    "141": {
        "name": "Kabutops",
        "type": "rock water"
    },
    "142": {
        "name": "Aerodactyl",
        "type": "rock flying",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "rock flying"
            },
            {
                "name": "Mega",
                "type": "rock flying"
            }
        ]
    },
    "143": {
        "name": "Snorlax",
        "type": "normal",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal"
            },
            {
                "name": "Gigantamax",
                "type": "normal"
            }
        ]
    },
    "144": {
        "name": "Articuno",
        "type": "ice flying",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "ice flying"
            },
            {
                "name": "Galarian",
                "type": "psychic flying"
            }
        ]
    },
    "145": {
        "name": "Zapdos",
        "type": "electric flying",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "electric flying"
            },
            {
                "name": "Galarian",
                "type": "ground flying"
            }
        ]
    },
    "146": {
        "name": "Moltres",
        "type": "fire flying",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "fire flying"
            },
            {
                "name": "Galarian",
                "type": "dark flying"
            }
        ]
    },
    "147": {
        "name": "Dratini",
        "type": "dragon",
        "evolveTo": "148",
        "basic": true
    },
    "148": {
        "name": "Dragonair",
        "type": "dragon",
        "evolveTo": "149"
    },
    "149": {
        "name": "Dragonite",
        "type": "dragon flying"
    },
    "150": {
        "name": "Mewtwo",
        "type": "psychic",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "psychic"
            },
            {
                "name": "Mega-X",
                "type": "psychic fighting"
            },
            {
                "name": "Mega-Y",
                "type": "psychic"
            }
        ]
    },
    "151": {
        "name": "Mew",
        "type": "psychic",
        "mythical": true,
        "basic": true
    },
    "152": {
        "name": "Chikorita",
        "type": "grass",
        "evolveTo": "153",
        "starter": true,
        "basic": true
    },
    "153": {
        "name": "Bayleef",
        "type": "grass",
        "evolveTo": "154",
        "starter": true
    },
    "154": {
        "name": "Meganium",
        "type": "grass",
        "starter": true
    },
    "155": {
        "name": "Cyndaquil",
        "type": "fire",
        "evolveTo": "156",
        "starter": true,
        "basic": true
    },
    "156": {
        "name": "Quilava",
        "type": "fire",
        "evolveTo": "157 157-Hisuian",
        "starter": true
    },
    "157": {
        "name": "Typhlosion",
        "type": "fire",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "fire"
            },
            {
                "name": "Hisuian",
                "type": "fire ghost"
            }
        ]
    },
    "158": {
        "name": "Totodile",
        "type": "water",
        "evolveTo": "159",
        "starter": true,
        "basic": true
    },
    "159": {
        "name": "Croconaw",
        "type": "water",
        "evolveTo": "160",
        "starter": true
    },
    "160": {
        "name": "Feraligatr",
        "type": "water",
        "starter": true
    },
    "161": {
        "name": "Sentret",
        "type": "normal",
        "evolveTo": "162",
        "basic": true
    },
    "162": {
        "name": "Furret",
        "type": "normal"
    },
    "163": {
        "name": "Hoothoot",
        "type": "normal flying",
        "evolveTo": "164",
        "basic": true
    },
    "164": {
        "name": "Noctowl",
        "type": "normal flying"
    },
    "165": {
        "name": "Ledyba",
        "type": "bug flying",
        "evolveTo": "166",
        "basic": true
    },
    "166": {
        "name": "Ledian",
        "type": "bug flying"
    },
    "167": {
        "name": "Spinarak",
        "type": "bug poison",
        "evolveTo": "168",
        "basic": true
    },
    "168": {
        "name": "Ariados",
        "type": "bug poison"
    },
    "169": {
        "name": "Crobat",
        "type": "poison flying"
    },
    "170": {
        "name": "Chinchou",
        "type": "water electric",
        "evolveTo": "171",
        "basic": true
    },
    "171": {
        "name": "Lanturn",
        "type": "water electric"
    },
    "172": {
        "name": "Pichu",
        "type": "electric",
        "evolveTo": "25"
    },
    "173": {
        "name": "Cleffa",
        "type": "fairy",
        "evolveTo": "35"
    },
    "174": {
        "name": "Igglybuff",
        "type": "normal fairy",
        "evolveTo": "39"
    },
    "175": {
        "name": "Togepi",
        "type": "fairy",
        "evolveTo": "176",
        "basic": true
    },
    "176": {
        "name": "Togetic",
        "type": "fairy flying",
        "evolveTo": "468"
    },
    "177": {
        "name": "Natu",
        "type": "psychic flying",
        "evolveTo": "178",
        "basic": true
    },
    "178": {
        "name": "Xatu",
        "type": "psychic flying"
    },
    "179": {
        "name": "Mareep",
        "type": "electric",
        "evolveTo": "180",
        "basic": true
    },
    "180": {
        "name": "Flaaffy",
        "type": "electric",
        "evolveTo": "181"
    },
    "181": {
        "name": "Ampharos",
        "type": "electric",
        "forms": [
            {
                "name": "default",
                "type": "electric"
            },
            {
                "name": "Mega",
                "type": "electric dragon"
            }
        ]
    },
    "182": {
        "name": "Bellossom",
        "type": "grass"
    },
    "183": {
        "name": "Marill",
        "type": "water fairy",
        "evolveTo": "184",
        "basic": true
    },
    "184": {
        "name": "Azumarill",
        "type": "water fairy"
    },
    "185": {
        "name": "Sudowoodo",
        "type": "rock",
        "basic": true
    },
    "186": {
        "name": "Politoed",
        "type": "water"
    },
    "187": {
        "name": "Hoppip",
        "type": "grass flying",
        "evolveTo": "188",
        "basic": true
    },
    "188": {
        "name": "Skiploom",
        "type": "grass flying",
        "evolveTo": "189"
    },
    "189": {
        "name": "Jumpluff",
        "type": "grass flying"
    },
    "190": {
        "name": "Aipom",
        "type": "normal",
        "evolveTo": "424",
        "basic": true
    },
    "191": {
        "name": "Sunkern",
        "type": "grass",
        "evolveTo": "192",
        "basic": true
    },
    "192": {
        "name": "Sunflora",
        "type": "grass"
    },
    "193": {
        "name": "Yanma",
        "type": "bug flying",
        "evolveTo": "469",
        "basic": true
    },
    "194": {
        "name": "Wooper",
        "type": "water ground",
        "evolveTo": "195",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "water ground",
                "evolveTo": "195"
            },
            {
                "name": "Paldean",
                "type": "poison ground",
                "evolveTo": "980"
            }
        ]
    },
    "195": {
        "name": "Quagsire",
        "type": "water ground"
    },
    "196": {
        "name": "Espeon",
        "type": "psychic"
    },
    "197": {
        "name": "Umbreon",
        "type": "dark"
    },
    "198": {
        "name": "Murkrow",
        "type": "dark flying",
        "evolveTo": "430",
        "basic": true
    },
    "199": {
        "name": "Slowking",
        "type": "water psychic",
        "forms": [
            {
                "name": "default",
                "type": "water psychic"
            },
            {
                "name": "Galarian",
                "type": "poison psychic"
            }
        ]
    },
    "200": {
        "name": "Misdreavus",
        "type": "ghost",
        "evolveTo": "429",
        "basic": true
    },
    "201": {
        "name": "Unown",
        "type": "psychic",
        "basic": true,
        "forms": [
            {
                "name": "A",
                "type": "psychic"
            },
            {
                "name": "B",
                "type": "psychic"
            },
            {
                "name": "C",
                "type": "psychic"
            },
            {
                "name": "D",
                "type": "psychic"
            },
            {
                "name": "E",
                "type": "psychic"
            },
            {
                "name": "F",
                "type": "psychic"
            },
            {
                "name": "G",
                "type": "psychic"
            },
            {
                "name": "H",
                "type": "psychic"
            },
            {
                "name": "I",
                "type": "psychic"
            },
            {
                "name": "J",
                "type": "psychic"
            },
            {
                "name": "K",
                "type": "psychic"
            },
            {
                "name": "L",
                "type": "psychic"
            },
            {
                "name": "M",
                "type": "psychic"
            },
            {
                "name": "N",
                "type": "psychic"
            },
            {
                "name": "O",
                "type": "psychic"
            },
            {
                "name": "P",
                "type": "psychic"
            },
            {
                "name": "Q",
                "type": "psychic"
            },
            {
                "name": "R",
                "type": "psychic"
            },
            {
                "name": "S",
                "type": "psychic"
            },
            {
                "name": "T",
                "type": "psychic"
            },
            {
                "name": "U",
                "type": "psychic"
            },
            {
                "name": "V",
                "type": "psychic"
            },
            {
                "name": "W",
                "type": "psychic"
            },
            {
                "name": "X",
                "type": "psychic"
            },
            {
                "name": "Y",
                "type": "psychic"
            },
            {
                "name": "Z",
                "type": "psychic"
            },
            {
                "name": "em",
                "type": "psychic"
            },
            {
                "name": "qm",
                "type": "psychic"
            }
        ]
    },
    "202": {
        "name": "Wobbuffet",
        "type": "psychic",
        "basic": true
    },
    "203": {
        "name": "Girafarig",
        "type": "normal psychic",
        "basic": true,
        "evolveTo": "981"
    },
    "204": {
        "name": "Pineco",
        "type": "bug",
        "evolveTo": "205",
        "basic": true
    },
    "205": {
        "name": "Forretress",
        "type": "bug steel"
    },
    "206": {
        "name": "Dunsparce",
        "type": "normal",
        "basic": true,
        "evolveTo": "982"
    },
    "207": {
        "name": "Gligar",
        "type": "ground flying",
        "evolveTo": "472",
        "basic": true
    },
    "208": {
        "name": "Steelix",
        "type": "steel ground",
        "forms": [
            {
                "name": "default",
                "type": "steel ground"
            },
            {
                "name": "Mega",
                "type": "steel ground"
            }
        ]
    },
    "209": {
        "name": "Snubbull",
        "type": "fairy",
        "evolveTo": "210",
        "basic": true
    },
    "210": {
        "name": "Granbull",
        "type": "fairy"
    },
    "211": {
        "name": "Qwilfish",
        "type": "water poison",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "water poison"
            },
            {
                "name": "Hisuian",
                "type": "dark poison",
                "evolveTo": "904"
            }
        ]
    },
    "212": {
        "name": "Scizor",
        "type": "bug steel",
        "forms": [
            {
                "name": "default",
                "type": "bug steel"
            },
            {
                "name": "Mega",
                "type": "bug steel"
            }
        ]
    },
    "213": {
        "name": "Shuckle",
        "type": "bug rock",
        "basic": true
    },
    "214": {
        "name": "Heracross",
        "type": "bug fighting",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "bug fighting"
            },
            {
                "name": "Mega",
                "type": "bug fighting"
            }
        ]
    },
    "215": {
        "name": "Sneasel",
        "type": "dark ice",
        "evolveTo": "461",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "dark ice",
                "evolveTo": "461"
            },
            {
                "name": "Hisuian",
                "type": "fighting poison",
                "evolveTo": "903"
            }
        ]
    },
    "216": {
        "name": "Teddiursa",
        "type": "normal",
        "evolveTo": "217",
        "basic": true
    },
    "217": {
        "name": "Ursaring",
        "type": "normal",
        "evolveTo": "901"
    },
    "218": {
        "name": "Slugma",
        "type": "fire",
        "evolveTo": "219",
        "basic": true
    },
    "219": {
        "name": "Magcargo",
        "type": "fire rock"
    },
    "220": {
        "name": "Swinub",
        "type": "ice ground",
        "evolveTo": "221",
        "basic": true
    },
    "221": {
        "name": "Piloswine",
        "type": "ice ground",
        "evolveTo": "473"
    },
    "222": {
        "name": "Corsola",
        "type": "water rock",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "water rock"
            },
            {
                "name": "Galarian",
                "type": "ghost",
                "evolveTo": "864"
            }
        ]
    },
    "223": {
        "name": "Remoraid",
        "type": "water",
        "evolveTo": "224",
        "basic": true
    },
    "224": {
        "name": "Octillery",
        "type": "water"
    },
    "225": {
        "name": "Delibird",
        "type": "ice flying",
        "basic": true
    },
    "226": {
        "name": "Mantine",
        "type": "water flying",
        "basic": true
    },
    "227": {
        "name": "Skarmory",
        "type": "steel flying",
        "basic": true
    },
    "228": {
        "name": "Houndour",
        "type": "dark fire",
        "evolveTo": "229",
        "basic": true
    },
    "229": {
        "name": "Houndoom",
        "type": "dark fire",
        "forms": [
            {
                "name": "default",
                "type": "dark fire"
            },
            {
                "name": "Mega",
                "type": "dark fire"
            }
        ]
    },
    "230": {
        "name": "Kingdra",
        "type": "water dragon"
    },
    "231": {
        "name": "Phanpy",
        "type": "ground",
        "evolveTo": "232",
        "basic": true
    },
    "232": {
        "name": "Donphan",
        "type": "ground"
    },
    "233": {
        "name": "Porygon2",
        "type": "normal",
        "evolveTo": "474"
    },
    "234": {
        "name": "Stantler",
        "type": "normal",
        "basic": true,
        "evolveTo": "899"
    },
    "235": {
        "name": "Smeargle",
        "type": "normal",
        "basic": true
    },
    "236": {
        "name": "Tyrogue",
        "type": "fighting",
        "evolveTo": "106 107 237"
    },
    "237": {
        "name": "Hitmontop",
        "type": "fighting",
        "basic": true
    },
    "238": {
        "name": "Smoochum",
        "type": "ice psychic",
        "evolveTo": "124"
    },
    "239": {
        "name": "Elekid",
        "type": "electric",
        "evolveTo": "125"
    },
    "240": {
        "name": "Magby",
        "type": "fire",
        "evolveTo": "126"
    },
    "241": {
        "name": "Miltank",
        "type": "normal",
        "basic": true
    },
    "242": {
        "name": "Blissey",
        "type": "normal"
    },
    "243": {
        "name": "Raikou",
        "type": "electric",
        "legendary": true,
        "basic": true
    },
    "244": {
        "name": "Entei",
        "type": "fire",
        "legendary": true,
        "basic": true
    },
    "245": {
        "name": "Suicune",
        "type": "water",
        "legendary": true,
        "basic": true
    },
    "246": {
        "name": "Larvitar",
        "type": "rock ground",
        "evolveTo": "247",
        "basic": true
    },
    "247": {
        "name": "Pupitar",
        "type": "rock ground",
        "evolveTo": "248"
    },
    "248": {
        "name": "Tyranitar",
        "type": "rock dark",
        "forms": [
            {
                "name": "default",
                "type": "rock dark"
            },
            {
                "name": "Mega",
                "type": "rock dark"
            }
        ]
    },
    "249": {
        "name": "Lugia",
        "type": "psychic flying",
        "legendary": true,
        "basic": true
    },
    "250": {
        "name": "Ho-Oh",
        "type": "fire flying",
        "legendary": true,
        "basic": true
    },
    "251": {
        "name": "Celebi",
        "type": "psychic grass",
        "mythical": true,
        "basic": true
    },
    "252": {
        "name": "Treecko",
        "type": "grass",
        "evolveTo": "253",
        "starter": true,
        "basic": true
    },
    "253": {
        "name": "Grovyle",
        "type": "grass",
        "evolveTo": "254",
        "starter": true
    },
    "254": {
        "name": "Sceptile",
        "type": "grass",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "grass"
            },
            {
                "name": "Mega",
                "type": "grass dragon"
            }
        ]
    },
    "255": {
        "name": "Torchic",
        "type": "fire",
        "evolveTo": "256",
        "starter": true,
        "basic": true
    },
    "256": {
        "name": "Combusken",
        "type": "fire fighting",
        "evolveTo": "257",
        "starter": true
    },
    "257": {
        "name": "Blaziken",
        "type": "fire fighting",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "fire fighting"
            },
            {
                "name": "Mega",
                "type": "fire fighting"
            }
        ]
    },
    "258": {
        "name": "Mudkip",
        "type": "water",
        "evolveTo": "259",
        "starter": true,
        "basic": true
    },
    "259": {
        "name": "Marshtomp",
        "type": "water ground",
        "evolveTo": "260",
        "starter": true
    },
    "260": {
        "name": "Swampert",
        "type": "water ground",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "water ground"
            },
            {
                "name": "Mega",
                "type": "water ground"
            }
        ]
    },
    "261": {
        "name": "Poochyena",
        "type": "dark",
        "evolveTo": "262",
        "basic": true
    },
    "262": {
        "name": "Mightyena",
        "type": "dark"
    },
    "263": {
        "name": "Zigzagoon",
        "type": "normal",
        "evolveTo": "264",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal",
                "evolveTo": "264"
            },
            {
                "name": "Galarian",
                "type": "dark normal",
                "evolveTo": "264-Galarian"
            }
        ]
    },
    "264": {
        "name": "Linoone",
        "type": "normal",
        "forms": [
            {
                "name": "default",
                "type": "normal"
            },
            {
                "name": "Galarian",
                "type": "dark normal",
                "evolveTo": "862"
            }
        ]
    },
    "265": {
        "name": "Wurmple",
        "type": "bug",
        "evolveTo": "266 268",
        "basic": true
    },
    "266": {
        "name": "Silcoon",
        "type": "bug",
        "evolveTo": "267"
    },
    "267": {
        "name": "Beautifly",
        "type": "bug flying"
    },
    "268": {
        "name": "Cascoon",
        "type": "bug",
        "evolveTo": "269"
    },
    "269": {
        "name": "Dustox",
        "type": "bug poison"
    },
    "270": {
        "name": "Lotad",
        "type": "water grass",
        "evolveTo": "271",
        "basic": true
    },
    "271": {
        "name": "Lombre",
        "type": "water grass",
        "evolveTo": "272"
    },
    "272": {
        "name": "Ludicolo",
        "type": "water grass"
    },
    "273": {
        "name": "Seedot",
        "type": "grass",
        "evolveTo": "274",
        "basic": true
    },
    "274": {
        "name": "Nuzleaf",
        "type": "grass dark",
        "evolveTo": "275"
    },
    "275": {
        "name": "Shiftry",
        "type": "grass dark"
    },
    "276": {
        "name": "Taillow",
        "type": "normal flying",
        "evolveTo": "277",
        "basic": true
    },
    "277": {
        "name": "Swellow",
        "type": "normal flying"
    },
    "278": {
        "name": "Wingull",
        "type": "water flying",
        "evolveTo": "279",
        "basic": true
    },
    "279": {
        "name": "Pelipper",
        "type": "water flying"
    },
    "280": {
        "name": "Ralts",
        "type": "psychic fairy",
        "evolveTo": "281",
        "basic": true
    },
    "281": {
        "name": "Kirlia",
        "type": "psychic fairy",
        "evolveTo": "282 475"
    },
    "282": {
        "name": "Gardevoir",
        "type": "psychic fairy",
        "forms": [
            {
                "name": "default",
                "type": "psychic fairy"
            },
            {
                "name": "Mega",
                "type": "psychic fairy"
            }
        ]
    },
    "283": {
        "name": "Surskit",
        "type": "bug water",
        "evolveTo": "284",
        "basic": true
    },
    "284": {
        "name": "Masquerain",
        "type": "bug flying"
    },
    "285": {
        "name": "Shroomish",
        "type": "grass",
        "evolveTo": "286",
        "basic": true
    },
    "286": {
        "name": "Breloom",
        "type": "grass fighting"
    },
    "287": {
        "name": "Slakoth",
        "type": "normal",
        "evolveTo": "288",
        "basic": true
    },
    "288": {
        "name": "Vigoroth",
        "type": "normal",
        "evolveTo": "289"
    },
    "289": {
        "name": "Slaking",
        "type": "normal"
    },
    "290": {
        "name": "Nincada",
        "type": "bug ground",
        "evolveTo": "291 292",
        "basic": true
    },
    "291": {
        "name": "Ninjask",
        "type": "bug flying"
    },
    "292": {
        "name": "Shedinja",
        "type": "bug ghost"
    },
    "293": {
        "name": "Whismur",
        "type": "normal",
        "evolveTo": "294",
        "basic": true
    },
    "294": {
        "name": "Loudred",
        "type": "normal",
        "evolveTo": "295"
    },
    "295": {
        "name": "Exploud",
        "type": "normal"
    },
    "296": {
        "name": "Makuhita",
        "type": "fighting",
        "evolveTo": "297",
        "basic": true
    },
    "297": {
        "name": "Hariyama",
        "type": "fighting"
    },
    "298": {
        "name": "Azurill",
        "type": "normal fairy",
        "evolveTo": "183"
    },
    "299": {
        "name": "Nosepass",
        "type": "rock",
        "evolveTo": "476",
        "basic": true
    },
    "300": {
        "name": "Skitty",
        "type": "normal",
        "evolveTo": "301",
        "basic": true
    },
    "301": {
        "name": "Delcatty",
        "type": "normal"
    },
    "302": {
        "name": "Sableye",
        "type": "dark ghost",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "dark ghost"
            },
            {
                "name": "Mega",
                "type": "dark ghost"
            }
        ]
    },
    "303": {
        "name": "Mawile",
        "type": "steel fairy",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "steel fairy"
            },
            {
                "name": "Mega",
                "type": "steel fairy"
            }
        ]
    },
    "304": {
        "name": "Aron",
        "type": "steel rock",
        "evolveTo": "305",
        "basic": true
    },
    "305": {
        "name": "Lairon",
        "type": "steel rock",
        "evolveTo": "306"
    },
    "306": {
        "name": "Aggron",
        "type": "steel rock",
        "forms": [
            {
                "name": "default",
                "type": "steel rock"
            },
            {
                "name": "Mega",
                "type": "steel"
            }
        ]
    },
    "307": {
        "name": "Meditite",
        "type": "fighting psychic",
        "evolveTo": "308",
        "basic": true
    },
    "308": {
        "name": "Medicham",
        "type": "fighting psychic",
        "forms": [
            {
                "name": "default",
                "type": "fighting psychic"
            },
            {
                "name": "Mega",
                "type": "fighting psychic"
            }
        ]
    },
    "309": {
        "name": "Electrike",
        "type": "electric",
        "evolveTo": "310",
        "basic": true
    },
    "310": {
        "name": "Manectric",
        "type": "electric",
        "forms": [
            {
                "name": "default",
                "type": "electric"
            },
            {
                "name": "Mega",
                "type": "electric"
            }
        ]
    },
    "311": {
        "name": "Plusle",
        "type": "electric",
        "basic": true
    },
    "312": {
        "name": "Minun",
        "type": "electric",
        "basic": true
    },
    "313": {
        "name": "Volbeat",
        "type": "bug",
        "basic": true
    },
    "314": {
        "name": "Illumise",
        "type": "bug",
        "basic": true
    },
    "315": {
        "name": "Roselia",
        "type": "grass poison",
        "evolveTo": "407",
        "basic": true
    },
    "316": {
        "name": "Gulpin",
        "type": "poison",
        "evolveTo": "317",
        "basic": true
    },
    "317": {
        "name": "Swalot",
        "type": "poison"
    },
    "318": {
        "name": "Carvanha",
        "type": "water dark",
        "evolveTo": "319",
        "basic": true
    },
    "319": {
        "name": "Sharpedo",
        "type": "water dark",
        "forms": [
            {
                "name": "default",
                "type": "water dark"
            },
            {
                "name": "Mega",
                "type": "water dark"
            }
        ]
    },
    "320": {
        "name": "Wailmer",
        "type": "water",
        "evolveTo": "321",
        "basic": true
    },
    "321": {
        "name": "Wailord",
        "type": "water"
    },
    "322": {
        "name": "Numel",
        "type": "fire ground",
        "evolveTo": "323",
        "basic": true
    },
    "323": {
        "name": "Camerupt",
        "type": "fire ground",
        "forms": [
            {
                "name": "default",
                "type": "fire ground"
            },
            {
                "name": "Mega",
                "type": "fire ground"
            }
        ]
    },
    "324": {
        "name": "Torkoal",
        "type": "fire",
        "basic": true
    },
    "325": {
        "name": "Spoink",
        "type": "psychic",
        "evolveTo": "326",
        "basic": true
    },
    "326": {
        "name": "Grumpig",
        "type": "psychic"
    },
    "327": {
        "name": "Spinda",
        "type": "normal",
        "basic": true
    },
    "328": {
        "name": "Trapinch",
        "type": "ground",
        "evolveTo": "329",
        "basic": true
    },
    "329": {
        "name": "Vibrava",
        "type": "ground dragon",
        "evolveTo": "330"
    },
    "330": {
        "name": "Flygon",
        "type": "ground dragon"
    },
    "331": {
        "name": "Cacnea",
        "type": "grass",
        "evolveTo": "332",
        "basic": true
    },
    "332": {
        "name": "Cacturne",
        "type": "grass dark"
    },
    "333": {
        "name": "Swablu",
        "type": "normal flying",
        "evolveTo": "334",
        "basic": true
    },
    "334": {
        "name": "Altaria",
        "type": "dragon flying",
        "forms": [
            {
                "name": "default",
                "type": "dragon flying"
            },
            {
                "name": "Mega",
                "type": "dragon fairy"
            }
        ]
    },
    "335": {
        "name": "Zangoose",
        "type": "normal",
        "basic": true
    },
    "336": {
        "name": "Seviper",
        "type": "poison",
        "basic": true
    },
    "337": {
        "name": "Lunatone",
        "type": "rock psychic",
        "basic": true
    },
    "338": {
        "name": "Solrock",
        "type": "rock psychic",
        "basic": true
    },
    "339": {
        "name": "Barboach",
        "type": "water ground",
        "evolveTo": "340",
        "basic": true
    },
    "340": {
        "name": "Whiscash",
        "type": "water ground"
    },
    "341": {
        "name": "Corphish",
        "type": "water",
        "evolveTo": "342",
        "basic": true
    },
    "342": {
        "name": "Crawdaunt",
        "type": "water dark"
    },
    "343": {
        "name": "Baltoy",
        "type": "ground psychic",
        "evolveTo": "344",
        "basic": true
    },
    "344": {
        "name": "Claydol",
        "type": "ground psychic"
    },
    "345": {
        "name": "Lileep",
        "type": "rock grass",
        "evolveTo": "346",
        "basic": true
    },
    "346": {
        "name": "Cradily",
        "type": "rock grass"
    },
    "347": {
        "name": "Anorith",
        "type": "rock bug",
        "evolveTo": "348",
        "basic": true
    },
    "348": {
        "name": "Armaldo",
        "type": "rock bug"
    },
    "349": {
        "name": "Feebas",
        "type": "water",
        "evolveTo": "350",
        "basic": true
    },
    "350": {
        "name": "Milotic",
        "type": "water"
    },
    "351": {
        "name": "Castform",
        "type": "normal",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal"
            },
            {
                "name": "Sunny",
                "type": "fire"
            },
            {
                "name": "Rainy",
                "type": "water"
            },
            {
                "name": "Snowy",
                "type": "ice"
            }
        ]
    },
    "352": {
        "name": "Kecleon",
        "type": "normal",
        "basic": true
    },
    "353": {
        "name": "Shuppet",
        "type": "ghost",
        "evolveTo": "354",
        "basic": true
    },
    "354": {
        "name": "Banette",
        "type": "ghost",
        "forms": [
            {
                "name": "default",
                "type": "ghost"
            },
            {
                "name": "Mega",
                "type": "ghost"
            }
        ]
    },
    "355": {
        "name": "Duskull",
        "type": "ghost",
        "evolveTo": "356",
        "basic": true
    },
    "356": {
        "name": "Dusclops",
        "type": "ghost",
        "evolveTo": "477"
    },
    "357": {
        "name": "Tropius",
        "type": "grass flying",
        "basic": true
    },
    "358": {
        "name": "Chimecho",
        "type": "psychic",
        "basic": true
    },
    "359": {
        "name": "Absol",
        "type": "dark",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "dark"
            },
            {
                "name": "Mega",
                "type": "dark"
            }
        ]
    },
    "360": {
        "name": "Wynaut",
        "evolveTo": "202",
        "type": "psychic"
    },
    "361": {
        "name": "Snorunt",
        "type": "ice",
        "evolveTo": "362 478",
        "basic": true
    },
    "362": {
        "name": "Glalie",
        "type": "ice",
        "forms": [
            {
                "name": "default",
                "type": "ice"
            },
            {
                "name": "Mega",
                "type": "ice"
            }
        ]
    },
    "363": {
        "name": "Spheal",
        "type": "ice water",
        "evolveTo": "364",
        "basic": true
    },
    "364": {
        "name": "Sealeo",
        "type": "ice water",
        "evolveTo": "365"
    },
    "365": {
        "name": "Walrein",
        "type": "ice water"
    },
    "366": {
        "name": "Clamperl",
        "type": "water",
        "evolveTo": "367 368",
        "basic": true
    },
    "367": {
        "name": "Huntail",
        "type": "water"
    },
    "368": {
        "name": "Gorebyss",
        "type": "water"
    },
    "369": {
        "name": "Relicanth",
        "type": "water rock",
        "basic": true
    },
    "370": {
        "name": "Luvdisc",
        "type": "water",
        "basic": true
    },
    "371": {
        "name": "Bagon",
        "type": "dragon",
        "evolveTo": "372",
        "basic": true
    },
    "372": {
        "name": "Shelgon",
        "type": "dragon",
        "evolveTo": "373"
    },
    "373": {
        "name": "Salamence",
        "type": "dragon flying",
        "forms": [
            {
                "name": "default",
                "type": "dragon flying"
            },
            {
                "name": "Mega",
                "type": "dragon flying"
            }
        ]
    },
    "374": {
        "name": "Beldum",
        "type": "steel psychic",
        "evolveTo": "375",
        "basic": true
    },
    "375": {
        "name": "Metang",
        "type": "steel psychic",
        "evolveTo": "376"
    },
    "376": {
        "name": "Metagross",
        "type": "steel psychic",
        "forms": [
            {
                "name": "default",
                "type": "steel psychic"
            },
            {
                "name": "Mega",
                "type": "steel psychic"
            }
        ]
    },
    "377": {
        "name": "Regirock",
        "type": "rock",
        "legendary": true,
        "basic": true
    },
    "378": {
        "name": "Regice",
        "type": "ice",
        "legendary": true,
        "basic": true
    },
    "379": {
        "name": "Registeel",
        "type": "steel",
        "legendary": true,
        "basic": true
    },
    "380": {
        "name": "Latias",
        "type": "dragon psychic",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "dragon psychic"
            },
            {
                "name": "Mega",
                "type": "dragon psychic"
            }
        ]
    },
    "381": {
        "name": "Latios",
        "type": "dragon psychic",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "dragon psychic"
            },
            {
                "name": "Mega",
                "type": "dragon psychic"
            }
        ]
    },
    "382": {
        "name": "Kyogre",
        "type": "water",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "water"
            },
            {
                "name": "Primal",
                "type": "water"
            }
        ]
    },
    "383": {
        "name": "Groudon",
        "type": "ground",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "ground"
            },
            {
                "name": "Primal",
                "type": "ground fire"
            }
        ]
    },
    "384": {
        "name": "Rayquaza",
        "type": "dragon flying",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "dragon flying"
            },
            {
                "name": "Mega",
                "type": "dragon flying"
            }
        ]
    },
    "385": {
        "name": "Jirachi",
        "type": "steel psychic",
        "mythical": true,
        "basic": true
    },
    "386": {
        "name": "Deoxys",
        "type": "psychic",
        "mythical": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "psychic"
            },
            {
                "name": "Attack",
                "type": "psychic"
            },
            {
                "name": "Defense",
                "type": "psychic"
            },
            {
                "name": "Speed",
                "type": "psychic"
            }
        ]
    },
    "387": {
        "name": "Turtwig",
        "type": "grass",
        "evolveTo": "388",
        "starter": true,
        "basic": true
    },
    "388": {
        "name": "Grotle",
        "type": "grass",
        "evolveTo": "389",
        "starter": true
    },
    "389": {
        "name": "Torterra",
        "type": "grass ground",
        "starter": true
    },
    "390": {
        "name": "Chimchar",
        "type": "fire",
        "evolveTo": "391",
        "starter": true,
        "basic": true
    },
    "391": {
        "name": "Monferno",
        "type": "fire fighting",
        "evolveTo": "392",
        "starter": true
    },
    "392": {
        "name": "Infernape",
        "type": "fire fighting",
        "starter": true
    },
    "393": {
        "name": "Piplup",
        "type": "water",
        "evolveTo": "394",
        "starter": true,
        "basic": true
    },
    "394": {
        "name": "Prinplup",
        "type": "water",
        "evolveTo": "395",
        "starter": true
    },
    "395": {
        "name": "Empoleon",
        "type": "water steel",
        "starter": true
    },
    "396": {
        "name": "Starly",
        "type": "normal flying",
        "evolveTo": "397",
        "basic": true
    },
    "397": {
        "name": "Staravia",
        "type": "normal flying",
        "evolveTo": "398"
    },
    "398": {
        "name": "Staraptor",
        "type": "normal flying"
    },
    "399": {
        "name": "Bidoof",
        "type": "normal",
        "evolveTo": "400",
        "basic": true
    },
    "400": {
        "name": "Bibarel",
        "type": "normal water"
    },
    "401": {
        "name": "Kricketot",
        "type": "bug",
        "evolveTo": "402",
        "basic": true
    },
    "402": {
        "name": "Kricketune",
        "type": "bug"
    },
    "403": {
        "name": "Shinx",
        "type": "electric",
        "evolveTo": "404",
        "basic": true
    },
    "404": {
        "name": "Luxio",
        "type": "electric",
        "evolveTo": "405"
    },
    "405": {
        "name": "Luxray",
        "type": "electric"
    },
    "406": {
        "name": "Budew",
        "type": "grass poison",
        "evolveTo": "315"
    },
    "407": {
        "name": "Roserade",
        "type": "grass poison"
    },
    "408": {
        "name": "Cranidos",
        "type": "rock",
        "evolveTo": "409",
        "basic": true
    },
    "409": {
        "name": "Rampardos",
        "type": "rock"
    },
    "410": {
        "name": "Shieldon",
        "type": "rock steel",
        "evolveTo": "411",
        "basic": true
    },
    "411": {
        "name": "Bastiodon",
        "type": "rock steel"
    },
    "412": {
        "name": "Burmy",
        "type": "bug",
        "evolveTo": "413 414",
        "basic": true,
        "forms": [
            {
                "name": "Plant",
                "type": "bug",
                "evolveTo": "413-Plant 414"
            },
            {
                "name": "Sandy",
                "type": "bug",
                "evolveTo": "413-Sandy 414"
            },
            {
                "name": "Trash",
                "type": "bug",
                "evolveTo": "413-Trash 414"
            }
        ]
    },
    "413": {
        "name": "Wormadam",
        "type": "bug grass",
        "forms": [
            {
                "name": "Plant",
                "type": "bug grass"
            },
            {
                "name": "Sandy",
                "type": "bug ground"
            },
            {
                "name": "Trash",
                "type": "bug steel"
            }
        ]
    },
    "414": {
        "name": "Mothim",
        "type": "bug flying"
    },
    "415": {
        "name": "Combee",
        "type": "bug flying",
        "evolveTo": "416",
        "basic": true
    },
    "416": {
        "name": "Vespiquen",
        "type": "bug flying"
    },
    "417": {
        "name": "Pachirisu",
        "type": "electric",
        "basic": true
    },
    "418": {
        "name": "Buizel",
        "type": "water",
        "evolveTo": "419",
        "basic": true
    },
    "419": {
        "name": "Floatzel",
        "type": "water"
    },
    "420": {
        "name": "Cherubi",
        "type": "grass",
        "evolveTo": "421 421-Sunshine",
        "basic": true
    },
    "421": {
        "name": "Cherrim",
        "type": "grass",
        "forms": [
            {
                "name": "Sunshine",
                "type": "grass"
            },
            {
                "name": "Overcast",
                "type": "grass"
            }
        ]
    },
    "422": {
        "name": "Shellos",
        "type": "water",
        "evolveTo": "423",
        "basic": true,
        "forms": [
            {
                "name": "West",
                "type": "water",
                "evolveTo": "423-West"
            },
            {
                "name": "East",
                "type": "water",
                "evolveTo": "423-East"
            }
        ]
    },
    "423": {
        "name": "Gastrodon",
        "type": "water ground",
        "forms": [
            {
                "name": "West",
                "type": "water ground"
            },
            {
                "name": "East",
                "type": "water ground"
            }
        ]
    },
    "424": {
        "name": "Ambipom",
        "type": "normal"
    },
    "425": {
        "name": "Drifloon",
        "type": "ghost flying",
        "evolveTo": "426",
        "basic": true
    },
    "426": {
        "name": "Drifblim",
        "type": "ghost flying"
    },
    "427": {
        "name": "Buneary",
        "type": "normal",
        "evolveTo": "428",
        "basic": true
    },
    "428": {
        "name": "Lopunny",
        "type": "normal",
        "forms": [
            {
                "name": "default",
                "type": "normal"
            },
            {
                "name": "Mega",
                "type": "normal fighting"
            }
        ]
    },
    "429": {
        "name": "Mismagius",
        "type": "ghost"
    },
    "430": {
        "name": "Honchkrow",
        "type": "dark flying"
    },
    "431": {
        "name": "Glameow",
        "type": "normal",
        "evolveTo": "432",
        "basic": true
    },
    "432": {
        "name": "Purugly",
        "type": "normal"
    },
    "433": {
        "name": "Chingling",
        "type": "psychic",
        "evolveTo": "358"
    },
    "434": {
        "name": "Stunky",
        "type": "poison dark",
        "evolveTo": "435",
        "basic": true
    },
    "435": {
        "name": "Skuntank",
        "type": "poison dark"
    },
    "436": {
        "name": "Bronzor",
        "type": "steel psychic",
        "evolveTo": "437",
        "basic": true
    },
    "437": {
        "name": "Bronzong",
        "type": "steel psychic"
    },
    "438": {
        "name": "Bonsly",
        "type": "rock",
        "evolveTo": "185"
    },
    "439": {
        "name": "Mime Jr.",
        "type": "psychic fairy",
        "evolveTo": "122 122-Galarian"
    },
    "440": {
        "name": "Happiny",
        "type": "normal",
        "evolveTo": "113"
    },
    "441": {
        "name": "Chatot",
        "type": "normal flying",
        "basic": true
    },
    "442": {
        "name": "Spiritomb",
        "type": "ghost dark",
        "basic": true
    },
    "443": {
        "name": "Gible",
        "type": "dragon ground",
        "evolveTo": "444",
        "basic": true
    },
    "444": {
        "name": "Gabite",
        "type": "dragon ground",
        "evolveTo": "445"
    },
    "445": {
        "name": "Garchomp",
        "type": "dragon ground",
        "forms": [
            {
                "name": "default",
                "type": "dragon ground"
            },
            {
                "name": "Mega",
                "type": "dragon ground"
            }
        ]
    },
    "446": {
        "name": "Munchlax",
        "type": "normal",
        "evolveTo": "143"
    },
    "447": {
        "name": "Riolu",
        "type": "fighting",
        "evolveTo": "448",
        "basic": true
    },
    "448": {
        "name": "Lucario",
        "type": "fighting steel",
        "forms": [
            {
                "name": "default",
                "type": "fighting steel"
            },
            {
                "name": "Mega",
                "type": "fighting steel"
            }
        ]
    },
    "449": {
        "name": "Hippopotas",
        "type": "ground",
        "evolveTo": "450",
        "basic": true
    },
    "450": {
        "name": "Hippowdon",
        "type": "ground"
    },
    "451": {
        "name": "Skorupi",
        "type": "poison bug",
        "evolveTo": "452",
        "basic": true
    },
    "452": {
        "name": "Drapion",
        "type": "poison dark"
    },
    "453": {
        "name": "Croagunk",
        "type": "poison fighting",
        "evolveTo": "454",
        "basic": true
    },
    "454": {
        "name": "Toxicroak",
        "type": "poison fighting"
    },
    "455": {
        "name": "Carnivine",
        "type": "grass",
        "basic": true
    },
    "456": {
        "name": "Finneon",
        "type": "water",
        "evolveTo": "457",
        "basic": true
    },
    "457": {
        "name": "Lumineon",
        "type": "water"
    },
    "458": {
        "name": "Mantyke",
        "type": "water flying",
        "evolveTo": "226"
    },
    "459": {
        "name": "Snover",
        "type": "grass ice",
        "evolveTo": "460",
        "basic": true
    },
    "460": {
        "name": "Abomasnow",
        "type": "grass ice",
        "forms": [
            {
                "name": "default",
                "type": "grass ice"
            },
            {
                "name": "Mega",
                "type": "grass ice"
            }
        ]
    },
    "461": {
        "name": "Weavile",
        "type": "dark ice"
    },
    "462": {
        "name": "Magnezone",
        "type": "electric steel"
    },
    "463": {
        "name": "Lickilicky",
        "type": "normal"
    },
    "464": {
        "name": "Rhyperior",
        "type": "ground rock"
    },
    "465": {
        "name": "Tangrowth",
        "type": "grass"
    },
    "466": {
        "name": "Electivire",
        "type": "electric"
    },
    "467": {
        "name": "Magmortar",
        "type": "fire"
    },
    "468": {
        "name": "Togekiss",
        "type": "fairy flying"
    },
    "469": {
        "name": "Yanmega",
        "type": "bug flying"
    },
    "470": {
        "name": "Leafeon",
        "type": "grass"
    },
    "471": {
        "name": "Glaceon",
        "type": "ice"
    },
    "472": {
        "name": "Gliscor",
        "type": "ground flying"
    },
    "473": {
        "name": "Mamoswine",
        "type": "ice ground"
    },
    "474": {
        "name": "Porygon-Z",
        "type": "normal"
    },
    "475": {
        "name": "Gallade",
        "type": "psychic fighting",
        "forms": [
            {
                "name": "default",
                "type": "psychic fighting"
            },
            {
                "name": "Mega",
                "type": "psychic fighting"
            }
        ]
    },
    "476": {
        "name": "Probopass",
        "type": "rock steel"
    },
    "477": {
        "name": "Dusknoir",
        "type": "ghost"
    },
    "478": {
        "name": "Froslass",
        "type": "ice ghost"
    },
    "479": {
        "name": "Rotom",
        "type": "electric ghost",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "electric ghost"
            },
            {
                "name": "Fan",
                "type": "electric flying"
            },
            {
                "name": "Frost",
                "type": "electric ice"
            },
            {
                "name": "Heat",
                "type": "electric fire"
            },
            {
                "name": "Mow",
                "type": "electric grass"
            },
            {
                "name": "Wash",
                "type": "electric water"
            }
        ]
    },
    "480": {
        "name": "Uxie",
        "type": "psychic",
        "legendary": true,
        "basic": true
    },
    "481": {
        "name": "Mesprit",
        "type": "psychic",
        "legendary": true,
        "basic": true
    },
    "482": {
        "name": "Azelf",
        "type": "psychic",
        "legendary": true,
        "basic": true
    },
    "483": {
        "name": "Dialga",
        "type": "steel dragon",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "Altered",
                "type": "steel dragon"
            },
            {
                "name": "Origin",
                "type": "steel dragon"
            }
        ]
    },
    "484": {
        "name": "Palkia",
        "type": "water dragon",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "Altered",
                "type": "water dragon"
            },
            {
                "name": "Origin",
                "type": "water dragon"
            }
        ]
    },
    "485": {
        "name": "Heatran",
        "type": "fire steel",
        "legendary": true,
        "basic": true
    },
    "486": {
        "name": "Regigigas",
        "type": "normal",
        "legendary": true,
        "basic": true
    },
    "487": {
        "name": "Giratina",
        "type": "ghost dragon",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "Altered",
                "type": "ghost dragon"
            },
            {
                "name": "Origin",
                "type": "ghost dragon"
            }
        ]
    },
    "488": {
        "name": "Cresselia",
        "type": "psychic",
        "legendary": true,
        "basic": true
    },
    "489": {
        "name": "Phione",
        "type": "water",
        "mythical": true,
        "basic": true
    },
    "490": {
        "name": "Manaphy",
        "type": "water",
        "mythical": true,
        "basic": true
    },
    "491": {
        "name": "Darkrai",
        "type": "dark",
        "mythical": true,
        "basic": true
    },
    "492": {
        "name": "Shaymin",
        "type": "grass",
        "mythical": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "grass"
            },
            {
                "name": "Sky",
                "type": "grass flying"
            }
        ]
    },
    "493": {
        "name": "Arceus",
        "type": "normal",
        "mythical": true,
        "basic": true,
        "forms": [
            {
                "name": "Normal",
                "type": "normal"
            },
            {
                "name": "Bug",
                "type": "bug"
            },
            {
                "name": "Dark",
                "type": "dark"
            },
            {
                "name": "Dragon",
                "type": "dragon"
            },
            {
                "name": "Electric",
                "type": "electric"
            },
            {
                "name": "Fairy",
                "type": "fairy"
            },
            {
                "name": "Fighting",
                "type": "fighting"
            },
            {
                "name": "Fire",
                "type": "fire"
            },
            {
                "name": "Flying",
                "type": "flying"
            },
            {
                "name": "Ghost",
                "type": "ghost"
            },
            {
                "name": "Grass",
                "type": "grass"
            },
            {
                "name": "Ground",
                "type": "ground"
            },
            {
                "name": "Ice",
                "type": "ice"
            },
            {
                "name": "Poison",
                "type": "poison"
            },
            {
                "name": "Psychic",
                "type": "psychic"
            },
            {
                "name": "Rock",
                "type": "rock"
            },
            {
                "name": "Steel",
                "type": "steel"
            },
            {
                "name": "Water",
                "type": "water"
            }
        ]
    },
    "494": {
        "name": "Victini",
        "type": "psychic fire",
        "mythical": true,
        "basic": true
    },
    "495": {
        "name": "Snivy",
        "type": "grass",
        "evolveTo": "496",
        "starter": true,
        "basic": true
    },
    "496": {
        "name": "Servine",
        "type": "grass",
        "evolveTo": "497",
        "starter": true
    },
    "497": {
        "name": "Serperior",
        "type": "grass",
        "starter": true
    },
    "498": {
        "name": "Tepig",
        "type": "fire",
        "evolveTo": "499",
        "starter": true,
        "basic": true
    },
    "499": {
        "name": "Pignite",
        "type": "fire fighting",
        "evolveTo": "500",
        "starter": true
    },
    "500": {
        "name": "Emboar",
        "type": "fire fighting",
        "starter": true
    },
    "501": {
        "name": "Oshawott",
        "type": "water",
        "evolveTo": "502",
        "starter": true,
        "basic": true
    },
    "502": {
        "name": "Dewott",
        "type": "water",
        "evolveTo": "503 503-Hisuian",
        "starter": true
    },
    "503": {
        "name": "Samurott",
        "type": "water",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "water"
            },
            {
                "name": "Hisuian",
                "type": "water dark"
            }
        ]
    },
    "504": {
        "name": "Patrat",
        "type": "normal",
        "evolveTo": "505",
        "basic": true
    },
    "505": {
        "name": "Watchog",
        "type": "normal"
    },
    "506": {
        "name": "Lillipup",
        "type": "normal",
        "evolveTo": "507",
        "basic": true
    },
    "507": {
        "name": "Herdier",
        "type": "normal",
        "evolveTo": "508"
    },
    "508": {
        "name": "Stoutland",
        "type": "normal"
    },
    "509": {
        "name": "Purrloin",
        "type": "dark",
        "evolveTo": "510",
        "basic": true
    },
    "510": {
        "name": "Liepard",
        "type": "dark"
    },
    "511": {
        "name": "Pansage",
        "type": "grass",
        "evolveTo": "512",
        "basic": true
    },
    "512": {
        "name": "Simisage",
        "type": "grass"
    },
    "513": {
        "name": "Pansear",
        "type": "fire",
        "evolveTo": "514",
        "basic": true
    },
    "514": {
        "name": "Simisear",
        "type": "fire"
    },
    "515": {
        "name": "Panpour",
        "type": "water",
        "evolveTo": "516",
        "basic": true
    },
    "516": {
        "name": "Simipour",
        "type": "water"
    },
    "517": {
        "name": "Munna",
        "type": "psychic",
        "evolveTo": "518",
        "basic": true
    },
    "518": {
        "name": "Musharna",
        "type": "psychic"
    },
    "519": {
        "name": "Pidove",
        "type": "normal flying",
        "evolveTo": "520",
        "basic": true
    },
    "520": {
        "name": "Tranquill",
        "type": "normal flying",
        "evolveTo": "521-M 521-F"
    },
    "521": {
        "name": "Unfezant",
        "type": "normal flying",
        "forms": [
            {
                "name": "M",
                "type": "normal flying"
            },
            {
                "name": "F",
                "type": "normal flying"
            }
        ]
    },
    "522": {
        "name": "Blitzle",
        "type": "electric",
        "evolveTo": "523",
        "basic": true
    },
    "523": {
        "name": "Zebstrika",
        "type": "electric"
    },
    "524": {
        "name": "Roggenrola",
        "type": "rock",
        "evolveTo": "525",
        "basic": true
    },
    "525": {
        "name": "Boldore",
        "type": "rock",
        "evolveTo": "526"
    },
    "526": {
        "name": "Gigalith",
        "type": "rock"
    },
    "527": {
        "name": "Woobat",
        "type": "psychic flying",
        "evolveTo": "528",
        "basic": true
    },
    "528": {
        "name": "Swoobat",
        "type": "psychic flying"
    },
    "529": {
        "name": "Drilbur",
        "type": "ground",
        "evolveTo": "530",
        "basic": true
    },
    "530": {
        "name": "Excadrill",
        "type": "ground steel"
    },
    "531": {
        "name": "Audino",
        "type": "normal",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal"
            },
            {
                "name": "Mega",
                "type": "normal fairy"
            }
        ]
    },
    "532": {
        "name": "Timburr",
        "type": "fighting",
        "evolveTo": "533",
        "basic": true
    },
    "533": {
        "name": "Gurdurr",
        "type": "fighting",
        "evolveTo": "534"
    },
    "534": {
        "name": "Conkeldurr",
        "type": "fighting"
    },
    "535": {
        "name": "Tympole",
        "type": "water",
        "evolveTo": "536",
        "basic": true
    },
    "536": {
        "name": "Palpitoad",
        "type": "water ground",
        "evolveTo": "537"
    },
    "537": {
        "name": "Seismitoad",
        "type": "water ground"
    },
    "538": {
        "name": "Throh",
        "type": "fighting",
        "basic": true
    },
    "539": {
        "name": "Sawk",
        "type": "fighting",
        "basic": true
    },
    "540": {
        "name": "Sewaddle",
        "type": "bug grass",
        "evolveTo": "541",
        "basic": true
    },
    "541": {
        "name": "Swadloon",
        "type": "bug grass",
        "evolveTo": "542"
    },
    "542": {
        "name": "Leavanny",
        "type": "bug grass"
    },
    "543": {
        "name": "Venipede",
        "type": "bug poison",
        "evolveTo": "544",
        "basic": true
    },
    "544": {
        "name": "Whirlipede",
        "type": "bug poison",
        "evolveTo": "545"
    },
    "545": {
        "name": "Scolipede",
        "type": "bug poison"
    },
    "546": {
        "name": "Cottonee",
        "type": "grass fairy",
        "evolveTo": "547",
        "basic": true
    },
    "547": {
        "name": "Whimsicott",
        "type": "grass fairy"
    },
    "548": {
        "name": "Petilil",
        "type": "grass",
        "evolveTo": "549 549-Hisuian",
        "basic": true
    },
    "549": {
        "name": "Lilligant",
        "type": "grass",
        "forms": [
            {
                "name": "default",
                "type": "grass"
            },
            {
                "name": "Hisuian",
                "type": "grass fighting"
            }
        ]
    },
    "550": {
        "name": "Basculin",
        "type": "water",
        "basic": true,
        "forms": [
            {
                "name": "Red-Striped",
                "type": "water"
            },
            {
                "name": "Blue-Striped",
                "type": "water"
            },
            {
                "name": "White-Striped",
                "type": "water",
                "evolveTo": "902"
            }
        ]
    },
    "551": {
        "name": "Sandile",
        "type": "ground dark",
        "evolveTo": "552",
        "basic": true
    },
    "552": {
        "name": "Krokorok",
        "type": "ground dark",
        "evolveTo": "553"
    },
    "553": {
        "name": "Krookodile",
        "type": "ground dark"
    },
    "554": {
        "name": "Darumaka",
        "type": "fire",
        "evolveTo": "555",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "fire",
                "evolveTo": "555"
            },
            {
                "name": "Galarian",
                "type": "ice",
                "evolveTo": "555-Galarian-Standard"
            }
        ]
    },
    "555": {
        "name": "Darmanitan",
        "type": "fire",
        "forms": [
            {
                "name": "default",
                "type": "fire"
            },
            {
                "name": "Zen",
                "type": "fire psychic"
            },
            {
                "name": "Galarian-Standard",
                "type": "ice"
            },
            {
                "name": "Galarian-Zen",
                "type": "ice fire"
            }
        ]
    },
    "556": {
        "name": "Maractus",
        "type": "grass",
        "basic": true
    },
    "557": {
        "name": "Dwebble",
        "type": "bug rock",
        "evolveTo": "558",
        "basic": true
    },
    "558": {
        "name": "Crustle",
        "type": "bug rock"
    },
    "559": {
        "name": "Scraggy",
        "type": "dark fighting",
        "evolveTo": "560",
        "basic": true
    },
    "560": {
        "name": "Scrafty",
        "type": "dark fighting"
    },
    "561": {
        "name": "Sigilyph",
        "type": "psychic flying",
        "basic": true
    },
    "562": {
        "name": "Yamask",
        "type": "ghost",
        "evolveTo": "563",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "ghost",
                "evolveTo": "563"
            },
            {
                "name": "Galarian",
                "type": "ground ghost",
                "evolveTo": "867"
            }
        ]
    },
    "563": {
        "name": "Cofagrigus",
        "type": "ghost"
    },
    "564": {
        "name": "Tirtouga",
        "type": "water rock",
        "evolveTo": "565",
        "basic": true
    },
    "565": {
        "name": "Carracosta",
        "type": "water rock"
    },
    "566": {
        "name": "Archen",
        "type": "rock flying",
        "evolveTo": "567",
        "basic": true
    },
    "567": {
        "name": "Archeops",
        "type": "rock flying"
    },
    "568": {
        "name": "Trubbish",
        "type": "poison",
        "evolveTo": "569",
        "basic": true
    },
    "569": {
        "name": "Garbodor",
        "type": "poison",
        "forms": [
            {
                "name": "default",
                "type": "poison"
            },
            {
                "name": "Gigantamax",
                "type": "poison"
            }
        ]
    },
    "570": {
        "name": "Zorua",
        "type": "dark",
        "evolveTo": "571",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "dark",
                "evolveTo": "571"
            },
            {
                "name": "Hisuian",
                "type": "normal ghost",
                "evolveTo": "571-Hisuian"
            }
        ]
    },
    "571": {
        "name": "Zoroark",
        "type": "dark",
        "forms": [
            {
                "name": "default",
                "type": "dark"
            },
            {
                "name": "Hisuian",
                "type": "normal ghost"
            }
        ]
    },
    "572": {
        "name": "Minccino",
        "type": "normal",
        "evolveTo": "573",
        "basic": true
    },
    "573": {
        "name": "Cinccino",
        "type": "normal"
    },
    "574": {
        "name": "Gothita",
        "type": "psychic",
        "evolveTo": "575",
        "basic": true
    },
    "575": {
        "name": "Gothorita",
        "type": "psychic",
        "evolveTo": "576"
    },
    "576": {
        "name": "Gothitelle",
        "type": "psychic"
    },
    "577": {
        "name": "Solosis",
        "type": "psychic",
        "evolveTo": "578",
        "basic": true
    },
    "578": {
        "name": "Duosion",
        "type": "psychic",
        "evolveTo": "579"
    },
    "579": {
        "name": "Reuniclus",
        "type": "psychic"
    },
    "580": {
        "name": "Ducklett",
        "type": "water flying",
        "evolveTo": "581",
        "basic": true
    },
    "581": {
        "name": "Swanna",
        "type": "water flying"
    },
    "582": {
        "name": "Vanillite",
        "type": "ice",
        "evolveTo": "583",
        "basic": true
    },
    "583": {
        "name": "Vanillish",
        "type": "ice",
        "evolveTo": "584"
    },
    "584": {
        "name": "Vanilluxe",
        "type": "ice"
    },
    "585": {
        "name": "Deerling",
        "type": "normal grass",
        "evolveTo": "586",
        "basic": true,
        "forms": [
            {
                "name": "Spring",
                "type": "normal grass",
                "evolveTo": "586-Spring"
            },
            {
                "name": "Summer",
                "type": "normal grass",
                "evolveTo": "586-Summer"
            },
            {
                "name": "Autumn",
                "type": "normal grass",
                "evolveTo": "586-Autumn"
            },
            {
                "name": "Winter",
                "type": "normal grass",
                "evolveTo": "586-Winter"
            }
        ]
    },
    "586": {
        "name": "Sawsbuck",
        "type": "normal grass",
        "forms": [
            {
                "name": "Spring",
                "type": "normal grass"
            },
            {
                "name": "Summer",
                "type": "normal grass"
            },
            {
                "name": "Autumn",
                "type": "normal grass"
            },
            {
                "name": "Winter",
                "type": "normal grass"
            }
        ]
    },
    "587": {
        "name": "Emolga",
        "type": "electric flying",
        "basic": true
    },
    "588": {
        "name": "Karrablast",
        "type": "bug",
        "evolveTo": "589",
        "basic": true
    },
    "589": {
        "name": "Escavalier",
        "type": "bug steel"
    },
    "590": {
        "name": "Foongus",
        "type": "grass poison",
        "evolveTo": "591",
        "basic": true
    },
    "591": {
        "name": "Amoonguss",
        "type": "grass poison"
    },
    "592": {
        "name": "Frillish",
        "type": "water ghost",
        "evolveTo": "593",
        "basic": true,
        "forms": [
            {
                "name": "M",
                "type": "water ghost",
                "evolveTo": "593-M"
            },
            {
                "name": "F",
                "type": "water ghost",
                "evolveTo": "593-F"
            }
        ]
    },
    "593": {
        "name": "Jellicent",
        "type": "water ghost",
        "forms": [
            {
                "name": "M",
                "type": "water ghost"
            },
            {
                "name": "F",
                "type": "water ghost"
            }
        ]
    },
    "594": {
        "name": "Alomomola",
        "type": "water",
        "basic": true
    },
    "595": {
        "name": "Joltik",
        "type": "bug electric",
        "evolveTo": "596",
        "basic": true
    },
    "596": {
        "name": "Galvantula",
        "type": "bug electric"
    },
    "597": {
        "name": "Ferroseed",
        "type": "grass steel",
        "evolveTo": "598",
        "basic": true
    },
    "598": {
        "name": "Ferrothorn",
        "type": "grass steel"
    },
    "599": {
        "name": "Klink",
        "type": "steel",
        "evolveTo": "600",
        "basic": true
    },
    "600": {
        "name": "Klang",
        "type": "steel",
        "evolveTo": "601"
    },
    "601": {
        "name": "Klinklang",
        "type": "steel"
    },
    "602": {
        "name": "Tynamo",
        "type": "electric",
        "evolveTo": "603",
        "basic": true
    },
    "603": {
        "name": "Eelektrik",
        "type": "electric",
        "evolveTo": "604"
    },
    "604": {
        "name": "Eelektross",
        "type": "electric"
    },
    "605": {
        "name": "Elgyem",
        "type": "psychic",
        "evolveTo": "606",
        "basic": true
    },
    "606": {
        "name": "Beheeyem",
        "type": "psychic"
    },
    "607": {
        "name": "Litwick",
        "type": "ghost fire",
        "evolveTo": "608",
        "basic": true
    },
    "608": {
        "name": "Lampent",
        "type": "ghost fire",
        "evolveTo": "609"
    },
    "609": {
        "name": "Chandelure",
        "type": "ghost fire"
    },
    "610": {
        "name": "Axew",
        "type": "dragon",
        "evolveTo": "611",
        "basic": true
    },
    "611": {
        "name": "Fraxure",
        "type": "dragon",
        "evolveTo": "612"
    },
    "612": {
        "name": "Haxorus",
        "type": "dragon"
    },
    "613": {
        "name": "Cubchoo",
        "type": "ice",
        "evolveTo": "614",
        "basic": true
    },
    "614": {
        "name": "Beartic",
        "type": "ice"
    },
    "615": {
        "name": "Cryogonal",
        "type": "ice",
        "basic": true
    },
    "616": {
        "name": "Shelmet",
        "type": "bug",
        "evolveTo": "617",
        "basic": true
    },
    "617": {
        "name": "Accelgor",
        "type": "bug"
    },
    "618": {
        "name": "Stunfisk",
        "type": "ground electric",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "ground electric"
            },
            {
                "name": "Galarian",
                "type": "ground steel"
            }
        ]
    },
    "619": {
        "name": "Mienfoo",
        "type": "fighting",
        "evolveTo": "620",
        "basic": true
    },
    "620": {
        "name": "Mienshao",
        "type": "fighting"
    },
    "621": {
        "name": "Druddigon",
        "type": "dragon",
        "basic": true
    },
    "622": {
        "name": "Golett",
        "type": "ground ghost",
        "evolveTo": "623",
        "basic": true
    },
    "623": {
        "name": "Golurk",
        "type": "ground ghost"
    },
    "624": {
        "name": "Pawniard",
        "type": "dark steel",
        "evolveTo": "625",
        "basic": true
    },
    "625": {
        "name": "Bisharp",
        "type": "dark steel",
        "evolveTo": "983"
    },
    "626": {
        "name": "Bouffalant",
        "type": "normal",
        "basic": true
    },
    "627": {
        "name": "Rufflet",
        "type": "normal flying",
        "evolveTo": "628 628-Hisuian",
        "basic": true
    },
    "628": {
        "name": "Braviary",
        "type": "normal flying",
        "forms": [
            {
                "name": "default",
                "type": "normal flying"
            },
            {
                "name": "Hisuian",
                "type": "psychic flying"
            }
        ]
    },
    "629": {
        "name": "Vullaby",
        "type": "dark flying",
        "evolveTo": "630",
        "basic": true
    },
    "630": {
        "name": "Mandibuzz",
        "type": "dark flying"
    },
    "631": {
        "name": "Heatmor",
        "type": "fire",
        "basic": true
    },
    "632": {
        "name": "Durant",
        "type": "bug steel",
        "basic": true
    },
    "633": {
        "name": "Deino",
        "type": "dark dragon",
        "evolveTo": "634",
        "basic": true
    },
    "634": {
        "name": "Zweilous",
        "type": "dark dragon",
        "evolveTo": "635"
    },
    "635": {
        "name": "Hydreigon",
        "type": "dark dragon"
    },
    "636": {
        "name": "Larvesta",
        "type": "bug fire",
        "evolveTo": "637",
        "basic": true
    },
    "637": {
        "name": "Volcarona",
        "type": "bug fire"
    },
    "638": {
        "name": "Cobalion",
        "type": "steel fighting",
        "legendary": true,
        "basic": true
    },
    "639": {
        "name": "Terrakion",
        "type": "rock fighting",
        "legendary": true,
        "basic": true
    },
    "640": {
        "name": "Virizion",
        "type": "grass fighting",
        "legendary": true,
        "basic": true
    },
    "641": {
        "name": "Tornadus",
        "type": "flying",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "flying"
            },
            {
                "name": "Therian",
                "type": "flying"
            }
        ]
    },
    "642": {
        "name": "Thundurus",
        "type": "electric flying",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "electric flying"
            },
            {
                "name": "Therian",
                "type": "electric flying"
            }
        ]
    },
    "643": {
        "name": "Reshiram",
        "type": "dragon fire",
        "legendary": true,
        "basic": true
    },
    "644": {
        "name": "Zekrom",
        "type": "dragon electric",
        "legendary": true,
        "basic": true
    },
    "645": {
        "name": "Landorus",
        "type": "ground flying",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "ground flying"
            },
            {
                "name": "Therian",
                "type": "ground flying"
            }
        ]
    },
    "646": {
        "name": "Kyurem",
        "type": "dragon ice",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "dragon ice"
            },
            {
                "name": "Black",
                "type": "dragon ice"
            },
            {
                "name": "White",
                "type": "dragon ice"
            }
        ]
    },
    "647": {
        "name": "Keldeo",
        "type": "water fighting",
        "mythical": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "water fighting"
            },
            {
                "name": "Resolute",
                "type": "water fighting"
            }
        ]
    },
    "648": {
        "name": "Meloetta",
        "type": "normal psychic",
        "mythical": true,
        "basic": true,
        "forms": [
            {
                "name": "Aria",
                "type": "normal psychic"
            },
            {
                "name": "Pirouette",
                "type": "normal fighting"
            }
        ]
    },
    "649": {
        "name": "Genesect",
        "type": "bug steel",
        "mythical": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "bug steel"
            },
            {
                "name": "Burn",
                "type": "bug steel"
            },
            {
                "name": "Chill",
                "type": "bug steel"
            },
            {
                "name": "Douse",
                "type": "bug steel"
            },
            {
                "name": "Shock",
                "type": "bug steel"
            }
        ]
    },
    "650": {
        "name": "Chespin",
        "type": "grass",
        "evolveTo": "651",
        "starter": true,
        "basic": true
    },
    "651": {
        "name": "Quilladin",
        "type": "grass",
        "evolveTo": "652",
        "starter": true
    },
    "652": {
        "name": "Chesnaught",
        "type": "grass fighting",
        "starter": true
    },
    "653": {
        "name": "Fennekin",
        "type": "fire",
        "evolveTo": "654",
        "starter": true,
        "basic": true
    },
    "654": {
        "name": "Braixen",
        "type": "fire",
        "evolveTo": "655",
        "starter": true
    },
    "655": {
        "name": "Delphox",
        "type": "fire psychic",
        "starter": true
    },
    "656": {
        "name": "Froakie",
        "type": "water",
        "evolveTo": "657",
        "starter": true,
        "basic": true
    },
    "657": {
        "name": "Frogadier",
        "type": "water",
        "evolveTo": "658",
        "starter": true
    },
    "658": {
        "name": "Greninja",
        "type": "water dark",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "water dark"
            },
            {
                "name": "Ash",
                "type": "water dark"
            }
        ]
    },
    "659": {
        "name": "Bunnelby",
        "type": "normal",
        "evolveTo": "660",
        "basic": true
    },
    "660": {
        "name": "Diggersby",
        "type": "normal ground"
    },
    "661": {
        "name": "Fletchling",
        "type": "normal flying",
        "evolveTo": "662",
        "basic": true
    },
    "662": {
        "name": "Fletchinder",
        "type": "fire flying",
        "evolveTo": "663"
    },
    "663": {
        "name": "Talonflame",
        "type": "fire flying"
    },
    "664": {
        "name": "Scatterbug",
        "type": "bug",
        "evolveTo": "665",
        "basic": true
    },
    "665": {
        "name": "Spewpa",
        "type": "bug",
        "evolveTo": "666"
    },
    "666": {
        "name": "Vivillon",
        "type": "bug flying",
        "forms": [
            {
                "name": "Meadow",
                "type": "bug flying"
            },
            {
                "name": "Archipelago",
                "type": "bug flying"
            },
            {
                "name": "Continental",
                "type": "bug flying"
            },
            {
                "name": "Elegant",
                "type": "bug flying"
            },
            {
                "name": "Fancy",
                "type": "bug flying"
            },
            {
                "name": "Garden",
                "type": "bug flying"
            },
            {
                "name": "High-Plains",
                "type": "bug flying"
            },
            {
                "name": "Icy-Snow",
                "type": "bug flying"
            },
            {
                "name": "Jungle",
                "type": "bug flying"
            },
            {
                "name": "Marine",
                "type": "bug flying"
            },
            {
                "name": "Modern",
                "type": "bug flying"
            },
            {
                "name": "Monsoon",
                "type": "bug flying"
            },
            {
                "name": "Ocean",
                "type": "bug flying"
            },
            {
                "name": "Poké-Ball",
                "type": "bug flying"
            },
            {
                "name": "Polar",
                "type": "bug flying"
            },
            {
                "name": "River",
                "type": "bug flying"
            },
            {
                "name": "Sandstorm",
                "type": "bug flying"
            },
            {
                "name": "Savanna",
                "type": "bug flying"
            },
            {
                "name": "Sun",
                "type": "bug flying"
            },
            {
                "name": "Tundra",
                "type": "bug flying"
            }
        ]
    },
    "667": {
        "name": "Litleo",
        "type": "fire normal",
        "evolveTo": "668-M 668-F",
        "basic": true
    },
    "668": {
        "name": "Pyroar",
        "type": "fire normal",
        "forms": [
            {
                "name": "M",
                "type": "fire normal"
            },
            {
                "name": "F",
                "type": "fire normal"
            }
        ]
    },
    "669": {
        "name": "Flabébé",
        "type": "fairy",
        "evolveTo": "670",
        "basic": true,
        "forms": [
            {
                "name": "Red",
                "type": "fairy",
                "evolveTo": "670-Red"
            },
            {
                "name": "Blue",
                "type": "fairy",
                "evolveTo": "670-Blue"
            },
            {
                "name": "Orange",
                "type": "fairy",
                "evolveTo": "670-Orange"
            },
            {
                "name": "White",
                "type": "fairy",
                "evolveTo": "670-White"
            },
            {
                "name": "Yellow",
                "type": "fairy",
                "evolveTo": "670-Yellow"
            }
        ]
    },
    "670": {
        "name": "Floette",
        "type": "fairy",
        "evolveTo": "671",
        "forms": [
            {
                "name": "Red",
                "type": "fairy",
                "evolveTo": "671-Red"
            },
            {
                "name": "Blue",
                "type": "fairy",
                "evolveTo": "671-Blue"
            },
            {
                "name": "Orange",
                "type": "fairy",
                "evolveTo": "671-Orange"
            },
            {
                "name": "White",
                "type": "fairy",
                "evolveTo": "671-White"
            },
            {
                "name": "Yellow",
                "type": "fairy",
                "evolveTo": "671-Yellow"
            }
        ]
    },
    "671": {
        "name": "Florges",
        "type": "fairy",
        "forms": [
            {
                "name": "Red",
                "type": "fairy"
            },
            {
                "name": "Blue",
                "type": "fairy"
            },
            {
                "name": "Orange",
                "type": "fairy"
            },
            {
                "name": "White",
                "type": "fairy"
            },
            {
                "name": "Yellow",
                "type": "fairy"
            }
        ]
    },
    "672": {
        "name": "Skiddo",
        "type": "grass",
        "evolveTo": "673",
        "basic": true
    },
    "673": {
        "name": "Gogoat",
        "type": "grass"
    },
    "674": {
        "name": "Pancham",
        "type": "fighting",
        "evolveTo": "675",
        "basic": true
    },
    "675": {
        "name": "Pangoro",
        "type": "fighting dark"
    },
    "676": {
        "name": "Furfrou",
        "type": "normal",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "normal"
            },
            {
                "name": "Dandy",
                "type": "normal"
            },
            {
                "name": "Debutante",
                "type": "normal"
            },
            {
                "name": "Diamond",
                "type": "normal"
            },
            {
                "name": "Heart",
                "type": "normal"
            },
            {
                "name": "Kabuki",
                "type": "normal"
            },
            {
                "name": "La-Reine",
                "type": "normal"
            },
            {
                "name": "Matron",
                "type": "normal"
            },
            {
                "name": "Pharaoh",
                "type": "normal"
            },
            {
                "name": "Star",
                "type": "normal"
            }
        ]
    },
    "677": {
        "name": "Espurr",
        "type": "psychic",
        "evolveTo": "678-M 678-F",
        "basic": true
    },
    "678": {
        "name": "Meowstic",
        "type": "psychic",
        "forms": [
            {
                "name": "M",
                "type": "psychic"
            },
            {
                "name": "F",
                "type": "psychic"
            }
        ]
    },
    "679": {
        "name": "Honedge",
        "type": "steel ghost",
        "evolveTo": "680",
        "basic": true
    },
    "680": {
        "name": "Doublade",
        "type": "steel ghost",
        "evolveTo": "681 681-Blade"
    },
    "681": {
        "name": "Aegislash",
        "type": "steel ghost",
        "forms": [
            {
                "name": "Shield",
                "type": "steel ghost"
            },
            {
                "name": "Blade",
                "type": "steel ghost"
            }
        ]
    },
    "682": {
        "name": "Spritzee",
        "type": "fairy",
        "evolveTo": "683",
        "basic": true
    },
    "683": {
        "name": "Aromatisse",
        "type": "fairy"
    },
    "684": {
        "name": "Swirlix",
        "type": "fairy",
        "evolveTo": "685",
        "basic": true
    },
    "685": {
        "name": "Slurpuff",
        "type": "fairy"
    },
    "686": {
        "name": "Inkay",
        "type": "dark psychic",
        "evolveTo": "687",
        "basic": true
    },
    "687": {
        "name": "Malamar",
        "type": "dark psychic"
    },
    "688": {
        "name": "Binacle",
        "type": "rock water",
        "evolveTo": "689",
        "basic": true
    },
    "689": {
        "name": "Barbaracle",
        "type": "rock water"
    },
    "690": {
        "name": "Skrelp",
        "type": "poison water",
        "evolveTo": "691",
        "basic": true
    },
    "691": {
        "name": "Dragalge",
        "type": "poison dragon"
    },
    "692": {
        "name": "Clauncher",
        "type": "water",
        "evolveTo": "693",
        "basic": true
    },
    "693": {
        "name": "Clawitzer",
        "type": "water"
    },
    "694": {
        "name": "Helioptile",
        "type": "electric normal",
        "evolveTo": "695",
        "basic": true
    },
    "695": {
        "name": "Heliolisk",
        "type": "electric normal"
    },
    "696": {
        "name": "Tyrunt",
        "type": "rock dragon",
        "evolveTo": "697",
        "basic": true
    },
    "697": {
        "name": "Tyrantrum",
        "type": "rock dragon"
    },
    "698": {
        "name": "Amaura",
        "type": "rock ice",
        "evolveTo": "699",
        "basic": true
    },
    "699": {
        "name": "Aurorus",
        "type": "rock ice"
    },
    "700": {
        "name": "Sylveon",
        "type": "fairy"
    },
    "701": {
        "name": "Hawlucha",
        "type": "fighting flying",
        "basic": true
    },
    "702": {
        "name": "Dedenne",
        "type": "electric fairy",
        "basic": true
    },
    "703": {
        "name": "Carbink",
        "type": "rock fairy",
        "basic": true
    },
    "704": {
        "name": "Goomy",
        "type": "dragon",
        "evolveTo": "705 705-Hisuian",
        "basic": true
    },
    "705": {
        "name": "Sliggoo",
        "type": "dragon",
        "evolveTo": "706",
        "forms": [
            {
                "name": "default",
                "type": "dragon",
                "evolveTo": "706"
            },
            {
                "name": "Hisuian",
                "type": "steel dragon",
                "evolveTo": "706-Hisuian"
            }
        ]
    },
    "706": {
        "name": "Goodra",
        "type": "dragon",
        "forms": [
            {
                "name": "default",
                "type": "dragon"
            },
            {
                "name": "Hisuian",
                "type": "steel dragon"
            }
        ]
    },
    "707": {
        "name": "Klefki",
        "type": "steel fairy",
        "basic": true
    },
    "708": {
        "name": "Phantump",
        "type": "ghost grass",
        "evolveTo": "709",
        "basic": true
    },
    "709": {
        "name": "Trevenant",
        "type": "ghost grass"
    },
    "710": {
        "name": "Pumpkaboo",
        "type": "ghost grass",
        "evolveTo": "711",
        "basic": true,
        "forms": [
            {
                "name": "Small",
                "type": "ghost grass",
                "evolveTo": "711-Small"
            },
            {
                "name": "Average",
                "type": "ghost grass",
                "evolveTo": "711-Average"
            },
            {
                "name": "Large",
                "type": "ghost grass",
                "evolveTo": "711-Large"
            },
            {
                "name": "Super",
                "type": "ghost grass",
                "evolveTo": "711-Super"
            }
        ]
    },
    "711": {
        "name": "Gourgeist",
        "type": "ghost grass",
        "forms": [
            {
                "name": "Small",
                "type": "ghost grass"
            },
            {
                "name": "Average",
                "type": "ghost grass"
            },
            {
                "name": "Large",
                "type": "ghost grass"
            },
            {
                "name": "Super",
                "type": "ghost grass"
            }
        ]
    },
    "712": {
        "name": "Bergmite",
        "type": "ice",
        "evolveTo": "713 713-Hisuian",
        "basic": true
    },
    "713": {
        "name": "Avalugg",
        "type": "ice",
        "forms": [
            {
                "name": "default",
                "type": "ice"
            },
            {
                "name": "Hisuian",
                "type": "ice rock"
            }
        ]
    },
    "714": {
        "name": "Noibat",
        "type": "flying dragon",
        "evolveTo": "715",
        "basic": true
    },
    "715": {
        "name": "Noivern",
        "type": "flying dragon"
    },
    "716": {
        "name": "Xerneas",
        "type": "fairy",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "fairy"
            },
            {
                "name": "Active",
                "type": "fairy"
            }
        ]
    },
    "717": {
        "name": "Yveltal",
        "type": "dark flying",
        "legendary": true,
        "basic": true
    },
    "718": {
        "name": "Zygarde",
        "type": "dragon ground",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "10",
                "type": "dragon ground"
            },
            {
                "name": "50",
                "type": "dragon ground"
            },
            {
                "name": "Complete",
                "type": "dragon ground"
            }
        ]
    },
    "719": {
        "name": "Diancie",
        "type": "rock fairy",
        "mythical": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "rock fairy"
            },
            {
                "name": "Mega",
                "type": "rock fairy"
            }
        ]
    },
    "720": {
        "name": "Hoopa",
        "type": "psychic ghost",
        "mythical": true,
        "basic": true,
        "forms": [
            {
                "name": "Confined",
                "type": "psychic ghost"
            },
            {
                "name": "Unbound",
                "type": "psychic dark"
            }
        ]
    },
    "721": {
        "name": "Volcanion",
        "type": "fire water",
        "mythical": true,
        "basic": true
    },
    "722": {
        "name": "Rowlet",
        "type": "grass flying",
        "evolveTo": "723",
        "starter": true,
        "basic": true
    },
    "723": {
        "name": "Dartrix",
        "type": "grass flying",
        "evolveTo": "724 724-Hisuian",
        "starter": true
    },
    "724": {
        "name": "Decidueye",
        "type": "grass ghost",
        "starter": true,
        "forms":[
            {
                "name": "default",
                "type": "grass ghost"
            },
            {
                "name": "Hisuian",
                "type": "grass fighting"
            }
        ]
    },
    "725": {
        "name": "Litten",
        "type": "fire",
        "evolveTo": "726",
        "starter": true,
        "basic": true
    },
    "726": {
        "name": "Torracat",
        "type": "fire",
        "evolveTo": "727",
        "starter": true
    },
    "727": {
        "name": "Incineroar",
        "type": "fire dark",
        "starter": true
    },
    "728": {
        "name": "Popplio",
        "type": "water",
        "evolveTo": "729",
        "starter": true,
        "basic": true
    },
    "729": {
        "name": "Brionne",
        "type": "water",
        "evolveTo": "730",
        "starter": true
    },
    "730": {
        "name": "Primarina",
        "type": "water fairy",
        "starter": true
    },
    "731": {
        "name": "Pikipek",
        "type": "normal flying",
        "evolveTo": "732",
        "basic": true
    },
    "732": {
        "name": "Trumbeak",
        "type": "normal flying",
        "evolveTo": "733"
    },
    "733": {
        "name": "Toucannon",
        "type": "normal flying"
    },
    "734": {
        "name": "Yungoos",
        "type": "normal",
        "evolveTo": "735",
        "basic": true
    },
    "735": {
        "name": "Gumshoos",
        "type": "normal"
    },
    "736": {
        "name": "Grubbin",
        "type": "bug",
        "evolveTo": "737",
        "basic": true
    },
    "737": {
        "name": "Charjabug",
        "type": "bug electric",
        "evolveTo": "738"
    },
    "738": {
        "name": "Vikavolt",
        "type": "bug electric"
    },
    "739": {
        "name": "Crabrawler",
        "type": "fighting",
        "evolveTo": "740",
        "basic": true
    },
    "740": {
        "name": "Crabominable",
        "type": "fighting ice"
    },
    "741": {
        "name": "Oricorio",
        "type": "fire flying",
        "basic": true,
        "forms": [
            {
                "name": "Baile",
                "type": "fire flying"
            },
            {
                "name": "Pa'u",
                "type": "psychic flying"
            },
            {
                "name": "Pom-Pom",
                "type": "electric flying"
            },
            {
                "name": "Sensu",
                "type": "ghost flying"
            }
        ]
    },
    "742": {
        "name": "Cutiefly",
        "type": "bug fairy",
        "evolveTo": "743",
        "basic": true
    },
    "743": {
        "name": "Ribombee",
        "type": "bug fairy"
    },
    "744": {
        "name": "Rockruff",
        "type": "rock",
        "evolveTo": "745-Midday 745-Midnight 745-Dusk",
        "basic": true
    },
    "745": {
        "name": "Lycanroc",
        "type": "rock",
        "forms": [
            {
                "name": "Midday",
                "type": "rock"
            },
            {
                "name": "Midnight",
                "type": "rock"
            },
            {
                "name": "Dusk",
                "type": "rock"
            }
        ]
    },
    "746": {
        "name": "Wishiwashi",
        "type": "water",
        "basic": true,
        "forms": [
            {
                "name": "Solo",
                "type": "water"
            },
            {
                "name": "School",
                "type": "water"
            }
        ]
    },
    "747": {
        "name": "Mareanie",
        "type": "poison water",
        "evolveTo": "748",
        "basic": true
    },
    "748": {
        "name": "Toxapex",
        "type": "poison water"
    },
    "749": {
        "name": "Mudbray",
        "type": "ground",
        "evolveTo": "750",
        "basic": true
    },
    "750": {
        "name": "Mudsdale",
        "type": "ground"
    },
    "751": {
        "name": "Dewpider",
        "type": "water bug",
        "evolveTo": "752",
        "basic": true
    },
    "752": {
        "name": "Araquanid",
        "type": "water bug"
    },
    "753": {
        "name": "Fomantis",
        "type": "grass",
        "evolveTo": "754",
        "basic": true
    },
    "754": {
        "name": "Lurantis",
        "type": "grass"
    },
    "755": {
        "name": "Morelull",
        "type": "grass fairy",
        "evolveTo": "756",
        "basic": true
    },
    "756": {
        "name": "Shiinotic",
        "type": "grass fairy"
    },
    "757": {
        "name": "Salandit",
        "type": "poison fire",
        "evolveTo": "758",
        "basic": true
    },
    "758": {
        "name": "Salazzle",
        "type": "poison fire"
    },
    "759": {
        "name": "Stufful",
        "type": "normal fighting",
        "evolveTo": "760",
        "basic": true
    },
    "760": {
        "name": "Bewear",
        "type": "normal fighting"
    },
    "761": {
        "name": "Bounsweet",
        "type": "grass",
        "evolveTo": "762",
        "basic": true
    },
    "762": {
        "name": "Steenee",
        "type": "grass",
        "evolveTo": "763"
    },
    "763": {
        "name": "Tsareena",
        "type": "grass"
    },
    "764": {
        "name": "Comfey",
        "type": "fairy",
        "basic": true
    },
    "765": {
        "name": "Oranguru",
        "type": "normal psychic",
        "basic": true
    },
    "766": {
        "name": "Passimian",
        "type": "fighting",
        "basic": true
    },
    "767": {
        "name": "Wimpod",
        "type": "bug water",
        "evolveTo": "768",
        "basic": true
    },
    "768": {
        "name": "Golisopod",
        "type": "bug water"
    },
    "769": {
        "name": "Sandygast",
        "type": "ghost ground",
        "evolveTo": "770",
        "basic": true
    },
    "770": {
        "name": "Palossand",
        "type": "ghost ground"
    },
    "771": {
        "name": "Pyukumuku",
        "type": "water",
        "basic": true
    },
    "772": {
        "name": "Type: Null",
        "type": "normal",
        "evolveTo": "773",
        "legendary": true,
        "basic": true
    },
    "773": {
        "name": "Silvally",
        "type": "normal",
        "legendary": true,
        "forms": [
            {
                "name": "Normal",
                "type": "normal"
            },
            {
                "name": "Bug",
                "type": "bug"
            },
            {
                "name": "Dark",
                "type": "dark"
            },
            {
                "name": "Dragon",
                "type": "dragon"
            },
            {
                "name": "Electric",
                "type": "electric"
            },
            {
                "name": "Fairy",
                "type": "fairy"
            },
            {
                "name": "Fighting",
                "type": "fighting"
            },
            {
                "name": "Fire",
                "type": "fire"
            },
            {
                "name": "Flying",
                "type": "flying"
            },
            {
                "name": "Ghost",
                "type": "ghost"
            },
            {
                "name": "Grass",
                "type": "grass"
            },
            {
                "name": "Ground",
                "type": "ground"
            },
            {
                "name": "Ice",
                "type": "ice"
            },
            {
                "name": "Poison",
                "type": "poison"
            },
            {
                "name": "Psychic",
                "type": "psychic"
            },
            {
                "name": "Rock",
                "type": "rock"
            },
            {
                "name": "Steel",
                "type": "steel"
            },
            {
                "name": "Water",
                "type": "water"
            }
        ]
    },
    "774": {
        "name": "Minior",
        "type": "rock flying",
        "basic": true,
        "forms": [
            {
                "name": "Meteor",
                "type": "rock flying"
            },
            {
                "name": "Blue-Core",
                "type": "rock flying"
            },
            {
                "name": "Green-Core",
                "type": "rock flying"
            },
            {
                "name": "Indigo-Core",
                "type": "rock flying"
            },
            {
                "name": "Orange-Core",
                "type": "rock flying"
            },
            {
                "name": "Red-Core",
                "type": "rock flying"
            },
            {
                "name": "Violet-Core",
                "type": "rock flying"
            },
            {
                "name": "Yellow-Core",
                "type": "rock flying"
            }
        ]
    },
    "775": {
        "name": "Komala",
        "type": "normal",
        "basic": true
    },
    "776": {
        "name": "Turtonator",
        "type": "fire dragon",
        "basic": true
    },
    "777": {
        "name": "Togedemaru",
        "type": "electric steel",
        "basic": true
    },
    "778": {
        "name": "Mimikyu",
        "type": "ghost fairy",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "ghost fairy"
            },
            {
                "name": "Busted",
                "type": "ghost fairy"
            }
        ]
    },
    "779": {
        "name": "Bruxish",
        "type": "water psychic",
        "basic": true
    },
    "780": {
        "name": "Drampa",
        "type": "normal dragon",
        "basic": true
    },
    "781": {
        "name": "Dhelmise",
        "type": "ghost grass",
        "basic": true
    },
    "782": {
        "name": "Jangmo-o",
        "type": "dragon",
        "evolveTo": "783",
        "basic": true
    },
    "783": {
        "name": "Hakamo-o",
        "type": "dragon fighting",
        "evolveTo": "784"
    },
    "784": {
        "name": "Kommo-o",
        "type": "dragon fighting"
    },
    "785": {
        "name": "Tapu Koko",
        "type": "electric fairy",
        "legendary": true,
        "basic": true
    },
    "786": {
        "name": "Tapu Lele",
        "type": "psychic fairy",
        "legendary": true,
        "basic": true
    },
    "787": {
        "name": "Tapu Bulu",
        "type": "grass fairy",
        "legendary": true,
        "basic": true
    },
    "788": {
        "name": "Tapu Fini",
        "type": "water fairy",
        "legendary": true,
        "basic": true
    },
    "789": {
        "name": "Cosmog",
        "type": "psychic",
        "evolveTo": "790",
        "legendary": true,
        "basic": true
    },
    "790": {
        "name": "Cosmoem",
        "type": "psychic",
        "evolveTo": "791 792",
        "legendary": true
    },
    "791": {
        "name": "Solgaleo",
        "type": "psychic steel",
        "legendary": true
    },
    "792": {
        "name": "Lunala",
        "type": "psychic ghost",
        "legendary": true
    },
    "793": {
        "name": "Nihilego",
        "type": "rock poison",
        "basic": true
    },
    "794": {
        "name": "Buzzwole",
        "type": "bug fighting",
        "basic": true
    },
    "795": {
        "name": "Pheromosa",
        "type": "bug fighting",
        "basic": true
    },
    "796": {
        "name": "Xurkitree",
        "type": "electric",
        "basic": true
    },
    "797": {
        "name": "Celesteela",
        "type": "steel flying",
        "basic": true
    },
    "798": {
        "name": "Kartana",
        "type": "grass steel",
        "basic": true
    },
    "799": {
        "name": "Guzzlord",
        "type": "dark dragon",
        "basic": true
    },
    "800": {
        "name": "Necrozma",
        "type": "psychic",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "psychic"
            },
            {
                "name": "Dusk-Mane",
                "type": "psychic steel"
            },
            {
                "name": "Dawn-Wings",
                "type": "psychic ghost"
            },
            {
                "name": "Ultra",
                "type": "psychic dragon"
            }
        ]
    },
    "801": {
        "name": "Magearna",
        "type": "steel fairy",
        "mythical": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "steel fairy"
            },
            {
                "name": "Original",
                "type": "steel fairy"
            }
        ]
    },
    "802": {
        "name": "Marshadow",
        "type": "fighting ghost",
        "mythical": true,
        "basic": true
    },
    "803": {
        "name": "Poipole",
        "type": "poison",
        "evolveTo": "804",
        "basic": true
    },
    "804": {
        "name": "Naganadel",
        "type": "poison dragon"
    },
    "805": {
        "name": "Stakataka",
        "type": "rock steel",
        "basic": true
    },
    "806": {
        "name": "Blacephalon",
        "type": "fire ghost",
        "basic": true
    },
    "807": {
        "name": "Zeraora",
        "type": "electric",
        "mythical": true,
        "basic": true
    },
    "808": {
        "name": "Meltan",
        "type": "steel",
        "evolveTo": "809",
        "mythical": true,
        "basic": true
    },
    "809": {
        "name": "Melmetal",
        "type": "steel",
        "mythical": true,
        "forms": [
            {
                "name": "default",
                "type": "steel"
            },
            {
                "name": "Gigantamax",
                "type": "steel"
            }
        ]
    },
    "810": {
        "name": "Grookey",
        "type": "grass",
        "evolveTo": "811",
        "starter": true,
        "basic": true
    },
    "811": {
        "name": "Thwackey",
        "type": "grass",
        "evolveTo": "812",
        "starter": true
    },
    "812": {
        "name": "Rillaboom",
        "type": "grass",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "grass"
            },
            {
                "name": "Gigantamax",
                "type": "grass"
            }
        ]
    },
    "813": {
        "name": "Scorbunny",
        "type": "fire",
        "evolveTo": "814",
        "starter": true,
        "basic": true
    },
    "814": {
        "name": "Raboot",
        "type": "fire",
        "evolveTo": "815",
        "starter": true
    },
    "815": {
        "name": "Cinderace",
        "type": "fire",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "fire"
            },
            {
                "name": "Gigantamax",
                "type": "fire"
            }
        ]
    },
    "816": {
        "name": "Sobble",
        "type": "water",
        "evolveTo": "817",
        "starter": true,
        "basic": true
    },
    "817": {
        "name": "Drizzile",
        "type": "water",
        "evolveTo": "818",
        "starter": true
    },
    "818": {
        "name": "Inteleon",
        "type": "water",
        "starter": true,
        "forms": [
            {
                "name": "default",
                "type": "water"
            },
            {
                "name": "Gigantamax",
                "type": "water"
            }
        ]
    },
    "819": {
        "name": "Skwovet",
        "type": "normal",
        "evolveTo": "820",
        "basic": true
    },
    "820": {
        "name": "Greedent",
        "type": "normal"
    },
    "821": {
        "name": "Rookidee",
        "type": "flying",
        "evolveTo": "822",
        "basic": true
    },
    "822": {
        "name": "Corvisquire",
        "type": "flying",
        "evolveTo": "823"
    },
    "823": {
        "name": "Corviknight",
        "type": "flying steel",
        "forms": [
            {
                "name": "default",
                "type": "flying steel"
            },
            {
                "name": "Gigantamax",
                "type": "flying steel"
            }
        ]
    },
    "824": {
        "name": "Blipbug",
        "type": "bug",
        "evolveTo": "825",
        "basic": true
    },
    "825": {
        "name": "Dottler",
        "type": "bug psychic",
        "evolveTo": "826"
    },
    "826": {
        "name": "Orbeetle",
        "type": "bug psychic",
        "forms": [
            {
                "name": "default",
                "type": "bug psychic"
            },
            {
                "name": "Gigantamax",
                "type": "bug psychic"
            }
        ]
    },
    "827": {
        "name": "Nickit",
        "type": "dark",
        "evolveTo": "828",
        "basic": true
    },
    "828": {
        "name": "Thievul",
        "type": "dark"
    },
    "829": {
        "name": "Gossifleur",
        "type": "grass",
        "evolveTo": "830",
        "basic": true
    },
    "830": {
        "name": "Eldegoss",
        "type": "grass"
    },
    "831": {
        "name": "Wooloo",
        "type": "normal",
        "evolveTo": "832",
        "basic": true
    },
    "832": {
        "name": "Dubwool",
        "type": "normal"
    },
    "833": {
        "name": "Chewtle",
        "type": "water",
        "evolveTo": "834",
        "basic": true
    },
    "834": {
        "name": "Drednaw",
        "type": "water rock",
        "forms": [
            {
                "name": "default",
                "type": "water rock"
            },
            {
                "name": "Gigantamax",
                "type": "water rock"
            }
        ]
    },
    "835": {
        "name": "Yamper",
        "type": "electric",
        "evolveTo": "836",
        "basic": true
    },
    "836": {
        "name": "Boltund",
        "type": "electric"
    },
    "837": {
        "name": "Rolycoly",
        "type": "rock",
        "evolveTo": "838",
        "basic": true
    },
    "838": {
        "name": "Carkol",
        "type": "rock fire",
        "evolveTo": "839"
    },
    "839": {
        "name": "Coalossal",
        "type": "rock fire",
        "forms": [
            {
                "name": "default",
                "type": "rock fire"
            },
            {
                "name": "Gigantamax",
                "type": "rock fire"
            }
        ]
    },
    "840": {
        "name": "Applin",
        "type": "grass dragon",
        "evolveTo": "841 842 1011",
        "basic": true
    },
    "841": {
        "name": "Flapple",
        "type": "grass dragon",
        "forms": [
            {
                "name": "default",
                "type": "grass dragon"
            },
            {
                "name": "Gigantamax",
                "type": "grass dragon"
            }
        ]
    },
    "842": {
        "name": "Appletun",
        "type": "grass dragon",
        "forms": [
            {
                "name": "default",
                "type": "grass dragon"
            },
            {
                "name": "Gigantamax",
                "type": "grass dragon"
            }
        ]
    },
    "843": {
        "name": "Silicobra",
        "type": "ground",
        "evolveTo": "844",
        "basic": true
    },
    "844": {
        "name": "Sandaconda",
        "type": "ground",
        "forms": [
            {
                "name": "default",
                "type": "ground"
            },
            {
                "name": "Gigantamax",
                "type": "ground"
            }
        ]
    },
    "845": {
        "name": "Cramorant",
        "type": "flying water",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "flying water"
            },
            {
                "name": "Gulping",
                "type": "flying water"
            },
            {
                "name": "Gorging",
                "type": "flying water"
            }
        ]
    },
    "846": {
        "name": "Arrokuda",
        "type": "water",
        "evolveTo": "847",
        "basic": true
    },
    "847": {
        "name": "Barraskewda",
        "type": "water"
    },
    "848": {
        "name": "Toxel",
        "type": "electric poison",
        "evolveTo": "849 849-Low-Key",
        "basic": true
    },
    "849": {
        "name": "Toxtricity",
        "type": "electric poison",
        "forms": [
            {
                "name": "Amped",
                "type": "electric poison"
            },
            {
                "name": "Low-Key",
                "type": "electric poison"
            },
            {
                "name": "Gigantamax",
                "type": "electric poison"
            }
        ]
    },
    "850": {
        "name": "Sizzlipede",
        "type": "fire bug",
        "evolveTo": "851",
        "basic": true
    },
    "851": {
        "name": "Centiskorch",
        "type": "fire bug",
        "forms": [
            {
                "name": "default",
                "type": "fire bug"
            },
            {
                "name": "Gigantamax",
                "type": "fire bug"
            }
        ]
    },
    "852": {
        "name": "Clobbopus",
        "type": "fighting",
        "evolveTo": "853",
        "basic": true
    },
    "853": {
        "name": "Grapploct",
        "type": "fighting"
    },
    "854": {
        "name": "Sinistea",
        "type": "ghost",
        "evolveTo": "855",
        "basic": true
    },
    "855": {
        "name": "Polteageist",
        "type": "ghost"
    },
    "856": {
        "name": "Hatenna",
        "type": "psychic",
        "evolveTo": "857",
        "basic": true
    },
    "857": {
        "name": "Hattrem",
        "type": "psychic",
        "evolveTo": "858"
    },
    "858": {
        "name": "Hatterene",
        "type": "psychic fairy",
        "forms": [
            {
                "name": "default",
                "type": "psychic fairy"
            },
            {
                "name": "Gigantamax",
                "type": "psychic fairy"
            }
        ]
    },
    "859": {
        "name": "Impidimp",
        "type": "dark fairy",
        "evolveTo": "860",
        "basic": true
    },
    "860": {
        "name": "Morgrem",
        "type": "dark fairy",
        "evolveTo": "861"
    },
    "861": {
        "name": "Grimmsnarl",
        "type": "dark fairy",
        "forms": [
            {
                "name": "default",
                "type": "dark fairy"
            },
            {
                "name": "Gigantamax",
                "type": "dark fairy"
            }
        ]
    },
    "862": {
        "name": "Obstagoon",
        "type": "dark normal"
    },
    "863": {
        "name": "Perrserker",
        "type": "steel"
    },
    "864": {
        "name": "Cursola",
        "type": "ghost"
    },
    "865": {
        "name": "Sirfetch'd",
        "type": "fighting"
    },
    "866": {
        "name": "Mr. Rime",
        "type": "ice psychic"
    },
    "867": {
        "name": "Runerigus",
        "type": "ground ghost"
    },
    "868": {
        "name": "Milcery",
        "type": "fairy",
        "evolveTo": "869",
        "basic": true
    },
    "869": {
        "name": "Alcremie",
        "type": "fairy",
        "forms": [
            {
                "name": "default",
                "type": "fairy"
            },
            {
                "name": "Gigantamax",
                "type": "fairy"
            }
        ],
        "cream": [
            "Vanilla-Cream",
            "Ruby-Cream",
            "Matcha-Cream",
            "Mint-Cream",
            "Lemon-Cream",
            "Salted-Cream",
            "Ruby-Swirl",
            "Caramel-Swirl",
            "Rainbow-Swirl"
        ],
        "sweet": [
            "Berry",
            "Clover",
            "Flower",
            "Love",
            "Ribbon",
            "Star",
            "Strawberry"
        ]
    },
    "870": {
        "name": "Falinks",
        "type": "fighting",
        "basic": true
    },
    "871": {
        "name": "Pincurchin",
        "type": "electric",
        "basic": true
    },
    "872": {
        "name": "Snom",
        "type": "ice bug",
        "evolveTo": "873",
        "basic": true
    },
    "873": {
        "name": "Frosmoth",
        "type": "ice bug"
    },
    "874": {
        "name": "Stonjourner",
        "type": "rock",
        "basic": true
    },
    "875": {
        "name": "Eiscue",
        "type": "ice",
        "basic": true,
        "forms": [
            {
                "name": "Ice",
                "type": "ice"
            },
            {
                "name": "Noice",
                "type": "ice"
            }
        ]
    },
    "876": {
        "name": "Indeedee",
        "type": "psychic normal",
        "basic": true,
        "forms": [
            {
                "name": "M",
                "type": "psychic normal"
            },
            {
                "name": "F",
                "type": "psychic normal"
            }
        ]
    },
    "877": {
        "name": "Morpeko",
        "type": "electric dark",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "electric dark"
            },
            {
                "name": "Hangry",
                "type": "electric dark"
            }
        ]
    },
    "878": {
        "name": "Cufant",
        "type": "steel",
        "evolveTo": "879",
        "basic": true
    },
    "879": {
        "name": "Copperajah",
        "type": "steel",
        "forms": [
            {
                "name": "default",
                "type": "steel"
            },
            {
                "name": "Gigantamax",
                "type": "steel"
            }
        ]
    },
    "880": {
        "name": "Dracozolt",
        "type": "electric dragon",
        "basic": true
    },
    "881": {
        "name": "Arctozolt",
        "type": "electric ice",
        "basic": true
    },
    "882": {
        "name": "Dracovish",
        "type": "water dragon",
        "basic": true
    },
    "883": {
        "name": "Arctovish",
        "type": "water ice",
        "basic": true
    },
    "884": {
        "name": "Duraludon",
        "type": "steel dragon",
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "steel dragon"
            },
            {
                "name": "Gigantamax",
                "type": "steel dragon"
            }
        ]
    },
    "885": {
        "name": "Dreepy",
        "type": "dragon ghost",
        "evolveTo": "886",
        "basic": true
    },
    "886": {
        "name": "Drakloak",
        "type": "dragon ghost",
        "evolveTo": "887"
    },
    "887": {
        "name": "Dragapult",
        "type": "dragon ghost"
    },
    "888": {
        "name": "Zacian",
        "type": "fairy steel",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "Crowned",
                "type": "fairy steel"
            },
            {
                "name": "Hero",
                "type": "fairy"
            }
        ]
    },
    "889": {
        "name": "Zamazenta",
        "type": "fighting steel",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "Crowned",
                "type": "fighting steel"
            },
            {
                "name": "Hero",
                "type": "fighting"
            }
        ]
    },
    "890": {
        "name": "Eternatus",
        "type": "poison dragon",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "poison dragon"
            },
            {
                "name": "Eternamax",
                "type": "poison dragon"
            }
        ]
    },
    "891": {
        "name": "Kubfu",
        "type": "fighting",
        "evolveTo": "892-Single-Strike 892-Rapid-Strike",
        "legendary": true,
        "basic": true
    },
    "892": {
        "name": "Urshifu",
        "type": "fighting dark",
        "legendary": true,
        "forms": [
            {
                "name": "Single-Strike",
                "type": "fighting dark"
            },
            {
                "name": "Rapid-Strike",
                "type": "fighting water"
            },
            {
                "name": "Single-Strike-Gigantamax",
                "type": "fighting dark"
            },
            {
                "name": "Rapid-Strike-Gigantamax",
                "type": "fighting water"
            }
        ]
    },
    "893": {
        "name": "Zarude",
        "type": "dark grass",
        "mythical": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "dark grass"
            },
            {
                "name": "Dada",
                "type": "dark grass"
            }
        ]
    },
    "894": {
        "name": "Regieleki",
        "type": "electric",
        "legendary": true,
        "basic": true
    },
    "895": {
        "name": "Regidrago",
        "type": "dragon",
        "legendary": true,
        "basic": true
    },
    "896": {
        "name": "Glastrier",
        "type": "ice",
        "legendary": true,
        "basic": true
    },
    "897": {
        "name": "Spectrier",
        "type": "ghost",
        "legendary": true,
        "basic": true
    },
    "898": {
        "name": "Calyrex",
        "type": "psychic grass",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "psychic grass"
            },
            {
                "name": "Ice-Rider",
                "type": "psychic ice"
            },
            {
                "name": "Shadow-Rider",
                "type": "psychic ghost"
            }
        ]
    },
    "899": {
        "name": "Wyrdeer",
        "type": "normal psychic"
    },
    "900": {
        "name": "Kleavor",
        "type": "bug rock"
    },
    "901": {
        "name": "Ursaluna",
        "type": "ground normal"
    },
    "902": {
        "name": "Basculegion",
        "type": "water ghost",
        "forms": [
            {
                "name": "M",
                "type": "water ghost"
            },
            {
                "name": "F",
                "type": "water ghost"
            }
        ]
    },
    "903": {
        "name": "Sneasler",
        "type": "fighting poison"
    },
    "904": {
        "name": "Overqwil",
        "type": "dark poison"
    },
    "905": {
        "name": "Enamorus",
        "type": "fairy flying",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "default",
                "type": "fairy flying"
            },
            {
                "name": "Therian",
                "type": "fairy flying"
            }
        ]
    },
    "906": {
        "name": "Sprigatito",
        "type": "grass",
        "evolveTo": "907",
        "starter": true,
        "basic": true
    },
    "907": {
        "name": "Floragato",
        "type": "grass",
        "evolveTo": "908",
        "starter": true
    },
    "908": {
        "name": "Meowscarada",
        "type": "grass dark",
        "starter": true
    },
    "909": {
        "name": "Fuecoco",
        "type": "fire",
        "evolveTo": "910",
        "starter": true,
        "basic": true
    },
    "910": {
        "name": "Crocalor",
        "type": "fire",
        "evolveTo": "911",
        "starter": true
    },
    "911": {
        "name": "Skeledirge",
        "type": "fire ghost",
        "starter": true
    },
    "912": {
        "name": "Quaxly",
        "type": "water",
        "evolveTo": "913",
        "starter": true,
        "basic": true
    },
    "913": {
        "name": "Quaxwell",
        "type": "water",
        "evolveTo": "914",
        "starter": true
    },
    "914": {
        "name": "Quaquaval",
        "type": "water fighting",
        "starter": true
    },
    "915": {
        "name": "Lechonk",
        "type": "normal",
        "evolveTo": "916-M 916-F",
        "basic": true
    },
    "916": {
        "name": "Oinkologne",
        "type": "normal",
        "forms": [
            {
                "name": "M",
                "type": "normal"
            },
            {
                "name": "F",
                "type": "normal"
            }
        ]
    },
    "917": {
        "name": "Tarountula",
        "type": "bug",
        "evolveTo": "918",
        "basic": true
    },
    "918": {
        "name": "Spidops",
        "type": "bug"
    },
    "919": {
        "name": "Nymble",
        "type": "bug",
        "evolveTo": "920",
        "basic": true
    },
    "920": {
        "name": "Lokix",
        "type": "bug dark"
    },
    "921": {
        "name": "Pawmi",
        "type": "electric",
        "evolveTo": "922",
        "basic": true
    },
    "922": {
        "name": "Pawmo",
        "type": "electric fighting",
        "evolveTo": "923"
    },
    "923": {
        "name": "Pawmot",
        "type": "electric fighting"
    },
    "924": {
        "name": "Tandemaus",
        "type": "normal",
        "evolveTo": "925",
        "basic": true
    },
    "925": {
        "name": "Maushold",
        "type": "normal",
        "forms": [
            {
                "name": "Family-Of-Four",
                "type": "normal"
            },
            {
                "name": "Family-Of-Three",
                "type": "normal"
            }
        ]
    },
    "926": {
        "name": "Fidough",
        "type": "fairy",
        "evolveTo": "927",
        "basic": true
    },
    "927": {
        "name": "Dachsbun",
        "type": "fairy"
    },
    "928": {
        "name": "Smoliv",
        "type": "grass normal",
        "evolveTo": "929",
        "basic": true
    },
    "929": {
        "name": "Dolliv",
        "type": "grass normal",
        "evolveTo": "930"
    },
    "930": {
        "name": "Arboliva",
        "type": "grass normal"
    },
    "931": {
        "name": "Squawkabilly",
        "type": "normal flying",
        "basic": true,
        "forms": [
            {
                "name": "Green-Plumage",
                "type": "normal flying"
            },
            {
                "name": "Blue-Plumage",
                "type": "normal flying"
            },
            {
                "name": "Yellow-Plumage",
                "type": "normal flying"
            },
            {
                "name": "White-Plumage",
                "type": "normal flying"
            }
        ]
    },
    "932": {
        "name": "Nacli",
        "type": "rock",
        "evolveTo": "933",
        "basic": true
    },
    "933": {
        "name": "Naclstack",
        "type": "rock",
        "evolveTo": "934"
    },
    "934": {
        "name": "Garganacl",
        "type": "rock"
    },
    "935": {
        "name": "Charcadet",
        "type": "fire",
        "evolveTo": "936 937",
        "basic": true
    },
    "936": {
        "name": "Armarouge",
        "type": "fire psychic"
    },
    "937": {
        "name": "Ceruledge",
        "type": "fire ghost"
    },
    "938": {
        "name": "Tadbulb",
        "type": "electric",
        "evolveTo": "939",
        "basic": true
    },
    "939": {
        "name": "Bellibolt",
        "type": "electric"
    },
    "940": {
        "name": "Wattrel",
        "type": "electric flying",
        "evolveTo": "941",
        "basic": true
    },
    "941": {
        "name": "Kilowattrel",
        "type": "electric flying"
    },
    "942": {
        "name": "Maschiff",
        "type": "dark",
        "evolveTo": "943",
        "basic": true
    },
    "943": {
        "name": "Mabosstiff",
        "type": "dark"
    },
    "944": {
        "name": "Shroodle",
        "type": "poison normal",
        "evolveTo": "945",
        "basic": true
    },
    "945": {
        "name": "Grafaiai",
        "type": "poison normal"
    },
    "946": {
        "name": "Bramblin",
        "type": "grass ghost",
        "evolveTo": "947",
        "basic": true
    },
    "947": {
        "name": "Brambleghast",
        "type": "grass ghost"
    },
    "948": {
        "name": "Toedscool",
        "type": "ground grass",
        "evolveTo": "949",
        "basic": true
    },
    "949": {
        "name": "Toedscruel",
        "type": "ground grass"
    },
    "950": {
        "name": "Klawf",
        "type": "rock",
        "basic": true
    },
    "951": {
        "name": "Capsakid",
        "type": "grass",
        "evolveTo": "952",
        "basic": true
    },
    "952": {
        "name": "Scovillain",
        "type": "grass fire"
    },
    "953": {
        "name": "Rellor",
        "type": "bug",
        "evolveTo": "954",
        "basic": true
    },
    "954": {
        "name": "Rabsca",
        "type": "bug psychic"
    },
    "955": {
        "name": "Flittle",
        "type": "psychic",
        "evolveTo": "956",
        "basic": true
    },
    "956": {
        "name": "Espathra",
        "type": "psychic"
    },
    "957": {
        "name": "Tinkatink",
        "type": "fairy steel",
        "evolveTo": "958",
        "basic": true
    },
    "958": {
        "name": "Tinkatuff",
        "type": "fairy steel",
        "evolveTo": "959"
    },
    "959": {
        "name": "Tinkaton",
        "type": "fairy steel"
    },
    "960": {
        "name": "Wiglett",
        "type": "water",
        "evolveTo": "961",
        "basic": true
    },
    "961": {
        "name": "Wugtrio",
        "type": "water"
    },
    "962": {
        "name": "Bombirdier",
        "type": "flying dark",
        "basic": true
    },
    "963": {
        "name": "Finizen",
        "type": "water",
        "evolveTo": "964",
        "basic": true
    },
    "964": {
        "name": "Palafin",
        "type": "water",
        "forms": [
            {
                "name": "Zero",
                "type": "water"
            },
            {
                "name": "Hero",
                "type": "water"
            }
        ]
    },
    "965": {
        "name": "Varoom",
        "type": "steel poison",
        "evolveTo": "966",
        "basic": true
    },
    "966": {
        "name": "Revavroom",
        "type": "steel poison"
    },
    "967": {
        "name": "Cyclizar",
        "type": "dragon normal",
        "basic": true
    },
    "968": {
        "name": "Orthworm",
        "type": "steel",
        "basic": true
    },
    "969": {
        "name": "Glimmet",
        "type": "rock poison",
        "evolveTo": "970",
        "basic": true
    },
    "970": {
        "name": "Glimmora",
        "type": "rock poison"
    },
    "971": {
        "name": "Greavard",
        "type": "ghost",
        "evolveTo": "972",
        "basic": true
    },
    "972": {
        "name": "Houndstone",
        "type": "ghost"
    },
    "973": {
        "name": "Flamigo",
        "type": "flying fighting",
        "basic": true
    },
    "974": {
        "name": "Cetoddle",
        "type": "ice",
        "evolveTo": "975",
        "basic": true
    },
    "975": {
        "name": "Cetitan",
        "type": "ice"
    },
    "976": {
        "name": "Veluza",
        "type": "water psychic",
        "basic": true
    },
    "977": {
        "name": "Dondozo",
        "type": "water",
        "basic": true
    },
    "978": {
        "name": "Tatsugiri",
        "type": "dragon water",
        "basic": true,
        "forms": [
            {
                "name": "Curly",
                "type": "dragon water"
            },
            {
                "name": "Droopy",
                "type": "dragon water"
            },
            {
                "name": "Stretchy",
                "type": "dragon water"
            }
        ]
    },
    "979": {
        "name": "Annihilape",
        "type": "fighting ghost"
    },
    "980": {
        "name": "Clodsire",
        "type": "poison ground"
    },
    "981": {
        "name": "Farigiraf",
        "type": "normal psychic"
    },
    "982": {
        "name": "Dudunsparce",
        "type": "normal",
        "forms": [
            {
                "name": "Two-Segment",
                "type": "normal"
            },
            {
                "name": "Three-Segment",
                "type": "normal"
            }
        ]
    },
    "983": {
        "name": "Kingambit",
        "type": "dark steel"
    },
    "984": {
        "name": "Great Tusk",
        "type": "ground fighting",
        "basic": true
    },
    "985": {
        "name": "Scream Tail",
        "type": "fairy psychic",
        "basic": true
    },
    "986": {
        "name": "Brute Bonnet",
        "type": "grass dark",
        "basic": true
    },
    "987": {
        "name": "Flutter Mane",
        "type": "ghost fairy",
        "basic": true
    },
    "988": {
        "name": "Slither Wing",
        "type": "bug fighting",
        "basic": true
    },
    "989": {
        "name": "Sandy Shocks",
        "type": "electric ground",
        "basic": true
    },
    "990": {
        "name": "Iron Treads",
        "type": "ground steel",
        "basic": true
    },
    "991": {
        "name": "Iron Bundle",
        "type": "ice water",
        "basic": true
    },
    "992": {
        "name": "Iron hands",
        "type": "fighting electric",
        "basic": true
    },
    "993": {
        "name": "Iron Jugulis",
        "type": "dark flying",
        "basic": true
    },
    "994": {
        "name": "Iron Moth",
        "type": "fire poison",
        "basic": true
    },
    "995": {
        "name": "Iron Thorns",
        "type": "rock electric",
        "basic": true
    },
    "996": {
        "name": "Frigibax",
        "type": "dragon ice",
        "evolveTo": "997",
        "basic": true
    },
    "997": {
        "name": "Arctibax",
        "type": "dragon ice",
        "evolveTo": "998"
    },
    "998": {
        "name": "Baxcalibur",
        "type": "dragon ice"
    },
    "999": {
        "name": "Gimmighoul",
        "type": "ghost",
        "evolveTo": "1000",
        "basic": true,
        "forms": [
            {
                "name": "Chest",
                "type": "ghost",
                "evolveTo": "1000"
            },
            {
                "name": "Roaming",
                "type": "ghost",
                "evolveTo": "1000"
            }
        ]
    },
    "1000": {
        "name": "Gholdengo",
        "type": "steel ghost"
    },
    "1001": {
        "name": "Wo-Chien",
        "type": "dark grass",
        "legendary": true,
        "basic": true
    },
    "1002": {
        "name": "Chien-Pao",
        "type": "dark ice",
        "legendary": true,
        "basic": true
    },
    "1003": {
        "name": "Ting-Lu",
        "type": "dark ground",
        "legendary": true,
        "basic": true
    },
    "1004": {
        "name": "Chi-Yu",
        "type": "dark fire",
        "legendary": true,
        "basic": true
    },
    "1005": {
        "name": "Roaring Moon",
        "type": "dragon dark",
        "basic": true
    },
    "1006": {
        "name": "Iron Valiant",
        "type": "fairy fighting",
        "basic": true
    },
    "1007": {
        "name": "Koraidon",
        "type": "fighting dragon",
        "legendary": true,
        "basic": true
    },
    "1008": {
        "name": "Miraidon",
        "type": "electric dragon",
        "legendary": true,
        "basic": true
    },
    "1009": {
        "name": "Walking Wake",
        "type": "water dragon",
        "basic": true
    },
    "1010": {
        "name": "Iron Leaves",
        "type": "grass psychic",
        "basic": true
    },
    "1011": {
        "name": "Dipplin",
        "type": "grass dragon"
    },
    "1012": {
        "name": "Poltchageist",
        "type": "grass ghost",
        "evolveTo": "1013",
        "basic": true
    },
    "1013": {
        "name": "Sinistcha",
        "type": "grass ghost"
    },
    "1014": {
        "name": "Okidogi",
        "type": "poison fighting",
        "legendary": true,
        "basic": true
    },
    "1015": {
        "name": "Munkidori",
        "type": "poison psychic",
        "legendary": true,
        "basic": true
    },
    "1016": {
        "name": "Fezandipiti",
        "type": "poison fairy",
        "legendary": true,
        "basic": true
    },
    "1017": {
        "name": "Ogerpon",
        "type": "grass",
        "legendary": true,
        "basic": true,
        "forms": [
            {
                "name": "Teal Mask",
                "type": "grass"
            },
            {
                "name": "Hearthflame Mask",
                "type": "grass fire"
            },
            {
                "name": "Wellspring Mask",
                "type": "grass water"
            },
            {
                "name": "Cornerstone Mask",
                "type": "grass rock"
            }
        ]
    }
}