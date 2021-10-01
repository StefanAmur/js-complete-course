/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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

            // get the user input and store it
            let userInput = document.getElementById('hero-id');

            // get the target and store it
            let target = document.getElementById('target');

            // do the magic? logic? idk...., this took forever :/
            for (let i = 0; i < data.heroes.length; i++) {
                // clone the template node
                let hero = document.getElementById('tpl-hero').content.cloneNode(true);

                if (userInput.value == data.heroes[i].id) {
                    console.log('i think it is working');
                    let display = data.heroes[i];
                    console.log(display);

                    hero.querySelector('li.hero .name').innerText = `id:${display.id} ${display.name}`;
                    hero.querySelector('em.alter-ego').innerText = display.alterEgo;
                    hero.querySelector('p.powers').innerText = display.abilities;
                    target.appendChild(hero);
                    // clear the input field so the user can input a new id without having to delete the old one
                    userInput.value = null;
                } else {
                    userInput.value = null;
                }
            }
        }
        getData();
    });
})();
