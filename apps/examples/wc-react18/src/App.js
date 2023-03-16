import React, { useState } from 'react';
import { createComponent } from '@lit-labs/react';
import { PieButton } from '@justeattakeaway/pie-button';
import './styles.css';

// eslint-disable-next-line no-unused-vars
const Button = createComponent({
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
            <Button size='large' />
            <Button variant='secondary' />
            <Button disabled />
            <hr />
            <h2>onClick</h2>
            <p>Count - {counter}</p>
            <Button
                onClick={() => setCounter(counter + 1)}
                onCustomEvent={onCustomEvent}
            />
        </>
    );
}

export default App;
