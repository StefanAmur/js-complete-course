/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();

  if (hour < 17 || (hour == 17 && minute <= 30)) {
    document.getElementById('target').innerHTML = 'Hello!';
  } else {
    document.getElementById('target').innerHTML = 'Good evening!';
  }
})();
