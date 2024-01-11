let table;
let shown;

const initialiseShowMore = () => {
  const showMoreButton = document.querySelector('[data-js="show-more"]');
  const componentStatusTables = document.querySelectorAll('[class="c-componentStatusTable"]')

  if (componentStatusTables) {
      componentStatusTables.forEach(el => table[el.getAttribute('id')] = tableReveal(el, {
          limit: 6
      }));
  }

  if (showMoreButton) {
    addEventListener('click', (e) => {
      tableReveal(e.target.id);
    })
  }
}


const tableReveal = function(elm) {
  const componentStatusTable = document.querySelector(`[data-js="${elm}"]`)

  let trs = componentStatusTable.querySelectorAll('tbody tr')

  // funcs
  const hide = () => {
    trs.forEach((tr, index) => {
      index >= 6 ? tr.style.display = 'none' : ''
    })

    shown = false;
    componentStatusTable.scrollIntoView();
  }

  const show = () => { 
    trs.forEach((tr) => tr.style.display = 'table-row')

    shown = true
  }

  shown ? hide() : show()
}
  

  window.addEventListener('DOMContentLoaded', initialiseShowMore);