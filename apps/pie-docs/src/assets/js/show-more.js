let shown = false;
let showMoreButtons;

window.addEventListener('DOMContentLoaded', () => {
    showMoreButtons = document.querySelectorAll('[data-js="show-more"]');
    const componentStatusTables = document.querySelectorAll('[class="c-componentStatus-table"]');

    if (!showMoreButtons.length || !componentStatusTables.length) return;

    // ensures status tables initially only show 6 columns each
    componentStatusTables.forEach((el) => el.querySelectorAll('tbody tr').forEach((tr, index) => {
        const rows = index >= 6 ? tr.style.display = 'none' : '';

        return rows;
    }));

    showMoreButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            tableReveal(event.target);
        });
    });
});

const tableReveal = (elm) => {
    // elm.id refers to app-table or web-table to differentiate
    const componentStatusTable = document.querySelector(`[data-js="${elm.id}"]`);
    const trs = componentStatusTable.querySelectorAll('tbody tr');
    // selects h2 heading of section e.g. apps or web
    const componentStatusTableSection = document.querySelector(`[id="${elm.id.split('-')[0]}"]`);

    const hide = () => {
        trs.forEach((tr, index) => {
            const rows = index >= 6 ? tr.style.display = 'none' : '';

            return rows;
        });

        elm.innerHTML = 'Show More <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="#125fca" viewBox="0 0 16 16" height="16" width="16" class="c-pieIcon c-pieIcon--chevronDown u-iconFilled" aria-hidden="true"><path d="M2.82 5.044 8 10.399 13.197 5l.963.875-5.364 5.565a1.164 1.164 0 0 1-1.636 0L1.875 5.945l.945-.901Z"></path></svg>';
        componentStatusTableSection.scrollIntoView();

        shown = false;
    };

    const show = () => {
        trs.forEach((tr) => {
            tr.style.display = 'table-row';

            return tr;
        });

        elm.innerHTML = 'Show Less <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="#125fca" viewBox="0 0 16 16" height="16" width="16" class="c-pieIcon c-pieIcon--chevronUp u-iconFilled" aria-hidden="true"><path d="M13.18 10.97 8 5.615l-5.18 5.399-.962-.875 5.346-5.565a1.164 1.164 0 0 1 1.671 0l5.25 5.495-.945.901Z"></path></svg>';
        shown = true;
    };

    const table = shown ? hide() : show();

    return table;
};
