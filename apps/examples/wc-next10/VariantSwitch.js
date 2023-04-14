import React, { useState, useRef } from 'react';
import { createComponent } from '@lit-labs/react';
import { PieButton, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

const PieBtn = createComponent({
    tagName: 'pie-button',
    elementClass: PieButton,
    react: React,
    events: { onCustomEvent: 'CustomEvent' },
});

export default function VariantSwitch () {
    const variantIndex = useRef(0)
    const [variantName, setVariantName] = useState(BUTTON_VARIANT.PRIMARY);

    const switchVariant = () => {
        variantIndex.current += 1;
        const variantsKeys = Object.keys(BUTTON_VARIANT);
        const variantKey = variantsKeys[variantIndex.current % variantsKeys.length];
        const variant = BUTTON_VARIANT[variantKey];

        setVariantName(variant);
    };

    return (
        <>
            <div>
                <h3>Variant Switcher</h3>
                <p>Click the button to switch the variant</p>
                <div className="flex-wrapper">
                    <PieBtn variant={variantName} onClick={switchVariant}>
                        Switch variant
                    </PieBtn>
                    <div className='padding'>Variant: <b>{variantName}</b></div>
                </div>
            </div>
        </>
    );
}
