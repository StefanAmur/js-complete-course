/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  var performOperation = function (operation) {
    // perform the operation
    switch (operation) {
      case 'addition':
        let a = +document.getElementById('op-one').value;
        let b = +document.getElementById('op-two').value;
        console.log(a + b);
        break;

      case 'substraction':
        let c = +document.getElementById('op-one').value;
        let d = +document.getElementById('op-two').value;
        console.log(c - d);
        break;

      case 'multiplication':
        let e = +document.getElementById('op-one').value;
        let f = +document.getElementById('op-two').value;
        console.log(e * f);
        break;

      case 'division':
        let g = +document.getElementById('op-one').value;
        let h = +document.getElementById('op-two').value;
        console.log(g / h);
        break;
    }
  };

  Array.from(document.querySelectorAll('button.operator')).forEach(function (
    $btn
  ) {
    $btn.addEventListener('click', function () {
      performOperation($btn.id);
    });
  });
})();
