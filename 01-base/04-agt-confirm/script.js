/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let answer = false;
  do {
    let age = prompt('How old are you?');
    let gender = prompt('What gender are you?');
    let town = prompt('Where are you from?');
    answer = window.confirm(
      `You are ${age} years old, ${gender}, from ${town}?`
    );
  } while (answer == false);
})();
