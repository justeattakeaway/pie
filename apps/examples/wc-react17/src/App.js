import { PieButton } from '@justeattakeaway/pie-button/dist/react';

import '@justeattakeaway/pie-css';
import './styles.css';

function App () {
    return (
        <div className="App">
            <PieButton size='large'>WC Button in React!</PieButton>
            <PieButton variant='secondary'>WC Button in React!</PieButton>
            <PieButton disabled>WC Button in React!</PieButton>
        </div>
    );
}

export default App;
