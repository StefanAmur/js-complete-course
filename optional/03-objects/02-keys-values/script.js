/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    document.getElementById('run').addEventListener('click', function () {
        // get the keys of person (will output an array)
        let keys = Object.keys(person);
        // display the result as a table
        // this could be turned into plain text with console.log(`The list of keys of person is ${keys}`)
        console.table(keys);

        // get the values of person (will also output an array)
        let values = Object.values(person);
        // display the result as a table
        console.table(values);
    })
})();
