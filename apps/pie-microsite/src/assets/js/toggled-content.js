const buttonA = document.getElementById('page-content-toggle-a');
const buttonB = document.getElementById('page-content-toggle-b');

const contentA = document.getElementById('toggled-content-a');
const contentB = document.getElementById('toggled-content-b');

const slugA = contentA.dataset.slug;
const slugB = contentB.dataset.slug;

const optionAWrapper = document.getElementById('page-content-toggle-a-wrapper');
const optionBWrapper = document.getElementById('page-content-toggle-b-wrapper');

const activeClass = '__is-checked';

/**
 * Update the current URL to the new slug without reloading the page
 * @param {*} newSlug The new slug to replace the previous with in the URL
 */
const updateUrl = newSlug => {
    // get new pathname
    const originalHref = window.location.href;
    // switch to old href with old path removed
    const originalPath = window.location.pathname;

    const newPath = originalPath
      .split('/')
      .filter(segment => !!segment.length);

    // remove old segment i.e. /light
    newPath.pop();
    // append new segment i.e. /dark
    newPath.push(newSlug);

    // stitch together path
    const newPathString = newPath.join('/');
    const newHref = originalHref.replace(originalPath, '');
    const newUrl = `${newHref}/${newPathString}/`;

    // update url without a page reload
    window.history.pushState({}, '', newUrl);
};

buttonA.addEventListener('click', () => {
    // hide/show content
    contentA.style.display = 'block';
    contentB.style.display = 'none';

    // update selected toggle
    optionBWrapper.classList.remove(activeClass);
    optionAWrapper.classList.add(activeClass);

    // replace slug in url with correct page
    updateUrl(slugA);
});

buttonB.addEventListener('click', () => {
    // hide/show content
    contentA.style.display = 'none';
    contentB.style.display = 'block';

    // update selected toggle
    optionAWrapper.classList.remove(activeClass);
    optionBWrapper.classList.add(activeClass);

    // replace slug in url with correct page
    updateUrl(slugB);
});
