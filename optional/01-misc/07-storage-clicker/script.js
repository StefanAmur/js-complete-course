/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let target = document.getElementById('target');
    let countBtn = document.getElementById('increment');

    function incrementAndStore() {
        let counter = localStorage.getItem('userCount');
        counter++;
        target.textContent = counter;
        localStorage.setItem('userCount', counter);
    }

    incrementAndStore();

    countBtn.addEventListener('click', incrementAndStore);

})();
