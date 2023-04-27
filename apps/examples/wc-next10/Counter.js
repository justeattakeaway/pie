import React, { useState, useRef } from 'react';
import { PButton } from '@justeattakeaway/pie-button';

export default function Counter () {
    const [count, setCount] = useState(0);

    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);

    return (
        <>
            <div>
                <h3>Counter</h3>
                <div className="flex-wrapper">
                    <PButton onClick={onDecrement}>decrement</PButton>
                    <div className="padding">
                        Counter: { count }
                    </div>
                    <PButton onClick={onIncrement}>increment</PButton>
                </div>
            </div>
        </>
    );
}
