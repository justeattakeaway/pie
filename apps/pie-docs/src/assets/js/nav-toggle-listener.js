const navEl = document.querySelector('#navToggle');
const headerEl = document.querySelector('[data-test-id="site_header"]');
const NAV_OPEN_ATTRIBUTE = 'data-nav-open';
const NAV_OPEN_ATTRIBUTE_VALUE = "true";

window.addEventListener('DOMContentLoaded', () => {
    navEl.addEventListener('click', () => {
        if (headerEl.getAttribute(NAV_OPEN_ATTRIBUTE) === NAV_OPEN_ATTRIBUTE_VALUE) {
            headerEl.removeAttribute(NAV_OPEN_ATTRIBUTE);
        } else {
            headerEl.setAttribute(NAV_OPEN_ATTRIBUTE, NAV_OPEN_ATTRIBUTE_VALUE);
        }
    });
});
