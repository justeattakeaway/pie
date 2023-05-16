import React from 'react';
import { PieButtonReact, BUTTON_SIZE } from '@justeattakeaway/pie-button';

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
                                    <PieButtonReact size={size} key={key}>{key.toLowerCase()}</PieButtonReact>
                                );
                            })
                    }
                </div>
            </div>
        </>
    );
}
