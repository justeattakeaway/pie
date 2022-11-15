const buttonA = document.getElementById('page-content-toggle-a');
const buttonB = document.getElementById('page-content-toggle-b');

const contentA = document.getElementById('toggled-content-a');
const contentB = document.getElementById('toggled-content-b');

const pathSegmentA = contentA.dataset.pathSegment;
const pathSegmentB = contentB.dataset.pathSegment;

const updateUrl = newPathSegment => {
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
    newPath.push(newPathSegment);

    // stitch together path
    const newPathString = newPath.join('/');
    const newHref = originalHref.replace(originalPath, '');
    const newUrl = `${newHref}/${newPathString}/`;

    // update url without a page reload
    window.history.pushState({}, '', newUrl);
};

buttonA.addEventListener('click', () => {
    contentA.style.display = 'block';
    contentB.style.display = 'none';

    updateUrl(pathSegmentA);
});

buttonB.addEventListener('click', () => {
    contentA.style.display = 'none';
    contentB.style.display = 'block';

    updateUrl(pathSegmentB);
});
