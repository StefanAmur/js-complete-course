/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let partOneButton = document.getElementById('fix-part-one');
    let partTwoButton = document.getElementById('fix-part-two');
    let partThreeButton = document.getElementById('fix-part-three');
    let partFourButton = document.getElementById('fix-part-four');

    //const buttons = [partOneButton, partTwoButton, partThreeButton, partFourButton];

    let partOne = document.getElementById('part-one');
    let partTwo = document.getElementById('part-two');
    let partThree = document.getElementById('part-three');
    let partFour = document.getElementById('part-four');

    const parts = [partOne, partTwo, partThree, partFour];

    let target = document.getElementById('target');

    let buttonByPartIdDict =
    {
        'part-one': partOneButton,
        'part-two': partTwoButton,
        'part-three': partThreeButton,
        'part-four': partFourButton
    };

    let targetIndexByPartIdDict =
    {
        'part-one': 1,
        'part-two': 4,
        'part-three': 6,
        'part-four': 8
    };


    parts.forEach(part => {
        let min = parseInt(part.dataset.min);
        let max = parseInt(part.dataset.max);
        let nr = parseInt(part.dataset.min);
        let button = buttonByPartIdDict[part.id];
        let targetIndex = targetIndexByPartIdDict[part.id];

        let slots = setInterval(() => {
            nr = nr < max ? ++nr : min;
            part.setAttribute('value', addPadding(nr));
        }, 300);

        button.addEventListener('click', () => {
            part.id = clearInterval(slots);
            part.setAttribute('value', addPadding(getRandomNumber(min, max)));
            target.textContent = replacePartValue(target.textContent, targetIndex, part.getAttribute('value'));
        });
        partTwo.getAttribute
    });

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function addPadding(nr) {
        return nr.toString().padStart(2, '0');
    }

    function replacePartValue(text, start, value) {
        let strText = text.toString();
        let strValue = value.toString();
        return strText.substr(0, start) + strValue + strText.substr(start + strValue.length, strText.length);
    }


    // parts.forEach(element => {
    //     let i = parseInt(element.dataset.min);
    //     let iMax = parseInt(element.dataset.max);
    //     function spinTheNumber() {
    //         i++;
    //         if (i <= iMax)
    //             element.setAttribute('value', i);
    //         else {
    //             i = parseInt(element.dataset.min);
    //             element.setAttribute('value', i);
    //         }
    //     }

    //     let slots = setInterval(() => {
    //         spinTheNumber()
    //     }, 300);

    //     buttons.forEach(element => {
    //         element.addEventListener('click', () => {
    //             console.log(element.id);
    //             element.id = clearInterval(slots);
    //             // clearInterval(slots);
    //             // randomNumbers();
    //         });
    //     });

    //     // buttons.forEach(function (element) {
    //     //     element.onclick = function () {
    //     //         console.log(element);
    //     //         clearInterval(slots);
    //     //     }
    //     // })

    // });

    // // declare a function that will output a random number between the dataset min/max values of first part
    // function randomNumberPartOne() {
    //     const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    //     let a = randomNumber(parseInt(partOne.dataset.max), parseInt(partOne.dataset.min));
    //     partOne.setAttribute('value', a);
    // }

    // // declare a function that will output a random number between the dataset min/max values of the other 3 parts
    // function randomNumberPartTwo() {
    //     const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    //     let a = randomNumber(parseInt(partTwo.dataset.max), parseInt(partTwo.dataset.min));
    //     partTwo.setAttribute('value', a);
    // }



    // increases by 1 and updates the first slot
    // let i = parseInt(partOne.dataset.min);
    // let iMax = parseInt(partOne.dataset.max);
    // function firstSlotSpin() {
    //     i++;
    //     if (i <= iMax)
    //         partOne.setAttribute('value', i);
    //     else {
    //         i = parseInt(partOne.dataset.min);
    //         partOne.setAttribute('value', i);
    //     }
    // }


    // executes the firstSlotSpin function every ...ms
    // let slotOne = setInterval(() => {
    //     firstSlotSpin()
    // }, 300);

    // stops the execution of firstSlotSpin function and sets random value for first slot
    // partOneButton.addEventListener('click', () => {
    //     clearInterval(slotOne);
    //     randomNumbersFirstPart();
    // })

})();

