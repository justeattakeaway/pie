import '@justeattakeaway/pie-css';
import './styles/docs.scss';
import './styles/component-status.scss';
import './styles/icons.scss';

import { WritingDirection, ComponentStatus } from '../decorators';
import CUSTOM_VIEWPORTS from './viewports';
import backgrounds from './backgrounds';

export default {
    decorators: [ComponentStatus, WritingDirection],
    globalTypes: {
        writingDirection: {
            description: 'Which direction should content be written in',
            defaultValue: 'ltr',
            toolbar: {
                title: 'Writing Direction',
                icon: 'globe',
                items: [
                    { value: 'ltr', right: 'LTR', icon: 'arrowrightalt', title: 'Left to right' },
                    { value: 'rtl', right: 'RTL', icon: 'arrowleftalt', title: 'Right to left' }
                ],
            },
        },
    },
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        id: 'WCAG Rules',
                        tags: [
                            'wcag21a',
                            'wcag21aa',
                            'wcag143',
                            'cat.color',
                            'cat.aria'
                        ]
                    },
                    {
                        // Disabled rule
                        id: 'color-contrast-enhanced',
                        enabled: false,
                    },
                    {
                        // Disabled rule
                        id: 'color-contrast',
                        enabled: false,
                    },
                ],
            },
        },
        backgrounds,
        controls: {
            expanded: true,
            sort: 'alpha',
        },
        viewport: {
            viewports: CUSTOM_VIEWPORTS
        },
        layout: 'centered',
        options: {
            storySort: {
                method: 'alphabetical',
                order: [
                    'Introduction',
                    [
                        'Getting started',
                        'Typography',
                        'CSS setup',
                    ],
                    'Components',
                ]
            }
        }
    }
};
