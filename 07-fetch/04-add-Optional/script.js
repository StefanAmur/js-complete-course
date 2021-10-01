/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // work in progress

    document.getElementById('run').addEventListener('click', function () {
        let heroName = document.getElementById('hero-name').value;

        let alterEgo = document.getElementById('hero-alter-ego').value;

        let powers = document.getElementById('hero-powers').value;
        if (heroName.length != 0 && alterEgo.length != 0 && powers.length != 0) {

            let newHero = {
                name: heroName,
                alterEgo: alterEgo,
                abilities: powers.split(', ')
            }

            // hmmm, WiP, Y U NO WORKING??

            fetch('../../_shared/api.json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    newHero
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                })

            console.log(newHero);
        } else {
            alert('please fill in all the required fields');
            console.log('not good');
        }
    })
})();
