import React from 'react';
import { PieButton, sizes } from '@justeattakeaway/pie-webc/react/button';

export default function ButtonSizes () {
    return (
        <div>
            <h3>Button sizes</h3>
            <div>
                {sizes.map((key, index) => {
                    const size = sizes[index];
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
