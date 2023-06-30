import { useState } from 'react';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

import './styles.css';

import { IconAppRestaurant } from '@justeattakeaway/pie-icons-webc/icons/IconAppRestaurant';
import * as React from 'react';
import { createComponent } from '@lit-labs/react';

export const IconRestaurant = createComponent({
    displayName: 'IconAppRestaurant',
    elementClass: IconAppRestaurant,
    react: React,
    tagName: 'icon-app-restaurant',
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
            <IconRestaurant class="hey"/>
        </>
    );
}

export default App;
