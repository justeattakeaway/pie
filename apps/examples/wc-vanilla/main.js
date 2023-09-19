import '@justeattakeaway/pie-css';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-modal';
import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/icons/IconClose';
import '@justeattakeaway/pie-icons-webc/icons/IconSearch';
import './style.css';
import { setupCounter } from './counter';

document.querySelector('#app').innerHTML = `
    <h2>pie-modal</h2>
    <pie-button id="modal-trigger" type="button">open modal</pie-button>
    <pie-modal id="modal" heading='My Awesome Heading' headingLevel='h3' isDismissible>
        Modal content
    </pie-modal>

    <h2>pie-button Component Counter</h2>
    <pie-button id="counter" type="button"></pie-button>

    <h2>pie-icon-button Component – trailing and leading icons</h2>
    <pie-button>
        <icon-search slot="icon-leading"></icon-search>
        Search
        <icon-close slot="icon-trailing"></icon-close>
    </pie-button>

    <h2>pie-icon-button Component</h2>
    <pie-icon-button size="medium" type="button" variant="primary"><icon-close></icon-close></pie-icon-button>
`;

setupCounter(document.querySelector('#counter'));

document.querySelector('#modal-trigger').addEventListener('click', () => {
    document.querySelector('#modal').setAttribute('isOpen', true);
});
