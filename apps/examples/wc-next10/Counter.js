import React, { useState } from 'react';
import { PieButtonReact } from '@justeattakeaway/pie-button';

export default function Counter () {
    const [count, setCount] = useState(0);

    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);

    return (
        <>
            <div>
                <h3>Counter</h3>
                <div className="flex-wrapper">
                    <PieButtonReact onClick={onDecrement}>decrement</PieButtonReact>
                    <div className="padding">
                        Counter: { count }
                    </div>
                    <PieButtonReact onClick={onIncrement}>increment</PieButtonReact>
                </div>
            </div>
        </>
    );
}
