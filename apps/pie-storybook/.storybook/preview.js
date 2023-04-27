// .storybook/preview.js

export default {
    globalTypes: {
      writingDirection: {
        name: 'Writing direction',
        description: 'Which direction should content be written in',
        defaultValue: 'en',
        toolbar: {
          icon: 'globe',
          items: [
            { value: 'rtl', title: 'Right to left (RTL' },
            { value: 'ltr', title: 'Left to right (LTR)' }
          ],
        },
      },
    },
  };
