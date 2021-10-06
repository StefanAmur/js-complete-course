/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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

            let userInput = parseInt(document.getElementById('hero-id').value);

            for (let i = data.heroes.length - 1; i >= 0; --i) {
                if (data.heroes[i].id == userInput) {
                    data.heroes.splice(i, 1);
                    console.log(data.heroes);
                }
            }
        }
        getData();
    })
})();
