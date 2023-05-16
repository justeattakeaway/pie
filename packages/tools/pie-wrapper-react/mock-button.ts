import * as React from 'react';
    import { createComponent } from '@lit-labs/react';
import type { EventName } from '@lit-labs/react';
            export const MockButton = createComponent({
            displayName: 'MockButton',
            elementClass: MockButton,
            react: React,
            tagName: 'mock-button',
            events: {
                onCustomEvent: 'CustomEvent' as EventName<CustomEvent>, 
            }
        });