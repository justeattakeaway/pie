import { useState } from 'react';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

import './styles.css';

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
            // eslint-disable-next-line no-console
                onClick={(e) => setCounter(counter + 1) + console.log(e)}
            >Increment</PieButton>
        </>
    );
}

export default App;
