import { useState } from 'react';
import '@justeattakeaway/pie-button';
import './styles.css';

function App () {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <pie-button size='large' />
            <pie-button variant='secondary' />
            <pie-button disabled />
            <hr />
            <h2>onClick</h2>
            <p>Count - {counter}</p>
            <pie-button onClick={() => setCounter(counter + 1)} />
        </>
    );
}

export default App;
