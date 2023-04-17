import React, { useState, useRef } from 'react';
import { createComponent } from '@lit-labs/react';
import { PieButton, BUTTON_SIZE } from '@justeattakeaway/pie-button';

const PieBtn = createComponent({
    tagName: 'pie-button',
    elementClass: PieButton,
    react: React,
    events: { onCustomEvent: 'CustomEvent' },
});

export default function Counter () {
    const [count, setCount] = useState(0);

    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);

    return (
        <>
            <div>
                <h3>Counter</h3>
                <div className="flex-wrapper">
                    <PieBtn onClick={onDecrement}>decrement</PieBtn>
                    <div className="padding">
                        Counter: { count }
                    </div>
                    <PieBtn onClick={onIncrement}>increment</PieBtn>
                </div>
            </div>
        </>
    );
}
