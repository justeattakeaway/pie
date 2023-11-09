window.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementsByClassName('c-content-list');

    if (list.length === 0) {
        return;
    }

    const listItems = list[0].children[0].children;
    const columns = Math.ceil(listItems.length / 6);

    Object.values(listItems).forEach((item) => {
        const { textContent } = item;
        if (columns === 3 && textContent.length > 18) {
            item.setAttribute('data-title', textContent);
        }
    });

    list[0].style.setProperty('--column-count', columns);
});
