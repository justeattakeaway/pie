import './style.css';
import { setupCounter } from './counter';

document.querySelector('#app').innerHTML = `
    <div>
        <h1>Hello World!</h1>
        <pie-button id="counter" type="button"></pie-button>
        <pie-icon-button size="medium" type="button" variant="primary"></pie-icon-button>
</div>
`;

setupCounter(document.querySelector('#counter'));
