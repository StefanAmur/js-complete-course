/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // take original img and store it
    const oldImage = document
        .querySelector('section.material figure img')
        .getAttribute('src');

    // take new img from data-hover and store it
    const newImage = document
        .querySelector('section.material figure img')
        .getAttribute('data-hover');

    // change to new img when mouse is hovering
    let img = document.querySelector('section.material figure img');
    img.addEventListener('mouseover', function () {
        img.setAttribute('src', newImage);
    });

    // change to old image when mouse is not hovering
    img.addEventListener('mouseout', function () {
        img.setAttribute('src', oldImage);
    });
})();
