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
    "vinegar", "soy", "sauces", "syrup", "honey", "jam", "jelly", "peanut", "almond", "cashew", "walnut",
    "hazelnut", "pecan", "macadamia", "pistachio", "pine", "sunflower", "pumpkin", "chia", "flax", "sesame",
    "coconut", "cacao", "chocolate", "caramel", "vanilla", "mint", "cinnamon", "clove", "nutmeg", "paprika",
    "turmeric", "ginger", "saffron", "oregano", "basil", "thyme", "rosemary", "sage", "parsley", "cilantro",
    "chives", "tarragon", "bay", "dill", "mint", "curry", "chili", "cumin", "fennel", "anise", "cardamom",
    "mango", "lychee", "pomegranate", "guava", "fig", "apricot", "melon", "nectarines", "kiwi", "starfruit",
    "persimmon", "elderberry", "blackberry", "raspberry", "cranberry", "plum", "soursop", "tamarind", "longan",
    "jackfruit", "durian", "rambutan", "chayote", "breadfruit", "cucumber", "tomato", "avocado", "greenbeans",
    "broccoli", "spinach", "leek", "pumpkin", "squash", "eggplant", "artichoke", "beets", "radish", "cabbage",
    "lettuce", "onion", "garlic", "ginger", "zucchini", "asparagus", "carrot", "peas", "corn", "potatoes", "yams",
    "yam", "sweet", "potatoes", "okra", "celery", "chili", "chive", "cress", "coriander", "parsley", "mint"];
   
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
          <span class="correct-words">Correct Words: <span>${correctWords.join(', ')}</span></span><br><br>
          <span class="incorrect-words">Incorrect Words: <span>${incorrectWords.join(', ')}</span></span><br><br>
          <span class="missing-words">Missing Words: <span>${missingWords.join(', ')}</span></span><br><br>
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