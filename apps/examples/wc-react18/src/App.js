import React, { useState } from 'react';
import { createComponent } from '@lit-labs/react';
import { PieButton } from '@justeattakeaway/pie-button';

import './styles.css';

// eslint-disable-next-line no-unused-vars
const PieBtn = createComponent({
    tagName: 'pie-button',
    elementClass: PieButton,
    react: React,
    events: { onCustomEvent: 'CustomEvent' },
});

function App () {
    const [counter, setCounter] = useState(0);

    const onCustomEvent = () => console.info('onCustomEvent was triggered');

    return (
        <>
            <PieBtn size='large'>WC Button in React!</PieBtn>
            <PieBtn variant='secondary'>WC Button in React!</PieBtn>
            <PieBtn disabled>WC Button in React!</PieBtn>
            <hr />
            <h2>onClick</h2>
            <p>Count: {counter}</p>
            <PieBtn
                onClick={() => setCounter(counter + 1)}
                onCustomEvent={onCustomEvent}
            >Increment</PieBtn>
        </>
    );
}

export default App;
