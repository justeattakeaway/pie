import '@justeattakeaway/pie-css';
import './styles/docs.scss';

import { WritingDirection } from '../decorators';
import { type StoryBackgrounds } from '../types/StoryOptions';
import CUSTOM_VIEWPORTS from './viewports';

export default {
    decorators: [WritingDirection],
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
        backgrounds: {
            default: 'light (container-default)',
            values: [
                {
                    name: 'light (container-default)',
                    value: '#ffffff',
                },
                {
                    name: 'dark (container-dark)',
                    value: '#262626',
                },
                {
                    name: 'background-subtle',
                    value: '#f5f3f1',
                },
                {
                    name: 'background-dark',
                    value: '#1a1a19',
                },
                {
                    name: 'brand orange',
                    value: '#f36805',
                },
                {
                    name: 'saddlebrown',
                    value: 'saddlebrown',
                },
                {
                    name: 'aquamarine',
                    value: 'aquamarine',
                },
            ]
        } as StoryBackgrounds,
        controls: {
            expanded: true,
        },
        viewport: {
            viewports: CUSTOM_VIEWPORTS
        },
    }
};
