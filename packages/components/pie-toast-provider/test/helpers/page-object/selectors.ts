const toastProvider = {
    selectors: {
        container: {
            description: 'The selector for the toast provider container',
            dataTestId: 'pie-toast-provider',
        },
        announcer: {
            description: 'The selector for the toast provider persistent ARIA live region',
            dataTestId: 'pie-toast-provider-announcer',
        },
        toastClose: {
            description: 'The selector for the close button of a toast rendered by the provider',
            dataTestId: 'pie-toast-close',
        },
    },
};
export {
    toastProvider,
};
