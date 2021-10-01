/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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

            // get the target and store it
            let target = document.getElementById('target');

            // do the magic? logic? idk...., this is just copy pasted from previous exercise and adapted
            for (let i = 0; i < data.heroes.length; i++) {
                // clone the template node
                let hero = document.getElementById('tpl-hero').content.cloneNode(true);

                console.log('i think it is working');
                let display = data.heroes[i];
                console.log(display);

                hero.querySelector('li.hero .name').innerText = `id:${display.id} ${display.name}`;
                hero.querySelector('em.alter-ego').innerText = display.alterEgo;
                hero.querySelector('p.powers').innerText = display.abilities;
                target.appendChild(hero);
            }
        }
        getData();
    })
})();
