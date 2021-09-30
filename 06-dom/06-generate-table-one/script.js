/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //get the element to which we will append the rows
    let target = document.getElementById('target');

    // create the table element
    let table = document.createElement('table');

    // create the rows and append them to the table
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('TR');
        const data = document.createElement('TD');
        row.appendChild(data);
        data.innerText = "I'm a row!"

        table.appendChild(row);
    }

    // append the entire table to the target
    target.appendChild(table);
})();
