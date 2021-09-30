/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // get the link and store it in a variable
  const image = document.getElementById('source').getAttribute('data-image');

  // create img element
  const imageElement = document.createElement('img');

  // set src attribute of img
  imageElement.setAttribute('src', image);

  // append img element to figure element
  const parentElement = document.getElementById('target');
  parentElement.appendChild(imageElement);

  // remove old span element
  document.getElementById('source').remove();
})();
