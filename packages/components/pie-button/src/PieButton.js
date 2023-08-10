
import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { PieButton as OriginalPieButton } from './PieButton';

export * from './defs';

export const PieButton = createComponent({
    displayName: 'PieButton',
    elementClass: OriginalPieButton,
    react: React,
    tagName: 'undefined',
    events: {},
});
