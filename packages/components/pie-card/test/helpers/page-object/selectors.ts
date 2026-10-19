const card = {
    selectors: {
        container: {
            description: 'The selector for the card container',
            dataTestId: 'pie-card',
        },
        link: {
            description: 'The selector for when \'tag\' is set to \'a\'',
            dataTestId: 'pie-card-link',
        },
        button: {
            description: 'The selector for the invisible overlay button rendered when \'tag\' is set to \'button\'',
            dataTestId: 'pie-card-button',
        },
        surface: {
            description: 'The selector for the card surface (classes and padding) rendered when \'tag\' is set to \'button\'',
            dataTestId: 'pie-card-container',
        },
    },
};
export {
    card,
};
