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
    // assign all buttons and target element to individual variables
    let partOne = document.getElementById('part-one');
    let partTwo = document.getElementById('part-two');
    let partThree = document.getElementById('part-three');
    let partFour = document.getElementById('part-four');
    let target = document.getElementById('target');

    // set the correct phone number format on page load
    target.textContent = (`0${partOne.textContent}${partTwo.textContent}${partThree.textContent}${partFour.textContent}`);

    let a = parseInt(partOne.textContent);
    partOne.addEventListener('click', () => {
        if (a < partOne.dataset.max) {
            a++;
            partOne.innerText = a;
            target.textContent = (`0${partOne.textContent}${partTwo.textContent}${partThree.textContent}${partFour.textContent}`);
        } else {
            a = partOne.dataset.min;
        }
    });

    let b = parseInt(partTwo.dataset.min);
    partTwo.addEventListener('click', () => {
        if (b < partTwo.dataset.max && b < 9) {
            b++;
            partTwo.textContent = `0${b}`;
            target.textContent = (`0${partOne.textContent}${partTwo.textContent}${partThree.textContent}${partFour.textContent}`);
        } else if (b < partTwo.dataset.max && b >= 9) {
            b++;
            partTwo.textContent = b;
            target.textContent = (`0${partOne.textContent}${partTwo.textContent}${partThree.textContent}${partFour.textContent}`);
        } else {
            b = partTwo.dataset.min;
        }
    });

    let c = parseInt(partThree.dataset.min);
    partThree.addEventListener('click', () => {
        if (c < partThree.dataset.max && c < 9) {
            c++;
            partThree.textContent = `0${c}`;
            target.textContent = (`0${partOne.textContent}${partTwo.textContent}${partThree.textContent}${partFour.textContent}`);
        } else if (c < partThree.dataset.max && c >= 9) {
            c++;
            partThree.textContent = c;
            target.textContent = (`0${partOne.textContent}${partTwo.textContent}${partThree.textContent}${partFour.textContent}`);
        } else {
            c = partThree.dataset.min;
        }
    });

    let d = parseInt(partFour.dataset.min);
    partFour.addEventListener('click', () => {
        if (d < partFour.dataset.max && d < 9) {
            d++;
            partFour.textContent = `0${d}`;
            target.textContent = (`0${partOne.textContent}${partTwo.textContent}${partThree.textContent}${partFour.textContent}`);
        } else if (d < partFour.dataset.max && d >= 9) {
            d++;
            partFour.textContent = d;
            console.log(d);
            target.textContent = (`0${partOne.textContent}${partTwo.textContent}${partThree.textContent}${partFour.textContent}`);
        } else {
            d = partFour.dataset.min;
        }
    });
})();
