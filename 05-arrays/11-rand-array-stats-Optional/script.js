/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById('run').addEventListener('click', function () {
    //generate an array that contains 10 random numbers between 1 and 100
    let arr = [];
    while (arr.length < 10) {
      let r = Math.floor(Math.random() * 100) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }

    //place the numbers in their respective cells
    let cells = document.querySelectorAll('table tr td');
    for (let i = 0; i < cells.length; ++i) {
      cells[i].innerHTML = arr[i];
    }

    //display the smallest number from array
    let min = Math.min(...arr);
    document.getElementById('min').innerHTML = min;

    //display the biggest number from array
    let max = Math.max(...arr);
    document.getElementById('max').innerHTML = max;

    //display the sum of all numbers
    let sum = arr.reduce((a, b) => a + b);
    document.getElementById('sum').innerHTML = sum;

    //display the average of all numbers
    let average = sum / arr.length;
    document.getElementById('average').innerHTML = average;
  });
})();
