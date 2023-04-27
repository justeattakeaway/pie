export default {
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
};
