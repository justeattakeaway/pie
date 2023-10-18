const scrollToTopButton = document.querySelector('[data-js="scroll-to-top"]');

const initialiseScrollToTop = () => {
    if (!scrollToTopButton) return;

    calculateVisibility();

    window.addEventListener('scroll', calculateVisibility);

    // Scroll button functionality
    scrollToTopButton.addEventListener('click', (event) => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        window.scroll({
            top: 0,
            left: 0,
            behavior: prefersReducedMotion ? 'instant' : 'smooth',
        });

        if (event.detail === 0) {
            // When the button is triggered via the keyboard but not mouse clicks
            document.querySelector('[data-js="skipToMain"]')?.focus();
        }
    });
};

// Show or hide the button based on the page's current scrollY position
const calculateVisibility = () => {
    if (window.scrollY > 0) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

window.addEventListener('DOMContentLoaded', initialiseScrollToTop);
