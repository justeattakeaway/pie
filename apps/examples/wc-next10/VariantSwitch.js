import React, { useState, useRef } from 'react';
import { PButton, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

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

    const handleCustomEvent = () => console.log('onCustomEvent was triggered');

    return (
        <>
            <div>
                <h3>Variant Switch</h3>
                <p>Click the button to switch the variant</p>
                <div className="flex-wrapper">
                    <PButton variant={variantName} onClick={switchVariant} onCustomEvent={handleCustomEvent}>
                        Variant
                    </PButton>
                    <div className='padding'>Variant: <b>{variantName}</b></div>
                </div>
            </div>
        </>
    );
}
