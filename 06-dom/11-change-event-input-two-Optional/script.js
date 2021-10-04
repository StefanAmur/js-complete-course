/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // get the user input and store it
    let userInput = document.getElementById('pass-one');

    // store the span element in a variable for later use
    let valid = document.getElementById('validity');

    // store the RegEx in a variable for comparison
    const validation = /^(?=.*[A-Za-z])(?=.*\d{2,})[A-Za-z\d]{8,}$/;

    userInput.addEventListener('input', function () {
        // test if the user input meets RegEx requirements. Will return true or false
        let result = validation.test(userInput.value)

        // one line if statement to change span text depending on above test
        result = (result != false) ? (valid.innerText = 'OK') : (valid.innerText = 'NOT OK');
    })
})();
