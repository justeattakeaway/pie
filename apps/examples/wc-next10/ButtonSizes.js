import React from 'react';
import { BUTTON_SIZE } from '@justeattakeaway/pie-button';
import { PieButton } from '@justeattakeaway/pie-button/dist/react'

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
                                    <PieButton size={size} key={key}>{key.toLowerCase()}</PieButton>
                                );
                            })
                    }
                </div>
            </div>
        </>
    );
}
