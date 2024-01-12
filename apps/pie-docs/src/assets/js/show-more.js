let table = {};
let shown = true;

const initialiseShowMore = () => {
    const showMoreButtons = document.querySelectorAll('[data-js="show-more"]');
    const componentStatusTables = document.querySelectorAll('[class="c-componentStatusTable "]');

    if (componentStatusTables) {
      componentStatusTables.forEach((el) => {
        const trs = el.querySelectorAll('tbody tr');

        trs.forEach((tr, index) => {
          index >= 6 ? tr.style.display = 'none' : '';
        });
      })
    }

    showMoreButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        tableReveal(event.target);
      });
    });
};


const tableReveal = function (elm) {
    const componentStatusTable = document.querySelector(`[data-js="${elm.id}"]`);
    const trs = componentStatusTable.querySelectorAll('tbody tr');


    const hide = () => {
        trs.forEach((tr, index) => {
            index >= 6 ? tr.style.display = 'none' : '';
        });

        elm.innerHTML = 'Show More <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="#125fca" viewBox="0 0 16 16" height="16" width="16" class="c-pieIcon c-pieIcon--chevronDown u-iconFilled" aria-hidden="true"><path d="M2.82 5.044 8 10.399 13.197 5l.963.875-5.364 5.565a1.164 1.164 0 0 1-1.636 0L1.875 5.945l.945-.901Z"></path></svg>'
        componentStatusTable.scrollIntoView();
        return shown = false;
    };

    const show = () => {
        trs.forEach((tr) => tr.style.display = 'table-row');

        elm.innerHTML = 'Show Less <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="#125fca" viewBox="0 0 16 16" height="16" width="16" class="c-pieIcon c-pieIcon--chevronUp u-iconFilled" aria-hidden="true"><path d="M13.18 10.97 8 5.615l-5.18 5.399-.962-.875 5.346-5.565a1.164 1.164 0 0 1 1.671 0l5.25 5.495-.945.901Z"></path></svg>'
        
        componentStatusTable.scrollIntoView();
        return shown = true;
    };

    shown ? hide() : show();
};

window.addEventListener('DOMContentLoaded', initialiseShowMore);
