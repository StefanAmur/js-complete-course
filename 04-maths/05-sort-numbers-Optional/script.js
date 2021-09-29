/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById('run').addEventListener('click', function () {
    // take the values that are already in the input field and store them in a new variable (it outputs a string)
    let inputNumbers = document.getElementById('numbers');
    console.log(inputNumbers.value);

    // create an array of numbers from that string
    let numbersArray = inputNumbers.value.split(',');
    console.log(numbersArray);

    // sort the resulting array (ascending)
    let sortedArray = numbersArray.sort(function (a, b) {
      return a - b;
    });
    console.log(sortedArray);

    // display the sorted array in the input field
    document.getElementById('numbers').setAttribute('value', sortedArray);
  });
})();
