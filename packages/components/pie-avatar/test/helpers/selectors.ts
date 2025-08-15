const avatar = {
    selectors: {
        container: {
            description: 'The selector for the avatar container',
            dataTestId: 'pie-avatar',
        },
        div: {
            description: 'The selector for when \'tag\' is set to \'div\'',
            dataTestId: 'pie-avatar-div',
        },
        button: {
            description: 'The selector for when \'tag\' is set to \'button\'',
            dataTestId: 'pie-avatar-button',
        },
        anchor: {
            description: 'The selector for when \'tag\' is set to \'a\'',
            dataTestId: 'pie-avatar-anchor',
        },
        icon: {
            description: 'Fallback icon when there is no label',
            dataTestId: 'pie-avatar-icon',
        },
        initialsVisual: {
            description: 'The visual initials span',
            dataTestId: 'pie-avatar-initials-visual',
        },
        initialsScreenreader: {
            description: 'The screen reader initials span',
            dataTestId: 'pie-avatar-initials-screenreader',
        },
    },
};
export {
    avatar,
};
