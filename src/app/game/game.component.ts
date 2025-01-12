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
  
      setTimeout(() => {
        this.hideWords = true;
        this.showInputSection = true;
      }, this.timeInput * 1000);
    }
  
    submitWords(): void {
      if (!this.isGameActive) return; // Prevent submission if game is inactive
      
      const enteredWords = this.playerInput.trim().toLowerCase().split(/\s*,\s*|\s+/);
      const correctWords = enteredWords.filter((word) => this.randomWords.includes(word));
      const score = correctWords.length;
      const totalWords = this.randomWords.length;
    
      // Calculate incorrect and missing words
      const incorrectWords = enteredWords.filter((word) => !this.randomWords.includes(word));
      const missingWords = this.randomWords.filter((word) => !enteredWords.includes(word));
    
      // Format the result with styling for correct and incorrect words
      this.result = `
        <div class="result-text">
            <span class="score-text">You remembered <span class="highlight">${score}</span> out of <span class="highlight">${totalWords}</span> words!</span><br><br><br>
            <span class="correct-words">Correct Words: <span>${correctWords.join(', ')}</span></span><br><br><br>
            <span class="incorrect-words">Incorrect Words: <span>${incorrectWords.join(', ')}</span></span><br><br><br>
            <span class="missing-words">Missing Words: <span>${missingWords.join(', ')}</span></span><br><br><br>
            <span class="score-summary">Your Score: <span>${score}/${totalWords}</span></span><br><br>
        </div>
      `;
    
      this.showResult = true;
      this.isGameActive = false; // Deactivate the game after submission
      this.showInputSection = false; // Hide the input section after submission
    }
  
    generateRandomWords(count: number): string[] {
      const shuffled = this.wordsPool.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }
  
    // Replay the game with the same settings
    replayGame(): void {
      this.showResult = false; // Hide result section
      this.playerInput = '';   // Clear previous input
      this.showInputSection = false; // Hide input section
  
      // Restart the game with the same time and word count
      this.startGame();
    }
  
    goToMenu(): void {
      this.router.navigate(['/']);
    }
  }