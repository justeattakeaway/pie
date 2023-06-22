import React from 'react';
import { buttonSizes } from '@justeattakeaway/pie-button';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

export default function ButtonSizes() {
    return (
        <div>
            <h3>Button sizes</h3>
            <div>
                {buttonSizes.map((key, index) => {
                    const size = buttonSizes[index];
                    return (
                        <PieButton size={size} key={key}>
                            {key.toLowerCase()}
                        </PieButton>
                    );
                })}
            </div>
        </div>
    );
}
