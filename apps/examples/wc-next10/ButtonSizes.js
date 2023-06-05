import React from 'react';
import { ButtonSizes as PieButtonSizes } from '@justeattakeaway/pie-button';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

export default function ButtonSizes () {
    return (
        <>
            <div>
                <h3>Button sizes</h3>
                <div>
                    {
                        PieButtonSizes
                            .map((key) => {
                                const size = PieButtonSizes[key];

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
