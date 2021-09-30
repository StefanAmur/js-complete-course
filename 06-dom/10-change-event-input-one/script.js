/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // get the user input and store it
    let userInput = document.getElementById('pass-one');

    // assign variable to counter element
    let counter = document.getElementById('counter');

    // limit the number of characters allowed to 10
    userInput.setAttribute('maxlength', '10');

    // update the counter 
    userInput.addEventListener('keyup', function () {
        counter.innerText = `${userInput.value.length}/10`;
    })

})();
