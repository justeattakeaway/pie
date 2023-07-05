import React, { useState, useRef } from 'react';
import { variants } from '@justeattakeaway/pie-button';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

export default function VariantSwitch () {
    const variantIndex = useRef(0);
    const [variantName, setVariantName] = useState('primary');

    const switchVariant = () => {
        variantIndex.current += 1;
        const variant = variants[variantIndex.current % variants.length];

        setVariantName(variant);
    };

    return (
        <div>
            <h3>Variant Switch</h3>
            <p>Click the button to switch the variant</p>
            <div className="flex-wrapper">
                <PieButton variant={variantName} onClick={switchVariant}>
                    Variant
                </PieButton>
                <div className='padding'>Variant: <b>{variantName}</b></div>
            </div>
        </div>
    );
}
