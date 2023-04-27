import { useState } from 'react';
// import { createComponent } from '@lit-labs/react';
// import { PieButton } from '@justeattakeaway/pie-button';
import { PButton } from '@justeattakeaway/pie-button';

import './styles.css';

// import { PieButton } from '@justeattakeaway/pie-button';
// import { createComponent } from '@lit-labs/react';
// import { PieBtn } from '@justeattakeaway/pie-button';

// eslint-disable-next-line no-unused-vars
// const PieBtn = createComponent({
//     tagName: 'pie-button',
//     elementClass: PieButton,
//     react: React,
//     events: { onCustomEvent: 'CustomEvent' },
// });#

// const PieBtn = createComponent({
//     elementClass: PieButton,
//     react: React,
//     tagName: 'pie-button',
//     events: {
//         hello: 'CustomEvent',
//     },
// });

function App () {
    const [counter, setCounter] = useState(0);

    const customEvent = () => console.log('onCustomEvent was triggered');

    return (
        <>
            <PButton size='large'>WC Button in React!</PButton>
            <PButton variant='secondary'>WC Button in React!</PButton>
            <PButton disabled>WC Button in React!</PButton>
            <hr />
            <h2>onClick</h2>
            <p>Count: {counter}</p>
            <PButton
                onClick={() => setCounter(counter + 1)}
                onCustomEvent={customEvent}
            >Increment</PButton>
        </>
    );
}

export default App;
