const activeClass = 'c-heading-anchor--clicked';

const initialiseToggle = () => {
    console.log('found it');
    // if ('togglePage' in document.body.dataset) {
    const h = document.getElementsByClassName('c-heading-anchor');
    const hi = (ting, element) => {
        console.log('halllllllo', ting, element);
        // setTimeout(() => {
        element.classList.add(activeClass);
        // element.classList.remove(activeClass);
        // }, 500);
        setTimeout(() => {
            element.classList.remove(activeClass);
        }, 2000);
    };
    // Array.from(h).forEach((element) => {
    //     console.log(element);
    //     element.addEventListener('click', hi());
    // });

    // const divs = document.querySelectorAll('.c-heading-anchor');

    // console.log(divs);

    // divs.forEach((el) => el.addEventListener('click', (event) => {
    //     console.log('eee', hi(event.target.getAttribute('data-el')));
    // }));

    Array.from(document.getElementsByClassName('c-heading-anchor'))
        .forEach((element) => {
            element.addEventListener('click', (event) => hi(event.target.getAttribute('data-el'), element));
        });
};

window.addEventListener('DOMContentLoaded', () => {
    initialiseToggle();
});
