var cards = [
    {
      name: "Blue-Eyes White Dragon",
      imageURL: "Kaiba.jpg",
      correctOption: "Blue-Eyes White Dragon"
    },
    {
      name: "Dark Magician",
      imageURL: "Yugi.jpg",
      correctOption: "Dark Magician"
    },
    {
      name: "Red-Eyes Black Dragon",
      imageURL: "Joe.jpg",
      correctOption: "Red-Eyes Black Dragon"
    }
  ];
  
  var monsterNames = [
    "Red-Eyes Dark Dragon",
    "Exodia the Forbidden One",
    "Dark Magician Girl",
    "Black Luster Soldier - Envoy of the Beginning",
    "Cyber Dragon",
    "Elemental HERO Neos",
    "Stardust Dragon",
    "Red Dragon Archfiend",
    "Number 39: Utopia",
    "Black Rose Dragon"
  ];

  function startGame() {
    // Redirect the user to the game page
    window.location.href = "main.html";
  }  
  
  function restartGame() {
    // Redirect the user to the start page
    window.location.href = "main.html";
  }
  

  var currentCardIndex = 0;
  
  function flipCard(card) {
    card.classList.toggle('flipped');
  }
  
  function checkAnswer(button) {
    var selectedOption = button.textContent;
    var currentCard = cards[currentCardIndex];
  
    if (selectedOption === currentCard.correctOption) {
      showResultMessage('You won!');
      changeCardAndOptions();
    } else {
      // Redirect to the end page
      window.location.href = "end.html";
    }
  }
  
  function showResultMessage(message) {
    var resultMessageElement = document.querySelector('.result-message');
    resultMessageElement.textContent = message;
  }

// Call the changeCardAndOptions() function when the page loads
window.addEventListener('load', function() {
    changeCardAndOptions();
  });

  function changeCardAndOptions() {
    currentCardIndex++;
    if (currentCardIndex >= cards.length) {
      currentCardIndex = 0; // Loop back to the first card
    }
  
    var currentCard = cards[currentCardIndex];
  
    // Update the card image
    var cardImage = document.querySelector('.card img');
    cardImage.src = currentCard.imageURL;
  
    // Randomly choose options
    var optionButtons = document.querySelectorAll('.options button');
    var randomOptions = getRandomOptions(currentCard.name, optionButtons.length);
    for (var i = 0; i < optionButtons.length; i++) {
      optionButtons[i].textContent = randomOptions[i];
    }
  
    // Reset the result message
    var resultMessageElement = document.querySelector('.result-message');
    resultMessageElement.textContent = '';
  }
  
  function getRandomOptions(correctOption, count) {
    var randomOptions = [correctOption];
  
    while (randomOptions.length < count) {
      var randomMonster = getRandomMonsterName();
  
      if (randomMonster !== correctOption && !randomOptions.includes(randomMonster)) {
        randomOptions.push(randomMonster);
      }
    }
  
    return shuffleArray(randomOptions);
  }
  
  function getRandomMonsterName() {
    var randomIndex = Math.floor(Math.random() * monsterNames.length);
    return monsterNames[randomIndex];
  }
  
  function shuffleArray(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  