const stickyClass = 'c-toggle--stuck';

window.addEventListener('DOMContentLoaded', () => {
    const stickyObserver = new IntersectionObserver(([e]) => {
        e.target.classList.toggle(stickyClass, e.intersectionRatio < 1);
    }, {
        threshold: [1],
        // Apply styles when toggles comes within 81px of the top of the page
        // (56px nav + 16px spacing + 1px threshold)
        // This is slightly premature for wide viewports (which don't have the nav)
        // but it still looks okay
        rootMargin: '-73px 0px 0px 0px',
    });

    const toggle = document.querySelector('[data-js="toggle"]');
    if (toggle) {
        stickyObserver.observe(toggle);
    }
});
