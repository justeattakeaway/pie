import { WritingDirection } from '../decorators';

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
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#ffffff',
                },
                {
                    name: 'dark',
                    value: '#262626',
                },
            ]
        },
        controls: {
            expanded: true,
        }
    }
};
