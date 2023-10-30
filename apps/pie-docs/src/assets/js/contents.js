// // Kindly taken from: https://css-tricks.com/how-to-animate-the-details-element-using-waapi/
// class Contents {
//     constructor (element) {
//         this.element = element;
//     }
// }

// function initialise () {
// }

window.addEventListener('DOMContentLoaded', () => {
    // initialise();
    const list = document.getElementsByClassName('c-content-list');
    const listItems = list[0].children[0].children;
    const columns = Math.ceil(listItems.length / 6);

    list[0].style.setProperty('--column-count', columns);
});
