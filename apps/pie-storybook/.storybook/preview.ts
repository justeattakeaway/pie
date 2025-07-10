import '@justeattakeaway/pie-css';
import './styles/docs.scss';
import './styles/component-status.scss';
import './styles/icons.scss';

import { WritingDirection, ComponentStatus } from '../decorators';
import CUSTOM_VIEWPORTS from './viewports';
import backgrounds from './backgrounds';
import getTheme from './pieTheme';

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
        darkMode: {
            // Override the default dark theme
            dark: { ...getTheme('dark') },
            light: { ...getTheme() },
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
                        'Events',
                        'Design tokens cookbook',
                        'CSS variables',
                        'TypeScript usage',
                        'Component versions',
                        'Browser support',
                    ],
                    'Integration guides',
                    [
                        'React',
                        [
                            'React 19',
                        ],
                        'Next.js',
                        [
                            'Next.js 14',
                        ],
                        'Nuxt',
                        [
                            'Nuxt 3',
                        ],
                    ],
                    'Components',
                    [
                        'Component statuses'
                    ],
                    'Additional libraries',
                    [
                        'PIE CSS',
                        'Icons'
                    ],
                    'Contribution',
                    [
                        'Overview',
                        'Testing',
                        [
                            'Overview',
                            'Unit tests',
                            'Browser tests',
                            'Visual tests',
                            'Accessibility tests'
                        ]
                    ],
                ],
            }
        }
    }
};
