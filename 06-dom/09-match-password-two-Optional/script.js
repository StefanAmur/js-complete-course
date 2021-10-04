/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById('run').addEventListener('click', function () {
        // take the first input from the user and store it 
        let firstUserInput = document.getElementById('pass-one').value;

        // take the second input from the user and store it
        let secondUserInput = document.getElementById('pass-two').value;

        // check if the strings are the same. if they are, output will be 0
        let result = firstUserInput.localeCompare(secondUserInput);

        // set class name depending on result
        if (result !== 0) {
            document.getElementById('pass-one').setAttribute('class', 'error');
            document.getElementById('pass-two').setAttribute('class', 'error');
        } else {
            document.getElementById('pass-one').setAttribute('class', 'success');
            document.getElementById('pass-two').setAttribute('class', 'success');
        }
    })
})();
