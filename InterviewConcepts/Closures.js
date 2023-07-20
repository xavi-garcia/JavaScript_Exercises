function counter() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    }
}
  
const incrementCounter = counter();
incrementCounter(); // output: 1
incrementCounter(); // output: 2
incrementCounter(); // output: 3


function secretCode() {
    let code = '1234';
    return {
      guessCode: function(guess) {
        if (guess === code) {
          console.log('You guessed the code!');
        } else {
          console.log('Incorrect guess, try again.');
        }
      }
    }
}
  
const game = secretCode();
game.guessCode('1111'); // output: Incorrect guess, try again.
game.guessCode('1234'); // output: You guessed the code!
  