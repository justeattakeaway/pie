import React from 'react';
import { PButton, BUTTON_SIZE } from '@justeattakeaway/pie-button';

export default function ButtonSizes () {
    return (
        <>
            <div>
                <h3>Button sizes</h3>
                <div>
                    {
                        Object.keys(BUTTON_SIZE)
                            .map((key) => {
                                const size= BUTTON_SIZE[key];

                                return (
                                    <PButton size={size} key={key}>{key.toLowerCase()}</PButton>
                                );
                            })
                    }
                </div>
            </div>
        </>
    );
}
