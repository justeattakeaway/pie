let scrollToTopButton;

const initialiseScrollToTop = () => {
    scrollToTopButton = document.querySelector('[data-js="scroll-to-top"]');
    const siteHeader = document.querySelector('[data-js="site-header"]');

    if (!scrollToTopButton) return;

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            calculateButtonVisibility(entry.isIntersecting);
        });
    });

    if (siteHeader) {
        scrollObserver.observe(siteHeader);
    }

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

// Show or hide the button based on whether the observed element is visible
const calculateButtonVisibility = (isObservedElementVisible) => {
    if (isObservedElementVisible) {
        scrollToTopButton.style.display = 'none';
    } else {
        scrollToTopButton.style.display = 'flex';
    }
};

window.addEventListener('DOMContentLoaded', initialiseScrollToTop);
