const toast = {
    selectors: {
        container: {
            description: 'The selector for the toast container',
            dataTestId: 'pie-toast',
        },
        message: {
            description: 'The selector for the toast message',
            dataTestId: 'pie-toast-message',
        },
        close: {
            description: 'The selector for the toast close button',
            dataTestId: 'pie-toast-close',
        },
        footer: {
            description: 'The selector for the toast footer',
            dataTestId: 'pie-toast-footer',
        },
        leadingAction: {
            description: 'The selector for the toast leading action',
            dataTestId: 'pie-toast-leading-action',
        },
        headingIcon: {
            description: 'The selector for the toast heading icon',
            info: {
                dataTestId: 'pie-toast-heading-icon-info',
            },
            success: {
                dataTestId: 'pie-toast-heading-icon-success',
            },
            warning: {
                dataTestId: 'pie-toast-heading-icon-warning',
            },
            error: {
                dataTestId: 'pie-toast-heading-icon-error',
            },
        },
    },
};
export {
    toast,
};
