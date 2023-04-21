
    import { PieButton } from '@justeattakeaway/pie-button';
    import { createComponent } from '@lit-labs/react';
    import * as React from 'react';

    const PieBtn = createComponent({
                elementClass: PieButton,
                react: React,
                tagName: 'pie-button',
                events: { onCustomEvents: 'CustomEvent' }
            });

    export default PieBtn
    