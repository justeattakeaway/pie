import React, { useState } from 'react';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

export default function Counter () {
    const [count, setCount] = useState(0);

    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);

    return (
        <>
            <div>
                <h3>Counter</h3>
                <div className="flex-wrapper">
                    <PieButton onClick={onDecrement}>decrement</PieButton>
                    <div className="padding">
                        Counter: { count }
                    </div>
                    <PieButton onClick={onIncrement}>increment</PieButton>
                </div>
            </div>
        </>
    );
}
