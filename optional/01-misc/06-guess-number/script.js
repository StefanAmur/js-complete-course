/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function getRandomNumber() {
        let secretNumber = Math.floor(Math.random() * 100) + 1;
        let guesses = 0;
        let userChoice;
        while (userChoice != secretNumber) {
            userChoice = prompt('What is the number?');
            guesses++;
            if (userChoice < secretNumber) {
                alert('Go higher!');
            } else if (userChoice > secretNumber) {
                alert('Go lower!');
            } else {
                alert(`Good job! It \"only\" took you ${guesses} guesses.`);
            }
        }
    }
    window.addEventListener('load', getRandomNumber);
})();
