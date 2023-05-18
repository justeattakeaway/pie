// @ts-nocheck 
    import * as React from 'react';
    import { MockComponent as MockComponentReact} from './index';
    import { createComponent } from '@lit-labs/react'; 
        import { EventName } from '@lit-labs/react';
        
        export const MockComponent = createComponent({
            displayName: 'MockComponent',
            elementClass: MockComponentReact,
            react: React,
            tagName: 'mock-component',
            events: {
                onCustomEvent: 'CustomEvent' as EventName<CustomEvent>, 
            }
        });