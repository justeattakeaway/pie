import { useState } from 'react';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';
import { IconAlcoholFilled } from '@justeattakeaway/pie-icons-webc/icons/IconAlcoholFilled';

import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import './styles.css';

export const IconAlcohol = createComponent({
    displayName: 'IconAlcohol',
    elementClass: IconAlcoholFilled,
    react: React,
    tagName: 'icon-alcohol-filled',
    events: { },
});

function App () {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <PieButton size='large'>WC Button in React!</PieButton>
            <PieButton variant='secondary'>WC Button in React!</PieButton>
            <PieButton disabled>WC Button in React!</PieButton>
            <hr />
            <h2>onClick</h2>
            <p>Count: {counter}</p>
            <PieButton
                onClick={(e) => setCounter(counter + 1) + console.log(e)}
            >Increment</PieButton>
            <IconAlcohol />
        </>
    );
}

export default App;
