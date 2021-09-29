/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById('run').addEventListener('click', function () {
    // take the user inputed number
    let userInput = document.getElementById('number').value;

    // find the factorial on that number
    function factorial(n) {
      let answer = 1;
      if (n == 0 || n == 1) {
        return answer;
      } else {
        for (var i = n; i >= 1; i--) {
          answer = answer * i;
        }
        return answer;
      }
    }
    let n = userInput;
    answer = factorial(n);

    // display the result in the added paragraph
    document.getElementById(
      'factorialResult'
    ).innerHTML = `The factorial of ${userInput} is ${answer}`;
  });
})();
