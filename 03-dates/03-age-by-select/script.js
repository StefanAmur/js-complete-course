/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById('run').addEventListener('click', function () {
    const day = document.getElementById('dob-day').value;
    const month = document.getElementById('dob-month').value;
    const year = document.getElementById('dob-year').value;
    function setAge(dob) {
      const diffAge = Date.now() - dob.getTime();
      const dateAge = new Date(diffAge);

      return Math.abs(dateAge.getUTCFullYear() - 1970);
    }

    alert(setAge(new Date(year, month, day)));
  });
})();
