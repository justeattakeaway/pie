
import * as React from 'react';
import { IconAlcohol as IconAlcoholReact } from './index';
import { createComponent } from '@lit-labs/react';

export const IconAlcohol = createComponent({
    displayName: 'IconAlcohol',
    elementClass: IconAlcoholReact,
    react: React,
    tagName: 'corner-kitten',
    events: { },
});
