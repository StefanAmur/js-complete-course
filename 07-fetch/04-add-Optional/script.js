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
    document.getElementById('run').addEventListener('click', function () {
        // store the api url
        const api_url = '../../_shared/api.json';

        // get the data from the api and store it
        async function getData() {
            const response = await fetch(api_url);
            const data = await response.json();

            // get the user inputed values and store them
            let heroName = document.getElementById('hero-name').value;
            let alterEgo = document.getElementById('hero-alter-ego').value;
            let powers = document.getElementById('hero-powers').value;

            // check if all inputs have been filled in and if so, create a new hero object
            if (heroName.length != 0 && alterEgo.length != 0 && powers.length != 0) {
                let newHero = {
                    id: data.heroes.length + 1,
                    name: heroName,
                    alterEgo: alterEgo,
                    abilities: powers.split(', ')
                }

                // update the original hero list
                data.heroes.push(newHero);

                // display in console the updated hero list
                console.log(data.heroes);
            } else {
                alert('please fill in all the required fields');
            }
        }
        getData();
    });
})();
