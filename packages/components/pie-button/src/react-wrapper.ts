
import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import type { EventName } from '@lit-labs/react';
import { PieButton as WCPieButton } from './index';

import './decorators.ts'
import './defs.ts'
import './index.ts'


export const PButton = createComponent({
        displayName: 'PieButton',
        elementClass: WCPieButton,
        react: React,
        tagName: 'pie-button',
        events: {
            CustomEvent: 'CustomEvent' as EventName<CustomEvent>, 
        }
    });

export type PieButtonType = EventTarget & WCPieButton;

