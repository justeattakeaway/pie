import React, { useState, useRef } from 'react';
import { PieButtonReact, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

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
                <h3>Variant Switch</h3>
                <p>Click the button to switch the variant</p>
                <div className="flex-wrapper">
                    <PieButtonReact variant={variantName} onClick={switchVariant}>
                        Variant
                    </PieButtonReact>
                    <div className='padding'>Variant: <b>{variantName}</b></div>
                </div>
            </div>
        </>
    );
}
