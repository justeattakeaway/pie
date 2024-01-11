var table = {};

const tableReveal = function(elm, options) {
    // merge options
    options = Object.assign({}, {
      limit: 3
    }, options)
  
    // the tr's
    let trs = elm.querySelectorAll('tbody tr')
  
    // shown state
    let shown
  
    // funcs
    const hide = () => {
      trs.forEach((tr, index) => index >= options.limit ? tr.style.display = 'none' : '')
      shown = false
    }
  
    const show = () => {
      trs.forEach((tr) => tr.style.display = 'table-row')
      shown = true
    }
  
    // initial state
    hide()
  
    // reveal funcs
    return {
      toggle: () => shown ? hide() : show(),
      hide,
      show
    }
  }

window.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementsByClassName('c-content-list');

    document.querySelectorAll('.c-componentStatusTable').forEach(el => table[el.getAttribute('id')] = tableReveal(el, {
        limit: 6
    }))

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

    console.log('wooo', table);
});
