import './style.css';
import { setupCounter } from './counter';

document.querySelector('#app').innerHTML = `
    <div>
        <h1>Hello World!</h1>
        <div class="card">
            <pie-button id="counter" type="button"></pie-button>
        </div>
</div>
`;

setupCounter(document.querySelector('#counter'));
