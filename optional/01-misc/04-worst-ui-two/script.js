/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let partOne = document.getElementById('part-one');

    let partTwo = document.getElementById('part-two');

    let partThree = document.getElementById('part-three');

    let partFour = document.getElementById('part-four');

    const parts = [partOne, partTwo, partThree, partFour];
    console.log(parts);

    parts.forEach(button => {
        let result = 0;
        button.addEventListener('click', function () {
            result = button.innerText;
            console.log(button.innerText);
            if (result > button.dataset.max) {
                result = button.dataset.min
            } else if (result <= 9) {
                button.innerText = `0${result}`
            } else {
                button.innerText = `${result}`
            }

            document.getElementById('target').innerText = `${partOne.innerText}${partTwo.innerText}${partThree.innerText}${partFour.innerText}`;
        })
    })


})();
