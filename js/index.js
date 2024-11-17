
var quotes = [
  '“The only thing we have to fear is fear itself.”',
  '“That which does not kill us makes us stronger.”',
  '“In the middle of difficulty lies opportunity.”',
  '“It does not matter how slowly you go as long as you do not stop.”',
  '“Success is not final, failure is not fatal: It is the courage to continue that counts.” ',
  '“What we think, we become.” ',
  '“The only impossible journey is the one you never begin.”',
  '“Every moment is a fresh beginning.”',
  '“The best time to plant a tree was 20 years ago. The second best time is now.”',
  '“Get busy living or get busy dying.”',
  '“The best way to predict your future is to create it.”',
  '“You are never too old to set another goal or to dream a new dream.”',
  '“Keep your face always toward the sunshine, and shadows will fall behind you.”',
  '“I never dreamed about success, I worked for it.”',
  '“Not all those who wander are lost.”'
];

var authors = [
    '– Franklin D. Roosevelt',
    '– Friedrich Nietzsche',
    '– Albert Einstein',
    '– Confucius',
    '– Winston Churchill',
    '– Buddha',
    '– Tony Robbins',
    '– T.S. Eliot',
    '– Chinese Proverb',
    '– Stephen King',
    '– Abraham Lincoln',
    '– C.S. Lewis',
    '– Walt Whitman',
    '– Estée Lauder',
    '– J.R.R. Tolkien'
];
var previousNum;

function randomQuotes() {

    var randomNum = Math.floor(Math.random() * quotes.length);
    if (previousNum != randomNum) {

        document.getElementById('quote').innerHTML = quotes[randomNum];

        document.getElementById('author').innerHTML = authors[randomNum];
    }
    else {
        randomQuotes();
    }

    previousNum = randomNum;
}