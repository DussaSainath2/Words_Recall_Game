import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  wordsPool = [ "apple", "banana", "grape", "orange", "peach", "pear", "plum", "kiwi", "strawberry", "blueberry",
    "watermelon", "pineapple", "lemon", "lime", "mango", "apricot", "cantaloupe", "cherry", "fig", "date",
    "tomato", "cucumber", "lettuce", "carrot", "spinach", "broccoli", "cauliflower", "celery", "pumpkin",
    "potato", "onion", "garlic", "ginger", "chili", "pepper", "cabbage", "eggplant", "zucchini", "asparagus",
    "artichoke", "radish", "beet", "corn", "peas", "beans", "chickpeas", "lentils", "soybean", "alfalfa",
    "wheat", "barley", "oats", "rye", "cornmeal", "flour", "rice", "quinoa", "buckwheat", "amaranth",
    "couscous", "spaghetti", "noodles", "macaroni", "penne", "fettuccine", "ravioli", "tortellini", "lasagna",
    "burrito", "taco", "quesadilla", "nachos", "enchilada", "guacamole", "salsa", "curry", "stew", "soup",
    "salad", "sandwich", "burger", "hotdog", "pizza", "pasta", "cheese", "butter", "mayo", "mustard", "ketchup",
    "vinegar", "soy", "sauces", "syrup", "honey", "jam", "jelly", "peanut", "almond", "cashew", "walnut","bmw",
    "hazelnut", "pecan", "macadamia", "pistachio", "pine", "sunflower", "pumpkin", "chia", "flax", "sesame",
    "coconut", "cacao", "chocolate", "caramel", "vanilla", "mint", "cinnamon", "clove", "nutmeg", "paprika",
    "turmeric", "ginger", "saffron", "oregano", "basil", "thyme", "rosemary", "sage", "parsley", "cilantro",
    "chives", "tarragon", "bay", "dill", "mint", "curry", "chili", "cumin", "fennel", "anise", "cardamom",
    "mango", "lychee", "pomegranate", "guava", "fig", "apricot", "melon", "nectarines", "kiwi", "starfruit",
    "persimmon", "elderberry", "blackberry", "raspberry", "cranberry", "plum", "soursop", "tamarind", "longan",
    "jackfruit", "durian", "rambutan", "chayote", "breadfruit", "cucumber", "tomato", "avocado", "greenbeans",
    "broccoli", "spinach", "leek", "pumpkin", "squash", "eggplant", "artichoke", "beets", "radish", "cabbage",
    "lettuce", "onion", "garlic", "ginger", "zucchini", "asparagus", "carrot", "peas", "corn", "potatoes", "yams",
    "yam", "sweet", "potatoes", "okra", "celery", "chili", "chive", "cress", "coriander", "parsley", "mint","acorn", "avocado", "barbecue", "bison", "blizzard", "bluejay", "breezy", "buffalo", "cactus", "camel",
"cardinal", "caribou", "carnation", "celestial", "cheetah", "chinchilla", "clover", "cobalt", "coral", "crimson",
"cypress", "dandelion", "dawn", "dingo", "dogwood", "dormouse", "dusty", "eagle", "earth", "elephant",
"emperor", "endurance", "falcon", "fern", "firefly", "flamingo", "frost", "gale", "galaxy", "gecko",
"giraffe", "glacier", "goose", "granite", "harmony", "hawk", "hedgehog", "horizon", "hummingbird", "iceberg",
"incognito", "iris", "ivory", "jaguar", "jasmine", "jellyfish", "jungle", "koala", "kraken", "lamb",
"lantern", "lark", "lava", "leopard", "lilac", "lizard", "magma", "mango", "meadow", "meteor",
"mimosa", "monarch", "moonlight", "moss", "nightshade", "oasis", "oak", "obsidian", "orca", "palm",
"paradise", "parrot", "peacock", "pinnacle", "plumeria", "prairie", "quail", "quartz", "raven", "reeds",
"ripple", "rose", "seahorse", "sierra", "sizzle", "snowflake", "solstice", "sparrow", "sunflower", "swallow",
"swift", "swordfish", "tangerine", "thunder", "tide", "toadstool", "treasure", "turquoise", "vapor", "vibrant",
"violet", "volcano", "walnut", "warthog", "whale", "whisker", "windmill", "wisteria", "woodpecker", "yacht",
"yarrow", "yellowtail", "zebra", "zephyr", "zenith", "zinnia", "zigzag", "zodiac", "zombie", "zucchini",
"abacus", "albatross", "alpine", "amber", "amethyst", "anemone", "azure", "banjo", "barnacle", "beacon",
"beetle", "breeze", "bronze", "cabbage", "cactus", "canyon", "cassowary", "cobalt", "coyote", "dawn",
"delight", "dove", "driftwood", "dusk", "elephant", "fallow", "fluff", "flurry", "garnet", "goose",
"gossamer", "grouse", "haze", "hawthorn", "hummingbird", "horizon", "iris", "jet", "juniper", "larkspur",
"lavender", "lemonade", "lilypad", "lionfish", "lotus", "luna", "magpie", "mist", "mocha", "nightfall",
"octopus", "opal", "orchid", "owl", "pinecone", "plumeria", "quail", "quicksilver", "reef", "ripple",
"sandstone", "scarlet", "seabreeze", "shimmer", "snowdrop", "sparrow", "starfish", "summit", "thistle", "tide",
"tulip", "whale", "whisper", "woodland", "zinnia", "zephyr", "zodiac", "turkey", "turtle", "toad",
"umbrella", "viper", "violet", "vulture", "whale", "willow", "wolf", "wolverine", "xenon", "yeti","albatross", "alligator", "aloe", "amaryllis", "amber", "amethyst", "anaconda", "anemone", "apricot", "aquarium",
"arachnid", "armadillo", "asteroid", "autumn", "azalea", "baboon", "bamboo", "barnacle", "beacon", "beetle",
"bellflower", "bison", "blossom", "bluebell", "breeze", "bristlecone", "butterfly", "cactus", "canary", "canyon",
"caribou", "caterpillar", "cedar", "chameleon", "cheetah", "cherry", "cheese", "chicken", "chili", "chinchilla",
"clover", "cobweb", "coyote", "crabapple", "crane", "crimson", "cucumber", "cyclone", "dahlia", "daisy",
"dalmatian", "dandelion", "dingo", "dove", "dragonfly", "dust", "ebony", "echidna", "emerald", "eucalyptus",
"falcon", "feather", "fern", "firefly", "flamingo", "frost", "gecko", "giraffe", "glacier", "goose",
"grackle", "gull", "hummingbird", "heron", "honeysuckle", "horizon", "iris", "jaguar", "jasmine", "jellyfish",
"jungle", "kiwi", "ladybug", "lava", "leopard", "lichen", "lilac", "lizard", "lobster", "lucid",
"mango", "maple", "marigold", "meadow", "meteor", "mimosa", "moose", "moss", "nightshade", "ocelot",
"olivine", "orangutan", "orchid", "otter", "palmetto", "panther", "parrot", "peacock", "peony", "pineapple",
"plumeria", "poppy", "quail", "quartz", "rainbow", "raven", "reindeer", "ripple", "robin", "rose",
"seahorse", "sequoia", "sherbet", "sierra", "silver", "snowdrop", "sparrow", "starling", "sunflower", "swallow",
"thistle", "toucan", "treefrog", "tulip", "turquoise", "violet", "walnut", "wattle", "willow", "wolverine",
"zebra", "zenith", "zinnia", "acorn", "admiral", "alpine", "amaranth", "anchovy", "angelfish", "antelope",
"apple", "apricot", "avocado", "azalea", "banana", "barnacle", "beetle", "bison", "blackberry", "blossom",
"bluejay", "bluebird", "butterfly", "cactus", "carrot", "caterpillar", "cheetah", "cherry", "clover", "coconut",
"cornflower", "crimson", "cucumber", "dandelion", "dragonfly", "elephant", "emerald", "falcon", "firefly",
"fishhook", "flamingo", "fuchsia", "gardenia", "geranium", "gooseberry", "grapefruit", "hare", "hazelnut", "heron",
"honeysuckle", "hummingbird", "iris", "jaguar", "jasmine", "jellyfish", "kingfisher", "ladybug", "lilac", "lobster",
"magpie", "mango", "meadow", "moose", "mushroom", "nightshade", "ocelot", "olive", "otter", "peach",
"peacock", "pelican", "pinecone", "plumeria", "plum", "poppy", "pronghorn", "rainbow", "raspberry", "raven",
"reindeer", "robin", "saffron", "seahorse", "senna", "sequoia", "sunflower", "tangerine", "thistle", "tulip",
"violet", "walnut", "watermelon", "willow", "wolf", "wolverine", "zinnia", "zodiac", "acorn", "adventure",
"amber", "angel", "angelfish", "apple", "apricot", "aquamarine", "arctic", "avalanche", "azure", "basil",
"bayberry", "beacon", "beet", "beetroot", "birdsong", "blueberry", "breeze", "brisk", "butterfly", "cactus",
"camel", "cardinal", "carnation", "carrot", "cattle", "cedar", "chili", "clover", "colt", "coral",
"coyote", "crimson", "cucumber", "daisy", "dandelion", "dawn", "dune", "dust", "edible", "emerald",
"falcon", "fawn", "fern", "firefly", "flame", "flax", "flaxseed", "flute", "gale", "garnet",
"glacier", "goose", "grapevine", "grove", "hare", "hazel", "heather", "horizon", "imagine", "indigo",
"iris", "ivory", "jellyfish", "jungle", "kiwi", "ladybird", "lilac", "lime", "magnolia", "meadow",
"moss", "mountain", "mushroom", "nymph", "oasis", "octopus", "orchid", "ostrich", "palm", "parakeet",
"parrot", "pine", "plum", "poppy", "puddle", "quail", "quicksilver", "rain", "rainforest", "redwood",
"river", "rock", "sage", "seahorse", "sequoia", "shelled", "snowdrop", "soul", "sunflower", "swallow",
"tangerine", "thistle", "thunder", "tomato", "tulip", "violet", "water", "watermelon", "wolf", "zebra","abacus", "abduction", "abnormal", "absolutely", "absent", "abstract", "abundance", "acceleration", "accessibility", "accident",
"acclimate", "acoustic", "acquaintance", "adapting", "adventure", "aesthetic", "agriculture", "allegory", "ambassador", "analogy",
"analyze", "anxiety", "apocalyptic", "arbitrary", "artificial", "astronomy", "autonomy", "avenue", "bacteria", "balance",
"barbecue", "beacon", "benevolent", "berth", "blessing", "borderline", "breathe", "calculation", "calmness", "captive",
"cautious", "celebrate", "chaos", "chamber", "charm", "chemical", "circular", "civility", "clarify", "classification",
"climatic", "coefficient", "collision", "colony", "commemorate", "communication", "concentration", "connection", "confidence", "consciousness",
"continent", "courage", "create", "cultivate", "dawn", "delight", "depression", "diameter", "diminish", "divergent",
"dominion", "efficiency", "embark", "enlighten", "entangle", "equality", "evolution", "examine", "exodus", "expand",
"exploration", "fable", "fabricate", "fascinate", "fasten", "fate", "feedback", "finite", "formula", "freedom",
"gathering", "genuine", "grateful", "grasp", "gravity", "habitat", "harmony", "hesitate", "hierarchy", "honesty",
"illustrate", "impact", "imperial", "influence", "innovation", "inspire", "interact", "integrity", "interval", "investigate",
"judgment", "joyous", "jungle", "kaleidoscope", "laughter", "legacy", "liberate", "literature", "luminous", "magnify",
"magnificent", "mandate", "manner", "measure", "method", "migration", "molecule", "mystery", "narrate", "navigate",
"noble", "oasis", "obvious", "optimism", "organize", "origin", "parallel", "patience", "perception", "pioneer",
"precaution", "precise", "pristine", "progress", "quality", "radiance", "recovery", "reflection", "reliable", "resemble",
"resilience", "revolution", "sacrifice", "sample", "scaffold", "scatter", "sequence", "serenity", "simplify", "sociology",
"solar", "species", "spectrum", "spheroid", "stability", "station", "strategic", "sustain", "systematic", "tangible",
"television", "tension", "terminate", "theory", "timeless", "tolerate", "tranquil", "universal", "utopia", "vacuum",
"validate", "vapor", "vibration", "vision", "volcano", "vulnerable", "wander", "western", "wilderness", "workable",
"yarn", "yearning", "yellow", "zealous", "zone", "abandon", "abundance", "accumulate", "adoption", "adventure",
"affirmation", "allegiance", "alliance", "anxiety", "appearance", "approval", "architecture", "assistance", "associate", "atmosphere",
"attraction", "beautiful", "benefit", "billion", "bless", "boundary", "brilliance", "calibration", "census", "ceremony",
"clarity", "clever", "coastal", "collect", "compact", "companion", "conception", "contribute", "confidence", "conscious",
"contingency", "contradiction", "contribution", "creativity", "critique", "curiosity", "dedication", "definition", "dynamics", "elastic",
"enlighten", "envision", "eventful", "excellence", "exhibit", "explore", "expression", "extremity", "familiar", "focus",
"fragile", "function", "gather", "harmony", "honorable", "illustration", "imagination", "imminent", "importance", "integral",
"integrity", "interest", "intuitive", "jolted", "journey", "keen", "learned", "loyalty", "magnificent", "magnitude",
"magnitude", "momentum", "observe", "optimistic", "perception", "preservation", "reaction", "reality", "reflective", "repetition",
"resilience", "responsible", "revert", "revolutionary", "sacred", "scaffold", "sensitive", "spark", "spiritual", "stimulate",
"strengthen", "substance", "supplement", "sustainable", "suspend", "synergy", "tactical", "talented", "tenacity", "timeless",
"tribute", "trustworthy", "unravel", "vibrant", "visionary", "warrant", "wellness", "wholesome", "zeal", "zenith","abbreviate", "absorption", "abstractly", "accelerate", "accentuate", "acclimatize", "acceptance", "accidentally", "acclivity", "accumulate",
"adorable", "affectionate", "agitate", "allegiance", "alluring", "ancient", "anecdote", "appreciation", "articulate", "auditory",
"awareness", "barometer", "beneficial", "bizarre", "blasphemous", "catalyst", "cautiously", "clandestine", "clarification", "climate",
"complicated", "considerate", "dazzling", "deflection", "dementia", "depiction", "determine", "dialogue", "difference", "diligent",
"eclectic", "effervescent", "encompass", "encourage", "engagement", "enlightening", "ensign", "entrance", "esoteric", "eternal",
"exquisite", "fascination", "felicity", "fluctuate", "formidable", "fragility", "gravitational", "haphazard", "hesitation", "holograph",
"humility", "illuminate", "incandescent", "influence", "inspire", "instinct", "insightful", "integrate", "introspection", "intrigue",
"jovial", "juxtapose", "kinetic", "legitimate", "literate", "magnanimous", "melancholy", "metamorphosis", "mimicry", "navigable",
"obedient", "opulence", "overcome", "panoramic", "paradigm", "perseverance", "persistent", "phenomenal", "precision", "prejudice",
"preparation", "quintessential", "rejuvenate", "resilient", "revolutionary", "saturation", "serendipity", "significant", "simplify", "spontaneous",
"stabilize", "substantiate", "sustainable", "symmetry", "tangible", "tenacity", "theoretical", "thriving", "tolerant", "transform",
"ultimate", "unveiling", "vibrant", "vigilant", "visionary", "voracious", "wavelength", "wondrous", "zealot", "zephyr",
"abrasive", "absurd", "acceleration", "accomplish", "adversity", "affordable", "ambiguous", "amplify", "analogous", "annual",
"artificially", "assimilate", "atmospheric", "benevolent", "blessings", "brittle", "catastrophic", "cautionary", "circumference", "clarity",
"commemorate", "compensate", "contemplate", "continuum", "creativity", "deceitful", "deliberate", "desolate", "disaster", "excessive",
"exemplify", "fascinate", "formulation", "genetic", "graceful", "hypothesis", "illogical", "imaginative", "immaculate", "infallible",
"intertwined", "languish", "leverage", "liberate", "manifest", "monumental", "negligible", "optimal", "opinionated", "particular",
"phenomenal", "powerful", "proximity", "puzzling", "resistance", "serenity", "shimmering", "sophisticated", "struggle", "sublime",
"subtle", "sustainable", "tenacious", "tolerable", "transcend", "turbulent", "unrelenting", "utopian", "vacuous", "variegated",
"victorious", "vocalize", "wholesome", "wrangle", "zestful", "accuracy", "adventurous", "amplification", "analytic", "bitter",
"blazing", "blissful", "caliber", "cognition", "conception", "consistency", "courageous", "criterion", "definitive", "deplete",
"destiny", "determined", "devotion", "eclectic", "evident", "factual", "fiery", "flourishing", "genuine", "grace",
"harbinger", "helix", "hilarity", "impeccable", "imprint", "incredible", "insight", "integrity", "invaluable", "longevity",
"luminous", "meaningful", "momentous", "nascent", "overflowing", "perspective", "profound", "relish", "reminiscent", "residual",
"reverence", "sagacious", "serene", "serpent", "silhouette", "splendid", "stability", "steadfast", "symmetrical", "terrestrial",
"timeless", "tremendous", "unfathomable", "unprecedented", "unravel", "unwavering", "vivid", "zenith", "zealot", "zephyr",
"absent", "affable", "annoyance", "annoying", "articulate", "astonishing", "beyond", "cherish", "cosmic", "discovery",
"diverse", "embrace", "enchanting", "enhance", "finite", "frenzied", "graceful", "inspire", "intricate", "luxury",
"miraculous", "optimistic", "quintessential", "reminisce", "staggering", "tangible", "transform", "universal", "vast", "vivid",
"wealth", "whimsical", "wonderful", "extraordinary", "vigorous", "yield", "unique", "zealous", "exciting", "genius","abandon", "abduct", "abhor", "ability", "abnormal", "abundant", "acceleration", "acclaim", "accommodate", "accompany",
"accord", "acoustic", "acquire", "adjacent", "affluent", "agenda", "agile", "allegory", "alliance", "anomaly",
"appeal", "apprehensive", "approach", "aptitude", "ascend", "assault", "assemble", "assimilate", "assistance", "attraction",
"bachelor", "bacteria", "balance", "banish", "barrage", "benefactor", "bilingual", "bizarre", "blatant", "bounty",
"bravado", "brilliant", "broaden", "burden", "candid", "capacity", "cascade", "catalyst", "chaotic", "clasp",
"clarify", "climate", "collide", "collapse", "comply", "concede", "confide", "contrast", "contribute", "conviction",
"crafty", "courage", "courtesy", "cynical", "decade", "decent", "defy", "deliberate", "denote", "determine",
"distinct", "dormant", "elevate", "eliminate", "eminent", "enlighten", "enrich", "enslave", "enter", "entice",
"equivalent", "excavate", "excursion", "expand", "expose", "factorial", "fascinate", "fearless", "finesse", "fiscal",
"flourish", "fragile", "frantic", "gauge", "generous", "genuine", "glimpse", "gracious", "harmonious", "harbinger",
"hesitate", "impact", "impose", "improvise", "incept", "incite", "inspire", "insight", "integral", "intensify",
"ironic", "jovial", "keen", "languish", "liberate", "luxury", "magnify", "mentor", "mobilize", "mysterious",
"narrative", "navigate", "opposition", "optimize", "overcome", "perception", "perpetuate", "persistence", "plenty", "precise",
"profuse", "rejuvenate", "relocate", "remind", "renew", "repose", "reveal", "revitalize", "revisit", "ritual",
"secure", "serenity", "simplify", "sincere", "smother", "solace", "sophisticated", "speculate", "stimulate", "surpass",
"suspend", "tenacity", "tolerate", "transform", "trivial", "turbulent", "unfurl", "unleash", "unravel", "utilize",
"vagabond", "vibrate", "visualize", "vocalize", "warrant", "whimsical", "withdraw", "witness", "yield", "zeal",
"affect", "allude", "alter", "analyze", "appear", "arise", "assert", "assure", "attain", "avail", "belong", "benefit", "bless",
"bride", "calibrate", "census", "clarity", "classify", "compass", "complete", "dazzle", "debate", "defend", "delight",
"denial", "divide", "doubt", "duration", "elapse", "embark", "elaborate", "endure", "examine", "execute", "expose", 
"expand", "fascinate", "flood", "gather", "grip", "guilt", "harmony", "hesitation", "highlight", "ignite", "impact",
"impress", "inquire", "inject", "juggle", "keen", "learn", "level", "mature", "mentor", "narrate", "navigate", "necessitate", 
"oblige", "pursue", "rescue", "restrain", "revert", "safeguard", "secure", "shelter", "subdue", "tolerate", "unveil",
"vibrate", "visual", "volunteer", "weaken", "wander", "advance", "affirm", "allay", "assertive", "backward", "become",
"bother", "brisk", "clarity", "classical", "create", "deflect", "elaborate", "enforce", "evaluate", "extend", "express",
"finesse", "flourish", "frivolous", "genuine", "glistening", "horizon", "impactful", "imagine", "improvise", "influence", 
"intervene", "journey", "meditate", "motivate", "perceive", "reassure", "reflect", "restrain", "simplify", "survive",
"transfer", "vivid", "zone", "abandonment", "ability", "absolve", "abundant", "acclimate", "activate", "affect", "agility",
"alleviate", "alternate", "blissful", "brilliant", "caliber", "charm", "clarify", "chatter", "cheer", "cliché", "decelerate",
"delightful", "diligent", "embellish", "empower", "elation", "enlighten", "empirical", "equator", "elevate", "empirical",
"equilibrium", "expand", "euphoria", "fascinating", "ferocious", "fulfill", "gleam", "hatch", "ideal", "imagine",
"improve", "inspire", "instinct", "integrate", "intertwine", "invent", "jovial", "jungle", "keen", "luxury",
"momentum", "muscle", "optimistic", "pattern", "perceptive", "pleasant", "protect", "reassure", "redefine", "relate",
"rational", "rejoice", "resonate", "secure", "sensational", "simplify", "sublime", "sustain", "tangible", "unite",
"unveil", "velocity", "vibrancy", "vision", "vocalize", "wonder", "weaken", "yield", "zealous", "zenith", "assertion",
"attain", "boost", "chisel", "clarify", "corrupt", "decipher", "define", "deny", "detain", "elude", "enrich",
"enlighten", "facilitate", "falsify", "fixate", "forward", "fret", "illuminate", "impulsive", "indicate", "insight",
"intensify", "mature", "motion", "perceive", "praise", "resonate", "retreat", "stimulate", "substance", "tolerate",
"transmit", "vibrant", "vocalize", "wrangle", "zeal", "abnormal", "amicable", "assert", "berate", "cajole", "clutch",
"devise", "elusive", "engage", "fathom", "fret", "gather", "imprint", "insight", "manipulate", "persevere",
"reconstruct", "relinquish", "safeguard", "simplify", "struggle", "subdue", "unshackle", "verify", "weigh",
"whisper", "undermine", "uphold", "unwrap", "value", "weaken", "yell", "zeal", "yearn", "accumulate", "anchor",
"apprehensive", "bathe", "belong", "bound", "bristle", "calm", "camaraderie", "chime", "collective", "collapse",
"deflect", "dominate", "encompass", "endure", "engulf", "expel", "examine", "flounder", "guide", "horizon",
"innate", "invite", "juggle", "join", "lag", "lurk", "mark", "marinate", "move", "nourish", "nurture", 
"occupy", "overcome", "proceed", "quiver", "relocate", "relinquish", "reposition", "shield", "shift", "slowly",
"smother", "stagger", "struggle", "thrive", "tackle", "untangle", "unveil", "warrant", "weaken", "whip",
"bliss", "suffocate", "clutch", "advance", "grip", "deft", "marvelous", "spinal", "mindset", "unfurl"
];
   
  randomWords: string[] = [];
  wordDisplay = '';
  hideWords = true;
  showInputSection = false;
  playerInput = '';
  result = '';
  showResult = false;
  timeInput: number | null = null; // Time in seconds
  wordCount: number | null = null; // Number of words to display
  isGameActive = false;
  countdown: number = 0; // For countdown timer
  intervalId: any = null; // To store the interval reference
  typedWords: string[] = []; // Array to store the split words

  constructor(private router: Router) {}

  startGame(): void {
    if (!this.timeInput || this.timeInput <= 0) {
      alert('Please enter a valid number of seconds!');
      return;
    }

    if (!this.wordCount || this.wordCount <= 0) {
      alert('Please enter a valid number of words!');
      return;
    }

    this.isGameActive = true;
    this.randomWords = this.generateRandomWords(this.wordCount);
    this.wordDisplay = this.randomWords.join(', ');
    this.hideWords = false;
    this.showInputSection = false;
    this.showResult = false;
    this.countdown = this.timeInput;

    // Start the countdown timer
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.intervalId); // Stop the timer
        this.hideWords = true; // Hide words
        this.showInputSection = true; // Show input section
      }
    }, 1000);
  }

  // Function to update words based on space input
  updateWords() {
    this.typedWords = this.playerInput.trim().split(' ').filter(word => word.length > 0);
  }

  submitWords(): void {
    if (!this.isGameActive) return;

    const enteredWords = this.playerInput.trim().toLowerCase().split(/\s*,\s*|\s+/);
    const correctWords = enteredWords.filter((word) => this.randomWords.includes(word));
    const score = correctWords.length;
    const totalWords = this.randomWords.length;

    const incorrectWords = enteredWords.filter((word) => !this.randomWords.includes(word));
    const missingWords = this.randomWords.filter((word) => !enteredWords.includes(word));

    this.result = `
    
    <div class="result-text">
        <span class="score-text">You remembered <span class="highlight">${score}</span> out of <span class="highlight">${totalWords}</span> words!</span><br><br>
        <span class="correct-words">Correct Words: <span class="correct">${correctWords.join(', ')}</span></span><br><br>
        <span class="incorrect-words">Incorrect Words: <span class="incorrect">${incorrectWords.join(', ')}</span></span><br><br>
        <span class="missing-words">Missing Words: <span class="missing">${missingWords.join(', ')}</span></span><br><br>
        <span class="score-summary">Your Score: <span>${score}/${totalWords}</span></span><br><br>
    </div>
  `;
  

    this.showResult = true;
    this.isGameActive = false;
    this.showInputSection = false;
    clearInterval(this.intervalId); // Stop any running timers
  }

  generateRandomWords(count: number): string[] {
    const shuffled = this.wordsPool.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  replayGame(): void {
    this.showResult = false;
    this.playerInput = '';
    this.showInputSection = false;

    this.startGame();
  }

  goToMenu(): void {
    this.router.navigate(['/']);
  }
}