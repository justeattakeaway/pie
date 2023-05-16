import { useState } from 'react';
import { PButton } from '@justeattakeaway/pie-button';

import './styles.css';

function App () {
    const [counter, setCounter] = useState(0);

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
            >Increment</PButton>
        </>
    );
}

export default App;
