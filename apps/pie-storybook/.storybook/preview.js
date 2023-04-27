export default {
    globalTypes: {
        writingDirection: {
            description: 'Which direction should content be written in',
            defaultValue: 'ltr',
            toolbar: {
                title: 'Writing Direction',
                icon: 'globe',
                items: [
                    { value: 'ltr', right: 'LTR', title: 'Left to right' },
                    { value: 'rtl', right: 'RTL', title: 'Right to left' }
                ],
            },
        },
    },
};
