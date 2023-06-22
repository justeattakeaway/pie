const activeClass = 'is-active';

/**
 * Indicates whether or not the provided content variant is already being displayed
 * @param {HTMLElement} contentVariantWrapper - the wrapper containing the content variant
 * @returns {boolean} - whether or not the content is already selected to display
 */
const isContentAlreadySelected = (contentVariantWrapper) =>
    contentVariantWrapper.classList.contains(activeClass);

/**
 * Update the current URL to the new slug without reloading the page
 * @param {*} newSlug The new slug to replace the previous with in the URL
 */
const replaceUrlSlug = (newSlug) => {
    // remove previous slug from URL
    const originalHref = window.location.href;
    const hrefWithoutTrailingSlash = originalHref.substring(0, originalHref.length - 1);
    const indexOfLastSlash = hrefWithoutTrailingSlash.lastIndexOf('/');

    // create new URL
    const hrefWithSlugRemoved = hrefWithoutTrailingSlash.substring(0, indexOfLastSlash + 1);
    const newUrl = `${hrefWithSlugRemoved}${newSlug}/`;

    // update url without a page reload
    window.history.pushState({}, '', newUrl);
};

/**
 * Displays and hides the HTML content accordingly (will not be detectable to screenreaders either)
 * @param {HTMLElement} contentToDisplay - the HTML to display
 * @param {HTMLElement} contentToHide - the HTML to hide
 */
const toggleContentVisibility = (contentToDisplay, contentToHide) => {
    contentToDisplay.classList.remove('is-hidden');
    contentToHide.classList.add('is-hidden');
};

/**
 * Toggles the selected styles to a specified control and removes from the other
 * @param {HTMLElement} controlToSelect - the HTML control to apply selected styling to
 * @param {HTMLElement} controlToDeselect - the HTML control to remove selected styling from
 */
const toggleSelectedControlStyles = (controlToSelect, controlToDeselect) => {
    controlToDeselect.classList.remove(activeClass);
    controlToSelect.classList.add(activeClass);
};

const initialiseToggle = () => {
    if ('togglePage' in document.body.dataset) {
        const contentAControl = document.getElementById('toggle-option-a');
        const contentBControl = document.getElementById('toggle-option-b');
        const contentAControlWrapper = document.getElementById('toggle-option-a-wrapper');
        const contentBControlWrapper = document.getElementById('toggle-option-b-wrapper');

        const contentA = document.getElementById('toggle-content-a');
        const contentB = document.getElementById('toggle-content-b');

        const contentASlug = contentA.dataset.slug;
        const contentBSlug = contentB.dataset.slug;

        const toggleContentAOptions = {
            contentToShow: contentA,
            contentToHide: contentB,
            slugToUse: contentASlug,
            controlToSelect: contentAControlWrapper,
            controlToDeselect: contentBControlWrapper,
        };

        const toggleContentBOptions = {
            contentToShow: contentB,
            contentToHide: contentA,
            slugToUse: contentBSlug,
            controlToSelect: contentBControlWrapper,
            controlToDeselect: contentAControlWrapper,
        };

        const toggleContent = (options) => {
            if (!isContentAlreadySelected(options.controlToSelect)) {
                toggleContentVisibility(options.contentToShow, options.contentToHide);
                toggleSelectedControlStyles(options.controlToSelect, options.controlToDeselect);
                replaceUrlSlug(options.slugToUse);
            }
        };

        contentAControl.addEventListener('click', () => toggleContent(toggleContentAOptions));
        contentBControl.addEventListener('click', () => toggleContent(toggleContentBOptions));
    }
};

window.addEventListener('DOMContentLoaded', () => {
    initialiseToggle();
});
