import React from 'react';
import { createComponent } from '@lit-labs/react';
import { PieButton, BUTTON_SIZE } from '@justeattakeaway/pie-button';

const PieBtn = createComponent({
    tagName: 'pie-button',
    elementClass: PieButton,
    react: React,
    events: { onCustomEvent: 'CustomEvent' },
});

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
                                    <PieBtn size={size} key={key}>{key.toLowerCase()}</PieBtn>
                                );
                            })
                    }
                </div>
            </div>
        </>
    );
}
