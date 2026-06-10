import React from 'react';
import { addons, types } from 'storybook/manager-api';
import { CodeExamplesPanel } from './CodeExamplesPanel';

const ADDON_ID = 'pie/code-examples';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, () => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'Code Examples',
        render: ({ active }) => (
            active ? <CodeExamplesPanel /> : null
        ),
    });
});
