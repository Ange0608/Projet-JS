// Define an array of quotes
const quotes = [
    "Quiconque n\'a jamais commis d\'erreur n\'a jamais rien essayé de nouveau. Albert Einstein",
    "Votre attitude, pas votre aptitude, déterminera votre altitude. Zig Ziglar",
    "Je n\'ai pas échoué. Je viens de trouver 10 000 façons qui ne fonctionneront pas. Thomas Alva Edison",
    "Pourquoi s\'intégrer quand on est né pour se démarquer? Dr Seuss",
    "Le secret pour aller de l\'avant est de commencer. Mark Twain",
    "Les gens qui sont assez fous pour croire qu\'ils peuvent changer le monde sont ceux qui le font. Steve Jobs",   
    "Si vous pouvez le rêver, vous pouvez le faire. Walt Disney",
    "Cela semble toujours impossible tant que ce n\'est pas fait. Nelson Mandela",
    "La meilleure façon de prédire l\'avenir est de le créer.  Abraham Lincoln"
    
  ];
  
  // Function to generate a random quote
  function generateQuote() {
    // Get a random index from the quotes array
    const index = Math.floor(Math.random() * quotes.length);
    
    // Get the quote element
    const quoteElement = document.getElementById("quote");
    
    // Set the quote text to the random quote
    quoteElement.innerText = quotes[index];
  }
  


















































    



/**mes essais ici  
var quotes = [
    
    "Quiconque n\'a jamais commis d\'erreur n\'a jamais rien essayé de nouveau. Albert Einstein",

    "Votre attitude, pas votre aptitude, déterminera votre altitude. Zig Ziglar",
    
    "Je n\'ai pas échoué. Je viens de trouver 10 000 façons qui ne fonctionneront pas. Thomas Alva Edison",
    
    "Pourquoi s\'intégrer quand on est né pour se démarquer? Dr Seuss",
    
    "Le secret pour aller de l\'avant est de commencer. Mark Twain",
    
    "Les gens qui sont assez fous pour croire qu\'ils peuvent changer le monde sont ceux qui le font. Steve Jobs",
        
    "Si vous pouvez le rêver, vous pouvez le faire. Walt Disney",
    
    "Cela semble toujours impossible tant que ce n\'est pas fait. Nelson Mandela",
    
    "La meilleure façon de prédire l\'avenir est de le créer.  Abraham Lincoln".
    
]

function newQuote() {
    var randomNumber = Math.floor(Math.random()* (quotes.length));
}

document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];


*/
