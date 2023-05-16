import { useState } from 'react';
import { PieButtonReact } from '@justeattakeaway/pie-button';

import './styles.css';

function App () {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <PieButtonReact size='large'>WC Button in React!</PieButtonReact>
            <PieButtonReact variant='secondary'>WC Button in React!</PieButtonReact>
            <PieButtonReact disabled>WC Button in React!</PieButtonReact>
            <hr />
            <h2>onClick</h2>
            <p>Count: {counter}</p>
            <PieButtonReact
                onClick={() => setCounter(counter + 1)}
            >Increment</PieButtonReact>
        </>
    );
}

export default App;
